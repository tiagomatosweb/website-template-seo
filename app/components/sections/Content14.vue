<template>
  <UPageSection v-bind="sectionProps">
    <template v-if="headlineFn" #headline>
      <component :is="headlineFn" />
    </template>

    <template v-if="titleFn" #title>
      <component :is="titleFn" />
    </template>

    <template v-if="descriptionFn" #description>
      <component :is="descriptionFn" />
    </template>

    <template v-for="(_, name) in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>

    <template #body>
      <slot name="body-before" />
      <UiZigZag :items="props.items" :reverse="props.reverse" :ui="props.itemUi" />
      <slot name="body-after" />
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { ZigZagItem, ZigZagUi } from '../ui/ZigZag.vue'

const props = defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  items: RenderItem<ZigZagItem>[]
  reverse?: boolean
  itemUi?: ZigZagUi
}>()

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['items', 'reverse', 'itemUi'])
</script>
