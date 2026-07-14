<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Reviews
    </div>
    <UPageSection
      id="reviews"
      headline="Reviews"
      title="What Our Customers Are Saying"
    >
      <template #body>
        <UPageGrid class="lg:grid-cols-4">
          <UiReview
            v-for="(review, i) in reviews"
            :key="i"
            :review="review"
          />
        </UPageGrid>
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '~/components/ui/Review.vue'

useSeoMeta({
  title: 'Reviews — variants',
  robots: 'noindex, nofollow',
})

const reviews: Review[] = [
  { quote: 'Absolutely brilliant service from start to finish — couldn’t be happier.', name: 'Sample A.', date: '2 weeks ago', rating: 5 },
  { quote: 'Reliable, on time, and the results speak for themselves.', name: 'Sample B.', date: '1 month ago', rating: 5 },
  { quote: 'Great communication and genuine care for the work.', name: 'Sample C.', date: '1 month ago', rating: 5 },
  { quote: 'Highly recommend — worth every dollar.', name: 'Sample D.', date: '2 months ago', rating: 5 },
]
</script>
