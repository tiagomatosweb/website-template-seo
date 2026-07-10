<template>
  <ul :class="ui.root({ class: [props.ui?.root, props.class] })">
    <template v-for="(item, i) in normalizedItems" :key="i">
      <component :is="item" v-if="isRenderFn(item)" />
      
      <li v-else :class="ui.item({ class: [props.ui?.item, item.ui?.item] })">
        <UiIconTile v-bind="item.tile" :class="ui.icon({ class: [props.ui?.icon, item.ui?.icon] })" />
        <component :is="item.label" v-if="isRenderFn(item.label)" :class="ui.label({ class: [props.ui?.label, item.ui?.label] })" />
        <span v-else :class="ui.label({ class: [props.ui?.label, item.ui?.label] })">{{ item.label }}</span>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { VNodeChild } from 'vue'
import { tv } from 'tailwind-variants'
import type { IconTileProps } from './IconTile.vue'

export type ListUi = Partial<Record<'root' | 'item' | 'icon' | 'label', string>>

export interface ListItem {
  label: string | (() => VNodeChild)
  icon?: string | IconTileProps
  ui?: ListUi
}

const props = withDefaults(defineProps<{
  items: (string | ListItem | (() => VNodeChild))[]
  orientation?: 'horizontal' | 'vertical'
  icon?: string | Partial<IconTileProps>
  class?: string
  ui?: ListUi
}>(), {
  orientation: 'vertical',
})

const theme = tv({
  slots: {
    root: '',
    item: 'flex items-start gap-2.5 text-toned',
    icon: 'mt-0.5 shrink-0',
    label: '',
  },
  variants: {
    orientation: {
      vertical: { root: 'space-y-2.5' },
      horizontal: { root: 'flex flex-wrap items-center gap-x-6 gap-y-2.5', item: 'items-center', icon: 'mt-0' },
    },
  },
})

const ui = computed(() => theme({ orientation: props.orientation }))

const iconDefaults = computed<Partial<IconTileProps>>(() =>
  typeof props.icon === 'string' ? { icon: props.icon } : props.icon ?? {},
)

const normalizedItems = computed(() =>
  props.items.map((item) => {
    if (isRenderFn(item)) return item
    const entry = typeof item === 'string' ? { label: item } : item
    const tile: IconTileProps = {
      variant: 'naked',
      size: 'sm',
      icon: 'i-fa6-solid-check',
      ...iconDefaults.value,
      ...(typeof entry.icon === 'string' ? { icon: entry.icon } : entry.icon),
    }
    return { label: entry.label, tile, ui: entry.ui }
  }),
)
</script>
