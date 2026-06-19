<template>
  <UPageSection
    id="services"
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <!-- Seamless gapless grid: one ringed panel, cells divided by hairlines
         (1px gap revealing the muted background) — not separate gutter-spaced cards. -->
    <div class="overflow-hidden rounded-2xl ring ring-default">
      <div class="grid gap-px bg-muted sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="(service, i) in services"
          :key="service.title"
          as="article"
          :ui="{
            root: i === 0 ? 'rounded-none bg-primary-50' : 'rounded-none bg-default transition-colors hover:bg-elevated/50',
            body: 'flex h-full flex-col',
          }"
        >
          <span
            class="icon-tile mb-6 size-12"
            :class="i === 0 ? 'bg-primary text-white' : 'bg-primary-50 text-primary'"
          >
            <UIcon :name="service.icon" class="size-6" />
          </span>

          <h4>{{ service.title }}</h4>
          <p class="mt-3 flex-1 text-sm text-toned">{{ service.description }}</p>

          <UButton
            :label="service.cta.label"
            :to="service.cta.to"
            variant="link"
            color="primary"
            trailing-icon="i-fa6-solid-arrow-right"
            class="mt-6 self-start px-0 font-display font-bold"
          />
        </UCard>
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
