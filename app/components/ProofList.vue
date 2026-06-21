<script setup lang="ts">
const props = withDefaults(defineProps<{
  inverted?: boolean
  rating?: string
}>(), {
  inverted: false,
  rating: '4.9',
})

// `brand: true` → multicolor logo (rendered as-is, no primary/inverted tint).
const items = computed(() => [
  { icon: 'i-logos-google-icon', label: `${props.rating} Google Reviews`, brand: true },
  { icon: 'i-fa6-solid-clock', label: 'Same-day service' },
  { icon: 'i-fa6-solid-thumbs-up', label: 'No call-out fees' },
])
</script>

<template>
  <ul class="flex flex-wrap items-center gap-x-8 gap-y-4">
    <li v-for="item in items" :key="item.label" class="flex items-center gap-2.5">
      <UIcon
        :name="item.icon"
        class="size-5 shrink-0"
        :class="item.brand ? '' : (props.inverted ? 'text-primary-300' : 'text-primary')"
      />
      <span class="font-display font-semibold text-sm tabular-nums" :class="props.inverted ? 'text-inverted' : 'text-default'">{{ item.label }}</span>
    </li>
  </ul>
</template>
