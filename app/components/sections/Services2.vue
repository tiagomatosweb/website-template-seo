<template>
  <UPageSection
    id="services"
    :headline="props.headline"
    :title="props.title"
    :ui="{
      root: 'relative overflow-hidden',
      container: 'relative',
      header: 'max-w-3xl',
      title: 'text-5xl sm:text-6xl lg:text-7xl leading-[0.95]',
    }"
  >
    <template #top>
      <span
        aria-hidden="true"
        class="pointer-events-none absolute -top-16 -right-6 select-none font-display font-black leading-none text-[28vw] lg:text-[16rem] text-neutral-50"
      >
        {{ props.ghost }}
      </span>
    </template>

    <UPageGrid class="sm:auto-rows-fr lg:grid-cols-3">
      <!-- Featured card — bespoke dark panel spanning the grid -->
      <UPageCard
        to="#contact"
        variant="solid"
        :ui="{
          root: 'lift group relative overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2 sm:min-h-64',
          container: 'flex h-full flex-col justify-between',
        }"
      >
        <UiIconTile :icon="featured.icon" inverted class="bg-surface-soft-inverted text-primary-300" />
        <div class="mt-10">
          <h3 class="text-inverted text-3xl lg:text-4xl">{{ featured.title }}</h3>
          <p class="mt-2 text-muted-inverted max-w-md">{{ featured.description }}</p>
        </div>
      </UPageCard>

      <!-- Small cards — UPageCard with a tile-style leading icon -->
      <UPageCard
        v-for="service in rest"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        to="#contact"
        class="lift"
      >
        <template #leading>
          <UiIconTile :icon="service.icon" />
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  ghost?: string
  headline?: string
  title?: string
  services?: { icon: string, title: string, description: string }[]
}>(), {
  ghost: 'WORK',
  headline: 'What we do',
  title: 'Big jobs. Small jobs. Done right.',
  services: () => [
    { icon: 'i-fa6-solid-bolt', title: 'Emergency call-outs', description: 'Something gone wrong? We respond fast, day or night, and get you sorted the same day — no drama.' },
    { icon: 'i-fa6-solid-wrench', title: 'Repairs & maintenance', description: 'Honest diagnosis, fixed right the first time.' },
    { icon: 'i-fa6-solid-screwdriver-wrench', title: 'New installations', description: 'Quality fit-outs, fully guaranteed.' },
    { icon: 'i-fa6-solid-building', title: 'Commercial & strata', description: 'Reliable support for businesses and buildings.' },
    { icon: 'i-fa6-solid-clipboard-check', title: 'Inspections & advice', description: 'Clear recommendations, zero upselling.' },
    { icon: 'i-fa6-solid-house', title: 'Residential service', description: 'Tidy, respectful work in homes across the area.' },
  ],
})

// First service is the bespoke featured (dark, spanning) card; the rest are the small UPageCards.
const featured = computed(() => props.services[0]!)
const rest = computed(() => props.services.slice(1))
</script>
