<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Faq — centered
    </div>

    <UPageSection
      id="faq"
      headline="FAQ"
      title="Frequently Asked Questions"
      :ui="{ headline: 'justify-center', title: 'text-center', description: 'text-center', body: 'w-full' }"
    >
      <template #body>
        <div class="mx-auto w-full max-w-3xl text-left">
          <UAccordion :items="faqs" type="multiple" />
        </div>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Faq — split with CTA
    </div>

    <UPageSection
      id="faq"
      orientation="horizontal"
      headline="FAQ"
      title="Frequently Asked Questions"
      :ui="{ container: 'lg:items-start' }"
    >
      <template #description>
        <p class="max-w-md text-toned">Everything growing businesses ask before partnering with an agency — answered.</p>

        <UPageCard
          class="mt-8"
          title="Still have questions?"
          description="Talk to a senior marketer — no pressure, no obligation."
        >
          <template #footer>
            <UButton v-bind="callCta()" />
          </template>
        </UPageCard>
      </template>
      <UAccordion :items="faqs" type="multiple" :default-value="['0']" />
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'FAQ — variants',
  robots: 'noindex, nofollow',
})

const faqs = [
  { label: 'How quickly will we see results?', content: 'Paid campaigns can start generating leads within days. SEO and content build over three to six months.' },
  { label: 'Do you lock us into a long contract?', content: 'No. We work month to month with no long lock-ins.' },
  { label: 'How do you report on performance?', content: 'You get a live dashboard and a plain-English monthly report — no vanity metrics.' },
  { label: 'How much does it cost?', content: 'Pricing is transparent: a clear proposal upfront and the price we quote is the price you pay.' },
]
</script>
