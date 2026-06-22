<template>
  <span :class="rootClass">
    <UIcon :name="props.icon" :class="iconSizeClass" />
  </span>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

// IconTile — the square that holds a leading icon (Control radius, rounded-md).
// Structure lives here; color comes from the soft/solid brand-value pairs.
// Pick a `variant` (emphasis) + `tone` (color); `inverted` for dark sections.
//   <UiIconTile icon="i-fa6-solid-bolt" />                    // soft primary (default)
//   <UiIconTile icon="..." variant="solid" tone="cta" />
//   <UiIconTile icon="..." variant="soft" inverted />         // on a dark section
// Pass extra classes (group-hover, shrink-0, margins) via `class`; they're
// merged last-wins with twMerge, so e.g. `size-14` overrides the size prop.
type Variant = 'soft' | 'solid' | 'muted' | 'fill'
type Tone = 'primary' | 'cta' | 'neutral'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  icon: string
  variant?: Variant
  tone?: Tone
  inverted?: boolean
  size?: Size
  class?: string
}>(), {
  variant: 'soft',
  tone: 'primary',
  inverted: false,
  size: 'md',
})

const sizeClass = { sm: 'size-10', md: 'size-12', lg: 'size-14' }
const iconSizeClass = computed(() => ({ sm: 'size-5', md: 'size-6', lg: 'size-7' }[props.size]))

// Static lookup of the bg+text token PAIR — no string interpolation, so the
// pairs are explicit and the Tailwind scanner sees every literal class name.
// `fill` and tone `neutral` collapse to the neutral surface pair.
const COLOR_PAIRS = {
  // `solid` uses Nuxt UI's own bg-primary/text-primary (= -500); soft/muted tiles
  // take the strong brand icon color (text-primary / text-cta) on the pale tile.
  light: {
    primary: { soft: 'bg-primary-soft text-primary', muted: 'bg-primary-muted text-primary', solid: 'bg-primary text-inverted' },
    cta: { soft: 'bg-cta-soft text-cta', muted: 'bg-cta-muted text-cta', solid: 'bg-cta text-inverted' },
    neutral: 'bg-elevated text-default',
  },
  dark: {
    primary: { soft: 'bg-primary-soft-inverted text-primary-solid-inverted', muted: 'bg-primary-muted-inverted text-primary-solid-inverted', solid: 'bg-primary text-inverted' },
    cta: { soft: 'bg-cta-soft-inverted text-cta-solid-inverted', muted: 'bg-cta-muted-inverted text-cta-solid-inverted', solid: 'bg-cta text-inverted' },
    neutral: 'bg-surface-soft-inverted text-inverted',
  },
} as const

const colorClass = computed(() => {
  const mode = props.inverted ? 'dark' : 'light'
  // `fill` and tone `neutral` both collapse to the neutral surface pair.
  if (props.variant === 'fill' || props.tone === 'neutral') return COLOR_PAIRS[mode].neutral
  // here props.variant is narrowed to 'soft' | 'muted' | 'solid'
  const tone = COLOR_PAIRS[mode][props.tone] as Record<'soft' | 'muted' | 'solid', string>
  return tone[props.variant]
})

// twMerge resolves conflicts last-wins, so a caller's `class` (e.g. size-14,
// mb-6, shrink-0, group-hover:*) overrides the defaults cleanly.
const rootClass = computed(() =>
  twMerge(
    'inline-flex items-center justify-center rounded-md',
    sizeClass[props.size],
    colorClass.value,
    props.class,
  ),
)
</script>
