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
  { label: 'Badges', icon: 'i-fa6-solid-tag', slot: 'badges' },
  { label: 'Forms', icon: 'i-fa6-solid-list-check', slot: 'forms' },
]

const spacing = [
  { name: 'gap-6', value: '24px', use: 'Gutter — gaps between grid items', w: '24px' },
  { name: 'gap-12 / space-y-12', value: '48px', use: 'Block — vertical stacking inside a section', w: '48px' },
  { name: 'py-24', value: '96px', use: 'Section — padding between page sections', w: '96px' },
]

const radii = [
  { name: 'rounded-md', value: '6px', use: 'Buttons, inputs, tag badges', r: '6px' },
  { name: 'rounded-lg', value: '8px', use: 'Cards, panels', r: '8px' },
  { name: 'rounded-full', value: '9999px', use: 'Pills, badges, avatars', r: '9999px' },
]

const shadows = [
  { name: 'shadow-sm', use: 'Resting elevation — cards', cls: 'shadow-sm' },
  { name: 'shadow-md', use: 'Raised — popovers, floating cards, hover', cls: 'shadow-md' },
]

const breakpoints = [
  { name: 'sm', value: '640px' },
  { name: 'md', value: '768px' },
  { name: 'lg', value: '1024px' },
  { name: 'xl', value: '1280px' },
  { name: '2xl', value: '1536px' },
]

const headings = [
  { tag: 'h1', cls: 'text-5xl font-black', spec: '48px · 900' },
  { tag: 'h2', cls: 'text-4xl font-extrabold', spec: '36px · 800' },
  { tag: 'h3', cls: 'text-2xl font-bold', spec: '24px · 700' },
  { tag: 'h4', cls: 'text-xl font-bold', spec: '20px · 700' },
  { tag: 'h5', cls: 'text-lg font-semibold', spec: '18px · 600' },
  { tag: 'h6', cls: 'text-base font-semibold uppercase tracking-wide', spec: '16px · 600' },
]

const cardUi = { root: 'bg-white shadow-sm', body: 'p-7' }
const listCardUi = { root: 'bg-white shadow-sm divide-y divide-neutral-100', body: 'p-0' }

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
          root: 'pb-8 mb-8 border-b border-neutral-200',
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
                  <p class="font-display text-base text-neutral-400 mt-3 leading-relaxed">
                    ABCDEFGHIJKLM<br>abcdefghijklm 0123456789
                  </p>
                  <p class="text-sm text-neutral-500 mt-4">Headings, buttons, labels, navigation.</p>
                </UCard>
                <UCard :ui="cardUi">
                  <p class="text-xs font-bold uppercase tracking-widest text-primary mb-4">Body · Nunito Sans <span class="text-neutral-400 normal-case tracking-normal">(font-sans · default)</span></p>
                  <p class="font-sans text-5xl font-bold leading-none">Aa Bb Cc</p>
                  <p class="font-sans text-base text-neutral-400 mt-3 leading-relaxed">
                    ABCDEFGHIJKLM<br>abcdefghijklm 0123456789
                  </p>
                  <p class="text-sm text-neutral-500 mt-4">Body copy, descriptions, form text.</p>
                </UCard>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Headings — h1 to h6</h2>
              <UCard :ui="listCardUi">
                <div v-for="h in headings" :key="h.tag" class="flex items-baseline justify-between gap-6 px-7 py-5">
                  <component :is="h.tag" :class="h.cls">The quick brown fox</component>
                  <span class="shrink-0 font-mono text-xs text-neutral-400">{{ h.tag }} · {{ h.spec }}</span>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Body default text</h2>
              <UCard :ui="cardUi">
                <p class="text-base leading-relaxed text-neutral-600 max-w-prose">
                  This is the default body paragraph. Nunito Sans at 16px with relaxed line-height carries
                  descriptions, service copy and longer-form content. Keep paragraphs readable with a
                  <code class="text-primary">max-w-prose</code> measure.
                </p>
                <p class="text-sm leading-relaxed text-neutral-500 mt-4 max-w-prose">
                  Small text — 14px — for captions, hints and secondary detail.
                </p>
                <p class="mt-4 text-xs font-mono text-neutral-400">base 16px · sm 14px · xs 12px</p>
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
                  <div v-for="s in spacing" :key="s.name" class="flex items-center gap-5">
                    <div class="h-4 bg-primary rounded-sm shrink-0" :style="{ width: s.w }" />
                    <div class="flex-1 min-w-0">
                      <span class="font-mono text-sm text-neutral-700">{{ s.name }}</span>
                      <span class="text-sm text-neutral-400"> · {{ s.value }}</span>
                      <p class="text-sm text-neutral-500">{{ s.use }}</p>
                    </div>
                  </div>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Breakpoints</h2>
              <UCard :ui="listCardUi">
                <div v-for="b in breakpoints" :key="b.name" class="flex items-center justify-between px-7 py-4">
                  <span class="font-display font-bold text-neutral-800">{{ b.name }}</span>
                  <span class="font-mono text-sm text-neutral-400">≥ {{ b.value }}</span>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Border radius</h2>
              <UCard :ui="cardUi">
                <div class="space-y-5">
                  <div v-for="r in radii" :key="r.name" class="flex items-center gap-5">
                    <div class="size-12 bg-primary-100 ring-2 ring-primary-200 shrink-0" :style="{ borderRadius: r.r }" />
                    <div>
                      <span class="font-mono text-sm text-neutral-700">{{ r.name }}</span>
                      <span class="text-sm text-neutral-400"> · {{ r.value }}</span>
                      <p class="text-sm text-neutral-500">{{ r.use }}</p>
                    </div>
                  </div>
                </div>
              </UCard>
            </section>

            <section>
              <h2 class="text-xl font-extrabold mb-4">Shadows</h2>
              <div class="grid gap-6 sm:grid-cols-2">
                <UCard v-for="s in shadows" :key="s.name" :ui="{ root: `bg-white ${s.cls}`, body: 'p-7 text-center' }">
                  <p class="font-mono text-sm text-neutral-700">{{ s.name }}</p>
                  <p class="text-sm text-neutral-500 mt-2">{{ s.use }}</p>
                </UCard>
              </div>
            </section>
          </div>
        </template>

        <template #buttons>
          <UCard :ui="cardUi">
            <div class="space-y-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Primary</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UButton label="Solid" color="primary" />
                  <UButton label="Outline" color="primary" variant="outline" />
                  <UButton label="Ghost" color="primary" variant="ghost" />
                  <UButton label="Link" color="primary" variant="link" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">CTA</p>
                <div class="flex flex-wrap items-center gap-6">
                  <UButton label="Solid" color="cta" />
                  <UButton label="Outline" color="cta" variant="outline" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Sizes</p>
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

        <template #badges>
          <UCard :ui="cardUi">
            <div class="space-y-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Variants</p>
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
                <p class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Sizes</p>
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
