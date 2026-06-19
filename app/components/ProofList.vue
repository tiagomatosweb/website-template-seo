<script setup lang="ts">
defineProps<{
  inverted?: boolean
}>()

const items = [
  { icon: 'i-fa6-solid-clock', label: 'Same-day service' },
  { icon: 'i-fa6-solid-shield-halved', label: 'Fully licensed & insured' },
  { icon: 'i-fa6-solid-thumbs-up', label: 'No call-out fees' },
]
</script>

<template>
  <ul class="flex flex-wrap items-center gap-x-8 gap-y-4">
    <li v-for="item in items" :key="item.label" class="flex items-center gap-2.5">
      <UIcon :name="item.icon" class="size-5 shrink-0" :class="inverted ? 'text-primary-300' : 'text-primary'" />
      <span class="font-display font-semibold text-sm" :class="inverted ? 'text-white' : 'text-neutral-700'">{{ item.label }}</span>
    </li>
  </ul>
</template>
