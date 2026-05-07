"use server";

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
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const phone = (formData.get("phone") as string | null)?.trim();
  const enquiry = (formData.get("enquiry") as string | null) ?? "General";
  const message = (formData.get("message") as string | null)?.trim();
  const website = (formData.get("website") as string | null)?.trim();

  if (website) {
    return { status: "success" };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL?.trim() || "alexcindea@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Knights of Transylvania <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.log("[contact form]", {
        name,
        email,
        phone,
        enquiry,
        message,
        to,
        from,
      });
      return { status: "success" };
    }

    return {
      status: "error",
      message:
        "Mailing is not configured yet. Please email us directly at team@knightsoftransylvania.com.",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : null;
  const safeEnquiry = escapeHtml(enquiry);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
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
        subject: `[KOT] ${enquiry} enquiry from ${name}`,
        text: textBody,
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
          <p><strong>Enquiry type:</strong> ${safeEnquiry}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
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
      message: `Could not send your message right now. Please email us directly at ${to}.`,
    };
  }
}
