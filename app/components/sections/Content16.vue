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
      <UPageGrid :class="columnsClass">
        <template v-for="(item, i) in props.items" :key="i">
          <component :is="item" v-if="isRenderFn(item)" />
          <UiBeforeAfter v-else v-bind="item" :ui="{ ...props.itemUi, ...item.ui }" />
        </template>
      </UPageGrid>
      <slot name="body-after" />
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { BeforeAfterItem, BeforeAfterUi } from '../ui/BeforeAfter.vue'

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  items: RenderItem<BeforeAfterItem>[]
  itemsColumns?: 1 | 2 | 3
  itemUi?: BeforeAfterUi
}>(), {
  itemsColumns: 2,
  ui: () => ({
    links: 'justify-center',
  }),
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['items', 'itemsColumns', 'itemUi'])

const columnsClass = useGridColumns(() => props.itemsColumns)
</script>
