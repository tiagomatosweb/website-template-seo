<template>
  <div :class="ui.root({ class: [cardPadding, props.ui?.root, props.class] })">
    <slot name="icon">
      <UiIconTile v-bind="iconTile" :class="ui.tile({ class: props.ui?.tile })" />
    </slot>

    <div :class="ui.body({ class: props.ui?.body })">
      <h4 :class="ui.title({ class: props.ui?.title })">
        <slot name="title">
          <component :is="props.title" v-if="isRenderFn(props.title)" />
          <template v-else>{{ props.title }}</template>
        </slot>
      </h4>

      <div :class="ui.description({ class: props.ui?.description })">
        <slot name="description">
          <component :is="props.description" v-if="isRenderFn(props.description)" />
          <p v-else-if="props.description">{{ props.description }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'
import type { TextOrRender } from '~/utils/render'
import type { IconTileProps } from './IconTile.vue'

export interface FeatureItem {
  icon: string | IconTileProps
  title: TextOrRender
  description?: TextOrRender
}

export interface FeatureItemUi {
  root?: string
  tile?: string
  body?: string
  title?: string
  description?: string
}

const props = withDefaults(defineProps<FeatureItem & {
  orientation?: 'horizontal' | 'vertical'
  class?: string
  ui?: FeatureItemUi
}>(), {
  orientation: 'horizontal',
})

const iconTile = computed<IconTileProps>(() => ({
  size: 'lg',
  ...(typeof props.icon === 'string' ? { icon: props.icon } : props.icon),
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
