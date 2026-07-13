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
            
            <div v-else class="relative">
              <UiFeatureItem :item="item" orientation="vertical" />
              <span
                v-if="i < props.items.length - 1 && !isRenderFn(props.items[i + 1])"
                aria-hidden="true"
                class="absolute -right-4 top-1/2 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-default ring ring-default lg:flex"
              >
                <UiIconTile icon="i-fa6-solid-arrow-right" variant="naked" class="size-3.5" />
              </span>
            </div>
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

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  itemsColumns?: GridColumns
  items: RenderItem<FeatureItem>[]
}>(), {
  ui: () => ({ links: 'justify-center' }),
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['itemsColumns', 'items'])
const gridClass = useGridColumns(() => props.itemsColumns, 4)
const dividerClass = useGridDividers(() => props.itemsColumns, 4)
</script>
