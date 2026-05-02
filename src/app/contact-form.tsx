'use client'

import { useActionState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { submitContact, type ContactState } from './actions'

const initial: ContactState = { status: 'idle' }

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial)

  if (state.status === 'success') {
    return (
      <div className="kot-contact__form">
        <div className="kot-contact__sent">
          <CheckCircle2 size={48} />
          <h3>Mesaj trimis!</h3>
          <p>Te sunăm sau scriem în maxim 24 de ore.</p>
        </div>
      </div>
    )
  }

  return (
    <form action={action} noValidate className="kot-contact__form">
      <label className="kot-field">
        <span>Nume *</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Maria Popescu"
        />
      </label>

      <label className="kot-field">
        <span>Email *</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="maria@email.ro"
        />
      </label>

      <label className="kot-field">
        <span>Subiect</span>
        <select name="enquiry">
          <option value="General">Întrebare generală</option>
          <option value="Tryouts">Înscriere / Tryouts</option>
          <option value="Events">Evenimente și apariții</option>
          <option value="Sponsorship">Sponsorizare</option>
        </select>
      </label>

      <label className="kot-field">
        <span>Mesaj *</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Vreau să mă înscriu la grupa juniori..."
        />
      </label>

      {state.status === 'error' && (
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
