---
name: kot-design
description: Use this skill to generate well-branded interfaces and assets for KOT (Knights Of Transylvania), the cheerleading team of Colegiul Crișan Sibiu. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the team's marketing site, sponsorship materials, and any other branded surfaces.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand**: KOT — Knights Of Transylvania, cheerleading team @ CCS Sibiu, Romania.
- **Vibe**: athletic, kinetic, vibrant — NOT gothic/vampiric despite the name.
- **Colors**: KOT Cyan `#1bafe2` + KOT Orange `#f79335` on white. Black for inverted blocks.
- **Type**: Bebas Neue (display, all caps) + Barlow (body). Both via Google Fonts.
- **Language**: Romanian first, English secondary. Voice is proud, direct, pep-rally energy.
- **Motion is the secret weapon** — kinetic letters, marquees, hover lifts. Always honor `prefers-reduced-motion`.

## Files in this skill

- `README.md` — full brand guide (sources, content fundamentals, visual foundations, iconography).
- `colors_and_type.css` — drop-in tokens. Always import this in any new artifact.
- `assets/` — logos (use `logo-kot-shield-transparent.png` for layouts, `logo-kot-shield.png` for white-bg uses).
- `preview/` — small specimen cards demonstrating tokens.
- `ui_kits/marketing/` — full marketing-site recreation with React components you can lift.

## Building something new

1. Always start by reading `README.md` and `colors_and_type.css`.
2. Lift components from `ui_kits/marketing/*.jsx` rather than rebuilding from scratch.
3. Copy logo PNGs out of `assets/` into your new project.
4. Use Lucide for UI icons (CDN, see README).
5. Keep copy in Romanian with proper diacritics. Avoid emoji in long-form copy.
