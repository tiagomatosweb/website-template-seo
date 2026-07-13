<script setup lang="ts">
// Star-rating row. `rating` is rounded to whole stars; filled use the solid
// star + the `text-star` token (Tailwind amber), empties the regular outline.
const props = withDefaults(defineProps<{
  rating?: number
  max?: number
  size?: 'xs' | 'sm' | 'md'
  class?: string
}>(), {
  rating: 5,
  max: 5,
  size: 'sm',
})

const sizeClass = computed(() => ({ xs: 'size-3', sm: 'size-3.5', md: 'size-4' }[props.size]))
const stars = computed(() => {
  const filled = Math.min(props.max, Math.max(0, Math.round(props.rating)))
  return Array.from({ length: props.max }, (_, i) => i < filled)
})
</script>

<template>
  <span
    :class="['inline-flex items-center gap-0.5 leading-none text-star', props.class]"
    role="img"
    :aria-label="`${Math.round(props.rating)} out of ${props.max} stars`"
  >
    <UIcon
      v-for="(filled, i) in stars"
      :key="i"
      :name="filled ? 'i-fa6-solid-star' : 'i-fa6-regular-star'"
      :class="[sizeClass, filled ? '' : 'opacity-35']"
    />
  </span>
</template>
