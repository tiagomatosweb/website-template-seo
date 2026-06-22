# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at http://localhost:3000
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview a production build
```

There is no test suite, linter, or typecheck script configured. `postinstall` runs `nuxt prepare` to regenerate `.nuxt/` types.

## Stack

Nuxt 4 + Vue 3 (`<script setup lang="ts">`), Nuxt UI v4, Tailwind CSS v4. Nuxt UI is the **only** module. Icons come from Iconify FA6 (`i-fa6-solid-*`, `i-fa6-brands-*`) and `logos`. Color mode is disabled — this is a light-theme-only site.

## Architecture

This is a **marketing-site template**: a single landing page assembled from interchangeable, self-contained section components, plus a dev-only gallery for previewing section variants.

- **`app/pages/index/index.vue`** — the live homepage. It does nothing but compose section components in order (`Hero1`, `Trust1`, `Services2`, …) and set `useSeoMeta`. Swapping a section variant means changing one tag here.
- **`app/components/`** — organised in subfolders (`site/`, `sections/`, `ui/`). Section variants use a numeric suffix: `Hero1`, `Services1`–`Services5`, `Why1`/`Why2`, `Process1`/`Process2`, `Trust1`/`Trust2`, `Cta1`. Each variant is a drop-in alternative for the same slot on the page. `Header`, `Footer`, `QuoteForm`, `ProofList`, `DevMenu` are shared. Auto-import keeps flat names (`pathPrefix: false` in `nuxt.config.ts`).
- **`app/pages/blocks/<role>/index.vue`** — variant galleries (`/blocks/services`, `/blocks/hero`, etc.) that render every variant of one role stacked with labels. These are `noindex` and reached via the floating `DevMenu` button (rendered globally in `app.vue`). When adding a new section variant, also register it in the matching `blocks/<role>` gallery and the `DevMenu` list.

### Section component conventions

Every section is **fully self-contained and prop-driven with sensible defaults** — it renders complete placeholder copy/data with zero required props, so it can be dropped onto a page or into a gallery as `<Services4 />`. Follow this pattern for new sections:

- `withDefaults(defineProps<{...}>(), { ... })` with full default content (default arrays use factory functions `() => [...]`).
- Background images are imported as ES modules from `~/assets/img/` and passed via a `bgImage`-style prop, resolved through a `computed` fallback to a default import.
- **Build UI from Nuxt UI components** (`UPageSection`, `UPageGrid`, `UPageCard`, `UButton`, `UContainer`, `UIcon`, `UPageCTA`, `UPageHero`) rather than hand-rolled divs. Reach for raw markup only for layout/decoration not covered by a component.

### `UPageCard` vs `UCard` — pick by role, not by API

These two are nearly identical surfaces (same `rounded-xl`, same `p-5 sm:p-6` padding, same `solid` dark variant — wired in `app.config.ts` for both). The decision is **role-based, not "props vs slots"**:

- **`UPageCard` is the default for ALL marketing content** — any card that *presents an item*: a service, a benefit, a review, a featured panel, a CTA box. Whether in a grid or standalone. This is what you reach for ~always.
  - Content maps to its props (`title` / `description` / `icon`)? Use them.
  - Need custom markup (image header, feature list, multi-part body)? Use its **slots** — `#header`, `#footer`, `#leading`, and the **default slot** for the body. `UPageCard` has no `body` slot; custom body content goes in the default slot, and its inner-padding `:ui` key is **`container`** (not `body`).
- **`UCard` only for a bare container** — a card that wraps another component/composite and has **no title/description of its own**. The canonical (essentially only) case is `Hero1`'s `<UCard><QuoteForm /></UCard>`.

The deciding question: *does this card describe a thing (→ `UPageCard`), or is it just a box around something else (→ `UCard`)?* When unsure, use `UPageCard`.

`:ui` slot-name mapping when authoring/migrating: `UCard`'s `body` → `UPageCard`'s `container`; `header`/`footer` are the same on both. Everything else (radius override, `lift`, `variant`) is identical.

### Per-site customisation (rebranding)

This template is cloned per client. All per-site values are consolidated so a
rebrand touches a fixed set of places — see **`REBRAND.md`** for the full checklist.

- **Business data** (name, phone, email, service area, socials, blurb, tagline)
  lives in the **`site` block of `app/app.config.ts`** — the single source of truth.
  Components read it via `const { site } = useAppConfig()`; never hardcode these.
  The shape is typed in `app/types/app-config.d.ts` (augments `AppConfig`), so add
  a field there + in the config when extending it.
- **Brand tokens** (colors, fonts) live in the `@theme` block of `main.css` (marked
  `BRAND TOKENS`) and the `fonts.families` list in `nuxt.config.ts`.
- **Phone** is split into `phone.display` (human) and `phone.href` (`tel:…`, digits only).

### Theming — where styling lives

Three layers, in order of preference for changes:

1. **`app/app.config.ts`** — the **primary place to restyle Nuxt UI components** globally (slots, variants, compoundVariants for `button`, `card`, `pageHero`, `pageSection`, `pageCTA`, `accordion`, `badge`, inputs). Color aliases are mapped here: `primary`, `cta`, and `neutral → slate`. The `cta` color (amber) is a custom semantic color alongside `primary` (navy) for high-emphasis actions.
2. **`app/assets/css/main.css`** — Tailwind v4 `@theme` block defining the `primary`/`cta` color scales and fonts (`--font-display: Poppins`, `--font-sans: Nunito Sans`), plus the `--ui-radius` / `--ui-border` token overrides. Also holds:
   - the **brand-value `@utility` tokens** (`bg-/text-primary-soft`/`-muted` + the `-inverted` dark set) — see the Brand color values spec.
   - **`.lift`** (`@layer components`) — the Lifted hover (translate + `shadow-xl`); add to interactive (linked) cards / hoverable surfaces (see shadow spec).
   - base heading/paragraph styles.
3. Per-component `:ui` overrides and utility classes for one-off adjustments.

### Global base styles — applied automatically, DON'T re-declare

The `@layer base` block in `main.css` already styles bare tags. When you write a `<p>` or `<h*>`, **these are already on it** — adding the same utilities again is redundant drift. Check this list before putting typography classes on a heading or paragraph:

| Tag | Already applied (do NOT repeat) | Only add for a genuine override |
|---|---|---|
| `h1`–`h6` | `font-display tracking-tight text-neutral-900 text-balance` + per-level size/weight/leading (see Headings spec) | dark-bg color (`text-white`), margins (`mt-*`), a deliberate size deviation |
| `p` | `leading-relaxed text-pretty text-base` + `mb-4` between paragraphs | **color** (base sets none → `text-neutral-600`, `text-white/70` are real), the **lead-in size** (`text-lg`, see below) or a deliberately smaller size (`text-sm` caption), `max-w-*` |
| `html` | `scroll-behavior: smooth` | — |

Concretely: **don't write `<p class="text-base leading-relaxed text-pretty">`** — that's the base, verbatim. Write `<p>` (or `<p class="text-neutral-600 max-w-md">` if you need the muted color / measure). Same for headings: a section title is `<h2>`, not `<h2 class="font-display text-3xl font-black">`. Reusable multi-utility patterns get a class in `@layer components` (e.g. `.lift`) or a component (e.g. `<IconTile>`) — never copy the utility string across components.

### Border-radius — role-based spec (plain Tailwind classes)

Radius encodes **hierarchy**: the larger / more standalone an element, the rounder it is. Each *role* maps to one fixed Tailwind class — pick by role, not by eye. We use raw `rounded-*` (not custom classes) so any component stays easy to override per instance.

| Role | Class | px | Use for |
|---|---|---|---|
| Control | `rounded-md` | 6 | inputs, buttons, chips, code, **icon tiles** |
| Card | `rounded-xl` | 12 | **default card** — any card in a collection / grid |
| Panel | `rounded-2xl` | 16 | a **standalone or highlighted** surface — single hero/feature panel, spotlight card, CTA box, the big first card in a bento |
| Pill | `rounded-full` | ∞ | badges, avatars, round icon-only buttons, decorative blobs |
| Flush | `rounded-none` | 0 | full-bleed / edge-to-edge bands (a section that spans the viewport width with no rounded corners — e.g. hero, solid CTA) |

The deciding rule: **a collection of cards uses `rounded-xl` (Card); a card that stands alone or is highlighted uses `rounded-2xl` (Panel).** See `Services2.vue` — the big first bento card is `rounded-2xl`, the rest are `rounded-xl`.

- `UCard` / `UPageCard` default to `rounded-xl` via `card.root` / `pageCard.root` in `app.config.ts`. For a standalone/highlighted instance, pass `:ui="{ root: 'rounded-2xl' }"`.
- **Nesting:** an inner element's radius must be ≤ its parent's (a `rounded-md` icon tile inside a `rounded-xl` card is correct; never the reverse).
- `--ui-radius` in `main.css` is set to 6px (the Control role) so Nuxt UI buttons/inputs match.
- **Per-site retune:** the `radii` table on the `/blocks/design-system` page is the source of truth. To change a site's radii, re-map the classes there, then update the matching component slots and `app.config.ts`. (Ask Claude to read the brand spec and re-map.)

### Shadow — role-based elevation spec (plain Tailwind classes)

Shadow encodes **elevation = importance + interactivity**: the higher something floats, the more important or interactive it is. Pick by *role*, not by eye. **Ring defines an edge, shadow shows lift** — don't stack a heavy resting shadow and a ring for the same job.

| Role | Class | When |
|---|---|---|
| Flat | *(no shadow)* + `ring ring-default` | **the default** — resting cards & panels; edge is a hairline ring (color = `--ui-border` token) |
| Raised | `shadow-sm` | a resting card on a busy / image / textured background; a sticky header once detached from the top |
| Floating | `shadow-lg` | floats *over* content — dropdowns, popovers, slideovers, the DevMenu FAB |
| Lifted | `shadow-xl` (or a custom soft-drop) | **interactive card hover** AND **standalone feature/hero panels** (e.g. `Trust2.vue`'s `shadow-[0_30px_80px_-20px]`) — the most prominent elevation |
| Glow | `shadow-lg shadow-{color}/40` | **the single primary CTA** in a view — a brand accent, used once; NOT an elevation tier |

The two deciding rules:
1. **Resting card = ring, no shadow (Flat).** This is automatic: a card's default `outline` variant applies `ring ring-default` (color set once via `--ui-border` in `main.css`). **Lift is opt-in and means "this card is interactive"** — add the **`.lift`** class only to cards that link / have an action (e.g. service cards). Static/informational cards (reviews, the quote-form panel) stay flat. `.lift` (in `main.css`) is the single source of the Lifted hover (translate + `shadow-xl`). To change the edge color site-wide, edit `--ui-border`, not per-component rings.
2. **Colored glow is reserved for the one hero CTA** (e.g. `QuoteForm.vue`'s submit). Everything else uses neutral elevation.

- `UCard`/`UPageCard` don't force a ring (they're used in many contexts) — apply Flat at the usage site as `Services3`/`Services4` do.
- **Per-site retune:** the `shadows` table on the `/blocks/design-system` page is the source of truth; re-map roles there, then update component slots. (Ask Claude to read the brand spec and re-map.)

### Spacing — role-based layout spec (plain Tailwind classes)

Spacing scales with **relationship distance**: the tighter the conceptual link, the smaller the space. Gaps and section padding **grow on larger screens**. Pick by *role*, not by eye.

| Role | Class | px (base→lg) | Use for |
|---|---|---|---|
| Card gutter | `gap-6` | 24 | gap between cards in a `UPageGrid` / any peer-card grid — **one value, always** |
| Column gap | `gap-8 lg:gap-16` | 32→64 | the gap in a major 2-column section split (copy ↔ cards/visual) |
| Section padding | `py-16 lg:py-24` | 64→96 | vertical padding between page sections |
| Card padding | `p-5 sm:p-6` | 20→24 | inner padding of a card (same on `UCard` header/body/footer and `UPageCard` container) |
| Stack | `mt-*` / `space-y-*` on the rungs **2·4·6·8** | 8–32 | vertical stacking *within* a block (headline→title→desc→button); pick by relatedness |

These are wired as **defaults in `app.config.ts`** so you rarely set them by hand:
- `pageGrid.base` → `gap-6` (every `UPageGrid` gets the card gutter; don't override to `gap-4`).
- `pageSection.slots.container` → `py-16 lg:py-24`; the `horizontal` orientation variant adds `gap-8 lg:gap-16` (the column gap).
- `pageHero` already carries `py-16 lg:py-24` + `gap-12 lg:gap-16`.
- `card` (header/body/footer) and `pageCard` (container) → `p-5 sm:p-6` (the card padding). Don't override per card; `Services3` keeps `header: 'p-0'` only because its header is a flush image.

Rules:
1. **Card grids inherit `gap-6` from `UPageGrid`** — don't pass a `gap-*` class. Hand-rolled grids (e.g. `Process1`'s `<ol>`) set `gap-6` explicitly.
2. **Section padding is the `UPageSection` default.** Customise tighter only for bars (e.g. `Trust1`'s `py-8 lg:py-6`).
3. **Stack margins** snap to `2/4/6/8` for layout stacking — avoid `mt-5`/`mt-10` etc. (guideline, not absolute, where a heading's rhythm needs fine-tuning).
4. **Intra-component gaps** (icon↔label inside a button/badge/input/chip: `gap-1/2/3`) are **component internals** governed by `app.config.ts` slots — NOT this spec.
- **Per-site retune:** the `spacing` table on the `/blocks/design-system` page is the source of truth; re-map there, then update config + component classes.

### Headings — fixed scale, styled by tag

Every heading is styled **by its tag** in the `@layer base` block of `main.css` — a bare `<h2>` already has the right size/weight/font. **Decouple level from size: pick the TAG by document position, never hand-pick a size.** Heading size/weight grow on `sm`/`lg` where defined.

| Tag | Size (base→lg) | Weight | Use for |
|---|---|---|---|
| `h1` | `text-4xl sm:text-5xl lg:text-6xl` | black | hero / page title — **one per page** |
| `h2` | `text-3xl sm:text-4xl lg:text-5xl` | black | section heading (the `UPageSection`/`UPageHero` title slots render this size) |
| `h3` | `text-2xl sm:text-3xl` | extrabold | sub-section / prominent feature heading |
| `h4` | `text-lg` | bold | **card title in a grid** |
| `h5` | `text-base` | bold | minor heading inside a block |
| `h6` | `text-sm uppercase tracking-widest` | bold | headline / label / footer column heading |

Rules:
1. **Tag = document position; size follows the tag.** Section title → `h2`; things inside a section → `h3`; **grid/card titles → `h4`** (the outline goes h2→h4, skipping h3, which is fine and keeps card titles override-free at `text-lg`).
2. **No size/weight/`font-display` classes on a heading** — the base layer supplies them. Only add classes for genuine overrides: color on dark backgrounds (`text-white`), layout margins (`mt-*`), or a deliberate size deviation (e.g. `Services2`'s big featured-card title).
3. **The headline (kicker above the title)** uses the `UPageSection` `headline` prop — we use Nuxt UI's term "headline" everywhere (not "eyebrow"). Its style is global (`font-display text-sm font-bold uppercase tracking-widest text-primary`, the h6/label look) via `pageSection.slots.headline` in `app.config.ts`. Don't re-declare it per component; on dark sections override only the color (e.g. `headline: 'text-primary-300'`). A custom header outside the `UPageSection` slot (an intro inside the grid, a decorated panel) should **read the slot classes from config and merge** rather than hardcode them: `const sectionUi = useAppConfig().ui.pageSection.slots`, then `const headlineClass = twMerge(sectionUi.headline, '<overrides>')` and bind `:class="headlineClass"`. Use `twMerge` (from `tailwind-merge`) so an override like `text-primary-300` cleanly replaces the config's `text-primary` instead of both lingering. See `Services4`/`About1`. The headline is a label, not prose — use a `<div>`, not `<p>`. The section **title** is likewise global (`pageSection.slots.title` = the h2 scale); override only for a deliberate size change (a narrow intro column steps it down; `Services2`/`Process2` step it up) — again via `twMerge`.
4. **Per-site retune:** edit the per-tag rules in `main.css`; the `headings` table on the `/blocks/design-system` page is the reference.

### Paragraphs — `<p>` is for prose only

`<p>` carries a base style (`leading-relaxed text-pretty text-base` + `mb-4` between paragraphs) from `@layer base` in `main.css`. So **use `<p>` only for actual running text** — descriptions, subtitles, blurbs, body copy. For anything that is *not* a sentence/paragraph, use `<div>` (or `<span>` inline):

- **Use `<p>`:** section/card descriptions, subtitles, blurbs, the copyright line, form helper text — anything that reads as a sentence.
- **Use `<div>` (NOT `<p>`):** stat numbers (`{{ stat.value }}`), stat labels, headlines/kickers, captions, badges, single-word/short data labels. These are data or labels, not prose — making them `<p>` wrongly inherits body sizing and the `mb-4` paragraph margin (which then needs a `mb-0` hack — a smell that it shouldn't be a `<p>`).

**Three prose size tiers — base is `text-base`, `text-lg` is earned.** There is no `text-base`-vs-`text-lg` ambiguity: the body default is **`text-base` (16px)** — comfortable, credible long-form reading. The larger **`text-lg` (18px)** is the **lead-in / emphasis tier**, opt-in for the punchy intro copy: hero subtitles and **section lead-in descriptions** (the `<p>` directly under a section `<h2>`). It's wired into config for the slot-driven cases — `pageHero.description`, `pageSection.description`, `pageCTA.description` are all `text-lg` — so a UPageSection's `description` prop is large automatically. Only add `text-lg` by hand when the lead-in lives in a **custom header** or a `#description` **slot with your own `<p>`s** (config classes sit on the slot wrapper, not your inner `<p>`) — see `Why1`/`Why3`/`About1`/`Services4`. The smaller **`text-sm` (14px)** is the compact tier — card descriptions, captions, helper text (and `pageCard.description` = `text-[15px]`). Default body prose and long-form content stay **`text-base`**; don't promote a multi-paragraph SEO block to `text-lg`.

**Paragraph color is always the neutral ladder.** A `<p>` of body copy uses the neutral tokens — bare (inherits `text-default`) or `text-toned`/`text-muted` for de-emphasis. **Never** color a paragraph with a brand variant (`text-primary-*`/`text-cta-*`) — those are accent-only (see Text color). When generating content, default every paragraph/description to the neutral ladder.

### Text color — semantic tokens, by prominence

**TWO separate text systems — do not mix their roles:**

1. **Neutral ladder (the default for ALL normal text).** Headings, paragraphs, descriptions, captions, labels — every piece of running/body copy uses these. This is what you reach for by default.
2. **Brand accents (`text-primary-*` / `text-cta-*`) — EXTRA, accent-only.** A single highlighted word, a stat number, an accent label. **Never** paragraph/body copy. `text-primary-muted` is "muted brand-blue", *not* a neutral gray — it does not belong on a sentence.

> **Default rule when writing content:** any paragraph, description, subtitle, or body sentence uses the **neutral ladder** (`text-toned` for standard copy, `text-muted` for secondary, etc.) — and a bare `<p>` already inherits the right look (see Paragraphs). Only use a `text-primary-*`/`text-cta-*` variant when the intent is a deliberate **brand accent**, never as the color of normal prose.

**Neutral ladder** — Nuxt UI's **semantic text tokens**, never raw `text-neutral-*`. The names map to the `neutral` (slate) scale, carry intent, and survive a per-site neutral swap. Light-mode hierarchy (most → least prominent):

| Token | Shade | Use for |
|---|---|---|
| `text-highlighted` | 900 | headings, emphasized words (base `<h*>` already applies this) |
| `text-default` | 700 | primary body text (the document default) |
| `text-toned` | 600 | **standard description / paragraph copy** |
| `text-muted` | 500 | secondary text — card descriptions, captions, sub-labels |
| `text-dimmed` | 400 | least prominent — empty-state icons, faint labels |
| `text-inverted` | white | full-strength text on dark/brand backgrounds |

**Brand accents** (the soft/muted/solid emphasis ladder; accent use only) — `text-primary-soft` (500 @ 50%) and `text-primary-muted` (500 @ 75%) are **ours** (in `main.css`); the **solid** level is **Nuxt UI's own** `text-primary` / `bg-primary` (= 500), so use those directly — there is no custom `-solid` token. Same for `cta` (`text-cta-soft`/`-muted` ours, `text-cta`/`bg-cta` Nuxt UI's). Dark counterparts: `text-primary-soft-inverted`/`-muted-inverted`/`-solid-inverted` (300 @ 50/75/100%). These pair with the `bg-*-soft`/`bg-*-muted` tints and the `bg-primary`/`bg-cta` fills (e.g. an icon tile via `<IconTile>`). They are **not** in the neutral prominence ladder above and are never the color of body text.

Rules:
1. **Never `text-neutral-NNN` for a text role** — pick the token by prominence. (Brand colors `text-primary`/`text-cta` are not in this ladder and stay as-is. The only sanctioned `text-neutral-900` is `Header`'s overlay-mode ternary `light ? 'text-white' : 'text-neutral-900'`, a two-state literal.)
2. **Dark sections:** full-strength text = **`text-inverted`** (the standard — all components migrated; don't introduce raw `text-white`). The only sanctioned full-strength `text-white` literals are `Header`/`Services5`'s `light ? 'text-white' : …` two-state ternaries, `hover:`/`group-hover:text-white` interactive states, and text baked into a decorative alpha scrim badge. De-emphasis has no semantic token, so use **three white-alpha tiers only — `text-white/80` (high), `text-white/65` (secondary), `text-white/45` (muted)**. Don't introduce other opacities.
3. Headings need no color class (base supplies `text-highlighted`).

On a real `<p>`, **don't re-declare `text-base` / `leading-relaxed` / `text-pretty`** — the base supplies them. The base sets **no color**, so a muted/dark-bg color (`text-toned`, `text-white/65`) IS an intentional override; keep it. A size away from the base IS a real deviation, not drift — `text-lg` for a lead-in (see the three-tier note above) and `text-sm` for a compact caption both keep their size.

### Background surfaces — semantic tokens, never raw `bg-neutral-*` / `bg-primary-50`

Surfaces use semantic tokens, never a raw color-number. Two groups — **neutral** (Nuxt UI built-in) and **brand tints** (our `@utility` classes).

**Neutral surfaces** — Nuxt UI ships these (mapped to the neutral scale; light-only site, so each = its light-mode shade):

| Token | Shade | Use for |
|---|---|---|
| `bg-default` | white | the base page surface |
| `bg-muted` | neutral-50 | **alt light section root** — the white ↔ neutral-50 seam between adjacent light sections |
| `bg-elevated` | neutral-100 | image/map placeholder, faint inset panel |
| `bg-accented` | neutral-200 | stronger neutral fill (dividers, rarely a surface) |
| `bg-inverted` | neutral-900 | dark fill on a light page |

**Brand tints** — see the **Brand color values** spec below (the `soft`/`muted`/`solid` ladder covers brand backgrounds and text together, light and dark, in one place).

Rules:
1. **Never `bg-neutral-NNN` / `bg-primary-50` for a surface** — use the token by role.
2. **Decorative blur-blob glows stay raw** (`bg-primary/20 blur-[120px]`, `bg-cta-500/15`, multi-stop image scrims). These are atmospheric decoration tuned by eye — size, blur, opacity co-vary — NOT flat surfaces; naming them would be false precision. Only flat fills get a token.

### Brand color values — `soft` / `muted` / `solid` (the emphasis ladder)

Each brand color (`primary`, `cta`) has an emphasis ladder usable as a `bg-` **or** `text-`, composed freely like normal Tailwind (`bg-primary-soft text-primary`, etc.). `soft`/`muted` are **our** `@utility` classes (`main.css`); `solid` is **Nuxt UI's own** `bg-primary`/`text-primary` — no custom `-solid` token. Defined `@utility` so they compose with `hover:`/`lg:`/`group-hover:`.

| Level | as `bg-` | as `text-` | owner |
|---|---|---|---|
| `soft` | `bg-primary-soft` = 50 tint | `text-primary-soft` = 500 @ 50% | ours |
| `muted` | `bg-primary-muted` = 100 | `text-primary-muted` = 500 @ 75% | ours |
| `solid` | `bg-primary` = 500 | `text-primary` = 500 | **Nuxt UI** |

**On a dark section**, append `-inverted` — the same ladder, dark-tuned (bg → translucent brand wash; text → the light 300 shade). `bg-primary-soft-inverted` (brand/15), `bg-primary-muted-inverted` (brand/25), `text-primary-soft-inverted` (300 @ 50%), `text-primary-muted-inverted` (300 @ 75%), `text-primary-solid-inverted` (300). Same set for `cta`.

Rules:
1. **A pale tint bg takes the strong icon/text color**, a saturated fill takes white: `bg-primary-soft` + `text-primary` (icon tile); `bg-primary` + `text-inverted` (solid fill). Never `bg-*-solid` + `text-*-soft` (low contrast).
2. **`text-primary-*` are brand ACCENTS, never body copy** — see the Text color spec. Normal text uses the neutral ladder.
3. **Per-site retune** is the `@utility` block in `main.css`; the `/blocks/design-system` page renders the ladder.

### Icon tiles — the `<IconTile>` component

The leading-icon square is the **`<IconTile>`** component (not a class). It owns the structure (`rounded-md`, sizing) and applies the brand ladder via props: `tone` (`primary`/`cta`/`neutral`), `variant` (`soft`/`muted`/`solid`), `inverted` (dark sections), `size` (`sm`/`md`/`lg`). Pass extra classes (e.g. `group-hover:*`) via `class` — they're merged with `twMerge`.

```vue
<IconTile icon="i-fa6-solid-bolt" />                       <!-- soft primary (default) -->
<IconTile icon="..." variant="solid" tone="cta" />
<IconTile icon="..." inverted size="lg" class="shrink-0" /> <!-- on a dark section -->
```

### Motion — transition durations by role

Three transition speeds, picked by the *kind* of change. Always pair `transition-*` with the matching duration; don't invent other values.

| Duration | Use for |
|---|---|
| `duration-150` | quick feedback — color/text hovers on links, nav, small controls (`transition-colors`) |
| `duration-200` | interactive lift — the `.lift` card hover, an underline growing in |
| `duration-300` | larger movement — card/element translate, icon scale, a sticky header solidifying its background |

Plus the **`.lift`** motion utility in `main.css` (`@layer components`) — the `duration-200` Lifted hover (translate + `shadow-xl`). Use `.lift` rather than hand-rolling the hover. Keep motion subtle and purposeful — one hover per element, not stacked effects.

### Section surfaces & page rhythm

Composing a page is governed by two layers — what a single section looks like, and how the sequence reads top-to-bottom.

**One spotlight per section.** Every section has exactly **one** attention device. Never stack them (no dark bg *and* a photo *and* a glowing card — that's noise). The spotlight type picks the surface:

| Spotlight is… | Surface | How | Examples |
|---|---|---|---|
| **A photo** (the image is the section's hero) | **Image** | full-bleed photo + gradient scrim (`bgImage` prop), OR a **light** section with the photo as a contained, offset element | `Hero1`, `Cta1` (full-bleed); `About1` (contained image) |
| **The content/elements** (cards, steps, stats — the layout is the focus) | **Light** | white or `neutral-50` root; the elements carry the eye (colored icon tiles, connectors, a standout card) | `Services*`, `Process*`, `Faq*`, `Trust1` |
| **A statement / brand moment** (bold copy, few elements, wants gravity) | **Dark** | `bg-primary-950` / `bg-neutral-950` root, white text, optional radial-light blobs | `Why1`/`Why2`, `Trust2`, `About1` |

**Page rhythm — the cross-section constraint** (this can override a section's default surface):
1. **Light is the connective tissue** — most sections are light; **dark and image are punctuation**, not the norm.
2. **Never place two dark sections adjacent, nor two image sections adjacent.** If the spotlight rule would, demote the less-essential one to light.
3. **Image bookends:** the hero (top) and final CTA (bottom) are the image moments; dark statement sections land around the 1/3 and 2/3 beats. Canonical cadence: `image(hero) → light → light → dark → light → light → image(cta) → dark(footer)`. The current homepage follows this.
4. **Sub-rhythm within light:** alternate `white` ↔ `neutral-50` on adjacent light sections so they have a visible seam.

This is a **composition** decision set on the page via each section's `:ui.root` / `bgImage` (not a `surface` prop) — sections already express their surface through those. When adding/reordering sections, check the cadence above; when unsure whether a section should be light or dark, default to **light** and reserve dark/image for the one or two moments that deserve the weight.

Custom semantic colors (`cta`) are registered in `nuxt.config.ts` under `ui.theme.colors` and must exist as a CSS color scale in `main.css`.

### Co-located page partials

`nuxt.config.ts` has a `pages:extend` hook that **strips any route whose file path contains `/_partials/`**. This enables a pattern where a page can have a `_partials/` subfolder of section components imported explicitly by that page, without them leaking into the router. (Used in sibling projects; keep the hook intact when editing config.)

### Routing notes

`app/router.options.ts` defines smooth scrolling with an 8px offset for in-page `#hash` anchors (sections use `id="services"` etc. so nav/CTAs can deep-link).
