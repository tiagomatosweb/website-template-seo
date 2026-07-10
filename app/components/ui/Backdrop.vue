<template>
  <div :class="ui.root({ class: props.ui?.root })">
    <img
      v-if="props.src"
      :src="props.src"
      :alt="props.alt"
      :loading="props.loading"
      :class="ui.image({ class: props.ui?.image })"
    >
    <div :class="ui.overlay({ class: props.ui?.overlay })" :style="overlayVars">
      <slot name="overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv } from 'tailwind-variants'

type Color = 'neutral' | 'primary'

export interface BackdropUi {
  root?: string
  image?: string
  overlay?: string
}

const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  loading?: 'eager' | 'lazy'
  color?: Color
  ui?: BackdropUi
}>(), {
  alt: '',
  loading: 'lazy',
  color: 'neutral',
})

const COLOR: Record<Color, string> = {
  neutral: 'var(--color-neutral-950)',
  primary: 'var(--color-primary-950)',
}

const hasOverlaySlot = computed(() => !!useSlots().overlay)

const overlayVars = computed(() =>
  hasOverlaySlot.value ? undefined : { '--bd-from': COLOR[props.color] },
)

const theme = tv({
  slots: {
    root: 'absolute inset-0 -z-10 pointer-events-none',
    image: 'absolute inset-y-0 left-0 h-full w-full object-cover object-center',
    overlay: 'absolute inset-0',
  },
  variants: {
    default: {
      true: { overlay: 'bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,color-mix(in_srgb,var(--bd-from)_25%,transparent)_100%),linear-gradient(180deg,color-mix(in_srgb,var(--bd-from)_88%,transparent)_0%,color-mix(in_srgb,var(--bd-from)_74%,transparent)_50%,color-mix(in_srgb,var(--bd-from)_88%,transparent)_100%)]' },
    },
  },
})

const ui = computed(() => theme({ default: !hasOverlaySlot.value }))
</script>
