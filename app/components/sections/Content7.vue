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
      <UCard class="overflow-hidden" :ui="{ body: 'p-0 sm:p-0' }">
        <UPageGrid :class="[gridClass, dividerClass]">
          <template v-for="(item, i) in props.items" :key="i">
            <component :is="item" v-if="isRenderFn(item)" />
            <UiFeatureItem v-else :item="item" />
          </template>
        </UPageGrid>
      </UCard>
      <slot name="body-after" />
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { GridColumns } from '~/composables/useGridColumns'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { FeatureItem } from '../ui/FeatureItem.vue'

const props = defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  itemsColumns?: GridColumns
  items: RenderItem<FeatureItem>[]
}>()

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['itemsColumns', 'items'])
const gridClass = useGridColumns(() => props.itemsColumns, 2)
const dividerClass = useGridDividers(() => props.itemsColumns, 2)
</script>
