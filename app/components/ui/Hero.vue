<template>
  <div :class="props.overlayHeader ? 'relative' : ''">
    <SiteHeader v-if="props.overlayHeader" overlay />

    <UPageHero
      orientation="horizontal"
      :headline="props.headline"
      :title="props.title"
      :description="props.description"
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
      <template v-if="$slots.top || props.bgImage" #top>
        <slot name="top">
          <UiBackdrop v-if="props.bgImage" :src="props.bgImage" :color="props.bgColor" />
        </slot>
      </template>

      <template v-for="name in forwardedSlots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps ?? {}" />
      </template>

      <slot>
        <UCard
          id="contact"
          as="aside"
          :ui="{
            root: 'w-full max-w-none sm:max-w-[400px] lg:max-w-none mx-auto bg-default shadow-xl',
          }"
        >
          <UiQuoteForm v-bind="props.quote" />
        </UCard>
      </slot>
    </UPageHero>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import type { QuoteFormProps } from './QuoteForm.vue'

const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  bgImage?: string
  bgColor?: 'neutral' | 'primary'
  overlayHeader?: boolean
  cta?: ButtonProps
  quote?: QuoteFormProps
}>()

const slots = useSlots()
const forwardedSlots = computed(() =>
  Object.keys(slots).filter(name => !['top', 'default'].includes(name)),
)

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
