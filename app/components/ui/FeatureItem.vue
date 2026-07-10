<template>
  <div :class="ui.root({ class: [cardPadding, props.ui?.root] })">
    <UiIconTile v-bind="icon" :class="ui.tile({ class: props.ui?.tile })" />
    <div :class="ui.body({ class: props.ui?.body })">
      <h4 :class="ui.title({ class: props.ui?.title })">{{ item.title }}</h4>
      <component :is="item.description" v-if="isRenderFn(item.description)" :class="ui.description({ class: props.ui?.description })" />
      <p v-else :class="ui.description({ class: props.ui?.description })">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VNodeChild } from 'vue'
import { tv } from 'tailwind-variants'
import type { IconTileProps } from './IconTile.vue'

export interface FeatureItem {
  icon: string | IconTileProps
  title: string
  description: string | (() => VNodeChild)
}

export interface FeatureItemUi {
  root?: string
  tile?: string
  body?: string
  title?: string
  description?: string
}

const props = withDefaults(defineProps<{
  item: FeatureItem
  orientation?: 'horizontal' | 'vertical'
  ui?: FeatureItemUi
}>(), {
  orientation: 'horizontal',
})

const icon = computed<IconTileProps>(() => ({
  size: 'lg',
  ...(typeof props.item.icon === 'string' ? { icon: props.item.icon } : props.item.icon),
}))

const theme = tv({
  slots: {
    root: 'flex gap-4',
    tile: 'shrink-0',
    body: '',
    title: '',
    description: 'mt-1 text-sm leading-snug text-muted',
  },
  variants: {
    orientation: {
      horizontal: { root: 'items-start', body: 'min-w-0 flex-1 pt-0.5' },
      vertical: { root: 'flex-col items-center text-center' },
    },
  },
})

const cardPadding = useAppConfig().ui.pageCard.slots.container
const ui = computed(() => theme({ orientation: props.orientation }))
</script>
