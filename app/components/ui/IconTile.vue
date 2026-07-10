<template>
  <span :class="ui.root({ class: [props.ui?.root, props.class] })">
    <UIcon :name="props.icon" :class="ui.icon({ class: props.ui?.icon })" />
  </span>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'

type Variant = 'soft' | 'solid' | 'naked'
type Color = 'primary' | 'cta' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'neutral'
type Size = 'sm' | 'md' | 'lg'

export interface IconTileUi {
  root?: string
  icon?: string
}

export interface IconTileProps {
  icon: string
  variant?: Variant
  color?: Color
  inverted?: boolean
  size?: Size
  class?: string
  ui?: IconTileUi
}

const props = withDefaults(defineProps<IconTileProps>(), {
  variant: 'soft',
  color: 'primary',
  inverted: false,
  size: 'md',
})

// token pairs are spelled out per compound so the Tailwind scanner sees every literal class name
const theme = tv({
  slots: {
    root: 'inline-flex items-center justify-center rounded-md',
    icon: '',
  },
  variants: {
    size: {
      sm: { root: 'size-8', icon: 'size-4' },
      md: { root: 'size-10', icon: 'size-5' },
      lg: { root: 'size-12', icon: 'size-6' },
    },
    color: { primary: '', cta: '', secondary: '', info: '', success: '', warning: '', error: '', neutral: '' },
    variant: { soft: '', solid: '', naked: '' },
    inverted: { true: '', false: '' },
  },
  compoundVariants: [
    { color: 'primary', variant: 'soft', inverted: false, class: { root: 'bg-primary-soft text-primary' } },
    { color: 'primary', variant: 'solid', inverted: false, class: { root: 'bg-primary text-inverted' } },
    { color: 'cta', variant: 'soft', inverted: false, class: { root: 'bg-cta-soft text-cta' } },
    { color: 'cta', variant: 'solid', inverted: false, class: { root: 'bg-cta text-inverted' } },
    { color: 'secondary', variant: 'soft', inverted: false, class: { root: 'bg-secondary-50 text-secondary' } },
    { color: 'secondary', variant: 'solid', inverted: false, class: { root: 'bg-secondary text-inverted' } },
    { color: 'info', variant: 'soft', inverted: false, class: { root: 'bg-info-50 text-info' } },
    { color: 'info', variant: 'solid', inverted: false, class: { root: 'bg-info text-inverted' } },
    { color: 'success', variant: 'soft', inverted: false, class: { root: 'bg-success-50 text-success' } },
    { color: 'success', variant: 'solid', inverted: false, class: { root: 'bg-success text-inverted' } },
    { color: 'warning', variant: 'soft', inverted: false, class: { root: 'bg-warning-50 text-warning' } },
    { color: 'warning', variant: 'solid', inverted: false, class: { root: 'bg-warning text-inverted' } },
    { color: 'error', variant: 'soft', inverted: false, class: { root: 'bg-error-50 text-error' } },
    { color: 'error', variant: 'solid', inverted: false, class: { root: 'bg-error text-inverted' } },

    { color: 'primary', variant: 'soft', inverted: true, class: { root: 'bg-primary-soft-inverted text-primary-solid-inverted' } },
    { color: 'primary', variant: 'solid', inverted: true, class: { root: 'bg-primary text-inverted' } },
    { color: 'cta', variant: 'soft', inverted: true, class: { root: 'bg-cta-soft-inverted text-cta-solid-inverted' } },
    { color: 'cta', variant: 'solid', inverted: true, class: { root: 'bg-cta text-inverted' } },
    { color: 'secondary', variant: 'soft', inverted: true, class: { root: 'bg-secondary/15 text-secondary-300' } },
    { color: 'secondary', variant: 'solid', inverted: true, class: { root: 'bg-secondary text-inverted' } },
    { color: 'info', variant: 'soft', inverted: true, class: { root: 'bg-info/15 text-info-300' } },
    { color: 'info', variant: 'solid', inverted: true, class: { root: 'bg-info text-inverted' } },
    { color: 'success', variant: 'soft', inverted: true, class: { root: 'bg-success/15 text-success-300' } },
    { color: 'success', variant: 'solid', inverted: true, class: { root: 'bg-success text-inverted' } },
    { color: 'warning', variant: 'soft', inverted: true, class: { root: 'bg-warning/15 text-warning-300' } },
    { color: 'warning', variant: 'solid', inverted: true, class: { root: 'bg-warning text-inverted' } },
    { color: 'error', variant: 'soft', inverted: true, class: { root: 'bg-error/15 text-error-300' } },
    { color: 'error', variant: 'solid', inverted: true, class: { root: 'bg-error text-inverted' } },

    { color: 'neutral', variant: 'soft', inverted: false, class: { root: 'bg-elevated text-default' } },
    { color: 'neutral', variant: 'solid', inverted: false, class: { root: 'bg-inverted text-inverted' } },
    { color: 'neutral', variant: 'soft', inverted: true, class: { root: 'bg-surface-soft-inverted text-inverted' } },
    { color: 'neutral', variant: 'solid', inverted: true, class: { root: 'bg-default text-default' } },
    { color: 'neutral', variant: 'naked', inverted: false, class: { root: 'text-default' } },
    { color: 'neutral', variant: 'naked', inverted: true, class: { root: 'text-inverted' } },

    // naked entries stay last so bg-transparent wins the twMerge against the pairs above
    { color: 'primary', variant: 'naked', inverted: false, class: { root: 'text-primary' } },
    { color: 'cta', variant: 'naked', inverted: false, class: { root: 'text-cta' } },
    { color: 'secondary', variant: 'naked', inverted: false, class: { root: 'text-secondary' } },
    { color: 'info', variant: 'naked', inverted: false, class: { root: 'text-info' } },
    { color: 'success', variant: 'naked', inverted: false, class: { root: 'text-success' } },
    { color: 'warning', variant: 'naked', inverted: false, class: { root: 'text-warning' } },
    { color: 'error', variant: 'naked', inverted: false, class: { root: 'text-error' } },
    { color: 'primary', variant: 'naked', inverted: true, class: { root: 'text-primary-solid-inverted' } },
    { color: 'cta', variant: 'naked', inverted: true, class: { root: 'text-cta-solid-inverted' } },
    { color: 'secondary', variant: 'naked', inverted: true, class: { root: 'text-secondary-300' } },
    { color: 'info', variant: 'naked', inverted: true, class: { root: 'text-info-300' } },
    { color: 'success', variant: 'naked', inverted: true, class: { root: 'text-success-300' } },
    { color: 'warning', variant: 'naked', inverted: true, class: { root: 'text-warning-300' } },
    { color: 'error', variant: 'naked', inverted: true, class: { root: 'text-error-300' } },
    { variant: 'naked', size: 'sm', class: { root: 'size-4' } },
    { variant: 'naked', size: 'md', class: { root: 'size-5' } },
    { variant: 'naked', size: 'lg', class: { root: 'size-6' } },
    { variant: 'naked', class: { root: 'rounded-none bg-transparent', icon: 'size-full' } },
  ],
})

const ui = computed(() => theme({
  size: props.size,
  color: props.color,
  variant: props.variant,
  inverted: props.inverted,
}))
</script>
