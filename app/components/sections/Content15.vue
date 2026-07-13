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
      <UiComparison :columns="columns" :ui="comparisonUi" />
      <slot name="body-after" />
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'
import type { ComparisonColumn, ComparisonUi } from '../ui/Comparison.vue'

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  columns: ComparisonColumn[]
  comparisonUi?: ComparisonUi
}>(), {
  ui: () => ({
    headline: 'justify-center',
    title: 'text-center',
    description: 'text-center',
    body: 'mx-auto w-full max-w-4xl',
    links: 'justify-center',
  }),
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['columns', 'comparisonUi'])
</script>
