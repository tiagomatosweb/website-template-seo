<template>
  <UPageSection
    id="services"
    :headline="headline"
    :title="title"
    :description="description"
  >
    <UPageGrid>
      <UPageCard
        v-for="service in services"
        :key="service.title"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        to="#contact"
        spotlight
        class="group"
        :ui="{ leadingIcon: 'size-7 text-primary' }"
      >
        <template #footer>
          <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Learn more
            <UIcon name="i-fa6-solid-arrow-right" class="size-3 transition-transform group-hover:translate-x-1" />
          </span>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  services?: { icon: string, title: string, description: string }[]
}>(), {
  headline: 'What we do',
  title: 'Services built around your needs',
  description: 'From routine maintenance to urgent call-outs, our team handles it all with upfront pricing and workmanship you can trust.',
  services: () => [
    { icon: 'i-fa6-solid-wrench', title: 'Repairs & maintenance', description: 'Fast, reliable fixes for everyday problems — diagnosed honestly and done right the first time.' },
    { icon: 'i-fa6-solid-screwdriver-wrench', title: 'New installations', description: 'Quality installations sized and fitted for your property, with all work fully guaranteed.' },
    { icon: 'i-fa6-solid-bolt', title: 'Emergency call-outs', description: 'Same-day response when it matters most. We show up fast and get you sorted.' },
    { icon: 'i-fa6-solid-house', title: 'Residential service', description: 'Trusted, tidy and respectful service for homes across your local area.' },
    { icon: 'i-fa6-solid-building', title: 'Commercial & strata', description: 'Dependable support for businesses, property managers and strata buildings.' },
    { icon: 'i-fa6-solid-clipboard-check', title: 'Inspections & advice', description: 'Honest assessments and clear recommendations — no upselling, ever.' },
  ],
})
</script>
