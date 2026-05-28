# Malin Group — High-End Refactor Plan

## The problem with v1
The first draft reads as ~8 self-contained "sales" blocks stacked on top of each other — hero, bright coloured tile grid, 3-card row, dark band, sector tiles, community, CTA band, footer. Each has its own bold heading and its own button, with nothing carrying the eye between them. The flat coloured tiles and small/medium images are what kill the "high-end" feel. Your feedback: less bitty, less salesy, one contact form, bigger bolder imagery, a richer cohesive feel — closer to DEEP, Triton, Osprey, Hyer and Belcan.

## The new design language (benchmark: DEEP + Triton)
A single immersive, mostly-dark canvas that runs the length of the page so sections feel like one continuous film rather than separate cards.

```text
- Continuous deep-navy/charcoal background; sections bleed into each other,
  no hard coloured dividers, no bright tile blocks.
- Huge, light-weight display headings (one confident statement per view).
- Full-bleed, large-scale photography as the hero of most sections.
- A single restrained accent colour used sparingly (links, one CTA).
- Generous whitespace and slow, deliberate scroll-reveal motion.
- Quiet text/underline links ("Explore", "View case study") instead of a
  button in every block.
```

### Connective tissue (fixing "bitty" with no flow)
- A persistent thin vertical progress line + small section index (01 / 02 / 03…) down the left edge that ties the page into one journey.
- Scroll-reveal: headings and images fade/rise in as you reach them; a sticky image that cross-fades while related copy scrolls beside it (the DEEP "pinned visual" move).
- Each section ends with a short transitional line that hands off to the next, so the narrative reads as a story: capability → proof → outcomes → sectors → ethos → one invitation.

## Page structure — one cohesive scrolling story
A single narrative homepage, with depth living in dedicated sub-pages linked inline (keeps the home lean and non-salesy while still demonstrating expertise).

Homepage narrative (top → bottom):
1. **Cinematic hero** — full-screen image, one bold line ("Engineering Innovation"), one quiet sub-line, a single soft CTA. No competing buttons.
2. **What we do** — integrated capability statement with the five disciplines presented as large editorial rows/full-bleed strips (not bright tiles), each linking to Services.
3. **Proof — selected work** — a few large case-study visuals presented as an immersive showcase (big imagery, minimal text), linking to full Case studies.
4. **Why it matters / outcomes** — the "reduce risk, simplify delivery" value points woven in as a calm full-bleed section, not a hard sell.
5. **Sectors** — defence, nuclear, renewables, oil & gas, civil infrastructure as large image panels linking to Sectors.
6. **Ethos / community + accreditations** — credibility and partner logos, understated.
7. **One contact moment** — the single contact form, near the end, framed as "start a conversation" rather than repeated "enquire now" prompts.
8. **Refined footer** — sitemap, locations, contact details.

Supporting routes (own H1, own metadata — keeps SEO strong without making the home bitty):
- `/services` — the five disciplines in depth
- `/case-studies` — full project showcase
- `/sectors` — sector detail
- `/about` — company + community/ethos
- `/contact` — the contact form lives here too (linked from the home form section)

This satisfies SEO (real H1s on dedicated pages) while the homepage stays a single flowing story with exactly one form.

## Imagery
- **Reuse the real Malin photography** from your PDF (the lift, vessels, transporter, inspection, community shots) — extracted, optimised, and used large / full-bleed for authenticity.
- **Generate 2–3 cinematic hero/atmosphere images** (e.g. a moody marine-engineering hero, sector ambience) to lift the premium feel where a big establishing shot is needed.

## Copy
I'll write credible, sector-appropriate placeholder copy and realistic case-study summaries (no lorem ipsum) that you can edit later.

## Contact form
One form only, near the foot of the homepage (and on `/contact`): name, company, email, project summary. Validated client-side with zod, with clear states. (Submission can be wired to Lovable Cloud email/storage in a follow-up if you want it to actually send — flag me if so.)

## Technical notes
- Built in the current TanStack Start project (still a blank placeholder today) — separate route files per section, each with its own `head()` metadata; semantic design tokens defined in `src/styles.css` (oklch) for the new dark cinematic palette and display typography.
- Scroll-reveal/pinned-image motion via lightweight intersection-observer + CSS (and Motion if needed) — no heavy dependencies.
- Real photos copied into `src/assets`; generated heroes saved alongside.
- Responsive: full-bleed imagery and large type scale down cleanly to mobile; the progress index collapses on small screens.

## Out of scope (confirm if wanted)
- Actually sending the contact form (needs Lovable Cloud) — currently planned as validated UI.
- Real production copy and final asset selection — placeholder-credible until you provide finals.
