<template>
  <UPageCTA
    :variant="props.variant ?? 'naked'"
    :title="titleText"
    :description="descriptionText"
    :links="links"
    :ui="ui"
  >
    <template v-if="titleFn" #title>
      <component :is="titleFn" />
    </template>

    <template v-if="descriptionFn" #description>
      <component :is="descriptionFn" />
    </template>

    <template v-for="(_, name) in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </UPageCTA>
</template>

<script setup lang="ts">
import { defu } from 'defu'
import type { ButtonProps, PageCTAProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'

// Thin UPageCTA passthrough. Colors and background are NOT inferred — the parent
// sets title/description via `ui`, button colors via `links` (or primaryCta/
// secondaryCta), and any background by filling the #top slot with <UiBackdrop>.
// This keeps the section controllable for any background/overlay a site needs.
const props = withDefaults(defineProps<Omit<PageCTAProps, 'title' | 'description'> & {
  title?: SectionText
  description?: SectionText
  primaryCta?: ButtonProps
  secondaryCta?: ButtonProps
}>(), {
  primaryCta: () => ({}),
  secondaryCta: () => ({}),
})

const titleFn = computed(() => (isRenderFn(props.title) ? props.title : undefined))
const descriptionFn = computed(() => (isRenderFn(props.description) ? props.description : undefined))
const titleText = computed(() => (isRenderFn(props.title) ? undefined : props.title))
const descriptionText = computed(() => (isRenderFn(props.description) ? undefined : props.description))

const ownSlots = new Set(['default', 'title', 'description'])
const slots = useSlots()
const forwardedSlots = computed(() =>
  Object.fromEntries(Object.entries(slots).filter(([name]) => !ownSlots.has(name))),
)

const ui = computed<PageCTAProps['ui']>(() => defu(props.ui, {
  root: 'rounded-none isolate',
  description: 'max-w-2xl mx-auto',
}))

const defaultPrimaryCta = quoteCta({ size: 'xl', class: 'w-full sm:w-auto justify-center' })
const defaultSecondaryCta = callCta({ color: 'neutral', size: 'xl', class: 'w-full sm:w-auto justify-center' })
const links = computed<ButtonProps[]>(() => props.links ?? [
  { ...defaultPrimaryCta, ...props.primaryCta },
  { ...defaultSecondaryCta, ...props.secondaryCta },
])
</script>
