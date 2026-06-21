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
      title: 'text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-inverted',
    }"
  >
    <template #top>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(var(--color-white)_1px,transparent_1px),linear-gradient(90deg,var(--color-white)_1px,transparent_1px)] bg-size-[3rem_3rem]"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-32 top-1/2 size-136 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]"
      />
    </template>

    <template #description>
      <p class="text-xl text-muted-inverted max-w-md">{{ props.description }}</p>
      <div class="mt-10 grid grid-cols-3 gap-4">
        <div v-for="stat in props.stats" :key="stat.label" class="border-l-2 border-primary pl-4">
          <div class="font-display font-black text-4xl lg:text-5xl text-inverted tabular-nums leading-none">{{ stat.value }}</div>
          <div class="mt-2 text-xs uppercase tracking-wider text-dimmed-inverted">{{ stat.label }}</div>
        </div>
      </div>
    </template>

    <!-- Seamless joined rows — intentionally one ringed container, not separate cards. -->
    <ul class="space-y-px overflow-hidden rounded-2xl ring-1 ring-soft-inverted">
      <li
        v-for="(reason, i) in props.reasons"
        :key="reason.title"
        class="group flex items-center gap-5 bg-surface-faint-inverted p-6 transition-colors hover:bg-surface-strong-inverted"
      >
        <IconTile :icon="reason.icon" size="lg" inverted class="shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 class="text-inverted">{{ reason.title }}</h4>
          <p class="mt-0.5 text-dimmed-inverted">{{ reason.description }}</p>
        </div>
        <span class="ml-auto font-display font-black text-2xl text-inverted/10 tabular-nums">0{{ i + 1 }}</span>
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
