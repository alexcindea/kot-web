"use server";

import { headers } from "next/headers";

import {
  ENQUIRY_VALUES,
  hasErrors,
  normalizeContact,
  validateContact,
  type ContactFieldErrors,
  type EnquiryValue,
} from "./contact-validation";
import { consumeContactSlot, contactRateLimitKey } from "./rate-limit";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
};

/** Shown when we can't deliver — points at the public phone, never a private inbox. */
const FALLBACK_CONTACT =
  "Ne poți suna la 0799 822 100 sau încerca din nou în câteva minute.";

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: a real person never sees this field, so anything in it is a bot.
  // Answer as if it worked so the bot doesn't learn to try again.
  if ((formData.get("website") as string | null)?.trim()) {
    return { status: "success" };
  }

  const values = normalizeContact({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    enquiry: formData.get("enquiry"),
    message: formData.get("message"),
  });

  // Re-validated here on purpose: server actions accept direct POSTs, so the
  // client-side pass is only ever a convenience.
  const fieldErrors = validateContact(values);
  if (hasErrors(fieldErrors)) {
    return {
      status: "error",
      message: "Verifică te rog câmpurile marcate.",
      fieldErrors,
    };
  }

  const { name, email, phone, message } = values;
  const enquiry: EnquiryValue = ENQUIRY_VALUES.includes(values.enquiry as EnquiryValue)
    ? (values.enquiry as EnquiryValue)
    : "General";

  const apiKey = process.env.RESEND_API_KEY;
  // No hardcoded recipient on purpose: a missing CONTACT_EMAIL should be a
  // visible misconfiguration, not enquiries quietly going somewhere else.
  const to = process.env.CONTACT_EMAIL?.trim();
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Knights of Transylvania <onboarding@resend.dev>";

  if (!apiKey || !to) {
    if (process.env.NODE_ENV === "development") {
      console.log("[contact form]", { name, email, phone, enquiry, message, to, from });
      return { status: "success" };
    }

    return {
      status: "error",
      message: `Formularul nu este configurat momentan. ${FALLBACK_CONTACT}`,
    };
  }

  // Charged only now, once the message is real and about to be sent, so a
  // visitor fixing a typo never spends their allowance on failed validation.
  const slot = consumeContactSlot(contactRateLimitKey(await headers()));
  if (!slot.allowed) {
    const minutes = Math.max(1, Math.ceil(slot.retryAfterSeconds / 60));
    // 1 minut · 2–19 minute · 20 de minute
    const unit = minutes === 1 ? "minut" : minutes < 20 ? "minute" : "de minute";
    return {
      status: "error",
      message: `Ai trimis deja câteva mesaje. Mai încearcă peste ${minutes} ${unit}. ${FALLBACK_CONTACT}`,
    };
  }

  const safePhone = phone ? escapeHtml(phone) : null;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(phone ? [`Phone: ${phone}`] : []),
    `Enquiry type: ${enquiry}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        // `enquiry` is whitelisted above and `name` is newline-free after
        // normalisation, so neither can smuggle anything into the subject.
        subject: `[KOT] ${enquiry} enquiry from ${name}`,
        text: textBody,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
          <p><strong>Enquiry type:</strong> ${escapeHtml(enquiry)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      throw new Error(`Resend API error ${res.status}`);
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: `Nu am putut trimite mesajul acum. ${FALLBACK_CONTACT}`,
    };
  }
}
