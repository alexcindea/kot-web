'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get('name') as string | null)?.trim()
  const email = (formData.get('email') as string | null)?.trim()
  const enquiry = (formData.get('enquiry') as string | null) ?? 'General'
  const message = (formData.get('message') as string | null)?.trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Dev fallback — log and succeed so the form works without a key configured
    console.log('[contact form]', { name, email, enquiry, message })
    return { status: 'success' }
  }

  const to = process.env.CONTACT_EMAIL ?? 'team@knightsoftransylvania.com'

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // Replace with your verified Resend domain once set up
        from: 'Knights of Transylvania <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `[KOT] ${enquiry} enquiry from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Enquiry type:</strong> ${enquiry}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      }),
    })

    if (!res.ok) {
      throw new Error(`Resend API error ${res.status}`)
    }

    return { status: 'success' }
  } catch {
    return {
      status: 'error',
      message:
        'Could not send your message right now. Please email us directly at team@knightsoftransylvania.com.',
    }
  }
}
