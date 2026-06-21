<template>
  <footer class="bg-primary-950 text-muted-inverted">
    <UContainer>
      <div class="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand + blurb -->
        <div class="lg:col-span-1">
          <!-- PLACEHOLDER: replace wordmark with logo image -->
          <span class="font-display font-black text-2xl tracking-tight text-inverted">{{ site.name }}</span>
          <p class="mt-4 text-sm text-muted-inverted max-w-xs">
            {{ site.blurb }}
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a v-if="site.social.facebook" :href="site.social.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="inline-flex items-center justify-center size-9 rounded-full bg-surface-soft-inverted text-toned-inverted transition-colors hover:bg-surface-strong-inverted hover:text-inverted">
              <UIcon name="i-fa6-brands-facebook" class="size-4" />
            </a>
            <a v-if="site.social.instagram" :href="site.social.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="inline-flex items-center justify-center size-9 rounded-full bg-surface-soft-inverted text-toned-inverted transition-colors hover:bg-surface-strong-inverted hover:text-inverted">
              <UIcon name="i-fa6-brands-instagram" class="size-4" />
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <div v-for="col in footerCols" :key="col.title">
          <h6 class="text-inverted mb-4">{{ col.title }}</h6>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink :to="link.href" class="text-sm text-muted-inverted transition-colors hover:text-inverted">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h6 class="text-inverted mb-4">Get in touch</h6>
          <ul class="space-y-3 text-sm text-muted-inverted">
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-phone" class="size-4 mt-0.5 text-primary-400 shrink-0" />
              <a :href="site.phone.href" class="transition-colors hover:text-inverted">{{ site.phone.display }}</a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-envelope" class="size-4 mt-0.5 text-primary-400 shrink-0" />
              <a :href="`mailto:${site.email}`" class="transition-colors hover:text-inverted">{{ site.email }}</a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-location-dot" class="size-4 mt-0.5 text-primary-400 shrink-0" />
              <span>{{ site.serviceArea }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col gap-3 border-t border-soft-inverted py-6 text-xs text-dimmed-inverted sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm">&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <div class="flex items-center gap-5">
          <NuxtLink to="#" class="transition-colors hover:text-inverted">Privacy Policy</NuxtLink>
          <NuxtLink to="#" class="transition-colors hover:text-inverted">Terms</NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const { site } = useAppConfig()
const year = new Date().getFullYear()

const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Service One', href: '/services' },
      { label: 'Service Two', href: '/services' },
      { label: 'Service Three', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Our Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]
</script>
