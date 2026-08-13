# website-template

A reusable **Nuxt 4** base for local-business marketing sites. Static (SSG), light-only, built with **@nuxt/ui v4** and **Tailwind CSS v4**. Its job is local-SEO lead generation: every page funnels to a quote form and a phone CTA.

Clone it, run through the rebrand checklist below, fill in real copy, and ship.

## Setup

```bash
npm install
npm run dev       # http://localhost:3000
```

Other commands: `npm run build` (full build), `npm run generate` (static prerender — the deploy artifact), `npm run preview` (serve the built output).

## Rebranding for a new site

Everything per-client lives in a few clearly-marked places. Work top to bottom.

### 1. Business facts — `app/app.config.ts` (the `site` block)

The single source of truth for business data. Edit the values; chrome components read them via `const { site } = useAppConfig()`.

| Field | What it is |
|---|---|
| `name` | Business name / wordmark |
| `description` | One-sentence company description (used in footer + page title) |
| `phone.display` | Phone as shown to users, e.g. `"02 1234 5678"` |
| `phone.href` | `tel:` link, digits only, e.g. `"tel:0212345678"` |
| `google_rating` | Star rating shown in trust elements, e.g. `"4.9"` |
| `form_webhook` | POST endpoint `QuoteForm` submits to (ships as a placeholder — **must be replaced**) |
| `social.facebook` / `social.instagram` | Profile URLs (set to `'#'` or remove to hide) |

> Phone is split into `display` + `href` on purpose — one for humans, one for the link. Keep them in sync. If you add a field here, also add it to `app/types/app-config.d.ts` so it stays typed.

### 2. Brand tokens — colors & fonts

- **Colors** — `app/assets/css/main.css`, the `@theme` block marked **BRAND TOKENS**. Replace the `--color-primary-*` (main brand) and `--color-cta-*` (action) scales. Generate a full 50–950 ramp with [uicolors.app](https://uicolors.app) or similar.
- **Fonts** — two places, keep them matching or the font silently won't download:
  - `--font-display` in the same `@theme` block (body font inherits Tailwind's default system stack — there is no `--font-sans` token).
  - The `fonts.families` list in `nuxt.config.ts`.
- **Radius** — `--ui-radius` in `main.css` (`:root`). Usually leave as-is; see the radius spec in `CLAUDE.md` before changing.

### 3. Content & layout — `app/pages/index.vue`

- **Which sections appear and in what order** — the home page is composition of `<UPageSection>` / `<UPageHero>` / `<UPageCTA>` blocks filled with `Ui*` components. Reorder or remove blocks in the `<template>`.
- **Copy** — each section's copy lives as typed `const` arrays in the page's `<script setup>` (`services`, `whyChooseUs`, `howItWorks`, `reviews`, `faqs`, etc.). Rewrite these for the client. Shared datasets (service areas, CTAs) live in `app/content/*.ts`.
- **SEO meta** — update the `description` in `useSeoMeta(...)` (the title is built from `site.name`).

### 4. Assets

- Replace the hero / CTA background image(s) in `app/assets/img/` and update the imports at the top of `index.vue` (currently both point at `placeholder-image.png`).
- **Logo** — swap the text wordmark for an `<img>` in `app/components/Logo.vue` (search for `PLACEHOLDER`).

### 5. Before launch

**Resolve every placeholder.** They appear in more than one form, so grep is a starting point, not the whole list:

```bash
grep -rn "PLACEHOLDER" app/
```

Known items to resolve:
- All `site` block values in `app/app.config.ts` (`BusinessName`, `00 0000 0000`, `#` socials, the `example.com` `form_webhook`).
- The `useSeoMeta` description in `app/pages/index.vue`.
- `lastUpdated` in `app/pages/privacy-policy.vue`.
- Placeholder images (`app/assets/img/placeholder-image.png`) used by the hero, CTA, `Figure`, and `BeforeAfter`.
- The header nav (`app/components/SiteHeader.vue`) and footer links (`app/components/SiteFooter.vue`) — trim to the pages that actually exist for this site.
- Business facts hard-coded in the footer (hours, "licensed & insured") — edit for the client.

**Wire the form.** `app/components/ui/QuoteForm.vue`'s `onSubmit` currently just shows the success state without sending anywhere — point it at a real endpoint (a Nitro server route, form service, or CRM webhook) before launch.

## Documentation

- **`README.md`** (this file) — rebrand checklist.
- **`CLAUDE.md`** — architecture reference and design-token specs, for developers and AI assistants.
