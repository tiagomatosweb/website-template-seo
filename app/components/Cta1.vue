<template>
  <UPageCTA
    variant="naked"
    :title="title"
    :description="description"
    :links="mergedLinks"
    :ui="{
      root: 'rounded-none isolate',
      title: 'text-white text-3xl sm:text-4xl lg:text-5xl font-black',
      description: 'text-white/80 max-w-2xl mx-auto',
    }"
  >
    <template #top>
      <div class="absolute inset-0 -z-10">
        <div
          v-if="bgImage"
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${bgImage})` }"
        />
        <div
          v-else
          class="absolute inset-0 bg-primary-900 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--color-primary-700),transparent)]"
        />
        <div
          class="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary-950)_90%,transparent)_0%,color-mix(in_srgb,var(--color-primary-950)_70%,transparent)_100%)]"
        />
      </div>
    </template>
  </UPageCTA>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  bgImage?: string
  primaryCta?: ButtonProps
  secondaryCta?: ButtonProps
}>(), {
  title: 'Ready to get started?',
  description: 'Tell us what you need and one of our specialists will get back to you with a free, no-obligation quote.',
  bgImage: '',
  primaryCta: () => ({}),
  secondaryCta: () => ({}),
})

const defaultPrimaryCta: ButtonProps = { label: 'Get a Free Quote', color: 'cta', size: 'xl', trailingIcon: 'i-fa6-solid-arrow-right', to: '#contact', class: 'w-full sm:w-auto justify-center' }
const defaultSecondaryCta: ButtonProps = { label: 'Call Now', color: 'neutral', variant: 'outline', size: 'xl', icon: 'i-fa6-solid-phone', to: 'tel:0000000000', class: 'text-white ring-white/25 w-full sm:w-auto justify-center' }

const mergedLinks = computed<ButtonProps[]>(() => [
  { ...defaultPrimaryCta, ...props.primaryCta },
  { ...defaultSecondaryCta, ...props.secondaryCta },
])
</script>
