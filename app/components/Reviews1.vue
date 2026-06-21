<template>
  <UPageSection
    id="reviews"
    class="bg-muted"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <UPageGrid class="lg:grid-cols-4">
      <UCard
        v-for="(review, i) in reviews"
        :key="i"
        as="article"
        variant="subtle"
        :ui="{ body: 'flex h-full flex-col gap-3' }"
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

        <div class="flex items-center gap-0.5 text-star" :aria-label="`${review.rating ?? 5} out of 5 stars`">
          <UIcon v-for="n in (review.rating ?? 5)" :key="n" name="i-fa6-solid-star" class="size-4 shrink-0" />
        </div>

        <blockquote class="flex-1 text-toned">
          <p class="text-base line-clamp-4">{{ review.quote }}</p>
        </blockquote>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
interface Review {
  quote: string
  name: string
  date: string
  rating?: number
  avatar?: string
}

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  reviews?: Review[]
}>(), {
  headline: 'Reviews',
  title: 'What Our Customers Are Saying',
  description: 'Real reviews from real local homeowners.',
  reviews: () => [
    {
      quote: 'Reliable, professional and they had our hot water back on the same day. Honest pricing and no surprises — exactly what you want when the hot water goes out.',
      name: 'Sarah M.',
      date: '3 weeks ago',
      rating: 5,
    },
    {
      quote: 'They explained exactly what our system needed and stuck to a clear quote. No pressure, no upselling — just a great job done properly.',
      name: 'James T.',
      date: '1 month ago',
      rating: 5,
    },
    {
      quote: 'The team knows hot water systems inside out. Our recurring problem is finally sorted for good. Worth every dollar for the peace of mind.',
      name: 'Priya K.',
      date: '1 month ago',
      rating: 5,
    },
    {
      quote: 'Fantastic service and fairly priced. The team turned up on time, were respectful of our home and left everything spotless. Highly recommend!',
      name: 'Celine M.',
      date: '2 months ago',
      rating: 5,
    },
  ],
})

const reviews = computed(() => props.reviews)
</script>
