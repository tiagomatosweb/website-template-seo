<template>
  <div :class="overlay ? '' : 'contents'">
    <header
      class="z-50 lg:z-60 transition-colors duration-300"
      :class="[
        overlay
          ? 'fixed inset-x-0 top-0'
          : 'sticky top-0 bg-default border-b border-default animate-header-shadow [animation-timeline:scroll(root)] [animation-range:10px_11px] lg:[animation-range:44px_45px]',
        overlay && !solid ? 'bg-transparent' : '',
        overlay && solid ? 'bg-default shadow-sm' : '',
      ]"
    >
      <UContainer>
        <div class="flex items-center justify-between gap-4 min-h-16">
          <div class="flex items-center gap-5 min-w-0">
            <Logo :light="light" size="sm" class="lg:hidden" />
            <Logo :light="light" class="hidden lg:flex" />
            <UNavigationMenu
              class="hidden lg:flex"
              :items="navItems"
              content-orientation="vertical"
              disable-hover-trigger
              :ui="light ? lightMenuUi : undefined"
            />
          </div>

          <div class="flex items-center shrink-0">
            <div class="hidden lg:flex items-center gap-5">
              <a :href="site.phone.href" class="group flex items-center gap-2 py-0.5">
                <UIcon name="i-fa6-solid-phone" class="size-3.5 shrink-0 transition-colors duration-150" :class="light ? 'text-inverted group-hover:text-primary-300' : 'text-highlighted'" />
                <span class="font-display font-semibold text-base tracking-normal tabular-nums transition-colors duration-150" :class="light ? 'text-inverted group-hover:text-primary-300' : 'text-highlighted group-hover:text-primary'">{{ site.phone.display }}</span>
              </a>
              <UButton v-bind="quoteCta({ trailingIcon: undefined, class: 'whitespace-nowrap' })" />
            </div>

            <div class="flex items-center gap-3 lg:hidden">
              <a :href="site.phone.href" class="inline-flex items-center gap-1.5 font-display font-extrabold text-base tabular-nums transition-colors duration-150" :class="light ? 'text-inverted' : 'text-highlighted hover:text-primary'">
                <UIcon name="i-fa6-solid-phone" class="size-3.5 shrink-0" />
                Call
              </a>

              <USlideover
                v-model:open="menuOpen"
                title="Menu"
                side="right"
                :close="{ ui: { leadingIcon: 'size-5' } }"
              >
                <UButton
                  icon="i-fa6-solid-bars"
                  color="neutral"
                  variant="ghost"
                  size="xl"
                  aria-label="Open navigation menu"
                  :ui="{ leadingIcon: 'size-7', base: light ? 'text-inverted hover:bg-surface-soft-inverted' : '' }"
                />

                <template #body>
                  <UNavigationMenu
                    v-model="openGroup"
                    :items="mobileNavItems"
                    orientation="vertical"
                    type="single"
                    @select="onMobileSelect"
                  />
                </template>

                <template #footer>
                  <div class="flex w-full flex-col items-stretch gap-3">
                    <UButton
                      v-bind="quoteCta({ size: 'xl', block: true, class: 'justify-center' })"
                      @click="closeMenu"
                    />
                    <UButton
                      v-bind="callCta({ label: 'Call now', size: 'xl', block: true, class: 'justify-center' })"
                      @click="closeMenu"
                    />
                  </div>
                </template>
              </USlideover>
            </div>
          </div>
        </div>
      </UContainer>
    </header>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const props = withDefaults(defineProps<{
  overlay?: boolean
}>(), {
  overlay: false,
})

const { site } = useAppConfig()

const baseNavItems: NavigationMenuItem[] = [
  {
    label: 'Services',
    children: [
      { label: 'Lead Generation', to: '#' },
      { label: 'Paid Advertising', to: '#' },
      { label: 'SEO & Content', to: '#' },
      { label: 'Email & Automation', to: '#' },
      { label: 'Analytics & CRO', to: '#' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'SaaS & Technology', to: '#' },
      { label: 'Professional Services', to: '#' },
      { label: 'E-commerce & Retail', to: '#' },
      { label: 'Home & Trade Services', to: '#' },
      { label: 'Healthcare & Wellness', to: '#' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Case Studies', to: '#' },
      { label: 'Growth Playbooks', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'Free Marketing Audit', to: '#' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', to: '#' },
      { label: 'Our Team', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Contact', to: '#contact' },
    ],
  },
]

const route = useRoute()

const { y } = useWindowScroll()
const solid = computed(() => y.value > 24)
const light = computed(() => props.overlay && !solid.value)

const activeParentLabel = computed(() => {
  const path = route.path.replace(/\/$/, '')
  return baseNavItems.find(item =>
    [item, ...(item.children ?? [])].some(
      n => n.to && path === String(n.to).replace(/\/$/, ''),
    ),
  )?.label
})

const navItems = computed<NavigationMenuItem[]>(() =>
  baseNavItems.map(({ to, ...item }) => {
    const active = item.label === activeParentLabel.value
    return {
      ...item,
      ...(item.children?.length ? {} : { to }),
      value: item.label,
      active,
      ...(active && light.value ? { class: 'before:bg-white/12!' } : {}),
    }
  }),
)

const mobileNavItems = computed<NavigationMenuItem[]>(() =>
  navItems.value.map(item =>
    item.children?.length ? { ...item, active: false } : item,
  ),
)

const lightMenuUi = {
  link: 'text-inverted! hover:text-inverted! data-[state=open]:text-inverted! before:bg-white/0 hover:before:bg-white/12! data-[state=open]:before:bg-white/12!',
  linkTrailingIcon: 'text-inverted!',
  linkLeadingIcon: 'text-inverted!',
}

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}

const openGroup = ref<string | undefined>(activeParentLabel.value)
watch(activeParentLabel, value => (openGroup.value = value))
watch(menuOpen, open => {
  if (open) openGroup.value = activeParentLabel.value
})

const onMobileSelect = (_e: Event, item: NavigationMenuItem) => {
  if (!item.children?.length) menuOpen.value = false
}
</script>
