<template>
  <UPageSection id="areas" v-bind="sectionProps">
    <template v-if="headlineFn" #headline>
      <component :is="headlineFn" />
    </template>

    <template v-if="titleFn" #title>
      <component :is="titleFn" />
    </template>

    <template v-if="descriptionFn" #description>
      <component :is="descriptionFn" />
    </template>

    <template v-for="(_, name) in forwardedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>

    <template #body>
      <!-- Left column = tabs + description + suburbs (one stack); right = map. -->
      <div class="grid items-start gap-x-8 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div class="space-y-5">
          <div class="flex flex-wrap gap-1.5" role="tablist">
            <UButton
              v-for="(area, index) in props.areas"
              :key="area.name"
              :label="area.name"
              color="neutral"
              variant="outline"
              active-color="primary"
              active-variant="solid"
              :active="index === activeIndex"
              size="md"
              role="tab"
              @click="() => { activeIndex = index }"
            />
          </div>

          <p>
            {{ activeArea.description }}
          </p>

          <div class="flex flex-wrap gap-2 pt-2">
            <UBadge
              v-for="suburb in activeArea.suburbs"
              :key="suburb"
              :label="suburb"
              color="neutral"
              variant="outline"
              size="lg"
              class="rounded-full"
            />
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl ring ring-default bg-default p-3 sm:p-4">
          <div
            class="flex aspect-4/3 w-full items-center justify-center rounded-xl bg-elevated"
            role="img"
            :aria-label="`Map of the ${activeArea.name} service area`"
          >
            <UIcon name="i-fa6-solid-image" class="size-16 text-dimmed" />
          </div>
        </div>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
import type { PageSectionProps } from '@nuxt/ui'
import type { SectionText } from '~/composables/usePageSection'

export interface AreasArea {
  name: string
  description: string
  suburbs: string[]
}

const props = withDefaults(defineProps<Omit<PageSectionProps, 'headline' | 'title' | 'description'> & {
  headline?: SectionText
  title?: SectionText
  description?: SectionText
  areas: AreasArea[]
}>(), {
  headline: 'Coverage',
  title: 'Areas We Service',
})

const { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots } = usePageSection(props, ['areas'])

const activeIndex = ref(0)
const activeArea = computed(() => props.areas[activeIndex.value]!)
</script>
