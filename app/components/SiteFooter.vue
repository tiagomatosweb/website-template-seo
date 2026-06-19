<template>
  <footer class="bg-primary-950 text-white/70">
    <UContainer>
      <div class="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand + blurb -->
        <div class="lg:col-span-1">
          <!-- PLACEHOLDER: replace wordmark with logo image -->
          <span class="font-display font-black text-2xl tracking-tight text-white">Business<span class="text-primary-400">Name</span></span>
          <p class="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            <!-- PLACEHOLDER: short company blurb -->
            A short sentence about the business, the area it serves and what makes it the trusted local choice.
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center size-9 rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white">
              <UIcon name="i-fa6-brands-facebook" class="size-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center size-9 rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white">
              <UIcon name="i-fa6-brands-instagram" class="size-4" />
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <div v-for="col in footerCols" :key="col.title">
          <h3 class="font-display font-bold text-sm tracking-widest uppercase text-white mb-4">{{ col.title }}</h3>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink :to="link.href" class="text-sm text-white/60 transition-colors hover:text-white">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-display font-bold text-sm tracking-widest uppercase text-white mb-4">Get in touch</h3>
          <ul class="space-y-3 text-sm text-white/60">
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-phone" class="size-4 mt-0.5 text-primary-400 shrink-0" />
              <!-- PLACEHOLDER: phone -->
              <a href="tel:0000000000" class="transition-colors hover:text-white">00 0000 0000</a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-envelope" class="size-4 mt-0.5 text-primary-400 shrink-0" />
              <!-- PLACEHOLDER: email -->
              <a href="mailto:hello@example.com" class="transition-colors hover:text-white">hello@example.com</a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-location-dot" class="size-4 mt-0.5 text-primary-400 shrink-0" />
              <!-- PLACEHOLDER: address / service area -->
              <span>Serving your local area</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} BusinessName. All rights reserved.</p>
        <div class="flex items-center gap-5">
          <NuxtLink to="#" class="transition-colors hover:text-white">Privacy Policy</NuxtLink>
          <NuxtLink to="#" class="transition-colors hover:text-white">Terms</NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
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
