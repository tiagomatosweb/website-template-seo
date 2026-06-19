# Rebranding this template for a new site

Cloning this template into a real-world website is a small, fixed checklist.
Everything per-client lives in a few clearly-marked places. Work top to bottom.

## 1. Business data — `app/app.config.ts` (the `site` block)

Single source of truth for all business facts. Edit the values; every component
reads from here via `const { site } = useAppConfig()`.

| Field | What it is | Used by |
|---|---|---|
| `name` | Business name / wordmark | header, footer, copyright, page title |
| `tagline` | Short positioning line | header top bar, page title |
| `blurb` | One-sentence company description | footer |
| `phone.display` | Phone as shown to users | header (×2), footer |
| `phone.href` | `tel:` link, **digits only** | header, footer, Call-Now CTAs |
| `email` | Contact email | footer (auto-wrapped in `mailto:`) |
| `serviceArea` | Suburb / region served | footer |
| `social.facebook` / `social.instagram` | Profile URLs (set `''` to hide the icon) | header, footer |

> Phone is split into `display` + `href` on purpose — `"02 1234 5678"` for humans,
> `"tel:0212345678"` for the link. Keep them in sync.

## 2. Brand tokens — colors & fonts

- **Colors** — `app/assets/css/main.css`, the `@theme` block marked `BRAND TOKENS`.
  Replace the `--color-primary-*` (main brand) and `--color-cta-*` (action) scales.
  Generate a full 50–950 ramp with [uicolors.app](https://uicolors.app) or similar.
- **Fonts** — two places, keep them matching:
  - `--font-display` / `--font-sans` in the same `@theme` block.
  - The `fonts.families` list in `nuxt.config.ts` (so the fonts get downloaded).
- **Radius** — `--ui-radius` in `main.css` (`:root`). Usually leave as-is; see the
  radius scale in `CLAUDE.md` before changing.

## 3. Content & layout — `app/pages/index/index.vue`

- **Which sections appear and in what order** — this page is pure composition of
  section components (`Hero1`, `Services2`, `Why2`, …). Swap a variant by changing
  one tag (e.g. `<Services2 />` → `<Services4 />`). Preview all variants at
  `/dev/<role>` via the floating Dev menu.
- **Copy** — each section ships full placeholder copy via prop defaults. Override
  per-site by passing props (e.g. `<Hero1 title="…" />`) or by editing the
  component's defaults if the copy is permanent for this client.
- **SEO meta** — update the `description` in this file (title is built from `site`).

## 4. Assets

- Replace the hero/CTA background image(s) in `app/assets/img/` and update the
  imports in `index.vue`.
- Logo: search for `PLACEHOLDER: replace wordmark with logo image` in
  `SiteHeader.vue` / `SiteFooter.vue` to swap the text wordmark for an `<img>`.

## 5. Before launch — remaining placeholders

Search the repo for `PLACEHOLDER` and resolve each:

```bash
grep -rn "PLACEHOLDER" app/
```

Also wire `QuoteForm.vue`'s `onSubmit` to a real form endpoint, and set the
footer Privacy / Terms links.
