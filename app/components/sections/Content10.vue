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

    <slot name="body-before" />
    <ol class="relative">
      <span aria-hidden="true" class="absolute left-9 top-4 bottom-4 w-px bg-accented" />
      <li
        v-for="(item, i) in props.items"
        :key="item.title"
        class="relative flex gap-7 pb-12 last:pb-0"
      >
        <span class="relative z-10 flex size-18 shrink-0 items-center justify-center rounded-md bg-inverted font-display font-black text-2xl text-inverted">
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <div class="pt-3">
          <div class="flex items-center gap-2.5">
            <UiIconTile :icon="item.icon" variant="naked" class="size-5" />
            <h3>{{ item.title }}</h3>
          </div>
          <p class="mt-2 text-toned max-w-md">{{ item.description }}</p>
        </div>
      </li>
    </ol>
    <slot name="body-after" />
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  items: { icon: string, title: string, description: string }[]
}>(), {
  orientation: 'horizontal',
  ui: () => ({
    container: 'lg:grid-cols-[0.8fr_1.2fr] lg:items-start gap-8 lg:gap-16',
    header: 'lg:sticky lg:top-28 lg:self-start',
    title: 'text-5xl sm:text-6xl leading-[0.95]',
    description: 'text-xl text-muted max-w-sm',
  }),
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['items'])
</script>
