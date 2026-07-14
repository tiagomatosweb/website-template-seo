<template>
  <span class="inline-flex items-center gap-1.5">
    <span class="inline-flex items-center gap-0.5">
      {{ site.google_rating }}
      <UIcon name="i-fa6-solid-star" class="size-3 text-star" />
    </span>
    {{ props.label }}
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
}>(), {
  label: 'on Google',
})

const { site } = useAppConfig()
</script>
