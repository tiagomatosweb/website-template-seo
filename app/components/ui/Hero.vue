<template>
  <div :class="props.overlayHeader ? 'relative' : ''">
    <SiteHeader v-if="props.overlayHeader" overlay />

    <UPageHero
      orientation="horizontal"
      :headline="props.headline"
      :title="props.title"
      :description="props.description"
      :links="links"
      :ui="heroUi"
    >
      <template v-if="$slots.top || props.bgImage" #top>
        <slot name="top">
          <UiBackdrop v-if="props.bgImage" :src="props.bgImage" :color="props.bgColor" />
        </slot>
      </template>

      <template v-for="name in forwardedSlots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps ?? {}" />
      </template>

      <UiQuoteForm
        v-if="props.showQuote"
        id="contact"
        :card="{
          as: 'aside',
          ui: { root: 'w-full max-w-none sm:max-w-[400px] lg:max-w-none mx-auto bg-default shadow-xl' },
        }"
        v-bind="props.quote"
      />
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { ButtonProps } from '@nuxt/ui'
import type { QuoteFormProps } from './QuoteForm.vue'

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  bgImage?: string
  bgColor?: 'neutral' | 'primary'
  overlayHeader?: boolean
  showQuote?: boolean
  showLinks?: boolean
  cta?: ButtonProps
  quote?: QuoteFormProps
  ui?: Record<string, string>
}>(), {
  showQuote: true,
  showLinks: true,
})

const heroUi = computed(() => ({
  ...props.ui,
  container: twMerge(
    props.showQuote ? 'lg:grid-cols-[minmax(0,1fr)_26rem]' : 'lg:grid-cols-1',
    props.overlayHeader && props.bgImage ? 'pt-32 lg:pt-40' : '',
    props.ui?.container,
  ),
  title: twMerge(
    props.showQuote ? '' : 'max-w-3xl',
    props.bgImage ? 'text-inverted' : '',
    props.ui?.title,
  ),
  description: twMerge(
    props.showQuote ? '' : 'max-w-2xl',
    props.bgImage ? 'text-toned-inverted' : '',
    props.ui?.description,
  ),
  ...(props.bgImage ? {
    root: twMerge('relative isolate', props.ui?.root),
    headline: twMerge('text-primary-300', props.ui?.headline),
  } : {}),
}))

const slots = useSlots()
const forwardedSlots = computed(() =>
  Object.keys(slots).filter(name => !['top', 'default'].includes(name)),
)

const defaultCta = computed<ButtonProps>(() => callCta({
  size: 'lg',
  ...(props.bgImage
    ? { color: 'neutral', variant: 'solid', class: onDarkSolid }
    : { color: 'primary', variant: 'outline' }),
}))

const links = computed<ButtonProps[]>(() =>
  props.showLinks ? [{ ...defaultCta.value, ...props.cta }] : [],
)
</script>
