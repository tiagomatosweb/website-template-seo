<template>
  <section id="why" class="bg-primary-950">
    <UContainer>
      <div class="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <div>
          <p class="font-display font-semibold text-primary-300">{{ headline }}</p>
          <h2 class="mt-3 font-display font-black text-3xl text-white sm:text-4xl lg:text-5xl text-balance">
            {{ title }}
          </h2>
          <p class="mt-5 text-lg text-white/70 max-w-lg">{{ description }}</p>

          <div class="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div v-for="stat in stats" :key="stat.label">
              <p class="font-display font-black text-4xl text-white tabular-nums">{{ stat.value }}</p>
              <p class="mt-1 text-sm text-white/60">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <ul class="grid gap-4 sm:grid-cols-2">
          <li
            v-for="reason in reasons"
            :key="reason.title"
            class="rounded-lg bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10"
          >
            <UIcon :name="reason.icon" class="size-7 text-primary-300" />
            <h3 class="mt-3 font-display font-bold text-white">{{ reason.title }}</h3>
            <p class="mt-1.5 text-sm text-white/60">{{ reason.description }}</p>
          </li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  stats?: { value: string, label: string }[]
  reasons?: { icon: string, title: string, description: string }[]
}>(), {
  headline: 'Why choose us',
  title: 'The local team that does it properly',
  description: 'We built our reputation one job at a time — showing up when we say we will, charging what we quote, and treating your property like our own.',
  stats: () => [
    { value: '10+', label: 'Years in business' },
    { value: '5,000+', label: 'Jobs completed' },
    { value: '4.9★', label: 'Average rating' },
  ],
  reasons: () => [
    { icon: 'i-fa6-solid-shield-halved', title: 'Licensed & insured', description: 'Fully qualified and covered, so you are protected on every job.' },
    { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Upfront pricing', description: 'Clear quotes before we start. The price we say is the price you pay.' },
    { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We respect your schedule and turn up within the window we promise.' },
    { icon: 'i-fa6-solid-thumbs-up', title: 'Guaranteed work', description: 'If something is not right, we come back and make it right.' },
  ],
})
</script>
