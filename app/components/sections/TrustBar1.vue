<template>
  <UPageSection
    :ui="{
      container: 'py-8 lg:py-6',
    }"
  >
    <div class="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
      <div class="inline-flex items-center gap-2">
        <UIcon name="i-logos-google-icon" class="size-4 shrink-0" />
        <span class="inline-flex items-center gap-1.5 leading-none">
          <UiGoogleStars :rating="Number(site.rating)" size="md" />
          <span class="translate-y-px text-sm font-semibold tabular-nums text-default">{{ site.rating }}</span>
        </span>
      </div>

      <div class="h-px w-16 bg-accented lg:h-8 lg:w-px" />

      <UiList
        orientation="horizontal"
        :items="props.items"
        :icon="{ size: 'md' }"
        :ui="{
          root: 'justify-center gap-x-8 gap-y-3',
          label: 'font-semibold text-default',
        }"
      />
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
import type { ListItem } from '../ui/List.vue'

const { site } = useAppConfig()

const props = defineProps<{
  items: ListItem[]
}>()
</script>
