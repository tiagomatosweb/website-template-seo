<template>
  <div :class="overlay ? '' : 'contents'">
    <!-- anchor for "scroll to top" in overlay mode -->
    <span v-if="overlay" id="top" class="absolute top-0" />

    <!-- ── HEADER BAR (desktop only) ── -->
    <nav
      class="hidden lg:block z-60 transition-colors duration-300"
      :class="[
        overlay
          ? 'fixed inset-x-0 top-0'
          : 'relative z-50 bg-default border-b border-default lg:sticky lg:top-0 lg:animate-header-shadow lg:[animation-timeline:scroll(root)] lg:[animation-range:44px_45px]',
        overlay && !solid ? 'bg-transparent' : '',
        overlay && solid ? 'bg-default shadow-sm' : '',
      ]"
    >
      <UContainer>
        <div class="flex items-center justify-between gap-4 min-h-16">
          <div class="flex items-center gap-5 min-w-0">
            <Logo :light="light" />
            <UNavigationMenu
              :items="navItems"
              content-orientation="vertical"
              disable-hover-trigger
              :ui="light ? lightMenuUi : undefined"
            />
          </div>
          <div class="flex items-center gap-5 shrink-0">
            <a :href="site.phone.href" class="group flex items-center gap-2 py-0.5">
              <UIcon name="i-fa6-solid-phone" class="size-3.5 shrink-0 transition-colors duration-150" :class="light ? 'text-inverted group-hover:text-primary-300' : 'text-highlighted'" />
              <span class="font-display font-semibold text-base tracking-normal tabular-nums transition-colors duration-150" :class="light ? 'text-inverted group-hover:text-primary-300' : 'text-highlighted group-hover:text-primary'">{{ site.phone.display }}</span>
            </a>
            <UButton v-bind="quoteCta({ trailingIcon: undefined, class: 'whitespace-nowrap' })" />
          </div>
        </div>
      </UContainer>
    </nav>

    <!-- ── STICKY HEADER (mobile only) ── -->
    <header
      class="z-50 transition-colors duration-300 lg:hidden"
      :class="[
        overlay
          ? 'fixed inset-x-0 top-0'
          : 'sticky top-0 bg-default border-b border-default animate-header-shadow [animation-timeline:scroll(root)] [animation-range:10px_11px]',
        overlay && !solid ? 'bg-transparent' : '',
        overlay && solid ? 'bg-default shadow-sm' : '',
      ]"
    >
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <Logo :light="light" size="sm" />

          <div class="flex items-center gap-3">
            <a :href="site.phone.href" class="inline-flex items-center gap-1.5 font-display font-extrabold text-base tabular-nums transition-colors duration-150" :class="light ? 'text-inverted' : 'text-highlighted hover:text-primary'">
              <UIcon name="i-fa6-solid-phone" class="size-3.5 shrink-0" />
              Call
            </a>

            <USlideover
              v-model:open="menuOpen"
              title="Menu"
              side="right"
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
                  :items="navItems"
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

// Single source of truth for the header nav. Nested `children` render as a
// dropdown on desktop (horizontal) and an accordion in the mobile slideover.
// PLACEHOLDER nav: the child `to` values are '#' scaffolding. Replace each with
// the real route once the corresponding page exists. Top-level items with
// children are dropdown-only (their own `to` is dropped below), so only the
// child links navigate.
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

// In overlay mode the header floats transparent over the hero, then
// solidifies once the user scrolls past the threshold.
const solid = ref(false)
const light = computed(() => props.overlay && !solid.value)

// The parent whose own page or one of whose children matches the current route.
const activeParentLabel = computed(() => {
  const path = route.path.replace(/\/$/, '')
  return baseNavItems.find(item =>
    [item, ...(item.children ?? [])].some(
      n => n.to && path === String(n.to).replace(/\/$/, ''),
    ),
  )?.label
})

// Mark the matching parent active so the top-level item highlights even when a
// child page (not the parent itself) is the current route. Parent items with
// children drop their own `to`, so clicking only opens the dropdown/accordion
// instead of navigating to the parent landing page.
const navItems = computed<NavigationMenuItem[]>(() =>
  baseNavItems.map(({ to, ...item }) => {
    const active = item.label === activeParentLabel.value
    return {
      ...item,
      ...(item.children?.length ? {} : { to }),
      value: item.label,
      active,
      // In light mode `lightMenuUi`'s `text-inverted!` overrides the active
      // colour, so the active item would look identical to its siblings.
      // Give it a persistent wash to keep it distinguishable over the hero.
      ...(active && light.value ? { class: 'before:bg-white/12!' } : {}),
    }
  }),
)

// Over the dark hero the link text goes white; the underline already reads on dark.
const lightMenuUi = {
  link: 'text-inverted! hover:text-inverted! data-[state=open]:text-inverted! before:bg-white/0 hover:before:bg-white/12! data-[state=open]:before:bg-white/12!',
  linkTrailingIcon: 'text-inverted!',
  linkLeadingIcon: 'text-inverted!',
}

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

// Mobile accordion: open the group whose child is the current route.
const openGroup = ref<string | undefined>(activeParentLabel.value)
watch(activeParentLabel, value => (openGroup.value = value))
watch(menuOpen, open => {
  if (open) openGroup.value = activeParentLabel.value
})

// In the mobile slideover, close the menu when an actual link is tapped.
// Parent items (with children) just expand the accordion, so keep it open.
function onMobileSelect(_e: Event, item: NavigationMenuItem) {
  if (!item.children?.length) menuOpen.value = false
}

function onScroll() {
  solid.value = window.scrollY > 24
}

onMounted(() => {
  if (props.overlay) {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
