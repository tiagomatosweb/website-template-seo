<template>
  <UPageSection
    id="why"
    orientation="horizontal"
    :headline="props.headline"
    :title="props.title"
    :ui="{
      root: 'relative overflow-hidden bg-neutral-950',
      container: 'relative lg:grid-cols-[1fr_1.1fr] lg:items-center gap-8 lg:gap-16',
      headline: 'text-primary-300',
      title: 'text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-white',
    }"
  >
    <template #top>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(var(--color-primary-400)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary-400)_1px,transparent_1px)] bg-size-[3rem_3rem]"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-32 top-1/2 size-136 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
    </template>

    <template #description>
      <p class="text-xl text-white/65 max-w-md">{{ props.description }}</p>
      <div class="mt-10 grid grid-cols-3 gap-4">
        <div v-for="stat in props.stats" :key="stat.label" class="border-l-2 border-primary pl-4">
          <div class="font-display font-black text-4xl lg:text-5xl text-white tabular-nums leading-none">{{ stat.value }}</div>
          <div class="mt-2 text-xs uppercase tracking-wider text-white/45">{{ stat.label }}</div>
        </div>
      </div>
    </template>

    <!-- Seamless joined rows — intentionally one ringed container, not separate cards. -->
    <ul class="space-y-px overflow-hidden rounded-2xl ring-1 ring-white/10">
      <li
        v-for="(reason, i) in props.reasons"
        :key="reason.title"
        class="group flex items-center gap-5 bg-white/3 p-6 transition-colors hover:bg-white/8"
      >
        <span class="icon-tile size-14 shrink-0 bg-primary/15 text-primary-300 transition-transform duration-300 group-hover:scale-110">
          <UIcon :name="reason.icon" class="size-7" />
        </span>
        <div>
          <h4 class="text-white">{{ reason.title }}</h4>
          <p class="mt-0.5 text-white/45">{{ reason.description }}</p>
        </div>
        <span class="ml-auto font-display font-black text-2xl text-white/10 tabular-nums">0{{ i + 1 }}</span>
      </li>
    </ul>
  </UPageSection>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
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
