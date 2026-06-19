<template>
  <section id="services" class="relative overflow-hidden py-24 lg:py-32">
    <span
      aria-hidden="true"
      class="pointer-events-none absolute -top-16 -right-6 select-none font-display font-black leading-none text-[28vw] lg:text-[16rem] text-primary-50"
    >
      {{ ghost }}
    </span>

    <UContainer class="relative">
      <div class="max-w-3xl">
        <p class="font-display font-bold uppercase tracking-[0.25em] text-sm text-primary">{{ headline }}</p>
        <h2 class="mt-4 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-neutral-900 text-balance">
          {{ title }}
        </h2>
      </div>

      <div class="mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(service, i) in services"
          :key="service.title"
          to="#contact"
          class="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 ring-1 transition-all duration-300 hover:-translate-y-1"
          :class="[
            i === 0
              ? 'sm:col-span-2 lg:row-span-2 bg-primary-950 ring-primary-900 min-h-64'
              : 'bg-white ring-neutral-200 hover:ring-primary/40 hover:shadow-xl',
          ]"
          :style="{ animationDelay: `${i * 80}ms` }"
        >
          <div class="flex items-start justify-between">
            <span
              class="flex size-12 items-center justify-center rounded-xl transition-colors"
              :class="i === 0 ? 'bg-white/10 text-white' : 'bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white'"
            >
              <UIcon :name="service.icon" class="size-6" />
            </span>
            <UIcon
              name="i-fa6-solid-arrow-right"
              class="size-4 -rotate-45 transition-all duration-300 group-hover:rotate-0"
              :class="i === 0 ? 'text-white/50 group-hover:text-white' : 'text-neutral-300 group-hover:text-primary'"
            />
          </div>

          <div :class="i === 0 ? 'mt-10' : 'mt-8'">
            <h3
              class="font-display font-black tracking-tight"
              :class="i === 0 ? 'text-white text-3xl lg:text-4xl' : 'text-neutral-900 text-xl'"
            >
              {{ service.title }}
            </h3>
            <p
              class="mt-2"
              :class="i === 0 ? 'text-white/70 text-lg max-w-md' : 'text-neutral-500 text-[15px]'"
            >
              {{ service.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
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
  ],
})
</script>
