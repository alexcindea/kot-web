'use client'

import { useActionState, useId, useState, useSyncExternalStore } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { submitContact, type ContactState } from './actions'
import {
  CONTACT_LIMITS,
  hasErrors,
  normalizeContact,
  validateContact,
  type ContactField,
  type ContactFieldErrors,
  type ContactValues,
} from './contact-validation'

const initial: ContactState = { status: 'idle' }

/** Source order, so "jump to the first problem" matches what the eye expects. */
const FIELD_ORDER: ContactField[] = ['name', 'email', 'phone', 'enquiry', 'message']

const FORM_ATTR = 'data-kot-contact-form'

/** enquiry starts blank so an untouched field can fall back to the URL subject. */
const EMPTY: ContactValues = { name: '', email: '', phone: '', enquiry: '', message: '' }

/* Sponsor CTAs arrive as ?subiect=sponsorizare. The URL is external state, so
   it is read through useSyncExternalStore with a null server snapshot — that
   keeps the server render and the hydration pass in agreement. */
const subscribeToUrl = () => () => {}
const readUrlSubject = () => new URLSearchParams(window.location.search).get('subiect')
const readServerSubject = () => null

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <span className="kot-field__error" id={id}>
      {message}
    </span>
  )
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial)
  // Controlled on purpose: React resets an uncontrolled form once its action
  // runs, which would throw away everything typed whenever validation fails.
  const [typed, setValues] = useState<ContactValues>(EMPTY)
  const [clientErrors, setClientErrors] = useState<ContactFieldErrors>({})
  const fieldId = useId()

  const urlSubject = useSyncExternalStore(subscribeToUrl, readUrlSubject, readServerSubject)

  // An untouched subject follows the link the visitor arrived on; once they
  // pick one themselves, their choice wins.
  const values: ContactValues = {
    ...typed,
    enquiry: typed.enquiry || (urlSubject === 'sponsorizare' ? 'Sponsorship' : 'General'),
  }

  // Server errors are authoritative; client errors cover fields touched since.
  const errors: ContactFieldErrors = { ...clientErrors, ...(state.fieldErrors ?? {}) }

  if (state.status === 'success') {
    return (
      <div className="kot-contact__form">
        <div className="kot-contact__sent">
          <CheckCircle2 size={48} />
          <h3>Mesaj trimis!</h3>
          <p>Te vom contacta în curând.</p>
        </div>
      </div>
    )
  }

  const update = (field: ContactField) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Clear a field's error as soon as the user starts fixing it; never add
    // new errors mid-typing.
    setClientErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  /** Re-checks one field on blur, leaving untouched fields alone. */
  const revalidateField = (field: ContactField) => {
    const fresh = validateContact(normalizeContact(values))
    setClientErrors((prev) => {
      const next = { ...prev }
      if (fresh[field]) next[field] = fresh[field]
      else delete next[field]
      return next
    })
  }

  /** Runs the shared rules before spending a round-trip on an invalid form. */
  const action = (formData: FormData) => {
    const found = validateContact(normalizeContact(values))
    setClientErrors(found)

    if (hasErrors(found)) {
      // The inputs already exist, so focus needs no wait for the error to paint.
      const first = FIELD_ORDER.find((field) => found[field])
      if (first) {
        document.querySelector<HTMLElement>(`[${FORM_ATTR}] [name="${first}"]`)?.focus()
      }
      return
    }

    formAction(formData)
  }

  const fieldProps = (field: ContactField) => ({
    name: field,
    value: values[field],
    'aria-invalid': errors[field] ? (true as const) : undefined,
    'aria-describedby': errors[field] ? `${fieldId}-${field}` : undefined,
    onBlur: () => revalidateField(field),
  })

  return (
    <form {...{ [FORM_ATTR]: '' }} action={action} noValidate className="kot-contact__form">
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
      />

      <label className="kot-field">
        <span>Nume *</span>
        <input
          {...fieldProps('name')}
          type="text"
          autoComplete="name"
          maxLength={CONTACT_LIMITS.name.max}
          placeholder="Maria Popescu"
          onChange={(e) => update('name')(e.target.value)}
        />
        <FieldError id={`${fieldId}-name`} message={errors.name} />
      </label>

      <label className="kot-field">
        <span>Email *</span>
        <input
          {...fieldProps('email')}
          type="email"
          autoComplete="email"
          maxLength={CONTACT_LIMITS.email.max}
          placeholder="maria@email.ro"
          onChange={(e) => update('email')(e.target.value)}
        />
        <FieldError id={`${fieldId}-email`} message={errors.email} />
      </label>

      <label className="kot-field">
        <span>Telefon</span>
        <input
          {...fieldProps('phone')}
          type="tel"
          autoComplete="tel"
          maxLength={CONTACT_LIMITS.phone.max}
          placeholder="07xx xxx xxx"
          onChange={(e) => update('phone')(e.target.value)}
        />
        <FieldError id={`${fieldId}-phone`} message={errors.phone} />
      </label>

      <label className="kot-field">
        <span>Subiect</span>
        <select {...fieldProps('enquiry')} onChange={(e) => update('enquiry')(e.target.value)}>
          <option value="General">Întrebare generală</option>
          <option value="Tryouts">Înscriere / Tryouts</option>
          <option value="Events">Evenimente și apariții</option>
          <option value="Sponsorship">Sponsorizare</option>
        </select>
        <FieldError id={`${fieldId}-enquiry`} message={errors.enquiry} />
      </label>

      <label className="kot-field">
        <span>Mesaj *</span>
        <textarea
          {...fieldProps('message')}
          rows={5}
          maxLength={CONTACT_LIMITS.message.max}
          placeholder="Vreau să mă înscriu la grupa juniori..."
          onChange={(e) => update('message')(e.target.value)}
        />
        <span className="kot-field__count" aria-hidden="true">
          {values.message.length} / {CONTACT_LIMITS.message.max}
        </span>
        <FieldError id={`${fieldId}-message`} message={errors.message} />
      </label>

      {state.status === 'error' && state.message && (
        <div className="kot-contact__err" role="alert">{state.message}</div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="kot-btn kot-btn--primary kot-btn--lg"
        style={{ width: '100%', justifyContent: 'center', opacity: pending ? 0.7 : 1 }}
      >
        <span>{pending ? 'Se trimite…' : 'Trimite mesajul'}</span>
        <Send size={18} />
      </button>
    </form>
  )
}
