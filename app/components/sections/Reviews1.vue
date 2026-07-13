<template>
  <UPageSection id="reviews" v-bind="sectionProps">
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
      <UPageGrid class="lg:grid-cols-4">
        <UPageCard
          v-for="(review, i) in props.reviews"
          :key="i"
          as="article"
          variant="subtle"
          :ui="{ container: 'flex h-full flex-col gap-3' }"
        >
          <header class="flex items-start justify-between gap-3">
            <UUser
              :name="review.name"
              :description="review.date"
              :avatar="{
                src: review.avatar,
                alt: review.name,
                ui: { fallback: 'text-default', root: 'bg-accented' },
              }"
              class="min-w-0"
            />
            <UIcon name="i-logos-google-icon" class="size-3.5 shrink-0" />
          </header>

          <UiGoogleStars :rating="review.rating ?? 5" size="md" />

          <blockquote class="flex-1 text-toned">
            <p class="text-base line-clamp-4">{{ review.quote }}</p>
          </blockquote>
        </UPageCard>
      </UPageGrid>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'

export interface Review {
  quote: string
  name: string
  date: string
  rating?: number
  avatar?: string
}

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  reviews: Review[]
}>(), {
  headline: 'Reviews',
  title: 'What Our Customers Are Saying',
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['reviews'])
</script>
