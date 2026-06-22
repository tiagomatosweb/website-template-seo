<template>
  <UPageSection
    id="services"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <!-- Seamless grid panel — no double border. Divider logic lives on the GRID
         via responsive child selectors (columns change per breakpoint, so the
         "last in row" rule must too):
           · all cells get border-r + border-b (internal hairlines)
           · last column gets NO border-r — per breakpoint: every cell (1 col,
             mobile), every 2nd (sm), every 3rd (lg)
           · last row gets NO border-b (last :nth child group, per col count)
         The wrapper ring is then the single outer edge — nothing stacks. -->
    <div class="overflow-hidden rounded-2xl ring ring-default">
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3
          *:border-default *:border-b
          [&>*:last-child]:border-b-0
          sm:*:border-r
          sm:[&>*:nth-child(2n)]:border-r-0
          sm:[&>*:nth-last-child(-n+2)]:border-b-0
          lg:[&>*:nth-child(2n)]:border-r
          lg:[&>*:nth-child(3n)]:border-r-0
          lg:[&>*:nth-last-child(-n+3)]:border-b-0"
      >
        <UPageCard
          v-for="(service, i) in services"
          :key="service.title"
          as="article"
          :title="service.title"
          :description="service.description"
          :ui="{
            // ring-0 (no per-card box) — dividers come from the grid selectors above.
            // These seamless cells deliberately DON'T lift (it'd pull a cell out of
            // the joined grid); a flat bg-tint is the hover cue instead.
            root: i === 0
              ? 'rounded-none ring-0 bg-primary-soft'
              : 'rounded-none ring-0 bg-default transition-colors hover:bg-elevated/50',
            container: 'flex h-full flex-col',
            body: 'flex-1',
          }"
        >
          <template #leading>
            <UiIconTile :icon="service.icon" :variant="i === 0 ? 'solid' : 'soft'" />
          </template>

          <template #footer>
            <UButton
              :label="service.cta.label"
              :to="service.cta.to"
              variant="soft"
              size="xs"
              color="primary"
              trailing-icon="i-fa6-solid-arrow-right"
            />
          </template>
        </UPageCard>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
  cta: { label: string, to: string }
}

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  services?: Service[]
}>(), {
  headline: 'Core services',
  title: 'Everything we do, under one roof',
  description: 'One team for repairs, replacements, servicing and emergencies — across your local area.',
  services: () => [
    {
      icon: 'i-fa6-solid-fire-flame-curved',
      title: 'Emergency Hot Water Repairs',
      description: 'Same-day response when your hot water fails. We diagnose and fix the fault fast, with parts on the van and no call-out fee.',
      cta: { label: 'View Emergency Repairs', to: '#contact' },
    },
    {
      icon: 'i-fa6-solid-screwdriver-wrench',
      title: 'System Installations',
      description: 'Expert installation of gas, electric, heat pump and solar systems — with honest sizing advice and a fully guaranteed fit-out.',
      cta: { label: 'View Installations', to: '#contact' },
    },
    {
      icon: 'i-fa6-solid-arrows-rotate',
      title: 'Replacements & Upgrades',
      description: 'Old unit past its best? We help you choose the right replacement and have it swapped over the same day where possible.',
      cta: { label: 'View Replacements', to: '#contact' },
    },
    {
      icon: 'i-fa6-solid-gauge-high',
      title: 'Servicing & Maintenance',
      description: 'Regular servicing to keep your system running efficiently, extend its life and catch small problems before they become big ones.',
      cta: { label: 'View Servicing', to: '#contact' },
    },
    {
      icon: 'i-fa6-solid-faucet-drip',
      title: 'Leak & Valve Repairs',
      description: 'From leaking tanks to faulty tempering and pressure valves, we fix the small faults that waste water and drive up your bills.',
      cta: { label: 'View Leak Repairs', to: '#contact' },
    },
    {
      icon: 'i-fa6-solid-building',
      title: 'Commercial & Strata',
      description: 'Dedicated service for property managers and strata — priority response, reliable scheduling and direct invoicing.',
      cta: { label: 'View Commercial', to: '#contact' },
    },
  ],
})

const services = computed(() => props.services)
</script>
