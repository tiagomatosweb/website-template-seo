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
        <UiBackdrop :src="props.bgImage" />
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
      <UiTrustList1
        :items="trustList1"
        :icon="{ inverted: !!props.bgImage }"
        :ui="props.bgImage ? { label: 'text-inverted' } : undefined"
      />
    </template>

    <UCard
      id="contact"
      as="aside"
      :ui="{
        root: 'w-full max-w-[min(440px,100%)] mx-auto lg:ml-auto lg:mr-0 bg-default shadow-sm',
      }"
    >
      <UiQuoteForm :title="props.formTitle" :description="props.formDescription" />
    </UCard>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { site } = useAppConfig()

const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  bgImage?: string
  overlayHeader?: boolean
  cta?: ButtonProps
  formTitle?: string
  formDescription?: string
}>()

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
