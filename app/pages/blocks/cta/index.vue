<script setup lang="ts">
import ctaBg from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'CTA — variants',
  robots: 'noindex, nofollow',
})

const title = 'Ready to grow your pipeline?'
const description = 'Tell us your goals and a senior marketer will get back to you with a free, no-obligation growth plan.'

const primaryCta = quoteCta({ label: 'Get Your Free Growth Plan', size: 'xl', class: 'w-full sm:w-auto justify-center' })
const secondaryCta = callCta({ color: 'neutral', size: 'xl', class: 'w-full sm:w-auto justify-center' })
const invertedSecondaryCta = callCta({ size: 'xl', class: 'text-inverted ring-white/25 w-full sm:w-auto justify-center' })

const nakedUi = { root: 'rounded-none isolate', description: 'max-w-2xl mx-auto' }
const invertedUi = { root: 'rounded-none isolate', title: 'text-inverted', description: 'max-w-2xl mx-auto text-toned-inverted' }
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      variant="naked" — plain / transparent (dark text)
    </div>
    <UPageCTA
      variant="naked"
      :title="title"
      :description="description"
      :ui="nakedUi"
      :links="[primaryCta, secondaryCta]"
    />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      variant="soft" — grey surface (dark text)
    </div>
    <UPageCTA
      variant="soft"
      :title="title"
      :description="description"
      :ui="nakedUi"
      :links="[primaryCta, secondaryCta]"
    />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      variant="solid" — dark surface (inverted text)
    </div>
    <UPageCTA
      variant="solid"
      :title="title"
      :description="description"
      :ui="invertedUi"
      :links="[primaryCta, invertedSecondaryCta]"
    />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      backdrop — default vignette, neutral
    </div>
    <UPageCTA
      variant="naked"
      :title="title"
      :description="description"
      :ui="invertedUi"
      :links="[primaryCta, invertedSecondaryCta]"
    >
      <template #top>
        <UiBackdrop :src="ctaBg" />
      </template>
    </UPageCTA>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      backdrop — default vignette, color="primary" (brand-tinted)
    </div>
    <UPageCTA
      variant="naked"
      :title="title"
      :description="description"
      :ui="invertedUi"
      :links="[primaryCta, invertedSecondaryCta]"
    >
      <template #top>
        <UiBackdrop :src="ctaBg" color="primary" />
      </template>
    </UPageCTA>
  </div>
</template>
