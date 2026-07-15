<template>
  <div :class="['grid items-start gap-x-6 gap-y-6 lg:grid-cols-2', props.class]">
    <div class="space-y-5">
      <div class="flex flex-wrap gap-1.5" role="tablist">
        <UButton
          v-for="area in props.areas"
          :key="area.name"
          :label="area.name"
          color="neutral"
          variant="outline"
          active-color="primary"
          active-variant="solid"
          :active="area.name === activeValue"
          size="sm"
          role="tab"
          @click="() => { activeValue = area.name }"
        />
      </div>

      <component :is="activeArea.description" v-if="isRenderFn(activeArea.description)" />
      <p v-else>{{ activeArea.description }}</p>

      <div class="flex flex-wrap gap-2 pt-2">
        <UBadge
          v-for="suburb in activeArea.suburbs"
          :key="suburb"
          :label="suburb"
          color="neutral"
          variant="outline"
          size="sm"
          class="rounded-full"
        />
      </div>
    </div>

    <div class="overflow-hidden rounded-2xl ring ring-default bg-default p-3 sm:p-4">
      <div
        class="flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-xl bg-elevated"
        role="img"
        :aria-label="`Map of the ${activeArea.name} service area`"
      >
        <img
          v-if="activeArea.map"
          :src="activeArea.map"
          :alt="`Map of the ${activeArea.name} service area`"
          class="size-full object-cover"
        >
        <UIcon v-else name="i-fa6-solid-image" class="size-16 text-dimmed" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TextOrRender } from '~/utils/render'

export interface AreasArea {
  name: string
  description: TextOrRender
  suburbs: string[]
  map?: string
}

const props = defineProps<{
  areas: AreasArea[]
  defaultOpen?: string
  class?: string
}>()

const activeValue = ref(props.defaultOpen ?? props.areas[0]?.name)

const activeArea = computed(() =>
  props.areas.find(area => area.name === activeValue.value) ?? props.areas[0]!,
)
</script>
