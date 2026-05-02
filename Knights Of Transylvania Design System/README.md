# Knights Of Transylvania (KOT) — Design System

**Knights Of Transylvania (KOT) — Knights Cheerleaders** is a competitive cheerleading club based in **Cluj-Napoca, Transylvania, Romania**. The team has 130+ active athletes ages 5–30, 16+ specialized instructors, has competed in 12+ countries, and performed for 10,000+ spectators. In 2025 they formed the core of Romania's first national team at the **ICU Cheerleading Worlds in the USA**. They have **20+ national titles**, **8 European participations** and **7 European medals**, and are hosting the 2026 Campionatul Național at Nova PG Arena Turda on 30 May. The official brand tagline is **"performanță și spectacol în inima Transilvaniei."**

The club describes itself as the Cluj structure that has become the country's benchmark in cheer sport, and the leader of the development projects that put Romania on the world cheer map. Cheerleading was recognized as an Olympic sport by the IOC in 2021. KOT became members of the International Cheer Union in 2024.

This design system covers the **public-facing marketing website** for the team — the primary surface where parents, recruits, sponsors, and fans land.

The brand combines competitive-sport energy (bold, kinetic, loud) with the playful character of a youth squad. It is **not** gothic or vampire-themed despite the name — "Transylvania" here is a place, not an aesthetic. Lean into athleticism, motion, and pride.

### Four brand values (from the team's sponsor deck)

| Value | Description |
| --- | --- |
| **Încredere** | Deplină și reciprocă — full and mutual trust. |
| **Responsabilitate** | Disciplină în tot ceea ce facem — discipline in everything we do. |
| **Echipă** | Pe scenă dar familie pe viață — team on stage, family for life. |
| **Evoluție** | Și proiecte de nota 10 — and top-grade projects. |

### Tagline + key claims (use verbatim where possible)

- **"Performanță și spectacol în inima Transilvaniei"** — primary tagline.
- **"Suntem momentul tău WOOW"** — sponsor pitch line ("woow" is in their copy and is part of the voice).
- **"WE ARE KNIGHTS OF TRANSYLVANIA"** — English headline used in the deck.

---

## Sources & inputs

| Source | Provided as | Notes |
| --- | --- | --- |
| KOT logo screenshot | `uploads/Screenshot 2026-04-22 235641.png` | A photo collage. The shield logo was cropped from the center; brand colors extracted by sampling. |
| Content brief (Romanian) | Pasted into chat by the user | See **Content structure** below for the full sitemap. |
| Sponsor deck PDF | `uploads/MAPA PREZENTARE KOT cheerleaders .pdf` | 7-page Romanian/English pitch deck. Source of all factual claims (athlete count, achievements, location, contact). |
| Codebase / Figma | _Not provided_ | The visual system was inferred from the logo + user direction. Flag any guesses. |

> **Caveat — fonts:** No type spec was provided. The logo wordmark uses a heavy condensed display face that resembles Bebas-style athletic blocks; the supporting "CHEERLEADING" word uses a bold geometric sans. The closest free Google Fonts substitutes are **Bebas Neue** (display) + **Barlow** (body/UI). These should be replaced with a licensed athletic display family + a brand sans whenever real specs land.

---

## Content structure (from the user brief)

The Romanian brief calls for these top-level sections on the landing page:

1. **Despre noi** — short story of KOT with milestone photos showing the team's evolution.
2. **Grupele noastre** — the age groups / squads, each with one representative photo.
3. **Staff KOT** — portrait per coach (deferrable; can ship later).
4. **Proiecte** — major projects the team runs: Team Romania, Erasmus, Tabăra Națională, the school-visit campaign, _Frumusețe fără filtru_, etc.
5. **Evenimente** — photo coverage from shows and competitions. Organization TBD; recommend filterable by year + event type.
6. **Sponsorizare** — sponsor pitch deck/PDF + Form 230 (Romanian 3.5% income-tax redirect form).
7. **Contact** — direct contact form _or_ contact details + map pin.
8. **Sponsori & parteneri** — logo bar/strip; recommend a marquee strip in the footer **and** a dedicated "Sponsori" page.

The UI kit in `ui_kits/marketing/` mocks all of these.

---

## Index

| Path | What's inside |
| --- | --- |
| `README.md` | This file. |
| `SKILL.md` | Skill manifest so this folder works as a portable Claude/Agent skill. |
| `colors_and_type.css` | All design tokens — color palette, type scale, semantic vars, radii, shadows, motion. |
| `fonts/` | (Currently empty — using Google Fonts via CDN.) |
| `assets/` | Logos and brand imagery. |
| `assets/logo-kot-shield.png` | Primary shield mark on white. |
| `assets/logo-kot-shield-transparent.png` | Shield mark with transparent background. |
| `preview/` | Design-system preview cards (registered as assets — they appear in the Design System tab). |
| `ui_kits/marketing/` | Marketing-site UI kit: components + an interactive `index.html`. |

---

## Content fundamentals

KOT speaks **Romanian first** (the team's audience is local). English copy is for international/sponsor-facing surfaces only. The voice is **warm, proud, athletic, and welcoming** — never gothic, never spooky, never ironic about the "Transylvania" name. Think: a coach hyping the team at a pep rally, not a horror-movie trailer.

### Voice

- **Proud and direct.** "Suntem KOT" not "Suntem doar o echipă mică".
- **First-person plural.** "Noi", "echipa noastră", "antrenăm" — KOT is a community, copy speaks _as_ the team.
- **Action-forward verbs.** "Antrenăm", "Concurăm", "Reprezentăm", "Vino la antrenament".
- **Concrete over abstract.** Number of cheerleaders, number of competitions, year founded, school visits this year — beat adjectives every time.

### Tone

- **Energetic but not shouty.** Plenty of bold weights and large type carries the energy; copy itself stays grounded.
- **Inclusive.** The squad spans age groups; copy must read for both 8-year-olds' parents _and_ teenage recruits.
- **Bilingual graceful degradation.** English mirrors Romanian word counts and tone; never machine-translated stiffness.

### Casing

- **Headlines: ALL CAPS** for hero/section titles in display type (matches the logo's blocky wordmark). Tracking +20–40 / `letter-spacing: 0.02em`.
- **Body: Sentence case.** Standard Romanian punctuation and diacritics (ă, â, î, ș, ț) — never strip them.
- **Buttons: ALL CAPS** for primary CTAs ("VINO LA ANTRENAMENT", "DEVINO SPONSOR"). Sentence case for secondary.
- **Names of programs are Title Case Italicized**: _Team Romania_, _Erasmus+_, _Tabăra Națională_, _Frumusețe fără filtru_.

### Pronouns

- **"Noi" / "we"** for the team itself.
- **"Tu" / "you" (informal)** for recruits and visitors. Romanian uses _tu_, not _dumneavoastră_, in this context — the audience is young and the vibe is friendly.
- For sponsors, switch to a slightly more formal register but still _voi_, not _dumneavoastră_.

### Emoji

- **No emoji in long-form copy.** They cheapen the athletic register.
- **Sparingly OK in social/UI**: ❤️ on a roster card hover, 🔥 in a results banner. Never as bullet points.
- Prefer **icons** (Lucide stroke icons) for functional UI.

### Voice examples

| ✅ Do | ❌ Don't |
| --- | --- |
| "Antrenăm peste 80 de cheerleaderi în 4 grupe de vârstă." | "Avem o echipă mare și diversă!" _(vague, hype-without-fact)_ |
| "Vino la antrenament. Joi, ora 18:00, sala CCS." | "Te așteptăm cu drag să vii pe la noi când poți!" _(soft, not actionable)_ |
| "Susține echipa prin formularul 230." | "Donează acum! 🙏✨" _(emoji-leaning, salesy)_ |
| "Knights Of Transylvania — echipa de cheerleading a CCS." | "KOT — guardians of the night cheering squad 🦇" _(off-brand: vampire bit)_ |

---

## Visual foundations

The visual system is **high-contrast, kinetic, and unapologetically loud** — built for the energy of a competition floor.

### Colors

Two brand hues do the heavy lifting:

- **KOT Cyan `#1bafe2`** — primary action, link color, athletic accent. Comes from the logo outline and "KOT" letterforms.
- **KOT Orange `#f79335`** — energy/CTA color. The shield fill and "CHEERLEADING" wordmark.

Neutrals are **near-pure white** and **near-pure black** — a stadium-scoreboard palette. Avoid muddy grays; lean cool-cool or warm-warm but never beige. Semantic tokens (success/warn/danger) are tuned to coexist with the brand cyan/orange without fighting them.

Use color in **bold blocks, not gradients**. If gradients appear, they are short cyan→orange transitions used sparingly on hero accents — never as page backgrounds.

### Typography

- **Display / Headlines — Bebas Neue (substitute for the logo's blocky athletic display).** All-caps, condensed, high impact. Used at 48–160px.
- **Body / UI — Barlow.** Geometric sans with athletic personality. 14–18px body; 600/700 for emphasis.
- **Numerals — Barlow tabular** (results tables, scores, dates).

Hierarchy leans on **size and weight contrast**, not color. A page might have one hero headline at 140px and the next thing at 24px — a 6× jump — which sells the energy.

### Spacing

8-point scale with a 4-point sub-step for tight UI:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Section padding leans generous — `clamp(64px, 10vw, 128px)` vertical between marketing sections.

### Backgrounds

- **Default: pure white** `#ffffff`. Most sections live here.
- **Inverted blocks: full-bleed black** `#0c0c0c` with cyan/orange punch-ins. Used for hero, results, and "loudest" sections.
- **Photo-led sections: full-bleed photography** with a 60% black scrim and white headline overtop.
- **Accent washes: solid cyan or solid orange** as full-bleed section backgrounds for one or two specific sections (e.g. CTA strip, sponsor strip).
- **No gradients on backgrounds.** No noise textures. No patterns. The energy comes from typography and motion, not background ornament.

### Motion

KOT moves. Animation is the brand's secret weapon — stillness reads as dead.

- **Page entrance:** Hero headline arrives in a **kinetic stagger** — letters or whole words slide up from below the baseline, ~40ms apart, with a slight overshoot. Total ~600ms.
- **On scroll:** Section headlines do the same kinetic-letter entrance. Photos cross-fade with a 1.05→1.0 scale.
- **Marquee strips:** The sponsor logos and "JOIN US / VINO ÎN ECHIPĂ / KNIGHTS OF TRANSYLVANIA / KOT" strip are infinite horizontal marquees, ~60s loop.
- **Hover:** Buttons translate `2px` up + cyan→orange swap on primary; cards tilt ±0.5° + scale 1.02 with a 200ms ease-out.
- **Press/active:** Scale to 0.97, no color change, 80ms.
- **Easing:** Default `cubic-bezier(0.22, 1, 0.36, 1)` (smooth-out). For overshoot moments, `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- **Reduced motion:** Respect `prefers-reduced-motion: reduce` — replace all entrance/marquee animations with simple opacity fades; keep functional hovers.

### Borders, radii, shadows

- **Radii:** `4px` (chips, inputs), `8px` (buttons, small cards), `16px` (large cards/hero photos), `999px` (pills, the sponsor-marquee container).
- **Borders:** `2px` solid cyan or orange for active states; `1px` solid `--border` neutral elsewhere. The logo itself is built from heavy strokes, so the brand likes _visible_ borders.
- **Shadows:** Layered. The system uses three:
  - `--shadow-sm`: `0 1px 2px rgba(12,12,12,0.06), 0 1px 3px rgba(12,12,12,0.08)` — for interactive elements at rest.
  - `--shadow-md`: `0 8px 24px -8px rgba(12,12,12,0.18)` — cards and roster tiles.
  - `--shadow-lg`: `0 24px 60px -12px rgba(12,12,12,0.28)` — modals, hero callouts.
  - `--shadow-glow-cyan` / `--shadow-glow-orange`: brand-tinted halos for primary CTAs at hover (`0 0 0 4px rgba(27,175,226,0.18)`).

### Layout

- **Container:** max-width `1280px`, `clamp(20px, 4vw, 48px)` horizontal padding.
- **Grid:** 12-column on desktop, 4-column on mobile.
- **Fixed elements:** Top nav is fixed, height `72px`, white background with a `1px` bottom border. It transitions to a translucent black backdrop (`rgba(12,12,12,0.85)` + `backdrop-filter: blur(12px)`) once the page scrolls past the hero.

### Imagery

- **Photo treatment:** Full-color, **warm-leaning** (the team trains in gyms with golden light + uses orange uniforms). Avoid desaturated or arty B&W.
- **Crop preference:** **Action over portrait** — mid-air stunts, group lifts, motion blur on pom-poms. Static head-shots only on the Staff page.
- **Aspect ratios:** `16:9` for hero/feature, `4:5` for roster cards, `1:1` for staff portraits, `3:2` for event galleries.
- **Photo overlays:** When text sits on photos, use a **solid 60% black scrim** (not a gradient) on the bottom 50% of the image, with white type.

### Transparency & blur

- Used only for the **scrolled nav** and **modal backdrops**.
- Never as decoration. No glassmorphism cards.

---

## Iconography

KOT uses **two icon vocabularies** that don't mix:

### 1. UI icons — Lucide (CDN)

Standard line icons for navigation, form fields, buttons, and other functional UI. Stroke `2px`, line-rounded.

**Substitution flag:** Lucide is a generic substitution because no icon set was specified. If the team has preferences (Phosphor, Tabler, custom-drawn), swap the CDN.

Loaded via:
```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
```

Usage examples: `menu`, `x`, `chevron-right`, `mail`, `phone`, `map-pin`, `instagram`, `facebook`, `youtube`, `calendar`, `users`, `trophy`, `heart`.

### 2. Brand motifs — Custom SVG (when needed)

A **shield** outline (echoing the logo) and a **megaphone** are the only brand glyphs. They appear at large sizes only — section dividers, page-break ornaments, hero accents. **Do not** redraw the KOT shield as an icon — always use the logo PNG/SVG file.

### Emoji

Per the content rules: no emoji in primary marketing copy. They are allowed in social-media post mockups, but only if the design needs to demonstrate that surface.

### Unicode

- Use real apostrophes (`'`) and quotes (`"` `"`).
- Romanian diacritics (ă, â, î, ș, ț) — never strip.
- Em-dash for asides (`—`), en-dash for ranges (`2018–2025`).
