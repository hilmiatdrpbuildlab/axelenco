# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (current phase): partners and funders.** Goede doelen (charitable foundations), business partners/sponsors and individual donors who are deciding whether to support a care farm that is still being built. Their job: understand quickly why this place is needed, trust the people behind it, see concretely what their support pays for, and get in touch for a personal conversation.

**Secondary: families.** Parents (ouders) looking for warm, personal dagbesteding for a young person, especially on Wednesdays, weekends and during holidays. They are often carrying a heavy, long-standing question about their child's future and arrive tired, searching, and wary of institutional language.

**The young people themselves** are the reason the farm exists, but they are not the site's primary readers. The target group is deliberately broad: no fixed diagnosis or age range. Anyone who needs a place to be on their own tempo is welcome.

## Product Purpose

Zorgboerderij Axel&co is a care farm being built by Lien Collaer, Axel's mother. It offers a small, familial group where young people and companions (begeleiders) truly know each other, with parents included as part of the circle. It exists because suitable dagbesteding with attention for one young person's rhythm is hard to find, particularly on Wednesdays, at weekends and in holidays.

In the current startup phase, the website's success means: goede doelen and partners reach out to hear in person what has already started, what is still needed, and how their support makes a concrete difference.

## Positioning

Founded by a parent for her own son and for other young people like him. It is a family context, not an institution: a small group with familiar faces, on a farm, where animals and nature make contact possible without demands. "Meer dan zorg." It is a place to belong ("een plek om bij te horen").

## Operating Context

- Daily life on the farm: caring for animals (dieren verzorgen), cooking (koken), gardening (tuinieren), making something creative (iets creatiefs maken), and resting quietly when needed. Everyone joins in their own way.
- Animals expect no explanation or performance. A look, a stroke or feeding together can be the start of contact. Small tasks carry real meaning and show strengths that a busy environment often hides.
- Support is sought specifically for four things: the farm's facilities (inrichting van de boerderij), adapted materials (aangepast materiaal), activities, and the care of the animals.
- Contact with partners is personal: Lien prefers to explain the project in a conversation.

## Capabilities and Constraints

- One-page static website: `index.html` with Tailwind v4 (compiled via `npm run build`) and vanilla JS in `assets/js/main.js`. It is deployed to Cloudflare Workers static assets from `dist/` (`wrangler.jsonc` → `./dist`). Only `dist/` may be published, never the project root.
- Language: Dutch (Flemish/Belgian usage, `nl-BE`). Partners are addressed formally (u); families and young people informally (je), matching the brochure.
- Legal: Axel&co is a vzw (non-profit association), ondernemingsnummer **BE 1043.807.793**.
- **Undecided or missing:** the contact form has no backend yet (client-side confirmation only). The real email address, phone number and farm address/municipality are not yet provided, so the footer uses placeholders. Opening date, capacity and pricing are unknown.

## Brand Commitments

- Name: **Axel&co** / **Zorgboerderij Axel&co**; wordmark styled "AXEL&CO / ZORGBOERDERIJ".
- Pillars: **Aandacht · Natuur · Verbinding**.
- Lines from the brochure that must be kept verbatim: "Een plek om bij te horen.", "Meer dan zorg. Een kleine, warme familiecontext.", "Een gewone dag. Een plek die blijft.", "Een plek om te groeien, te ontdekken en jezelf te zijn.", and "Bouwt u mee?".
- Voice: personal and warm, written by a mother. Never clinical, never pitiable.
- Sign-off: **Lien Collaer — Namens Zorgboerderij Axel&co**.

## Evidence on Hand

- `Axel_en_co_brochure.pdf`: the source of all copy. Do not publish it.
- Two real photographs of Axel (from the brochure): `assets/img/axel-schaap.jpg` (with a sheep and a puppy in the straw) and `assets/img/axel-kat.jpg` (with a kitten on the sofa). Axel is a minor, so use of his image online depends on the family's consent.
- **Absent, never fabricate:** testimonials, partner or sponsor logos, numbers (families served, animals, hectares), funding goals, opening dates, awards, press coverage, and staff other than Lien.

## Product Principles

1. **Belonging before service.** Every page should feel like being invited into a family, not admitted to a facility.
2. **Own tempo, no demands.** Nothing is required of the visitor, just as nothing is required of the young people. Keep a calm pace, give one clear next step, and apply no pressure.
3. **Honest about the stage.** It is a farm being built. Ask for support by naming concrete needs, and never overstate what already exists.
4. **Personal over transactional.** The goal is a conversation with Lien, not a checkout.
5. **Dignity for the young people.** Show strengths and connection, never pity or diagnosis.

## Accessibility & Inclusion

- WCAG 2.1 AA at minimum. Visitors include parents of neurodivergent young people and possibly neurodivergent visitors themselves.
- Avoid sensory overload: generous whitespace, slow and gentle motion only, full support for `prefers-reduced-motion`, and no autoplay or flashing.
- Plain, readable Dutch. Keyboard-navigable, with visible focus.
