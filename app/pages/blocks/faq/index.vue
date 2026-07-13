<script setup lang="ts">
import type { Faq } from '~/components/sections/Faq1.vue'

useSeoMeta({
  title: 'FAQ — variants',
  robots: 'noindex, nofollow',
})

const faqs: Faq[] = [
  { label: 'How quickly will we see results?', content: 'Paid campaigns can start generating leads within days. SEO and content build over three to six months.' },
  { label: 'Do you lock us into a long contract?', content: 'No. We work month to month with no long lock-ins.' },
  { label: 'How do you report on performance?', content: 'You get a live dashboard and a plain-English monthly report — no vanity metrics.' },
  { label: 'How much does it cost?', content: 'Pricing is transparent: a clear proposal upfront and the price we quote is the price you pay.' },
]
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Faq1
    </div>
    <SectionsFaq1 :items="faqs" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Faq2
    </div>
    <SectionsFaq2
      :items="faqs"
      description="Everything growing businesses ask before partnering with an agency — answered."
      :cta="{ title: 'Still have questions?', description: 'Talk to a senior marketer — no pressure, no obligation.' }"
    />
  </div>
</template>
