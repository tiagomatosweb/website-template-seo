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
  { label: 'Badges', icon: 'i-fa6-solid-tag', slot: 'badges' },
  { label: 'Forms', icon: 'i-fa6-solid-list-check', slot: 'forms' },
]

// Text color — semantic tokens by prominence (never raw text-neutral-*).
const textColors = [
  { token: 'text-highlighted', use: 'Headings, emphasized words' },
  { token: 'text-default', use: 'Primary body text' },
  { token: 'text-toned', use: 'Standard description / paragraph copy' },
  { token: 'text-muted', use: 'Secondary — card descriptions, captions' },
  { token: 'text-dimmed', use: 'Least prominent — faint labels, empty-state icons' },
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

const cardUi = { root: 'bg-white ring ring-default', body: 'p-7' }
const listCardUi = { root: 'bg-white ring ring-default divide-y divide-default', body: 'p-0' }

const form = reactive({ name: '', service: '', message: '', terms: false, contact: 'phone' })
const serviceItems = ['General enquiry', 'Service one', 'Service two', 'Service three']
const contactItems = [
  { label: 'By phone', value: 'phone' },
  { label: 'By email', value: 'email' },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
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
              <h2 class="text-xl font-extrabold mb-4">Text color — by prominence</h2>
              <UCard :ui="listCardUi">
                <div v-for="t in textColors" :key="t.token" class="flex items-baseline justify-between gap-6 px-7 py-4">
                  <span :class="t.token" class="text-base font-semibold">{{ t.token }}</span>
                  <span class="shrink-0 text-sm text-muted">{{ t.use }}</span>
                </div>
              </UCard>
              <div class="mt-4 rounded-xl bg-primary-950 p-6">
                <div class="text-white">text-inverted / text-white — full-strength on dark</div>
                <div class="mt-1 text-white/80">text-white/80 — high-emphasis</div>
                <div class="mt-1 text-white/65">text-white/65 — secondary</div>
                <div class="mt-1 text-white/45">text-white/45 — muted</div>
              </div>
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
                    <div class="size-12 bg-primary-100 ring-2 ring-primary-200 shrink-0" :style="{ borderRadius: r.r }" />
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
              <div class="grid gap-6 rounded-xl bg-neutral-100 p-6 sm:grid-cols-2 lg:grid-cols-3">
                <UCard v-for="s in shadows" :key="s.role" :ui="{ root: `bg-white ${s.cls}`, body: 'p-6 text-center' }">
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
            <h2 class="text-xl font-extrabold mb-4">Card variants</h2>
            <p class="text-sm text-muted mb-6 max-w-prose">
              Pick a <code class="text-primary">variant</code> — the border lives on the bordered
              variants (<code class="text-primary">outline</code>, <code class="text-primary">subtle</code>),
              not on every card. Radius is the Card role (<code class="text-primary">rounded-xl</code>),
              padding is <code class="text-primary">p-5 sm:p-6</code> (global default, same on UCard & UPageCard — don't override per card).
            </p>
            <div class="grid gap-6 rounded-xl bg-neutral-100 p-6 sm:grid-cols-2">
              <UCard
                v-for="c in cardVariants"
                :key="c.variant"
                :variant="c.variant"
                :ui="{ body: 'p-6' }"
              >
                <p class="font-display font-bold" :class="c.dark ? 'text-white' : 'text-highlighted'">
                  variant="{{ c.variant }}"
                </p>
                <p class="mt-1 text-sm" :class="c.dark ? 'text-white/60' : 'text-muted'">
                  {{ c.use }}
                </p>
              </UCard>
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
                  <span class="w-px self-stretch bg-neutral-200" />
                  <UBadge label="Solid" color="neutral" variant="solid" />
                  <UBadge label="Soft" color="neutral" variant="soft" />
                  <UBadge label="Subtle" color="neutral" variant="subtle" />
                  <span class="w-px self-stretch bg-neutral-200" />
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
