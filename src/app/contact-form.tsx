'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from './actions'

const initial: ContactState = { status: 'idle' }

const inputClass =
  'w-full border border-[rgba(212,168,67,0.14)] bg-[rgba(255,255,255,0.03)] px-3.5 py-2.5 text-sm text-[#f2e8d9] placeholder:text-[#524238] focus:border-[rgba(196,18,48,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(196,18,48,0.25)] transition duration-200'

const labelClass = 'block text-[0.58rem] uppercase tracking-[0.22em] text-[#786858]'

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial)

  if (state.status === 'success') {
    return (
      <div className="border border-[rgba(212,168,67,0.18)] bg-[rgba(9,7,10,0.8)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-md flex flex-col items-center justify-center text-center gap-5 min-h-[320px]">
        <div className="flex h-11 w-11 items-center justify-center border border-[rgba(212,168,67,0.35)] text-[#d4a843]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p className="font-display text-base uppercase tracking-[0.12em] text-[#f2e8d9]">Message Sent</p>
          <p className="mt-2 text-sm leading-6 text-[#786858]">We&apos;ll be in touch soon.<br />Follow us on Instagram for the latest.</p>
        </div>
      </div>
    )
  }

  return (
    <form action={action} noValidate className="border border-[rgba(212,168,67,0.18)] bg-[rgba(9,7,10,0.8)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-md space-y-4">
      <p className="text-[0.6rem] font-display uppercase tracking-[0.3em] text-[#d4a843]">
        Send a Message
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="kot-name">Name *</label>
          <input
            id="kot-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="kot-email">Email *</label>
          <input
            id="kot-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass} htmlFor="kot-enquiry">Enquiry Type</label>
        <select
          id="kot-enquiry"
          name="enquiry"
          className="w-full border border-[rgba(212,168,67,0.14)] bg-[#09070a] px-3.5 py-2.5 text-sm text-[#f2e8d9] focus:border-[rgba(196,18,48,0.5)] focus:outline-none focus:ring-1 focus:ring-[rgba(196,18,48,0.25)] transition duration-200"
        >
          <option value="General">General Enquiry</option>
          <option value="Tryouts">Tryouts &amp; Recruitment</option>
          <option value="Events">Events &amp; Appearances</option>
          <option value="Sponsorship">Sponsorship</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass} htmlFor="kot-message">Message *</label>
        <textarea
          id="kot-message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your enquiry…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.status === 'error' && (
        <p role="alert" className="text-[0.8rem] leading-5 text-[#e08080]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex w-full items-center justify-center gap-2.5 bg-[#c41230] px-6 py-4 text-center text-sm font-display uppercase tracking-[0.22em] text-[#f2e8d9] shadow-[0_12px_30px_rgba(196,18,48,0.42)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e01535] hover:shadow-[0_18px_42px_rgba(196,18,48,0.52)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {pending && (
          <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        )}
        {pending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
