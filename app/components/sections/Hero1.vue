<template>
  <div :class="props.overlayHeader ? 'relative' : ''">
    <SiteHeader v-if="props.overlayHeader" overlay />

    <UPageHero
      orientation="horizontal"
      :links="links"
      :ui="{
        container: [
          'lg:grid-cols-[1.6fr_1fr]',
          props.overlayHeader && props.bgImage ? 'pt-32 lg:pt-40' : '',
        ],
        ...(props.bgImage ? {
          root: 'relative isolate',
          headline: 'text-primary-300',
          title: 'text-inverted',
          description: 'text-toned-inverted',
        } : {}),
      }"
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
        root: 'w-full max-w-none sm:max-w-[400px] lg:max-w-none mx-auto bg-default shadow-sm',
      }"
    >
      <UiQuoteForm :title="props.formTitle" :description="props.formDescription" />
    </UCard>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

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

const defaultCta = computed<ButtonProps>(() => callCta({
  size: 'lg',
  ...(props.bgImage
    ? { color: 'white', variant: 'solid' }
    : { color: 'primary', variant: 'outline' }),
}))

const links = computed<ButtonProps[]>(() => [
  { ...defaultCta.value, ...props.cta },
])
</script>
