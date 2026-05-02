# UI Kit — KOT Marketing Site

A pixel-honest mock of the Knights Of Transylvania public marketing site, covering all sections in the Romanian content brief.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Click-thru prototype — load in a browser. |
| `Nav.jsx` | Sticky top nav. Transparent over hero, opaque after scroll. |
| `Hero.jsx` | Kinetic-letter hero with rotating word, primary + secondary CTA. |
| `MarqueeStrip.jsx` | Infinite horizontal text marquee — "JOIN US / VINO ÎN ECHIPĂ / KOT". |
| `AboutSection.jsx` | Despre noi — story + milestone photos. |
| `GroupsSection.jsx` | Grupele noastre — squad cards by age group. |
| `StaffSection.jsx` | Staff KOT — coach portraits (placeholder note included). |
| `ProjectsSection.jsx` | Proiecte — major team programs. |
| `EventsSection.jsx` | Evenimente — filterable photo grid. |
| `SponsorsSection.jsx` | Sponsorizare — logo strip + 230 form CTA. |
| `ContactSection.jsx` | Contact form + map. |
| `Footer.jsx` | Footer + social links. |
| `ui.jsx` | Shared primitives: `<Button>`, `<Pill>`, `<Container>`, `<Eyebrow>`. |

## Interactive bits

- Nav links scroll to sections smoothly.
- Hero rotates through "VINO ÎN ECHIPĂ", "DEVINO CHEERLEADER", "ZBOARĂ CU NOI" every 3.5s with a kinetic letter swap.
- Sponsor logo strip is an infinite marquee.
- Events section has working year filter.
- Contact form validates email + accepts a fake submit.

## Caveats

- All photography is **CSS-gradient placeholders** — the brief mentions photos but none were provided. Each placeholder is captioned with what real photo should go there ("Foto: stunt în salt", "Foto: portret antrenor Andrei", etc.).
- Coach names + project titles are inferred from the user brief; replace with real ones.
- Form 230 is referenced but not implemented (it's a downloadable PDF in production, not a web form).
