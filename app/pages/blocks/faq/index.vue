<script setup lang="ts">
useSeoMeta({
  title: 'FAQ — variants',
  robots: 'noindex, nofollow',
})
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
