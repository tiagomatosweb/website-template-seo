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
        class="pointer-events-none absolute -top-16 -right-6 select-none font-display font-black leading-none text-[28vw] lg:text-[16rem] text-primary-50"
      >
        {{ props.ghost }}
      </span>
    </template>

    <UPageGrid class="auto-rows-fr lg:grid-cols-3">
      <!-- Featured card — bespoke dark panel spanning the grid -->
      <UCard
        :to="'#contact'"
        variant="solid"
        :ui="{
          root: 'group relative overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2 min-h-64 transition-all duration-300 hover:-translate-y-1',
          body: 'flex h-full flex-col justify-between',
        }"
      >
        <div class="flex items-start justify-between">
          <span class="icon-tile bg-white/10 text-white">
            <UIcon :name="featured.icon" class="size-6" />
          </span>
          <UIcon
            name="i-fa6-solid-arrow-right"
            class="size-4 -rotate-45 text-white/45 transition-all duration-300 group-hover:rotate-0 group-hover:text-white"
          />
        </div>
        <div class="mt-10">
          <h3 class="text-white text-3xl lg:text-4xl">{{ featured.title }}</h3>
          <p class="mt-2 text-white/65 max-w-md">{{ featured.description }}</p>
        </div>
      </UCard>

      <!-- Small cards — UPageCard with a tile-style leading icon -->
      <UPageCard
        v-for="service in rest"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        to="#contact"
        class="lift group"
        :ui="{
          root: 'hover:ring-primary/40',
          title: 'font-display font-black tracking-tight text-xl',
          description: 'text-[15px] text-muted',
        }"
      >
        <template #leading>
          <span class="icon-tile bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <UIcon :name="service.icon" class="size-6" />
          </span>
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
