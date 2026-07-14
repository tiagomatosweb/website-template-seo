<template>
  <UiList
    :items="props.items"
    :orientation="props.orientation"
    :icon="icon"
    :ui="ui"
  />
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { IconTileProps } from './IconTile.vue'
import type { ListItem, ListUi } from './List.vue'

const props = withDefaults(defineProps<{
  items: ListItem[]
  orientation?: 'horizontal' | 'vertical'
  icon?: string | Partial<IconTileProps>
  class?: string
  ui?: ListUi
}>(), {
  orientation: 'horizontal',
})

const icon = computed<Partial<IconTileProps>>(() => ({
  size: 'sm',
  ...(typeof props.icon === 'string' ? { icon: props.icon } : props.icon),
}))

const ui = computed<ListUi>(() => ({
  ...props.ui,
  root: twMerge('gap-x-8 gap-y-4', props.ui?.root, props.class),
  label: twMerge('font-display text-sm font-semibold tabular-nums text-default', props.ui?.label),
}))
</script>
