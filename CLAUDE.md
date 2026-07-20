# CLAUDE.md

This file guides Claude Code (claude.ai/code) when working in this repository.

## What this is

A **reusable base for local-business marketing sites** — a small, static, multi-section Nuxt 4 site whose job is local-SEO lead generation: every page funnels to a quote form and a phone CTA. Built with **@nuxt/ui v4** and **Tailwind CSS v4 (CSS-first, no `tailwind.config.js`)**. No backend, no database, no tests. Clone it, rebrand it (see `README.md`), fill in real copy, ship.

## Commands

```bash
npm run dev       # dev server on http://localhost:3000
npm run build     # full Nuxt build (Nitro output in .output/)
npm run generate  # static prerender — the deploy artifact
npm run preview   # serve the built output locally
```

There is **no lint, no test suite, and no typecheck script** wired into `package.json`. `npm run build` is the only gate. `nuxi typecheck` runs against Nuxt's generated tsconfig if you want type checking.

## Stack

- **Nuxt 4** — all app code lives under `app/`.
- **@nuxt/ui v4** — the primary Nuxt module (`nuxt.config.ts` → `modules: ['@nuxt/ui', '@nuxtjs/seo']`). Its `UPage*` primitives (`UPageHero`, `UPageSection`, `UPageCTA`, `UPageGrid`, `UPageCard`) are the section scaffolding.
- **@nuxtjs/seo** — the second module: sitemap, robots, schema-org, og-image, link-checker, driven by the `site`/`sitemap`/`robots` config in `nuxt.config.ts`.
- **Tailwind v4** — tokens defined in CSS (`app/assets/css/main.css`), not a JS config.
- **yup** — form validation in `QuoteForm.vue`.
- **@nuxt/fonts** — font families declared in `nuxt.config.ts` `fonts.families`.

## Architecture

Nuxt 4 layout: everything is under `app/` (`app/pages`, `app/components`, `app/composables`, `app/utils`, `app/content`, `app/assets`, `app/app.vue`, `app/app.config.ts`).

**Pages are thin composition shells.** A page is a `<script setup>` that sets SEO meta plus arrays of copy, and a `<template>` that stacks section blocks. There is almost no logic in a page — the reusable building blocks live in `app/components/`.

- `app/pages/index.vue` — the home page. Real, flat `.vue` file.
- `app/pages/privacy-policy.vue` — legal page (`noindex`).
- `app/pages/blocks/<role>.vue` — **dev-only** component showcase / variant gallery (flat files: hero, trustbar, content, areas, design-system, cta, images, faq, reviews). These are reachable via the floating `UiDevMenu`. **They are development aids — do not link to them from the public site, and strip them before a real launch** (see README).

**Components (`app/components/`) are auto-imported** with a path-based prefix:

- **Site chrome (flat root):** `SiteHeader`, `SiteFooter`, `Logo`.
- **`ui/` building blocks** (auto-imported as `Ui*`): `Hero`, `Card`, `IconTile`, `FeatureItem`, `FeatureItems`, `Steps`, `List`, `TrustList`, `TrustGoogle`, `GoogleStars`, `Areas`, `Review`, `Figure`, `Backdrop`, `Comparison`, `BeforeAfter`, `ZigZag`, `SectionDescription`, `SectionHeadline`, `SectionTitle`, `QuoteForm`, `DevMenu`.

There is **no `sections/` folder and no numbered-variant component family.** "Sections" on the home page are composed inline as `<UPageSection>` / `<UPageHero>` / `<UPageCTA>` blocks in `index.vue`, filled with `ui/` building blocks and page-local copy arrays. Only `Hero` and `Areas` are extracted as reusable section components.

### Where content and business facts live — the split

Two homes, one rule each:

1. **Business facts → `app/app.config.ts` `site` block** (the single source of truth). Fields: `name`, `description`, `phone { display, href }`, `google_rating`, `social { facebook, instagram }`. Typed in `app/types/app-config.d.ts`. Read with `const { site } = useAppConfig()`. **Never hard-code** the business name, phone, or rating in shared chrome — read them from here. Chrome components that do this correctly: `SiteHeader`, `SiteFooter`, `Logo`, `GoogleStars`, `TrustGoogle`.

2. **Copy → the page, or a content module.** Per-page copy (services, features, steps, reviews, FAQs) currently lives as typed `const` arrays in the page's `<script setup>` (see `index.vue`). Shared, reusable datasets live in **`app/content/*.ts`**, auto-imported via `nuxt.config.ts` `imports.dirs: ['content']`:
   - `content/areas.ts` — exports `areas1: AreasArea[]` (service-area suburb data), consumed by `<UiAreas>`.
   - `content/ctas.ts` — exports `quoteCta()` / `callCta()` button-prop factories; `callCta` reads `site.phone.href`.

   A copy field may be a plain **string** or a **render function** (`() => h(...)`) when you need to highlight a word or nest markup — that's the `TextOrRender` type (see below).

### `TextOrRender` and the render-function pattern

`app/utils/render.ts` defines:
- `isRenderFn(v)` — a `typeof v === 'function'` type guard (auto-imported).
- `TextOrRender = string | (() => VNodeChild)` — a header/label field that's a plain string OR a render function, so a data object can highlight a word without embedding HTML in a string.
- `RenderItem<T> = T | (() => VNodeChild)` — a whole item that's its data object OR a render function drawing arbitrary content into that cell.

Components consume `TextOrRender` by branching in the template:
```vue
<component :is="item.title" v-if="isRenderFn(item.title)" />
<template v-else>{{ item.title }}</template>
```
Components that accept `TextOrRender` today: `Comparison` (title/description/label), `ZigZag` (headline/title/description), `FeatureItem` (title/description), `List` (label), `Areas` (description). See `capabilities` in `index.vue` for a real `() => h(...)` usage that bolds a lead-in term.

### `UPageCard` vs `UCard` — pick by role

- **`UPageCard`** (wrapped by `ui/Card.vue`, `ui/Review.vue`) — marketing content cards: icon + title + description + optional CTA, in a `UPageGrid`. This is the default for a card *in a collection*.
- **`UCard`** — a structural container (header/body/footer) for a single panel (e.g. the `FeatureItems` grid wrapper). Use when you need the header/body/footer structure, not a marketing tile.

### Per-site customisation (rebranding)

The full checklist is in **`README.md`**. In short:
- **Business facts** → `app/app.config.ts` `site` block.
- **Colors** → `app/assets/css/main.css` `@theme` block (`--color-primary-*`, `--color-cta-*`, full 50–950).
- **Fonts** → `--font-display` in `main.css` **and** the `fonts.families` list in `nuxt.config.ts` (keep them in sync, or the font silently won't download).
- **Logo** → `app/components/Logo.vue` (swap the text wordmark for an image).
- **Copy & section order** → `app/pages/index.vue`.
- **Placeholders** → resolve everything (see README's pre-launch list).

### Theming — where styling lives

- **`app/app.config.ts`** is where Nuxt UI component variants are tuned site-wide (button/input/select/badge/card/pageHero/pageSection/etc. slots and per-color hover states). Adjust component-wide styling here rather than repeating `:ui="{...}"` on every instance.
- **`app/assets/css/main.css`** holds the `@theme` tokens, the `@utility` brand-tint ladder, `@layer base` heading/paragraph styles, and the `.lift` utility.
- **`colorMode` is disabled** (`nuxt.config.ts` `ui.colorMode: false`) — this is a **light-only** site. Don't add `dark:` variants. "Dark sections" are `bg-neutral-950` surfaces using the `-inverted` token counterparts, not a dark color mode.

### Global base styles — applied automatically, DON'T re-declare

`main.css` `@layer base` styles bare `h1`–`h6` (by tag) and `<p>`. A bare `<h2>` already has the right size/weight/font; a bare `<p>` already has `leading-relaxed text-pretty text-lg` + `mb-4`. Don't re-declare these on bare tags — see the specs below.

### Border-radius — role-based spec (plain Tailwind classes)

Radius encodes **hierarchy**: the larger / more standalone an element, the rounder it is. Pick by *role*, not by eye.

| Role | Class | px | Use for |
|---|---|---|---|
| Control | `rounded-md` | 6 | inputs, buttons, chips, code, **icon tiles** |
| Card | `rounded-xl` | 12 | **default card** — any card in a collection / grid |
| Panel | `rounded-2xl` | 16 | a **standalone or highlighted** surface — single hero/feature panel, spotlight card, CTA box |
| Pill | `rounded-full` | ∞ | badges, avatars, round icon-only buttons, decorative blobs |
| Flush | `rounded-none` | 0 | full-bleed / edge-to-edge bands (hero, solid CTA) |

The deciding rule: **a collection of cards uses `rounded-xl` (Card); a card that stands alone or is highlighted uses `rounded-2xl` (Panel).**

- `UCard` / `UPageCard` default to `rounded-xl` via `card.root` / `pageCard.root` in `app.config.ts`. For a standalone instance, pass `:ui="{ root: 'rounded-2xl' }"`.
- **Nesting:** an inner element's radius must be ≤ its parent's.
- `--ui-radius` in `main.css` is 6px (the Control role) so Nuxt UI buttons/inputs match.
- **Per-site retune:** the `radii` table on `/blocks/design-system` is the reference.

### Shadow — role-based elevation spec (plain Tailwind classes)

Shadow encodes **elevation = importance + interactivity**. **Ring defines an edge, shadow shows lift** — don't stack a heavy resting shadow and a ring for the same job.

| Role | Class | When |
|---|---|---|
| Flat | *(no shadow)* + `ring ring-default` | **the default** — resting cards & panels; edge is a hairline ring (`--ui-border`) |
| Raised | `shadow-sm` | a resting card on a busy/image background; a sticky header once detached |
| Floating | `shadow-lg` | floats *over* content — dropdowns, popovers, slideovers, the `UiDevMenu` FAB |
| Lifted | `shadow-xl` | **interactive card hover** AND standalone feature/hero panels — the most prominent elevation |
| Glow | `shadow-lg shadow-{color}/40` | **the single primary CTA** in a view — a brand accent, used once; NOT an elevation tier |

Two rules:
1. **Resting card = ring, no shadow (Flat).** **`.lift` is opt-in and means "this card is interactive"** — add it only to cards that link / have an action. Static cards (reviews, the quote-form panel) stay flat. `.lift` (in `main.css`) is the single source of the Lifted hover (translate + `shadow-xl`). To change the edge color site-wide, edit `--ui-border`.
2. **Colored glow is reserved for the one hero CTA** (`QuoteForm.vue`'s submit). Everything else uses neutral elevation.

### Spacing — role-based layout spec (plain Tailwind classes)

Spacing scales with **relationship distance**. Gaps and section padding **grow on larger screens**. Pick by *role*.

| Role | Class | px (base→lg) | Use for |
|---|---|---|---|
| Card gutter | `gap-6` | 24 | gap between cards in a `UPageGrid` — **one value, always** |
| Column gap | `gap-8 lg:gap-16` | 32→64 | the gap in a major 2-column section split (copy ↔ visual) |
| Section padding | `py-16 lg:py-24` | 64→96 | vertical padding between page sections |
| Card padding | `p-5 sm:p-6` | 20→24 | inner padding of a card |
| Stack | `mt-*` / `space-y-*` on rungs **2·4·6·8** | 8–32 | vertical stacking *within* a block (headline→title→desc→button) |

These are wired as **defaults in `app.config.ts`** so you rarely set them by hand:
- `pageGrid.base` → `gap-6` (don't override to `gap-4`).
- `pageSection.slots.container` → `py-16 lg:py-24`; the `horizontal` variant adds `gap-8 lg:gap-16`.
- `pageHero` carries `py-16 lg:py-24` + `gap-12 lg:gap-16`.
- `card` / `pageCard` → the card padding. Don't override per card.

Rules: card grids inherit `gap-6` from `UPageGrid` (don't pass a `gap-*`); stack margins snap to `2/4/6/8`; intra-component gaps (icon↔label) are component internals in `app.config.ts`, not this spec.

### Headings — fixed scale, styled by tag

Every heading is styled **by its tag** in `@layer base` of `main.css`. **Pick the TAG by document position, never hand-pick a size.**

| Tag | Size (base→lg) | Weight | Use for |
|---|---|---|---|
| `h1` | `text-4xl sm:text-5xl lg:text-6xl` | black | hero / page title — **one per page** |
| `h2` | `text-3xl sm:text-4xl lg:text-5xl` | black | section heading (the `UPageSection`/`UPageHero` title slots) |
| `h3` | `text-2xl sm:text-3xl` | extrabold | sub-section / prominent feature heading |
| `h4` | `text-lg` | bold | **card title in a grid** |
| `h5` | `text-base` | bold | minor heading inside a block |
| `h6` | `text-sm uppercase tracking-widest` | bold | headline / label / footer column heading |

Rules:
1. **Tag = document position; size follows.** Section title → `h2`; grid/card titles → `h4` (h2→h4 skipping h3 is fine).
2. **No size/weight/`font-display` classes on a heading** — the base layer supplies them. Only add classes for genuine overrides: color on dark (`text-inverted`), margins (`mt-*`), or a deliberate size deviation.
3. **The headline (kicker above the title)** uses the `UPageSection` `headline` prop — Nuxt UI's term "headline", not "eyebrow". Style is global via `pageSection.slots.headline` (the h6/label look). Don't re-declare per component; on dark sections override only the color. A custom header outside the slot should **read the slot classes from config and merge** with `twMerge`: `const sectionUi = useAppConfig().ui.pageSection.slots`. The headline is a label, not prose — use a `<div>`, not `<p>`.

### Paragraphs — `<p>` is for prose only

`<p>` carries `leading-relaxed text-pretty text-lg` + `mb-4` from `@layer base` — **prose reads at 18px by default** (the `<p>` tag opts into the lead tier; the `text-base` token itself stays 16px). **Use `<p>` only for running text.** For data/labels (stat numbers, captions, badges, headlines) use `<div>`/`<span>` — making them `<p>` wrongly inherits body sizing and margin.

**Prose size tiers.** The scale is a real 3-step ladder; 18px lives on *prose*, 16px is the *UI baseline* — don't conflate them:

| Class | px | Role |
|---|---|---|
| `text-lg` | **18** | **body prose + lead copy** — the bare `<p>` default, hero subtitles, and section lead-in descriptions (`pageHero`/`pageSection`/`pageCTA` `description` slots are all `text-lg`, and carry `[&_p]:text-lg` for your own `<p>`s in a `#description` slot). |
| `text-base` | **16** | **UI baseline** — buttons, inputs, nav, labels, `h5`, card descriptions (`pageCard.description`), and dense/compact paragraphs where 18px is too loose. The neutral default for furniture, not reading copy. |
| `text-sm` | **14** | compact tier — captions, fine print, meta. |

Rule of thumb: reading copy is `text-lg` (and a bare `<p>` already is); anything that's UI chrome or intentionally dense is `text-base`. Don't bump the `--text-base` token to enlarge body — set prose via `<p>`/the description slots so controls stay 16px.

**Description / secondary-text size — by *unit size*, never eyeballed.** A component's description or supporting copy picks its size from the size of the unit it sits in. Three rungs, no fourth — **never an arbitrary `text-[Npx]`** (that's how drift starts):

| Unit | Size | Where |
|---|---|---|
| **Section-level prose** the reader reads | `text-lg` (18) | `pageHero`/`pageSection`/`pageCTA` descriptions, `ZigZag`, `Areas` |
| **A standalone card's own body / caption** | `text-base` (16) | `pageCard` (`Card`), `Review` quote, `BeforeAfter` caption, FAQ answer (`accordion.body`) |
| **Dense, repeated, or micro support** | `text-sm` (14) | `FeatureItem` (→ `FeatureItems`, `Steps`), `Comparison` description + `itemLabel`, `Figure` badge, `QuoteForm` subtitle, `SiteFooter` blurb |

The rule reads as: the bigger / more standalone the unit, the bigger its secondary text. A packed grid of feature tiles is `text-sm`; a single marketing card is `text-base`; a section intro is `text-lg`. When a description slot renders a bare `<p>`, pin it with `[&_p]:text-<size>` to match the rung (see FeatureItem/ZigZag) — otherwise the base `p { text-lg }` rule wins and it silently jumps to 18px.

**Density can override the component — a *stacked* card drops a rung.** `pageCard` (`Card`) descriptions default to `text-base` (16), but that's the size for a card that stands relatively alone — a loose grid of 2–3 marketing cards, each with a CTA. When the same `UiCard` is **packed into a dense collection that reads as a feature grid** — 4+ cells, a seamless / bordered grid, no standout per-card CTA — the *group's* density sets the size, not the `UiCard` identity: treat each cell like a `FeatureItem` and drop the description to `text-sm` via `:ui="{ description: 'text-sm' }"` (or on a shared cell-`ui` object). Canonical example: the bordered "everything under one roof" service grid (`Content5` on `/blocks/content`).

**Paragraph color is always the neutral ladder** — never a brand variant (`text-primary-*`/`text-cta-*`); those are accent-only.

### Line-height (`leading-*`) — embedded by tag, you rarely write it

Line-height is baked into every tag in `@layer base`, so **you almost never write a `leading-*` class**:

| Role | `leading` | Set by |
|---|---|---|
| Display heading (`h1`/`h2`) | `leading-[1.05]` | base layer (by tag) |
| Sub-heading (`h3`) | `leading-tight` | base layer |
| Small heading / card title (`h4`/`h5`) | `leading-snug` | base layer |
| Body prose & descriptions (`<p>`) | `leading-relaxed` | base layer (bare `<p>`) |

1. **Never restate the tag's leading.** A bare `<p>` is already `leading-relaxed`; a bare `<h2>` already has its display leading. Adding `leading-relaxed` to a `<p>` is redundant — drop it.
2. **The description slots keep `leading-relaxed` on purpose — load-bearing, not redundant.** Nuxt UI renders the `description` *prop* as a raw text node (not a `<p>`), so the slot wrapper (`pageHero`/`pageSection`/`pageCTA` descriptions, `accordion.body`, `ZigZag`) has no base rule to inherit and must carry its own `leading-relaxed`. It's set once in the theme; page copy never touches it.
3. **Write `leading-*` only to (a) override the role or (b) style non-`<p>` text:** the compact `leading-snug` for dense supporting copy (a feature-tile description, the form subtitle) or a tight statement; `leading-none`/`leading-tight` on a `<span>`/`<div>` label or plain-string slot that has no tag leading to inherit.

Same through-line as the size and color specs: **the tag carries the default; you write a utility only to deviate by role, or when there's no tag to inherit from.**

### Text color — semantic tokens, by prominence

**TWO separate text systems — don't mix their roles:**

1. **Neutral ladder (the default for ALL normal text).** Headings, paragraphs, descriptions, captions, labels.
2. **Brand accents (`text-primary-*` / `text-cta-*`) — accent-only.** A single highlighted word, a stat number. **Never** body copy.

**Neutral ladder** — Nuxt UI's semantic tokens, **never raw `text-neutral-*`**:

| Token | Shade | Use for |
|---|---|---|
| `text-highlighted` | 900 | headings, emphasized words (base `<h*>` already applies this) |
| `text-default` | 700 | **primary body prose** — running reading paragraphs (the document default; a bare `<p>` already is this) |
| `text-toned` | 600 | **prominent supporting content** — testimonial quotes, checklist/list labels, standout body copy that's more than a caption |
| `text-muted` | 500 | **descriptions & captions — the workhorse** (see rule below) |
| `text-dimmed` | 400 | least prominent — empty-state icons, faint labels, placeholders |
| `text-inverted` | white | full-strength text on dark/brand backgrounds |

**The description rule: every description & caption is `text-muted` (500).** Section lead-ins (`pageHero`/`pageSection`/`pageCTA` descriptions), card descriptions (`pageCard`), and every component caption (`FeatureItem`, `Comparison`, `Figure` badge, `BeforeAfter`, `QuoteForm`) all resolve to `text-muted` — and this is *also* Nuxt UI's default for those description slots, so a section/card slot needs **no** color class; it's already muted. The three other rungs are the *exceptions* you reach for by role: running body prose → `text-default`; a quote or list label → `text-toned`; something faint → `text-dimmed`.

**The gotcha this rule exists to prevent:** the muted comes from the framework *default*, so it's invisible in our code — which means **hand-rolled description markup that bypasses the slot silently falls through to `text-default` (700)** and reads too dark (this is exactly what happened to `Content4` on `/blocks/content`). So: when you build a description *outside* a `#description` slot (a custom header `<div>`, a bare `<p>` you place yourself), you **must** add `text-muted` explicitly. Inside the slot, inherit it.

**The rule, enforced: use `<UiSectionDescription>` for any description outside a `#description` slot.** A custom 2-column section (image + `h3` + prose + CTAs) can't use `UPageSection`'s `description` prop, so its intro copy is hand-rolled — the exact case that drifts. **Don't hand-roll the wrapper classes.** Wrap the paragraphs in `<UiSectionDescription>` instead:
```vue
<UiSectionDescription>
  <p>First paragraph…</p>
  <p>Second paragraph…</p>
</UiSectionDescription>
```
It resolves the **real** `UPageSection` `description`-slot styling through Nuxt UI's own `tv()` (`#build/ui/page-section` + `@nuxt/ui/utils/tv`), so it's the *single source of truth* — framework `text-muted` and our app.config overrides included, always in lockstep with actual section descriptions. Never re-derive `text-lg …text-muted [&_p]:text-lg` by hand again; extra layout classes go through its `class` prop.

**The same obligation covers the headline and title.** Whenever a custom section header (2-column split, an image beside the copy, any hand-rolled header) can't pass `UPageSection`'s `headline`/`title` props, you **must** use the two sibling components — never hand-write a `<div>` eyebrow or a `<h2>` title with the classes inline:
```vue
<UiSectionHeadline>Featured services</UiSectionHeadline>
<UiSectionTitle class="mt-3">Demand generation for modern brands</UiSectionTitle>
```
`UiSectionTitle` renders an `<h2>` by default (pass `as` for another tag) and carries the real `title`-slot classes; `UiSectionHeadline` is a `<div>` label carrying the `headline`-slot look. Don't hand-roll `font-display …uppercase tracking-widest text-primary` or the title's size/weight — deviate only via the `class` prop (e.g. a smaller `text-2xl sm:text-3xl lg:text-4xl` title in a tight grid column).

**The one exception — dark sections and bespoke eyebrows.** All three resolve the *light*-section look (`text-primary` headline, `text-highlighted` title, `text-muted` description). A dark section (`text-inverted` title, `text-toned-inverted` description) or a deliberately different eyebrow (a `UBadge`, a `font-mono` label with a decorative rule) is **not** a drift case — leave it hand-rolled. The obligation is: *a light section header that would otherwise re-derive the standard slot classes uses the component.*

**Dark sections:** full-strength text = `text-inverted`; descriptions step down to `text-toned-inverted` (/80) — one brighter than light-mode muted, because dark surfaces need the extra contrast (this is why the dark CTA/hero descriptions are `text-toned-inverted`, not a muted equivalent). Further de-emphasis via `text-muted-inverted` (/65), `text-dimmed-inverted` (/45). Don't hand-write `text-white/N`.

On a real `<p>`, don't re-declare `text-lg`/`leading-relaxed`/`text-pretty` — the base supplies them (but sets no color, so a `text-muted` override IS intentional — a `<p>` you place as a description needs it). Drop to `text-base` only for a deliberately denser paragraph.

### Background surfaces — semantic tokens, never raw `bg-neutral-*` / `bg-primary-50`

| Token | Shade | Use for |
|---|---|---|
| `bg-default` | white | the base page surface |
| `bg-muted` | neutral-50 | **alt light section root** — the white ↔ neutral-50 seam between light sections |
| `bg-elevated` | neutral-100 | image/map placeholder, faint inset panel |
| `bg-accented` | neutral-200 | stronger neutral fill |
| `bg-inverted` | neutral-900 | dark fill on a light page |

Rules: never `bg-neutral-NNN`/`bg-primary-50` for a surface — use the token by role. Decorative blur-blob glows stay raw (`bg-primary/20 blur-[120px]`) — they're atmospheric, not flat surfaces.

### Brand color values — `soft` / `solid` (the emphasis ladder)

Each brand color (`primary`, `cta`) has an emphasis ladder usable as `bg-` **or** `text-`. `soft` is **our** `@utility` (in `main.css`); `solid` is **Nuxt UI's own** `bg-primary`/`text-primary` (= 500) — no custom `-solid` token.

| Level | as `bg-` | as `text-` | owner |
|---|---|---|---|
| `soft` | `bg-primary-soft` = 50 tint | `text-primary-soft` = 500 @ 50% | ours |
| `solid` | `bg-primary` = 500 | `text-primary` = 500 | **Nuxt UI** |

**On a dark section**, append `-inverted` (bg → translucent brand wash; text → the light 300 shade): `bg-primary-soft-inverted`, `text-primary-solid-inverted`. Same for `cta`.

Rules: a pale tint bg takes the strong icon/text color (`bg-primary-soft` + `text-primary`); a saturated fill takes white (`bg-primary` + `text-inverted`). `text-primary-*` are accents, never body copy.

### Icon tiles — the `<IconTile>` component

The leading-icon square is the **`<IconTile>`** component. Props: `color` (`primary`/`cta`/`neutral`), `variant` (`soft`/`solid`/`naked`), `inverted` (dark sections), `size` (`sm`/`md`/`lg`). Extra classes merge via `twMerge`.

```vue
<IconTile icon="i-fa6-solid-bolt" />                        <!-- soft primary (default) -->
<IconTile icon="..." variant="solid" color="cta" />
<IconTile icon="..." inverted size="lg" class="shrink-0" /> <!-- on a dark section -->
```

### Motion — transition durations by role

| Duration | Use for |
|---|---|
| `duration-150` | quick feedback — color/text hovers on links, nav (`transition-colors`) |
| `duration-200` | interactive lift — the `.lift` card hover |
| `duration-300` | larger movement — card/element translate, a sticky header solidifying |

Use `.lift` (in `main.css`, `@layer components`) rather than hand-rolling the card hover. One hover per element, not stacked effects.

### Section surfaces & page rhythm

**One spotlight per section.** Every section has exactly **one** attention device — never stack a dark bg *and* a photo *and* a glowing card.

| Spotlight is… | Surface | How |
|---|---|---|
| **A photo** | **Image** | full-bleed photo + gradient scrim (`bgImage` / `UiBackdrop`), or a light section with a contained image |
| **The content** (cards, steps, stats) | **Light** | white or `neutral-50` root; colored icon tiles / a standout card carry the eye |
| **A statement / brand moment** | **Dark** | `bg-neutral-950` root, `text-inverted`, optional radial-light blobs |

**Page rhythm:**
1. **Light is the connective tissue** — dark and image are punctuation.
2. **Never two dark sections adjacent, nor two image sections adjacent.**
3. **Image bookends:** hero (top) + final CTA (bottom); dark statement moments around the 1/3 and 2/3 beats. Canonical cadence: `image(hero) → light → light → dark → light → light → image(cta) → dark(footer)`.
4. **Sub-rhythm within light** — light sections alternate `base` ↔ `alt` so adjacent ones have a seam. Never two `alt` touching, never `alt` directly against a dark/image section, prefer `alt` on "container" sections (grids, timelines).

**Three surface roles** (bind per site; the *rule* is fixed, not the colors): `base` = `bg-default` (white, the default & always for proof/reviews); `alt` = `bg-muted` (neutral-50, the alternation tint); `dark` = `bg-neutral-950` or `bgImage` (statement + bookends). **Reviews/testimonials are always `base`** — an `alt`-tinted proof section reads as "styled marketing," `base` reads as "credible."

Surface is a **composition** decision set on the page via each section's `class` / `:ui.root` / `bgImage`. When unsure, default to `base`.

### Exported item types — import, don't redefine

When authoring page copy, import the item type from the component that consumes it:

| Type | Exported from |
|---|---|
| `CardProps` | `ui/Card.vue` |
| `FeatureItem` | `ui/FeatureItem.vue` |
| `ListItem` | `ui/List.vue` |
| `Review` | `ui/Review.vue` |
| `AreasArea` | `ui/Areas.vue` |
| `FigureImage` | `ui/Figure.vue` |
| `ComparisonColumn` | `ui/Comparison.vue` |
| `ZigZagItem` | `ui/ZigZag.vue` |
| `TextOrRender`, `RenderItem` | `utils/render.ts` |

Components reading `useAppConfig().site`: `SiteHeader`, `SiteFooter`, `Logo`, `GoogleStars`, `TrustGoogle` (build name/phone/rating from it — never hardcode).

### Co-located page partials

`nuxt.config.ts` has a `pages:extend` hook that **strips any route whose file path contains `/_partials/`**, so a page can keep a `_partials/` subfolder of helpers imported explicitly by that page without them leaking into the router. No page uses this yet — it's a convention for when a page's copy outgrows its `<script setup>`. **Keep the hook** when editing config.

### Routing notes

`app/router.options.ts` defines smooth scrolling with an offset for in-page `#hash` anchors. Deep-link target sections set their own id (`id="contact"`, `id="faq"`, `id="reviews"`, `id="areas"`) so nav/CTAs can anchor to them. Use `NuxtLink` / `UButton to` for in-page anchors, not plain `href`.

## No useless comments

Do **not** add explanatory or decorative comments — no JSDoc prop descriptions, no `<!-- section label -->` dividers, no "what this does" narration. Self-documenting code is the standard. Keep a comment only when it explains something genuinely non-obvious (a workaround, a gotcha). Applies to `.vue` files too.
