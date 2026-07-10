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

    <UCard class="overflow-hidden" :ui="{ body: 'p-0 sm:p-0' }">
      <UPageGrid :class="[gridClass, dividerClass]">
        <template v-for="(item, i) in props.items" :key="i">
          <component :is="item" v-if="isRenderFn(item)" />
          <UiFeatureItem v-else :item="item" :ui="itemUi" />
        </template>
      </UPageGrid>
    </UCard>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { GridColumns } from '~/composables/useGridColumns'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { FeatureItem, FeatureItemUi } from '../ui/FeatureItem.vue'

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description: SectionText
  itemsColumns?: GridColumns
  items: RenderItem<FeatureItem>[]
  itemUi?: FeatureItemUi
}>(), {
  orientation: 'horizontal',
  ui: () => ({ container: 'lg:items-center' }),
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['itemsColumns', 'items', 'itemUi'])
const gridClass = useGridColumns(() => props.itemsColumns, 1)
const dividerClass = useGridDividers(() => props.itemsColumns, 1)
</script>
