<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

useSeoMeta({
  title: 'Design System — BusinessName',
  robots: 'noindex, nofollow',
})

const tabs: TabsItem[] = [
  { label: 'Foundations', icon: 'i-fa6-solid-font', slot: 'foundations' },
  { label: 'Layout', icon: 'i-fa6-solid-ruler-combined', slot: 'layout' },
  { label: 'Buttons', icon: 'i-fa6-solid-hand-pointer', slot: 'buttons' },
  { label: 'Cards', icon: 'i-fa6-solid-square', slot: 'cards' },
  { label: 'Surfaces', icon: 'i-fa6-solid-layer-group', slot: 'surfaces' },
  { label: 'Badges', icon: 'i-fa6-solid-tag', slot: 'badges' },
  { label: 'Forms', icon: 'i-fa6-solid-list-check', slot: 'forms' },
]

// Neutral text ladder — by prominence. The default for ALL normal text.
const textColors = [
  { token: 'text-highlighted', use: 'Headings, emphasized words' },
  { token: 'text-default', use: 'Primary body text' },
  { token: 'text-toned', use: 'Standard description / paragraph copy' },
  { token: 'text-muted', use: 'Secondary — card descriptions, captions' },
  { token: 'text-dimmed', use: 'Least prominent — faint labels, empty-state icons' },
]

// Brand-accent text — EXTRA, accent-only (never body copy). soft/muted/solid.
const brandText = [
  { token: 'text-primary-soft', use: 'primary 500 @ 50% — faint brand accent' },
  { token: 'text-primary-muted', use: 'primary 500 @ 75% — mid brand accent' },
  { token: 'text-primary', use: 'primary 500 — full brand accent (Nuxt UI token)' },
  { token: 'text-cta-soft', use: 'cta 500 @ 50%' },
  { token: 'text-cta-muted', use: 'cta 500 @ 75%' },
  { token: 'text-cta', use: 'cta 500 (Nuxt UI token)' },
]

// Neutral surfaces — Nuxt UI's built-in background ladder (maps to the neutral
// scale). Use these for plain surfaces instead of raw bg-neutral-*.
const neutralSurfaces = [
  { token: 'bg-default', sw: 'bg-default ring ring-default', use: 'White — the base page surface' },
  { token: 'bg-muted', sw: 'bg-muted', use: 'Alt light section root (the white ↔ neutral-50 seam)' },
  { token: 'bg-elevated', sw: 'bg-elevated', use: 'Image/map placeholder, faint inset panel' },
  { token: 'bg-accented', sw: 'bg-accented', use: 'Stronger neutral fill — rarely needed' },
  { token: 'bg-inverted', sw: 'bg-inverted', use: 'Dark fill on a light page (chips, tooltips)' },
]

// Brand tints — soft brand-colored fills, picked by role. Nuxt UI has NO soft
// brand surfaces, so these are @utility classes in main.css (source of truth).
// Use instead of raw bg-primary-50 / bg-primary/15. Same set exists for cta.
const brandSurfaces = [
  { token: 'bg-primary-soft', sw: 'bg-primary-soft', use: 'soft — pale 50 tint (icon tiles, highlight panel)' },
  { token: 'bg-primary-muted', sw: 'bg-primary-muted', use: 'muted — stronger 100 tint' },
  { token: 'bg-primary', sw: 'bg-primary', use: 'solid — saturated 500 fill (Nuxt UI token)', solid: true },
  { token: 'bg-primary-soft-inverted', sw: 'bg-primary-soft-inverted', use: 'soft on DARK — brand /15 wash', dark: true },
]

// Layout spacing spec — each ROLE maps to a fixed class. Source of truth.
const spacing = [
  { role: 'Card gutter', name: 'gap-6', value: '24px', use: 'Between cards in a UPageGrid / peer-card grid', w: '24px' },
  { role: 'Column gap', name: 'gap-8 lg:gap-16', value: '32→64px', use: 'Major 2-column section split (copy ↔ cards/visual)', w: '64px' },
  { role: 'Section padding', name: 'py-16 lg:py-24', value: '64→96px', use: 'Vertical padding between page sections', w: '96px' },
  { role: 'Stack', name: 'mt / space-y 2·4·6·8', value: '8–32px', use: 'Vertical stacking within a block (pick by relatedness)', w: '32px' },
]

// Radius spec — each ROLE maps to a fixed Tailwind class. This table IS the
// source of truth: to change a site's radii, re-map the classes here and in the
// matching component slots / app.config.ts. Pick by role, not by eye.
const radii = [
  { role: 'Control', name: 'rounded-md', value: '6px', use: 'Inputs, buttons, chips, code, icon tiles', r: '6px' },
  { role: 'Card', name: 'rounded-xl', value: '12px', use: 'Default card — cards in a collection / grid', r: '12px' },
  { role: 'Panel', name: 'rounded-2xl', value: '16px', use: 'Standalone or highlighted surface, CTA box, big bento card', r: '16px' },
  { role: 'Pill', name: 'rounded-full', value: '9999px', use: 'Badges, tags, avatars, round icon buttons', r: '9999px' },
  { role: 'Flush', name: 'rounded-none', value: '0px', use: 'Full-bleed bands (hero, solid CTA)', r: '0px' },
]

// Shadow / elevation spec — each ROLE maps to a class. Shadow = elevation =
// importance + interactivity. Default is Flat (ring, no shadow). Pick by role.
const shadows = [
  { role: 'Flat', name: 'ring · no shadow', use: 'Default — resting cards/panels (edge = ring-default)', cls: 'ring ring-default' },
  { role: 'Raised', name: 'shadow-sm', use: 'Resting card on a busy / image bg; detached sticky header', cls: 'shadow-sm' },
  { role: 'Floating', name: 'shadow-lg', use: 'Floats over content — dropdowns, popovers, slideovers, FAB', cls: 'shadow-lg' },
  { role: 'Lifted', name: 'shadow-xl', use: 'Interactive card hover, and standalone feature/hero panels', cls: 'shadow-xl' },
  { role: 'Glow', name: 'shadow-lg shadow-{color}/40', use: 'The single primary CTA in a view (brand accent, used once)', cls: 'shadow-lg shadow-cta-500/40' },
]

// Card variants — the border lives on the bordered variants (see app.config.ts).
const cardVariants = [
  { variant: 'outline', use: 'Default — white + hairline ring (the Flat card)', dark: false },
  { variant: 'subtle', use: 'Tinted fill + ring — nested / secondary cards', dark: false },
  { variant: 'soft', use: 'Tinted fill, no ring — quiet grouping', dark: false },
  { variant: 'solid', use: 'Dark filled panel, no ring — highlighted card', dark: true },
] as const

const breakpoints = [
  { name: 'sm', value: '640px' },
  { name: 'md', value: '768px' },
  { name: 'lg', value: '1024px' },
  { name: 'xl', value: '1280px' },
  { name: '2xl', value: '1536px' },
]

// Heading scale — tag is styled automatically by the base layer (main.css).
// Pick the TAG by document position; size/weight follow. `use` = where each fits.
const headings = [
  { tag: 'h1', spec: '36→60px · 900', use: 'Hero / page title — one per page' },
  { tag: 'h2', spec: '30→48px · 900', use: 'Section heading (UPageSection title)' },
  { tag: 'h3', spec: '24→30px · 800', use: 'Sub-section / prominent feature heading' },
  { tag: 'h4', spec: '18px · 700', use: 'Card title in a grid' },
  { tag: 'h5', spec: '16px · 700', use: 'Minor heading inside a block' },
  { tag: 'h6', spec: '14px · 700 · uppercase', use: 'Headline / label / footer column heading' },
]

const cardUi = { root: 'bg-default ring ring-default', body: 'p-7' }
const listCardUi = { root: 'bg-default ring ring-default divide-y divide-default', body: 'p-0' }

const form = reactive({ name: '', service: '', message: '', terms: false, contact: 'phone' })
const serviceItems = ['General enquiry', 'Service one', 'Service two', 'Service three']
const contactItems = [
  { label: 'By phone', value: 'phone' },
  { label: 'By email', value: 'email' },
]
</script>

<template>
  <div class="min-h-screen bg-muted">
    <UContainer class="max-w-4xl py-16">

      <UPageHeader
        title="Design System"
        :ui="{
          root: 'pb-8 mb-8 border-b border-default',
          title: 'text-4xl sm:text-5xl font-black',
          description: 'max-w-xl',
        }"
      >
        <template #headline>
          <UBadge label="Design System" color="primary" variant="subtle" size="sm" />
        </template>
        <template #description>
          The fixed visual language for this template. Use only these tokens and components —
          everything is defined once in <code class="text-primary">main.css</code> and
          <code class="text-primary">app.config.ts</code>.
        </template>
      </UPageHeader>

      <UTabs :items="tabs" variant="pill" color="primary" class="w-full" :ui="{ list: 'mb-8' }">

        <template #foundations>
          <div class="space-y-10">
            <section>
              <h2 class="text-xl font-extrabold mb-4">Font family</h2>
              <div class="grid gap-6 sm:grid-cols-2">
                <UCard :ui="cardUi">
                  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-4">Display · Poppins</p>
                  <p class="font-display text-5xl font-black leading-none">Aa Bb Cc</p>
                  <p class="font-display text-base text-dimmed mt-3 leading-relaxed">
                    ABCDEFGHIJKLM<br>abcdefghijklm 0123456789
                  </p>
                  <p class="text-sm text-muted mt-4">Headings, buttons, labels, navigation.</p>
                </UCard>
                <UCard :ui="cardUi">
                  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-4">Body · Nunito Sans <span class="text-dimmed normal-case tracking-normal">(font-sans · default)</span></p>
                  <p class="font-sans text-5xl font-bold leading-none">Aa Bb Cc</p>
                  <p class="font-sans text-base text-dimmed mt-3 leading-relaxed">
                    ABCDEFGHIJKLM<br>abcdefghijklm 0123456789
                  </p>
                  <p class="text-sm text-muted mt-4">Body copy, descriptions, form text.</p>
                </UCard>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Headings — h1 to h6</h2>
              <UCard :ui="listCardUi">
                <div v-for="h in headings" :key="h.tag" class="flex flex-col gap-2 px-7 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <component :is="h.tag" class="leading-tight!">The quick brown fox</component>
                  <span class="shrink-0 text-right">
                    <span class="font-mono text-xs text-dimmed">{{ h.tag }} · {{ h.spec }}</span>
                    <span class="block text-sm text-muted">{{ h.use }}</span>
                  </span>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Body default text</h2>
              <UCard :ui="cardUi">
                <p class="text-base text-toned max-w-prose">
                  This is the default body paragraph. Nunito Sans at 16px with relaxed line-height carries
                  descriptions, service copy and longer-form content. Keep paragraphs readable with a
                  <code class="text-primary">max-w-prose</code> measure.
                </p>
                <p class="text-sm text-muted mt-4 max-w-prose">
                  Small text — 14px — for captions, hints and secondary detail.
                </p>
                <p class="mt-4 text-xs font-mono text-dimmed">base 16px · sm 14px · xs 12px</p>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Text color — neutral ladder (ALL normal text)</h2>
              <p class="text-sm text-muted mb-4 max-w-prose">
                The default for <strong>every</strong> piece of normal text — headings, paragraphs, descriptions, captions. Use only these for body/running copy.
              </p>
              <UCard :ui="listCardUi">
                <div v-for="t in textColors" :key="t.token" class="flex items-baseline justify-between gap-6 px-7 py-4">
                  <span :class="t.token" class="text-base font-semibold">{{ t.token }}</span>
                  <span class="shrink-0 text-sm text-muted">{{ t.use }}</span>
                </div>
              </UCard>
              <div class="mt-4 rounded-xl bg-primary-950 p-6">
                <div class="text-inverted">text-inverted — full-strength on dark</div>
                <div class="mt-1 text-toned-inverted">text-toned-inverted — high-emphasis</div>
                <div class="mt-1 text-muted-inverted">text-muted-inverted — secondary</div>
                <div class="mt-1 text-dimmed-inverted">text-dimmed-inverted — least prominent</div>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Brand accents — EXTRA, accent-only</h2>
              <p class="text-sm text-muted mb-4 max-w-prose">
                <strong>Never</strong> for body copy — a brand-colored highlight, stat, or accent label only. Pairs with the <code class="rounded bg-elevated px-1 font-mono text-xs">bg-*-soft/muted/solid</code> fills. <code class="rounded bg-elevated px-1 font-mono text-xs">text-primary-muted</code> is muted brand-blue, NOT a neutral gray.
              </p>
              <UCard :ui="listCardUi">
                <div v-for="t in brandText" :key="t.token" class="flex items-baseline justify-between gap-6 px-7 py-4">
                  <span :class="t.token" class="text-base font-display font-bold">{{ t.token }}</span>
                  <span class="shrink-0 text-sm text-muted">{{ t.use }}</span>
                </div>
              </UCard>
              <div class="mt-4 rounded-xl bg-primary-950 p-6 flex flex-wrap gap-x-6 gap-y-2 font-display font-bold">
                <span class="text-primary-soft-inverted">primary-soft</span>
                <span class="text-primary-muted-inverted">primary-muted</span>
                <span class="text-primary-solid-inverted">primary-solid</span>
                <span class="text-cta-soft-inverted">cta-soft</span>
                <span class="text-cta-muted-inverted">cta-muted</span>
                <span class="text-cta-solid-inverted">cta-solid</span>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Surfaces — neutral ladder</h2>
              <p class="text-sm text-muted mb-4 max-w-prose">
                Nuxt UI's built-in background tokens (map to the neutral scale). Use these for plain surfaces — never raw <code class="rounded bg-elevated px-1 font-mono text-xs">bg-neutral-*</code>.
              </p>
              <UCard :ui="listCardUi">
                <div v-for="s in neutralSurfaces" :key="s.token" class="flex items-center gap-5 px-7 py-3">
                  <div class="size-10 shrink-0 rounded-md" :class="s.sw" />
                  <span class="w-40 shrink-0 font-mono text-sm font-semibold">{{ s.token }}</span>
                  <span class="text-sm text-muted">{{ s.use }}</span>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Surfaces — brand tints</h2>
              <p class="text-sm text-muted mb-4 max-w-prose">
                Soft brand-colored fills, picked by role. Nuxt UI ships no soft brand surfaces, so these are <code class="rounded bg-elevated px-1 font-mono text-xs">@utility</code> classes in <code class="rounded bg-elevated px-1 font-mono text-xs">main.css</code> (source of truth). Use instead of raw <code class="rounded bg-elevated px-1 font-mono text-xs">bg-primary-50</code> / <code class="rounded bg-elevated px-1 font-mono text-xs">bg-primary/15</code>. The same set exists for <code class="rounded bg-elevated px-1 font-mono text-xs">cta</code>. Decorative blur-blob glows stay raw — they're tuned by eye, not surfaces.
              </p>
              <UCard :ui="listCardUi">
                <div v-for="s in brandSurfaces" :key="s.token" class="flex items-center gap-5 px-7 py-3" :class="s.dark ? 'bg-primary-950' : ''">
                  <div class="size-10 shrink-0 rounded-md" :class="[s.sw, s.solid || s.dark ? '' : 'ring ring-default']" />
                  <span class="w-44 shrink-0 font-mono text-sm font-semibold" :class="s.dark ? 'text-inverted' : ''">{{ s.token }}</span>
                  <span class="text-sm" :class="s.dark ? 'text-inverted/65' : 'text-muted'">{{ s.use }}</span>
                </div>
              </UCard>
            </section>
          </div>
        </template>

        <template #layout>
          <div class="space-y-10">
            <section>
              <h2 class="text-xl font-extrabold mb-4">Spacing</h2>
              <UCard :ui="cardUi">
                <div class="space-y-5">
                  <div v-for="s in spacing" :key="s.role" class="flex items-center gap-5">
                    <div class="h-4 bg-primary rounded-sm shrink-0" :style="{ width: s.w }" />
                    <div class="flex-1 min-w-0">
                      <span class="font-display font-bold text-highlighted">{{ s.role }}</span>
                      <span class="font-mono text-sm text-muted"> · {{ s.name }}</span>
                      <span class="text-sm text-dimmed"> · {{ s.value }}</span>
                      <p class="text-sm text-muted">{{ s.use }}</p>
                    </div>
                  </div>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Breakpoints</h2>
              <UCard :ui="listCardUi">
                <div v-for="b in breakpoints" :key="b.name" class="flex items-center justify-between px-7 py-4">
                  <span class="font-display font-bold text-highlighted">{{ b.name }}</span>
                  <span class="font-mono text-sm text-dimmed">≥ {{ b.value }}</span>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Border radius</h2>
              <UCard :ui="cardUi">
                <div class="space-y-5">
                  <div v-for="r in radii" :key="r.role" class="flex items-center gap-5">
                    <div class="size-12 bg-primary-muted ring-2 ring-primary-200 shrink-0" :style="{ borderRadius: r.r }" />
                    <div>
                      <span class="font-display font-bold text-highlighted">{{ r.role }}</span>
                      <span class="font-mono text-sm text-muted"> · {{ r.name }}</span>
                      <span class="text-sm text-dimmed"> · {{ r.value }}</span>
                      <p class="text-sm text-muted">{{ r.use }}</p>
                    </div>
                  </div>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Shadows — elevation roles</h2>
              <div class="grid gap-6 rounded-xl bg-elevated p-6 sm:grid-cols-2 lg:grid-cols-3">
                <UCard v-for="s in shadows" :key="s.role" :ui="{ root: `bg-default ${s.cls}`, body: 'p-6 text-center' }">
                  <p class="font-display font-bold text-highlighted">{{ s.role }}</p>
                  <p class="font-mono text-xs text-muted mt-1">{{ s.name }}</p>
                  <p class="text-sm text-muted mt-2">{{ s.use }}</p>
                </UCard>
              </div>
            </section>
          </div>
        </template>

        <template #buttons>
          <UCard :ui="cardUi">
            <div class="space-y-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-dimmed mb-3">Primary</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UButton label="Solid" color="primary" />
                  <UButton label="Outline" color="primary" variant="outline" />
                  <UButton label="Ghost" color="primary" variant="ghost" />
                  <UButton label="Link" color="primary" variant="link" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-dimmed mb-3">CTA</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UButton label="Solid" color="cta" />
                  <UButton label="Outline" color="cta" variant="outline" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-dimmed mb-3">Sizes</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UButton label="sm" color="primary" size="sm" />
                  <UButton label="md" color="primary" size="md" />
                  <UButton label="lg" color="primary" size="lg" />
                  <UButton label="xl" color="primary" size="xl" />
                  <UButton label="Icon" color="primary" trailing-icon="i-fa6-solid-arrow-right" />
                  <UButton color="primary" icon="i-fa6-solid-phone" square aria-label="Call" />
                </div>
              </div>
            </div>
          </UCard>
        </template>

        <template #cards>
          <section>
            <h2 class="text-xl font-extrabold mb-4">Which component — UPageCard vs UCard</h2>
            <p class="text-sm text-muted mb-6 max-w-prose">
              <strong>UPageCard is the default for all marketing content</strong> — any card that
              presents an item (service, benefit, review, featured panel, CTA box), in a grid or
              standalone. Use its props (<code class="text-primary">title</code> /
              <code class="text-primary">description</code> / <code class="text-primary">icon</code>)
              when content maps to them; use its slots (<code class="text-primary">#header</code>,
              <code class="text-primary">#footer</code>, <code class="text-primary">#leading</code>,
              and the <strong>default slot</strong> for the body) for custom markup. Its inner-padding
              <code class="text-primary">:ui</code> key is <code class="text-primary">container</code>
              (not <code class="text-primary">body</code>). <strong>UCard</strong> is reserved for a
              <em>bare container</em> with no title/description of its own — e.g.
              <code class="text-primary">&lt;UCard&gt;&lt;QuoteForm/&gt;&lt;/UCard&gt;</code> in the hero.
              Card titles are all the <code class="text-primary">h4</code> shape and descriptions are all
              <code class="text-primary">text-[15px] text-muted</code> (set once via
              <code class="text-primary">pageCard.title</code> / <code class="text-primary">.description</code> —
              don't restyle them per component; dark <code class="text-primary">solid</code> cards only
              override the description <em>color</em> to <code class="text-primary">text-muted-inverted</code>).
            </p>
            <h2 class="text-xl font-extrabold mb-4">Card variants</h2>
            <p class="text-sm text-muted mb-6 max-w-prose">
              Pick a <code class="text-primary">variant</code> — the border lives on the bordered
              variants (<code class="text-primary">outline</code>, <code class="text-primary">subtle</code>),
              not on every card. Radius is the Card role (<code class="text-primary">rounded-xl</code>),
              padding is <code class="text-primary">p-5 sm:p-6</code> (global default, same on UCard & UPageCard — don't override per card).
            </p>
            <div class="grid gap-6 rounded-xl bg-elevated p-6 sm:grid-cols-2">
              <UCard
                v-for="c in cardVariants"
                :key="c.variant"
                :variant="c.variant"
                :ui="{ body: 'p-6' }"
              >
                <p class="font-display font-bold" :class="c.dark ? 'text-inverted' : 'text-highlighted'">
                  variant="{{ c.variant }}"
                </p>
                <p class="mt-1 text-sm" :class="c.dark ? 'text-inverted/60' : 'text-muted'">
                  {{ c.use }}
                </p>
              </UCard>
            </div>
          </section>

          <section class="mt-10">
            <h2 class="text-xl font-extrabold mb-4">Hover — lift is opt-in (interactive cards only)</h2>
            <p class="text-sm text-muted mb-6 max-w-prose">
              Cards are <strong>flat by default</strong>. Add the <code class="text-primary">.lift</code> class
              only to cards that link / have an action (service cards). Informational cards (reviews, the
              quote-form panel) stay flat. <span class="text-dimmed">Hover the cards below.</span>
            </p>
            <div class="grid gap-6 sm:grid-cols-2">
              <UCard class="lift" :ui="{ body: 'p-6' }">
                <div class="font-display font-bold text-highlighted">Interactive — <code class="text-primary">.lift</code></div>
                <p class="mt-1 text-sm text-muted">Rises + shadow-xl on hover. Use on linked/clickable cards.</p>
              </UCard>
              <UCard :ui="{ body: 'p-6' }">
                <div class="font-display font-bold text-highlighted">Static — no lift</div>
                <p class="mt-1 text-sm text-muted">Flat, ring only. The default for informational cards.</p>
              </UCard>
            </div>
          </section>
        </template>

        <template #surfaces>
          <section>
            <h2 class="text-xl font-extrabold mb-4">Light vs dark — the brand ladder in context</h2>
            <p class="text-sm text-muted mb-6 max-w-prose">
              The same elements on a light surface and a dark one. On dark, the brand ladder gets the
              <code class="text-primary">-inverted</code> suffix and text uses the white-alpha tiers
              (<code class="text-primary">text-toned/muted/dimmed-inverted</code>). Tiles are
              <code class="text-primary">&lt;IconTile&gt;</code> (add <code class="text-primary">inverted</code> on dark).
            </p>
            <div class="grid gap-6 lg:grid-cols-2">
              <!-- LIGHT -->
              <div class="rounded-2xl bg-default p-8 ring-1 ring-default">
                <div class="font-display text-xs font-bold uppercase tracking-widest text-primary">Light surface</div>

                <div class="mt-6 text-xs font-bold uppercase tracking-wider text-muted">IconTile · soft / muted / solid</div>
                <div class="mt-3 space-y-3">
                  <div class="flex items-center gap-3">
                    <IconTile icon="i-fa6-solid-bolt" tone="primary" variant="soft" />
                    <IconTile icon="i-fa6-solid-bolt" tone="primary" variant="muted" />
                    <IconTile icon="i-fa6-solid-bolt" tone="primary" variant="solid" />
                    <span class="text-sm text-muted">primary</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <IconTile icon="i-fa6-solid-star" tone="cta" variant="soft" />
                    <IconTile icon="i-fa6-solid-star" tone="cta" variant="muted" />
                    <IconTile icon="i-fa6-solid-star" tone="cta" variant="solid" />
                    <span class="text-sm text-muted">cta</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <IconTile icon="i-fa6-solid-shield-halved" tone="neutral" />
                    <span class="text-sm text-muted">neutral</span>
                  </div>
                </div>

                <div class="mt-8 text-xs font-bold uppercase tracking-wider text-muted">brand text · soft / muted / solid</div>
                <div class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-display font-bold">
                  <span class="text-primary-soft">primary-soft</span>
                  <span class="text-primary-muted">primary-muted</span>
                  <span class="text-primary">primary</span>
                  <span class="text-cta-soft">cta-soft</span>
                  <span class="text-cta-muted">cta-muted</span>
                  <span class="text-cta">cta</span>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-default pt-5">
                  <span class="text-highlighted font-display font-bold">highlighted</span>
                  <span class="text-toned">toned</span>
                  <span class="text-muted">muted</span>
                  <span class="text-dimmed">dimmed</span>
                </div>
              </div>

              <!-- DARK — identical structure, -inverted tokens -->
              <div class="rounded-2xl bg-primary-950 p-8 ring-1 ring-soft-inverted">
                <div class="font-display text-xs font-bold uppercase tracking-widest text-primary-300">Dark surface</div>

                <div class="mt-6 text-xs font-bold uppercase tracking-wider text-muted-inverted">IconTile · soft / muted / solid</div>
                <div class="mt-3 space-y-3">
                  <div class="flex items-center gap-3">
                    <IconTile icon="i-fa6-solid-bolt" tone="primary" variant="soft" inverted />
                    <IconTile icon="i-fa6-solid-bolt" tone="primary" variant="muted" inverted />
                    <IconTile icon="i-fa6-solid-bolt" tone="primary" variant="solid" inverted />
                    <span class="text-sm text-muted-inverted">primary</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <IconTile icon="i-fa6-solid-star" tone="cta" variant="soft" inverted />
                    <IconTile icon="i-fa6-solid-star" tone="cta" variant="muted" inverted />
                    <IconTile icon="i-fa6-solid-star" tone="cta" variant="solid" inverted />
                    <span class="text-sm text-muted-inverted">cta</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <IconTile icon="i-fa6-solid-shield-halved" tone="neutral" inverted />
                    <span class="text-sm text-muted-inverted">neutral</span>
                  </div>
                </div>

                <div class="mt-8 text-xs font-bold uppercase tracking-wider text-muted-inverted">brand text · soft / muted / solid</div>
                <div class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-display font-bold">
                  <span class="text-primary-soft-inverted">primary-soft</span>
                  <span class="text-primary-muted-inverted">primary-muted</span>
                  <span class="text-primary-solid-inverted">primary-solid</span>
                  <span class="text-cta-soft-inverted">cta-soft</span>
                  <span class="text-cta-muted-inverted">cta-muted</span>
                  <span class="text-cta-solid-inverted">cta-solid</span>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-soft-inverted pt-5">
                  <span class="text-inverted font-display font-bold">highlighted</span>
                  <span class="text-toned-inverted">toned</span>
                  <span class="text-muted-inverted">muted</span>
                  <span class="text-dimmed-inverted">dimmed</span>
                </div>
              </div>
            </div>
          </section>
        </template>

        <template #badges>
          <UCard :ui="cardUi">
            <div class="space-y-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-dimmed mb-3">Variants</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UBadge label="Solid" color="primary" variant="solid" />
                  <UBadge label="Soft" color="primary" variant="soft" />
                  <UBadge label="Subtle" color="primary" variant="subtle" />
                  <span class="w-px self-stretch bg-accented" />
                  <UBadge label="Solid" color="neutral" variant="solid" />
                  <UBadge label="Soft" color="neutral" variant="soft" />
                  <UBadge label="Subtle" color="neutral" variant="subtle" />
                  <span class="w-px self-stretch bg-accented" />
                  <UBadge label="With icon" color="primary" variant="subtle" leading-icon="i-fa6-solid-check" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-dimmed mb-3">Sizes</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UBadge label="xs" color="primary" variant="subtle" size="xs" />
                  <UBadge label="sm" color="primary" variant="subtle" size="sm" />
                  <UBadge label="md" color="primary" variant="subtle" size="md" />
                  <UBadge label="lg" color="primary" variant="subtle" size="lg" />
                </div>
              </div>
            </div>
          </UCard>
        </template>

        <template #forms>
          <UCard :ui="cardUi">
            <UForm :state="form" class="grid gap-12 sm:grid-cols-2">
              <UFormField name="name" label="Input" class="sm:col-span-1">
                <UInput v-model="form.name" placeholder="Jane Citizen" icon="i-fa6-solid-user" />
              </UFormField>

              <UFormField name="service" label="Select" class="sm:col-span-1">
                <USelect v-model="form.service" :items="serviceItems" placeholder="Choose a service…" />
              </UFormField>

              <UFormField name="message" label="Textarea" class="sm:col-span-2">
                <UTextarea v-model="form.message" :rows="3" placeholder="Tell us what you need…" />
              </UFormField>

              <UFormField name="contact" label="Radio group" class="sm:col-span-1">
                <URadioGroup v-model="form.contact" :items="contactItems" />
              </UFormField>

              <UFormField name="terms" label="Checkbox" class="sm:col-span-1">
                <UCheckbox v-model="form.terms" label="I agree to be contacted" />
              </UFormField>
            </UForm>
          </UCard>
        </template>

      </UTabs>

    </UContainer>
  </div>
</template>
