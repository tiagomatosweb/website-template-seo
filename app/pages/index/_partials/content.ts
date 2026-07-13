import { h } from 'vue'
import type { Review } from '~/components/sections/Reviews1.vue'
import type { Faq } from '~/components/sections/Faq1.vue'

export const content2 = {
  ghost: 'WORK',
  headline: 'What we do',
  title: 'Big jobs. Small jobs. Done right.',
  items: [
    { icon: 'i-fa6-solid-bolt', title: 'Emergency call-outs', description: 'Something gone wrong? We respond fast, day or night, and get you sorted the same day — no drama.', to: '#contact' },
    { icon: 'i-fa6-solid-wrench', title: 'Repairs & maintenance', description: 'Honest diagnosis, fixed right the first time.', to: '#contact' },
    { icon: 'i-fa6-solid-screwdriver-wrench', title: 'New installations', description: 'Quality fit-outs, fully guaranteed.', to: '#contact' },
    { icon: 'i-fa6-solid-building', title: 'Commercial & strata', description: 'Reliable support for businesses and buildings.', to: '#contact' },
    { icon: 'i-fa6-solid-clipboard-check', title: 'Inspections & advice', description: 'Clear recommendations, zero upselling.', to: '#contact' },
    { icon: 'i-fa6-solid-house', title: 'Residential service', description: 'Tidy, respectful work in homes across the area.', to: '#contact' },
  ],
}

export const content12 = {
  headline: 'Why choose us',
  title: 'Not your average tradies.',
  description: () => h('div', [
    h('p', 'We earned our reputation the hard way — one honest job at a time, for customers who called us back and told their neighbours.'),
    h('p', 'Fully licensed, fully insured, and upfront about the price before we start. No surprises on the invoice, no mess left behind.'),
  ]),
  items: [
    { icon: 'i-fa6-solid-shield-halved', title: 'Licensed & insured', description: 'Fully qualified, fully covered.' },
    { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Upfront pricing', description: 'The price we quote is the price you pay.' },
    { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We show up within the window we promise.' },
    { icon: 'i-fa6-solid-thumbs-up', title: 'Guaranteed work', description: 'Not right? We come back and fix it.' },
  ],
}

export const content10 = {
  headline: 'How it works',
  title: 'Four steps. Zero hassle.',
  description: 'From the first call to the final handshake — here is exactly what to expect.',
  items: [
    { icon: 'i-fa6-solid-phone', title: 'Get in touch', description: 'Call us or request a quote online. Tell us what you need and we will take it from there.' },
    { icon: 'i-fa6-solid-calendar-check', title: 'Book a time', description: 'We confirm a slot that suits you — often same or next day.' },
    { icon: 'i-fa6-solid-wrench', title: 'We get it done', description: 'Our team arrives on time and completes the work to a high standard, tidy and respectful.' },
    { icon: 'i-fa6-solid-face-smile', title: 'Job complete', description: 'Pay the price we quoted, backed by our workmanship guarantee. Simple.' },
  ],
}

export const content13 = {
  image: { alt: 'Recent project' },
  headline: 'Our capability',
  title: 'Managing complexity with care',
  description: 'Many of our projects involve existing structures, heritage conditions, or technical constraints. Our role is to coordinate these elements clearly, working closely with architects, engineers, and consultants.',
  items: [
    { label: 'Renovations & additions', description: 'Extensive experience working within existing homes, coordinating structural changes and upgrades while respecting what is already in place.' },
    { label: 'Heritage & complex builds', description: 'Proven experience across heritage-listed and technically complex projects, with careful coordination alongside consultants and approval authorities.' },
    { label: 'High-performance construction', description: 'Certified Passive House knowledge applied on site, supporting energy-efficient, comfortable homes through coordinated detailing and construction.' },
  ],
}

export const reviewsSection = {
  reviews: [
    {
      quote: 'Reliable, professional and they had our hot water back on the same day. Honest pricing and no surprises — exactly what you want when the hot water goes out.',
      name: 'Sarah M.',
      date: '3 weeks ago',
      rating: 5,
    },
    {
      quote: 'They explained exactly what our system needed and stuck to a clear quote. No pressure, no upselling — just a great job done properly.',
      name: 'James T.',
      date: '1 month ago',
      rating: 5,
    },
    {
      quote: 'The team knows hot water systems inside out. Our recurring problem is finally sorted for good. Worth every dollar for the peace of mind.',
      name: 'Priya K.',
      date: '1 month ago',
      rating: 5,
    },
    {
      quote: 'Fantastic service and fairly priced. The team turned up on time, were respectful of our home and left everything spotless. Highly recommend!',
      name: 'Celine M.',
      date: '2 months ago',
      rating: 5,
    },
  ] satisfies Review[],
}

export const faqs: Faq[] = [
  {
    label: 'How quickly will we see results?',
    content: 'Paid campaigns can start generating leads within days of launch. SEO and content build over three to six months. We chase the quick wins first while the longer-term channels compound.',
  },
  {
    label: 'Do you lock us into a long contract?',
    content: 'No. We work month to month with no long lock-ins. We would rather keep your business with results than with a contract.',
  },
  {
    label: 'How do you report on performance?',
    content: 'You get a live dashboard and a plain-English monthly report — leads, cost per lead and revenue. No vanity metrics, no surprise invoices.',
  },
  {
    label: 'Which channels do you cover?',
    content: 'Google and Meta ads, SEO and content, email and nurture, landing pages and CRO. Every channel covered — and we only recommend the ones that fit your goals.',
  },
  {
    label: 'How much does it cost?',
    content: 'It depends on scope and ad spend, but pricing is transparent: you get a clear proposal upfront and the price we quote is the price you pay.',
  },
  {
    label: 'Who will actually do the work?',
    content: 'Senior specialists do the work — no hand-offs to juniors. You get a dedicated team and a direct line to the people running your campaigns.',
  },
  {
    label: 'What happens if a channel underperforms?',
    content: 'We set clear targets together and review them monthly. If something is not performing we tell you, fix it, or move the budget to what is working.',
  },
]
