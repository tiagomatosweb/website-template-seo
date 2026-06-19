<template>
  <div :class="overlayHeader ? 'relative' : ''">
    <SiteHeader v-if="overlayHeader" overlay />

    <UPageHero
      orientation="horizontal"
      :links="links"
      :ui="bgImage ? {
        root: 'relative isolate',
        container: overlayHeader ? 'pt-32 lg:pt-40' : '',
        headline: 'text-primary-300',
        title: 'text-white',
        description: 'text-white/80',
      } : undefined"
    >
      <template v-if="bgImage" #top>
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${bgImage})` }" />
          <div class="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-primary-950)_92%,transparent)_0%,color-mix(in_srgb,var(--color-primary-950)_72%,transparent)_100%)]" />
        </div>
      </template>

    <template #headline>
      <slot name="headline">{{ eyebrow }}</slot>
    </template>

    <template #title>
      <slot name="title">{{ title }}</slot>
    </template>

    <template #description>
      <slot name="description">{{ description }}</slot>
    </template>

    <template #body>
      <ProofList :inverted="!!bgImage" />
    </template>

    <UCard
      id="contact"
      as="aside"
      :ui="{
        root: 'w-full max-w-[min(440px,100%)] mx-auto lg:ml-auto lg:mr-0 bg-white shadow-md ring-1 ring-neutral-900/5',
        body: 'p-6 sm:p-8',
      }"
    >
      <div class="mb-6 text-center">
        <h2 class="font-display font-black text-2xl leading-none text-neutral-900">{{ formTitle }}</h2>
        <p class="mt-2.5 text-sm leading-snug text-neutral-500">{{ formSubtitle }}</p>
      </div>

      <QuoteForm />
    </UCard>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const props = withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  description?: string
  bgImage?: string
  overlayHeader?: boolean
  primaryCta?: ButtonProps
  secondaryCta?: ButtonProps
  formTitle?: string
  formSubtitle?: string
}>(), {
  eyebrow: 'Local · Trusted · Reliable',
  bgImage: '',
  overlayHeader: false,
  title: 'A headline that says exactly what you do',
  description: 'One or two sentences that explain the service, the area you cover, and why customers should choose you over the competition.',
  primaryCta: () => ({}),
  secondaryCta: () => ({}),
  formTitle: 'Get Your Free Quote',
  formSubtitle: 'Tell us what you need and one of our specialists will get in touch.',
})

const defaultPrimaryCta: ButtonProps = { label: 'Get a Free Quote', color: 'cta', size: 'xl', to: '#contact' }

const defaultSecondaryCta = computed<ButtonProps>(() => ({
  label: 'View Services',
  size: 'xl',
  to: '/services',
  variant: 'outline',
  ...(props.bgImage
    ? { color: 'neutral', class: 'text-white ring-white/25 hover:bg-white/10' }
    : { color: 'primary' }),
}))

const links = computed<ButtonProps[]>(() => [
  { ...defaultPrimaryCta, ...props.primaryCta },
  { ...defaultSecondaryCta.value, ...props.secondaryCta },
])
</script>
