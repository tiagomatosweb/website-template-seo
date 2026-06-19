<template>
  <UPageSection
    id="reviews"
    class="bg-neutral-50"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <UPageGrid class="lg:grid-cols-3">
      <UCard
        v-for="(review, i) in reviews"
        :key="i"
        as="article"
        :ui="{ body: 'flex h-full flex-col gap-4' }"
      >
        <div class="flex items-center gap-1 text-cta-400" :aria-label="`${review.rating ?? 5} out of 5 stars`">
          <UIcon v-for="n in (review.rating ?? 5)" :key="n" name="i-fa6-solid-star" class="size-4 shrink-0" />
        </div>

        <blockquote class="flex-1 text-toned">
          <p>“{{ review.quote }}”</p>
        </blockquote>

        <footer>
          <UUser
            :name="review.name"
            :description="review.location"
            :avatar="{ src: review.avatar, alt: review.name, text: initials(review.name) }"
          />
        </footer>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
interface Review {
  quote: string
  name: string
  location: string
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
      location: 'Cronulla',
      rating: 5,
    },
    {
      quote: 'They explained exactly what our system needed and stuck to a clear quote. No pressure, no upselling — just a great job done properly.',
      name: 'James T.',
      location: 'Randwick',
      rating: 5,
    },
    {
      quote: 'The team knows hot water systems inside out. Our recurring problem is finally sorted for good. Worth every dollar for the peace of mind.',
      name: 'Priya K.',
      location: 'Hurstville',
      rating: 5,
    },
  ],
})

const reviews = computed(() => props.reviews)

function initials(name: string) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
}
</script>
