<template>
  <UPageCard
    as="article"
    variant="subtle"
    :class="props.class"
    :ui="{ container: 'flex h-full flex-col gap-3' }"
  >
    <header class="flex items-start justify-between gap-3">
      <UUser
        :name="props.review.name"
        :description="props.review.date"
        :avatar="{
          src: props.review.avatar,
          alt: props.review.name,
          ui: { fallback: 'text-default', root: 'bg-accented' },
        }"
        class="min-w-0"
      />
      <UIcon name="i-logos-google-icon" class="size-3.5 shrink-0" />
    </header>

    <UiGoogleStars :rating="props.review.rating ?? 5" size="md" />

    <blockquote class="flex-1 text-toned">
      <p class="text-base line-clamp-4">{{ props.review.quote }}</p>
    </blockquote>
  </UPageCard>
</template>

<script setup lang="ts">
export interface Review {
  quote: string
  name: string
  date?: string
  rating?: number
  avatar?: string
}

const props = defineProps<{
  review: Review
  class?: string
}>()
</script>
