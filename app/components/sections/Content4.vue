<template>
  <UPageSection v-bind="sectionProps">
    <template v-for="(_, name) in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>

    <template #body>
      <slot name="body-before" />
      <UPageGrid class="lg:grid-cols-3">
        <div class="flex flex-col justify-center p-2 sm:col-span-2 sm:p-0 lg:col-span-1 lg:pr-6">
          <div :class="headlineClass">
            <component :is="headlineFn" v-if="headlineFn" />
            <template v-else>{{ props.headline }}</template>
          </div>
          <h2 :class="titleClass">
            <component :is="titleFn" v-if="titleFn" />
            <template v-else>{{ props.title }}</template>
          </h2>
          <div v-if="props.description" :class="descriptionClass">
            <component :is="descriptionFn" v-if="descriptionFn" />
            <template v-else>{{ props.description }}</template>
          </div>
        </div>

        <template v-for="(item, i) in props.items" :key="i">
          <component :is="item" v-if="isRenderFn(item)" />
          <UiContentCard v-else :item="item" />
        </template>
      </UPageGrid>
      <slot name="body-after" />
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import { tv } from '@nuxt/ui/utils/tv'
import type { PageSectionProps } from '@nuxt/ui'
import pageSectionTheme from '#build/ui/page-section'
import type { SectionText } from '~/composables/usePageSection'
import type { RenderItem } from '~/utils/render'
import type { ContentCardItem } from '../ui/ContentCard.vue'

const props = defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  items: RenderItem<ContentCardItem>[]
}>()

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['items', 'headline', 'title', 'description'])

const appConfig = useAppConfig()
const pageSectionOverride = appConfig.ui?.pageSection as Record<string, unknown> | undefined
const sectionUi = computed(() =>
  tv({ extend: tv(pageSectionTheme), ...(pageSectionOverride || {}) })({
    orientation: sectionProps.value.orientation ?? 'vertical',
    reverse: sectionProps.value.reverse,
    headline: !!props.headline,
    title: !!props.title,
    description: !!props.description,
  }),
)
const headlineClass = computed(() => sectionUi.value.headline({ class: ['mb-2', props.ui?.headline] }))
const titleClass = computed(() => sectionUi.value.title({ class: ['text-2xl sm:text-3xl lg:text-4xl', props.ui?.title] }))
const descriptionClass = computed(() => sectionUi.value.description({ class: ['mt-3', props.ui?.description] }))
</script>
