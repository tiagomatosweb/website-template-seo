<template>
  <div :class="overlay ? '' : 'relative'">
    <!-- ── TOP BAR — brand strip (desktop only, hidden in overlay mode) ── -->
    <div v-if="!overlay" id="top" class="hidden lg:block relative z-51 bg-primary text-white/80 border-b border-white/10">
      <UContainer>
        <div class="flex items-center justify-between gap-6 min-h-11">
          <span class="inline-flex items-center font-display font-semibold text-xs tracking-wide text-white/80">{{ site.tagline }}</span>
          <div class="flex items-center gap-3">
            <a v-if="site.social.facebook" :href="site.social.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="inline-flex items-center justify-center size-7 rounded-full text-white/80 transition-colors duration-150 hover:text-white hover:bg-white/12">
              <UIcon name="i-fa6-brands-facebook" class="size-4" />
            </a>
            <a v-if="site.social.instagram" :href="site.social.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="inline-flex items-center justify-center size-7 rounded-full text-white/80 transition-colors duration-150 hover:text-white hover:bg-white/12">
              <UIcon name="i-fa6-brands-instagram" class="size-4" />
            </a>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- anchor for "scroll to top" in overlay mode -->
    <span v-if="overlay" id="top" class="absolute top-0" />

    <!-- ── HEADER BAR (desktop only) ── -->
    <nav
      class="hidden lg:block z-60 transition-colors duration-300"
      :class="[
        overlay
          ? 'fixed inset-x-0 top-0'
          : 'relative z-50 bg-white border-b border-neutral-900/8 lg:sticky lg:top-0 lg:animate-header-shadow lg:[animation-timeline:scroll(root)] lg:[animation-range:44px_45px]',
        overlay && !solid ? 'bg-transparent' : '',
        overlay && solid ? 'bg-white shadow-sm' : '',
      ]"
    >
      <UContainer>
        <div class="flex items-center justify-between gap-8 min-h-22">
          <div class="flex items-center gap-10">
            <NuxtLink to="/" class="flex items-center">
              <!-- PLACEHOLDER: replace wordmark with logo image -->
              <span class="font-display font-black text-2xl tracking-tight" :class="light ? 'text-white' : 'text-neutral-900'">{{ site.name }}</span>
            </NuxtLink>
            <div class="flex items-center gap-8">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.href"
                :to="link.href"
                class="relative font-display font-bold text-sm tracking-wider py-1.5 transition-colors duration-150 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100"
                :class="light ? 'text-white/80 hover:text-white' : 'text-neutral-600 hover:text-primary'"
              >{{ link.label }}</NuxtLink>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <a :href="site.phone.href" class="group flex flex-col items-end leading-none text-right py-0.5">
              <span class="font-mono text-xs tracking-widest uppercase mb-1" :class="light ? 'text-white/65' : 'text-neutral-900/50'">Call Now</span>
              <span class="font-display font-extrabold text-2xl tracking-normal tabular-nums transition-colors duration-150" :class="light ? 'text-white group-hover:text-primary-300' : 'text-neutral-900 group-hover:text-primary'">{{ site.phone.display }}</span>
            </a>
            <UButton label="Get a Free Quote" color="cta" size="xl" to="#contact" />
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
          : 'sticky top-0 bg-white border-b border-neutral-900/8 animate-header-shadow [animation-timeline:scroll(root)] [animation-range:10px_11px]',
        overlay && !solid ? 'bg-transparent' : '',
        overlay && solid ? 'bg-white shadow-sm' : '',
      ]"
    >
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center shrink-0">
            <!-- PLACEHOLDER: replace wordmark with logo image -->
            <span class="font-display font-black text-xl tracking-tight" :class="light ? 'text-white' : 'text-neutral-900'">{{ site.name }}</span>
          </NuxtLink>

          <div class="flex items-center gap-3">
            <a :href="site.phone.href" class="inline-flex items-center gap-1.5 font-display font-extrabold text-base tabular-nums transition-colors duration-150" :class="light ? 'text-white' : 'text-neutral-900 hover:text-primary'">
              <UIcon name="i-fa6-solid-phone" class="size-3.5 shrink-0" />
              Call
            </a>

            <USlideover v-model:open="menuOpen" title="Menu" side="right">
              <UButton
                icon="i-fa6-solid-bars"
                color="neutral"
                variant="ghost"
                size="lg"
                aria-label="Open navigation menu"
                :class="light ? 'text-white hover:bg-white/10' : ''"
              />

              <template #body>
                <nav class="flex flex-col">
                  <NuxtLink
                    v-for="link in navLinks"
                    :key="link.href"
                    :to="link.href"
                    class="block py-3 text-base font-display font-bold tracking-widest uppercase text-neutral-900 border-b border-neutral-900/8 transition-colors duration-150 hover:text-primary"
                    @click="menuOpen = false"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </nav>
              </template>

              <template #footer>
                <UButton
                  label="Get a Free Quote"
                  color="cta"
                  size="xl"
                  to="#contact"
                  block
                  class="justify-center"
                  @click="menuOpen = false"
                />
              </template>
            </USlideover>
          </div>
        </div>
      </UContainer>
    </header>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  overlay?: boolean
}>(), {
  overlay: false,
})

const { site } = useAppConfig()

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const menuOpen = ref(false)

// In overlay mode the header floats transparent over the hero, then
// solidifies to white once the user scrolls past the threshold.
const solid = ref(false)
const light = computed(() => props.overlay && !solid.value)

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
