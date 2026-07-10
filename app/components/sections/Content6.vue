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
      <UiFigure v-bind="props.image" />
    </template>

    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
      <template v-for="(item, i) in props.items" :key="i">
        <component :is="item" v-if="isRenderFn(item)" />
        <UiContentCard v-else :item="item" />
      </template>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { ContentCardItem } from '../ui/ContentCard.vue'
import type { FigureImage } from '../ui/Figure.vue'

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  image?: FigureImage
  items: RenderItem<ContentCardItem>[]
}>(), {
  orientation: 'horizontal'
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['image', 'items'])
</script>
