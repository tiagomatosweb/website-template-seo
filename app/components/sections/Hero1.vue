<template>
  <div :class="props.overlayHeader ? 'relative' : ''">
    <SiteHeader v-if="props.overlayHeader" overlay />

    <UPageHero
      orientation="horizontal"
      :links="links"
      :ui="props.bgImage ? {
        root: 'relative isolate',
        container: props.overlayHeader ? 'pt-32 lg:pt-40' : '',
        headline: 'text-primary-300',
        title: 'text-inverted',
        description: 'text-toned-inverted',
      } : undefined"
    >
      <template v-if="props.bgImage" #top>
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${props.bgImage})` }" />
          <div class="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-neutral-950)_92%,transparent)_0%,color-mix(in_srgb,var(--color-neutral-950)_72%,transparent)_100%)]" />
        </div>
      </template>

    <template #headline>
      <slot name="headline">{{ props.headline }}</slot>
    </template>

    <template #title>
      <slot name="title">{{ props.title }}</slot>
    </template>

    <template #description>
      <slot name="description">{{ props.description }}</slot>
    </template>

    <template #body>
      <UiProofList :inverted="!!props.bgImage" />
    </template>

    <UCard
      id="contact"
      as="aside"
      :ui="{
        root: 'w-full max-w-[min(440px,100%)] mx-auto lg:ml-auto lg:mr-0 bg-default shadow-sm',
      }"
    >
      <UiQuoteForm :title="props.formTitle" :subtitle="props.formSubtitle" />
    </UCard>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { site } = useAppConfig()

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  bgImage?: string
  overlayHeader?: boolean
  cta?: ButtonProps
  formTitle?: string
  formSubtitle?: string
}>(), {
  headline: 'Local · Trusted · Reliable',
  bgImage: '',
  overlayHeader: false,
  title: 'A headline that says exactly what you do',
  description: 'One or two sentences that explain the service, the area you cover, and why customers should choose you over the competition.',
  cta: () => ({}),
  formTitle: 'Get Your Free Quote',
  formSubtitle: 'Tell us what you need and one of our specialists will get in touch.',
})

const defaultCta = computed<ButtonProps>(() => ({
  label: 'Call Now',
  icon: 'i-fa6-solid-phone',
  to: site.phone.href,
  variant: 'outline',
  ...(props.bgImage
    ? { color: 'neutral', class: 'text-inverted ring-white/25 hover:bg-surface-soft-inverted' }
    : { color: 'primary' }),
}))

const links = computed<ButtonProps[]>(() => [
  { ...defaultCta.value, ...props.cta },
])
</script>
