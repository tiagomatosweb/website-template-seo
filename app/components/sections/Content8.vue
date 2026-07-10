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
      <div class="grid lg:grid-cols-2 lg:items-center" :class="gapClass">
        <UiFigure v-bind="props.image" />

        <div>
          <template v-for="(item, i) in props.items" :key="i">
            <component :is="item" v-if="isRenderFn(item)" />
            <UiFeatureItem v-else :item="item" />
          </template>
        </div>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { FeatureItem } from '../ui/FeatureItem.vue'
import type { FigureImage } from '../ui/Figure.vue'

const props = defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  image?: FigureImage
  items: RenderItem<FeatureItem>[]
}>()

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['image', 'items'])

const horizontalContainer = useAppConfig().ui.pageSection.variants.orientation.horizontal.container
const gapClass = horizontalContainer.split(' ').filter(c => c.includes('gap-')).join(' ')
</script>
