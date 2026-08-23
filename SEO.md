# SEO — what's set up, and what still needs a human

SEO is just "making it easy for Google to understand the site, and making the
site look good when someone shares a link". It is not a trick — most of it is
telling machines, in a fixed format, things the page already says to people.

---

## Already working (this was in place before)

| Piece | What it does | Where |
| --- | --- | --- |
| `robots.txt` | Tells crawlers what they may read. Allows everything except `/studio` (the CMS — no reason for that in search results). | `src/app/robots.ts` |
| `sitemap.xml` | A list of every page, so Google doesn't have to guess. Rebuilds itself when articles are published. | `src/app/sitemap.ts` |
| Canonical URL | Says "this is the real address of this page", so two URLs showing the same content don't compete with each other. | `src/app/layout.tsx` |
| Title + description | The blue link and grey text in a Google result. | per page |
| Organisation data | Machine-readable card describing the club: address, location, sport, founding year. | `src/app/content/structuredData.ts` |

**So yes — you already had a robots file, and it is correct.** It was doing its
job. It was not the thing holding the site back.

---

## Added here

### 1. A share image (the big one)

Before, sharing the site on WhatsApp or Facebook produced a link with **no
picture** — a grey rectangle. For a club that spreads by parents forwarding
links, that is the most expensive thing to be missing.

`src/app/opengraph-image.tsx` now generates a branded 1200×630 card at build
time, and `twitter-image.tsx` serves the same one to X (which reads its own
tag and won't fall back).

### 2. Missing tags on the homepage

The homepage was dropping `og:site_name` and `og:locale`. A page-level
`openGraph` block **replaces** the one in the layout rather than merging with
it, so those had to be repeated. The Twitter card is now
`summary_large_image`, so the picture shows full width instead of as a
thumbnail.

### 3. Phone number in the organisation data

Local search ("cheerleading Cluj") leans on a reachable phone number for the
business entity.

### 4. The championship as an Event

`SportsEvent` is one of the few types that can earn its own rich result.
The national championship on 30 May 2026 at Nova PG Arena in Turda was already
announced on the contact card — now it is stated in a form search engines read.

---

## Needs a human — I could not do these

### The domain is `kot-web-beta.vercel.app`

Everything Google learns is being attached to that address, including the word
"beta". If the club ever moves to a real domain, that reputation does **not**
follow automatically and largely starts over.

If a domain exists or is planned, point it at Vercel and set
`NEXT_PUBLIC_SITE_URL` — `src/app/seo.ts` already reads it, so canonical URLs,
the sitemap and the share card all switch over together. **The earlier this
happens the less is lost.**

### The social links go nowhere useful

The footer links point at `instagram.com`, `facebook.com` and `youtube.com` —
the platforms, not KOT's profiles. That is a dead end for visitors, and it
means the site can't tell Google "these accounts are also us" (the `sameAs`
property), which is how the club's profiles get connected into one entity.
Send the real profile URLs and both get fixed.

### Google Business Profile

Not a code change, and probably the single highest-value thing left for a
local club. A free listing at business.google.com puts KOT on Maps and in the
side panel for "cheerleading Cluj". The address, phone and hours in the
structured data here will line up with it.

### Publishing

Search rewards pages that answer real questions. The `/noutati` section is
already wired up and currently empty. Competition results, "how do I enrol my
child", what a first training session looks like — each is a page that can
rank for something a parent actually types.
