<template>
  <footer id="contact" class="bg-neutral-950 text-muted-inverted" role="contentinfo">
    <UContainer>
      <div class="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <Logo light />
          <p class="mt-4 max-w-xs text-sm leading-loose text-muted-inverted">
            {{ site.description }}
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a v-if="site.social.facebook" :href="site.social.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="inline-flex size-9 items-center justify-center rounded-full bg-surface-soft-inverted text-toned-inverted transition-colors hover:bg-surface-strong-inverted hover:text-inverted">
              <UIcon name="i-fa6-brands-facebook" class="size-4" />
            </a>
            <a v-if="site.social.instagram" :href="site.social.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="inline-flex size-9 items-center justify-center rounded-full bg-surface-soft-inverted text-toned-inverted transition-colors hover:bg-surface-strong-inverted hover:text-inverted">
              <UIcon name="i-fa6-brands-instagram" class="size-4" />
            </a>
          </div>
        </div>

        <div v-for="col in footerCols" :key="col.title">
          <h6 class="mb-4 text-inverted">{{ col.title }}</h6>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink :to="link.href" class="text-sm text-muted-inverted transition-colors hover:text-inverted">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h6 class="mb-4 text-inverted">Get in touch</h6>
          <ul class="space-y-3 text-sm text-muted-inverted">
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-phone" class="mt-0.5 size-4 shrink-0 text-primary-400" />
              <a :href="site.phone.href" class="transition-colors hover:text-inverted">{{ site.phone.display }}</a>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-clock" class="mt-0.5 size-4 shrink-0 text-primary-400" />
              <span>Mon–Fri 8am–5pm</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-fa6-solid-shield-halved" class="mt-0.5 size-4 shrink-0 text-primary-400" />
              <span>Fully licensed &amp; insured</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center gap-3 border-t border-soft-inverted py-6 text-center text-xs text-dimmed-inverted sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p class="text-sm">&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <div class="flex items-center gap-5">
          <NuxtLink to="/privacy-policy" class="transition-colors hover:text-inverted">Privacy Policy</NuxtLink>
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
    title: 'Explore',
    links: [
      { label: 'Reviews', href: '#reviews' },
      { label: 'Service Areas', href: '#areas' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Get a Quote', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]
</script>
