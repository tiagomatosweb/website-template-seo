<template>
  <component :is="as" :class="ui.title({ class: props.class })">
    <slot />
  </component>
</template>

<script setup lang="ts">
import theme from '#build/ui/page-section'
import { tv } from '@nuxt/ui/utils/tv'

const props = withDefaults(defineProps<{ as?: string; class?: string }>(), { as: 'h2' })

const appConfig = useAppConfig()
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageSection || {}) })())
</script>
