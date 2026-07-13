<script setup lang="ts">
import heroBg from '~/assets/img/placeholder-image.png'

useSeoMeta({
  title: 'Hero — variants',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Hero — background image + overlay header
    </div>
    <UiHero
      :bg-image="heroBg"
      overlay-header
      headline="Lead Generation · Paid Ads · SEO"
      description="From full-funnel lead generation to the quick wins in between, we build the campaigns that move your numbers — and show you exactly how."
      :quote="{
        title: 'Get Your Free Growth Plan',
        description: 'Tell us your goals and a senior marketer will get back to you within one business day.',
      }"
    >
      <template #title>
        Marketing that fills your pipeline with <span class="text-primary-300">qualified leads</span>
      </template>
    </UiHero>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Hero — clear (white)
    </div>
    <UiHero
      headline="Growth Marketing Agency"
      title="Big campaigns. Quick wins. Real results."
      description="From lead generation to full-funnel campaigns, our team handles it all with transparent reporting and results you can measure."
    />
  </div>
</template>
