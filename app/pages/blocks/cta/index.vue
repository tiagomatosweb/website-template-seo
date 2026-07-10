<script setup lang="ts">
import ctaBg from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'CTA — variants',
  robots: 'noindex, nofollow',
})

const title = 'Ready to grow your pipeline?'
const description = 'Tell us your goals and a senior marketer will get back to you with a free, no-obligation growth plan.'
const primaryCta = { label: 'Get Your Free Growth Plan' }
const invertedUi = { title: 'text-inverted', description: 'text-toned-inverted' }
const invertedSecondary = { class: 'text-inverted ring-white/25 w-full sm:w-auto justify-center' }
</script>

<template>
  <div>
    <!-- ── variant-driven surfaces (no image) ── -->
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      variant="naked" — plain / transparent (dark text)
    </div>
    <SectionsCta1 :title="title" :description="description" :primary-cta="primaryCta" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      variant="soft" — grey surface (dark text)
    </div>
    <SectionsCta1 variant="soft" :title="title" :description="description" :primary-cta="primaryCta" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      variant="solid" — dark surface (parent sets inverted text)
    </div>
    <SectionsCta1
      variant="solid"
      :title="title"
      :description="description"
      :ui="invertedUi"
      :primary-cta="primaryCta"
      :secondary-cta="invertedSecondary"
    />

    <!-- ── backdrop: default vignette ── -->
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      backdrop — default vignette, neutral
    </div>
    <SectionsCta1 :title="title" :description="description" :ui="invertedUi" :primary-cta="primaryCta" :secondary-cta="invertedSecondary">
      <template #top>
        <UiBackdrop :src="ctaBg" />
      </template>
    </SectionsCta1>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      backdrop — default vignette, color="primary" (brand-tinted)
    </div>
    <SectionsCta1 :title="title" :description="description" :ui="invertedUi" :primary-cta="primaryCta" :secondary-cta="invertedSecondary">
      <template #top>
        <UiBackdrop :src="ctaBg" color="primary" />
      </template>
    </SectionsCta1>

  </div>
</template>
