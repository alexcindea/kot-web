# Knights of Transylvania

A presentation-style cheerleading team website built with Next.js, React, and Tailwind CSS. The current version is static-first on purpose so it can be deployed for free without maintaining a backend.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- TypeScript

## Local Development

```bash
npm run dev
```

Create a local environment file before testing the contact form:

```bash
cp .env.example .env
```

## Validation

```bash
npm run lint
npm run build
```

## Content Notes

- The gallery panels are styled placeholders until you add real team photos or videos.
- The contact email and Instagram handle on the page are placeholders and should be replaced before launch.
- The schedule section is sample content and should be swapped with real events.

## Free Hosting Recommendation

Deploy this project on the Vercel Hobby plan. It is free, works well with Next.js, and does not require a backend for the current version.

Suggested deployment flow:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Add a custom domain later if you want one.

## Backend

No backend is needed right now. If you later want a real contact form, athlete sign-up flow, or private team dashboard, add a lightweight service instead of building a full custom server first.

## Contact Form Mailing

The contact form uses Resend via the server action in [src/app/actions.ts](src/app/actions.ts).

Required environment variables:

- `RESEND_API_KEY`: your Resend API key
- `CONTACT_EMAIL`: inbox that should receive contact form messages
- `CONTACT_FROM_EMAIL`: verified sender, for example `Knights of Transylvania <contact@your-domain.ro>`

For local testing, `CONTACT_FROM_EMAIL` can stay on `onboarding@resend.dev` until you verify your own domain in Resend.

For Vercel, add the same variables in Project Settings → Environment Variables.
