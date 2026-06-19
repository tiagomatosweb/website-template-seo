<template>
  <UPageSection
    :ui="{
      root: 'border-y border-default bg-neutral-50',
      container: 'py-8 lg:py-6',
    }"
  >
    <div class="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
      <div class="inline-flex items-center gap-2">
        <UIcon name="i-logos-google-icon" class="size-4 shrink-0" />
        <span class="inline-flex items-center gap-1.5 leading-none">
          <span class="inline-flex items-center text-cta-400" aria-hidden="true">
            <UIcon v-for="i in 5" :key="i" name="i-fa6-solid-star" class="size-4 shrink-0" />
          </span>
          <span class="translate-y-px text-sm font-semibold tabular-nums text-default">{{ props.rating }}</span>
        </span>
      </div>

      <div class="h-px w-16 bg-neutral-200 lg:h-8 lg:w-px" />

      <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <li v-for="item in props.items" :key="item.label" class="flex items-center gap-2.5">
          <UIcon :name="item.icon" class="size-5 text-primary shrink-0" />
          <span class="text-sm font-semibold text-default">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  rating?: string
  items?: { icon: string, label: string }[]
}>(), {
  rating: '4.9',
  items: () => [
    { icon: 'i-fa6-solid-shield-halved', label: 'Licensed & insured' },
    { icon: 'i-fa6-solid-clock', label: 'Same-day service' },
    { icon: 'i-fa6-solid-sack-dollar', label: 'No call-out fees' },
    { icon: 'i-fa6-solid-award', label: '10+ years experience' },
  ],
})
</script>
