<template>
  <div :class="ui.headline({ class: props.class })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import theme from '#build/ui/page-section'
import { tv } from '@nuxt/ui/utils/tv'

const props = defineProps<{ class?: string }>()

const appConfig = useAppConfig()
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageSection || {}) })({ headline: true }))
</script>
