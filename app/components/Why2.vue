<template>
  <section id="why" class="relative overflow-hidden bg-neutral-950 py-24 lg:py-32">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-primary-400)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary-400)_1px,transparent_1px)] [background-size:3rem_3rem]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-32 top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
    />

    <UContainer class="relative">
      <div class="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p class="font-display font-bold uppercase tracking-[0.25em] text-sm text-primary-300">{{ headline }}</p>
          <h2 class="mt-5 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tight text-white text-balance">
            {{ title }}
          </h2>
          <p class="mt-6 text-xl text-white/60 max-w-md">{{ description }}</p>

          <div class="mt-10 grid grid-cols-3 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="border-l-2 border-primary pl-4">
              <p class="font-display font-black text-4xl lg:text-5xl text-white tabular-nums leading-none">{{ stat.value }}</p>
              <p class="mt-2 text-xs uppercase tracking-wider text-white/40">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <ul class="space-y-px overflow-hidden rounded-2xl ring-1 ring-white/10">
          <li
            v-for="(reason, i) in reasons"
            :key="reason.title"
            class="reveal group flex items-center gap-5 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.08]"
            :style="{ animationDelay: `${i * 90}ms` }"
          >
            <span class="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-300 transition-transform duration-300 group-hover:scale-110">
              <UIcon :name="reason.icon" class="size-7" />
            </span>
            <div>
              <h3 class="font-display font-bold text-lg text-white">{{ reason.title }}</h3>
              <p class="mt-0.5 text-white/55">{{ reason.description }}</p>
            </div>
            <span class="ml-auto font-display font-black text-2xl text-white/10 tabular-nums">0{{ i + 1 }}</span>
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
  title: 'Not your average tradies.',
  description: 'We earned our reputation the hard way — one honest job at a time.',
  stats: () => [
    { value: '10+', label: 'Years' },
    { value: '5K+', label: 'Jobs done' },
    { value: '4.9', label: 'Rating' },
  ],
  reasons: () => [
    { icon: 'i-fa6-solid-shield-halved', title: 'Licensed & insured', description: 'Fully qualified, fully covered.' },
    { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Upfront pricing', description: 'The price we quote is the price you pay.' },
    { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We show up within the window we promise.' },
    { icon: 'i-fa6-solid-thumbs-up', title: 'Guaranteed work', description: 'Not right? We come back and fix it.' },
  ],
})
</script>
