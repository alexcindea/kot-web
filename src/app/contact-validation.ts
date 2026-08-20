/**
 * Contact form rules, shared by the client form and the server action so the
 * two can never drift apart. The client runs these for instant feedback; the
 * server runs them again because server actions accept direct POSTs and can
 * never trust what the browser sent.
 */

export const ENQUIRY_VALUES = ['General', 'Tryouts', 'Events', 'Sponsorship'] as const
export type EnquiryValue = (typeof ENQUIRY_VALUES)[number]

export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  phone: { max: 25 },
  message: { min: 10, max: 2000 },
} as const

export type ContactField = 'name' | 'email' | 'phone' | 'enquiry' | 'message'
export type ContactValues = Record<ContactField, string>
export type ContactFieldErrors = Partial<Record<ContactField, string>>

/** Collapses runs of whitespace but keeps paragraph breaks in the message. */
const tidy = (value: string) => value.replace(/[^\S\n]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim()

const hasLetters = (value: string) => (value.match(/\p{L}/gu) ?? []).length >= 2
const countLinks = (value: string) => (value.match(/https?:\/\/|www\.|\.[a-z]{2,}\//gi) ?? []).length

/** Digits only, so formatting choices don't change whether a number is valid. */
const phoneDigits = (value: string) => value.replace(/\D/g, '')

export function normalizeContact(raw: Partial<Record<ContactField, unknown>>): ContactValues {
  const str = (v: unknown) => (typeof v === 'string' ? v : '')
  return {
    name: tidy(str(raw.name)),
    email: tidy(str(raw.email)).toLowerCase(),
    phone: tidy(str(raw.phone)),
    enquiry: tidy(str(raw.enquiry)),
    message: tidy(str(raw.message)),
  }
}

export function validateContact(values: ContactValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {}

  // Name
  if (!values.name) {
    errors.name = 'Scrie-ne numele tău.'
  } else if (values.name.length < CONTACT_LIMITS.name.min) {
    errors.name = 'Numele pare prea scurt.'
  } else if (values.name.length > CONTACT_LIMITS.name.max) {
    errors.name = `Numele poate avea cel mult ${CONTACT_LIMITS.name.max} de caractere.`
  } else if (!hasLetters(values.name)) {
    errors.name = 'Numele trebuie să conțină litere.'
  } else if (countLinks(values.name) > 0) {
    errors.name = 'Numele nu poate conține linkuri.'
  }

  // Email — deliberately permissive on the local part, strict about shape.
  if (!values.email) {
    errors.email = 'Avem nevoie de un email ca să îți putem răspunde.'
  } else if (values.email.length > CONTACT_LIMITS.email.max) {
    errors.email = 'Adresa de email este prea lungă.'
  } else if (!/^[^\s@,;]+@[^\s@,;.]+(\.[^\s@,;.]+)+$/.test(values.email)) {
    errors.email = 'Adresa de email nu pare validă. Verific-o, te rugăm.'
  }

  // Phone — optional, but if it is filled in it has to be usable.
  if (values.phone) {
    const digits = phoneDigits(values.phone)
    if (values.phone.length > CONTACT_LIMITS.phone.max || !/^\+?[\d\s().-]+$/.test(values.phone)) {
      errors.phone = 'Numărul de telefon conține caractere nepermise.'
    } else if (digits.length < 7 || digits.length > 15) {
      errors.phone = 'Numărul de telefon nu pare valid. Exemplu: 0799 822 100.'
    }
  }

  // Subject — a crafted POST can send anything, and it lands in the email subject.
  if (values.enquiry && !ENQUIRY_VALUES.includes(values.enquiry as EnquiryValue)) {
    errors.enquiry = 'Alege un subiect din listă.'
  }

  // Message
  if (!values.message) {
    errors.message = 'Scrie-ne câteva cuvinte.'
  } else if (values.message.length < CONTACT_LIMITS.message.min) {
    errors.message = `Mesajul e prea scurt — spune-ne puțin mai multe (minim ${CONTACT_LIMITS.message.min} caractere).`
  } else if (values.message.length > CONTACT_LIMITS.message.max) {
    errors.message = `Mesajul poate avea cel mult ${CONTACT_LIMITS.message.max} de caractere.`
  } else if (!hasLetters(values.message)) {
    errors.message = 'Mesajul trebuie să conțină text.'
  } else if (countLinks(values.message) > 3) {
    errors.message = 'Mesajul conține prea multe linkuri.'
  }

  return errors
}

export const hasErrors = (errors: ContactFieldErrors) => Object.keys(errors).length > 0
