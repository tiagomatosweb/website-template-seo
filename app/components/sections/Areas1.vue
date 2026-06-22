<template>
  <UPageSection
    id="areas"
    class="bg-muted"
    :headline="props.headline"
    :title="props.title"
  >
    <!-- Left column = tabs + description + suburbs (one stack); right = map. -->
    <div class="grid items-start gap-x-8 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      <div class="space-y-5">
        <div class="flex flex-wrap gap-1.5" role="tablist">
          <UButton
            v-for="(area, index) in areas"
            :key="area.name"
            :label="area.name"
            color="neutral"
            variant="outline"
            active-color="primary"
            active-variant="solid"
            :active="index === activeIndex"
            size="md"
            role="tab"
            @click="activeIndex = index"
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
  </UPageSection>
</template>

<script setup lang="ts">
interface Area {
  name: string
  description: string
  suburbs: string[]
}

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  areas?: Area[]
}>(), {
  headline: 'Coverage',
  title: 'Areas We Service',
  areas: () => [
    {
      name: 'Eastern Suburbs',
      description: 'We cover the Eastern Suburbs across the Woollahra, Waverley and Randwick council areas, from Bondi and Coogee through to Maroubra, for fast hot water repairs, replacements and emergency callouts.',
      suburbs: [
        'Bellevue Hill', 'Bondi', 'Bondi Beach', 'Bondi Junction', 'Bronte',
        'Centennial Park', 'Chifley', 'Clovelly', 'Coogee', 'Darling Point',
        'Double Bay', 'Dover Heights', 'Edgecliff', 'Kensington', 'Kingsford',
        'La Perouse', 'Little Bay', 'Malabar', 'Maroubra', 'Matraville', 'North Bondi',
        'Paddington', 'Phillip Bay', 'Point Piper', 'Port Botany', 'Queens Park',
        'Randwick', 'Rose Bay', 'South Coogee', 'Tamarama', 'Vaucluse',
        'Watsons Bay', 'Waverley', 'Woollahra',
      ],
    },
    {
      name: 'Inner West',
      description: 'From Newtown and Marrickville out to Ashfield and Balmain, we service the Inner West with same-day hot water repairs and replacements.',
      suburbs: [
        'Annandale', 'Ashfield', 'Balmain', 'Camperdown', 'Dulwich Hill',
        'Enmore', 'Erskineville', 'Leichhardt', 'Lewisham', 'Marrickville',
        'Newtown', 'Petersham', 'Rozelle', 'Stanmore', 'Summer Hill', 'Tempe',
      ],
    },
    {
      name: 'St George',
      description: 'We cover the St George district from Hurstville through to Rockdale and Kogarah, with fast response times for hot water emergencies.',
      suburbs: [
        'Allawah', 'Arncliffe', 'Bexley', 'Brighton-Le-Sands', 'Carlton',
        'Hurstville', 'Kogarah', 'Mortdale', 'Oatley', 'Penshurst',
        'Ramsgate', 'Rockdale', 'Sans Souci', 'Sylvania',
      ],
    },
    {
      name: 'Sutherland Shire',
      description: 'Based locally, we reach every suburb across the Sutherland Shire — from Cronulla and Caringbah through to Engadine — usually within the hour.',
      suburbs: [
        'Caringbah', 'Cronulla', 'Engadine', 'Gymea', 'Kirrawee', 'Loftus',
        'Menai', 'Miranda', 'Sutherland', 'Sylvania Waters', 'Woolooware', 'Kurnell',
      ],
    },
    {
      name: 'Wollongong',
      description: 'We extend our hot water service south to Wollongong and the surrounding suburbs. Call us to confirm coverage for your location.',
      suburbs: [
        'Corrimal', 'Dapto', 'Fairy Meadow', 'Figtree', 'Gwynneville',
        'Keiraville', 'Mangerton', 'North Wollongong', 'Thirroul', 'Wollongong',
      ],
    },
  ],
})

const activeIndex = ref(0)
const activeArea = computed(() => props.areas[activeIndex.value]!)
</script>
