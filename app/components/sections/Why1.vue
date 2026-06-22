<template>
  <UPageSection
    id="why"
    orientation="horizontal"
    :headline="props.headline"
    :title="props.title"
    :ui="{
      root: 'bg-neutral-950',
      container: 'lg:items-center',
      headline: 'text-primary-300',
      title: 'text-inverted',
    }"
  >
    <template #description>
      <p class="text-lg text-muted-inverted max-w-lg">{{ props.description }}</p>
      <div class="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
        <div v-for="stat in props.stats" :key="stat.label">
          <div class="font-display font-black text-4xl text-inverted tabular-nums">{{ stat.value }}</div>
          <div class="mt-1 text-sm text-muted-inverted">{{ stat.label }}</div>
        </div>
      </div>
    </template>

    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
      <UPageCard
        v-for="reason in props.reasons"
        :key="reason.title"
        variant="soft"
        :icon="reason.icon"
        :title="reason.title"
        :description="reason.description"
        :ui="{
          root: 'bg-surface-faint-inverted ring-1 ring-soft-inverted transition-colors hover:bg-surface-soft-inverted',
          leadingIcon: 'text-primary-300',
          title: 'text-inverted',
          description: 'text-muted-inverted',
        }"
      />
    </UPageGrid>
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
