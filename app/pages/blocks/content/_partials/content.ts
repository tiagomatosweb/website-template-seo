import { h } from 'vue'
import { UButton } from '#components'
import type { ButtonProps } from '@nuxt/ui'
import UiList from '~/components/ui/List.vue'
import type { ListItem } from '~/components/ui/List.vue'
import type { ContentCardItem } from '~/components/ui/ContentCard.vue'
import placeholderImage from '~/assets/img/placeholder-image.png'
import samplePhoto from '~/assets/img/pexels-reneterp-13821194.jpg'

export const content1 = {
  headline: 'What we do',
  title: 'Growth services built around your goals',
  description: 'From lead generation to full-funnel campaigns, our team handles it all with transparent reporting and results you can measure.',
  items: [
    {
      icon: 'i-fa6-solid-bullseye',
      title: 'Lead generation',
      description: 'Qualified, sales-ready leads delivered to your pipeline — targeted, tracked and built to convert.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-magnifying-glass',
      title: 'SEO & content',
      description: 'Rank for the searches that matter and turn organic traffic into a predictable source of demand.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-bullhorn',
      title: 'Paid advertising',
      description: 'Google and Meta campaigns with no long lock-ins and ROI-focused spend that scales with your goals.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-envelope-open-text',
      title: 'Email & nurture',
      description: 'Automated, personalised sequences that turn cold leads into loyal customers.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-chart-line',
      title: 'Analytics & CRO',
      description: 'Data-driven testing and optimisation to squeeze more revenue from the traffic you already have.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-lightbulb',
      title: 'Strategy & advice',
      description: 'Clear, honest recommendations mapped to your goals — no jargon, no fluff.',
      to: '#',
      lift: true,
    },
  ],
}

export const content2 = {
  headline: 'What we do',
  title: 'Big campaigns. Quick wins. Real results.',
  description: 'From full-funnel lead generation to the quick wins in between, we build the campaigns that move your numbers — and show you exactly how.',
  items: [
    {
      icon: {
        icon: 'i-fa6-solid-rocket',
        inverted: true,
      },
      title: 'Full-funnel lead generation',
      description: 'Need more qualified leads, fast? Whatever the channel, our team builds, launches and optimises campaigns that fill your pipeline — often within weeks. No vanity metrics, no surprise invoices, just measurable growth you can take to the bank.',
      variant: 'solid',
      cta: {
        label: 'Book a strategy call',
        to: '#',
        color: 'cta',
        variant: 'solid',
        size: 'md',
      },
      ui: {
        root: 'sm:col-span-2 lg:row-span-2 sm:min-h-80 lg:p-10',
        container: 'lg:flex justify-center',
        wrapper: 'flex-none',
        title: 'text-3xl lg:text-4xl',
        description: 'text-lg mt-6',
        footer: 'pt-14',
      },
    },
    {
      icon: 'i-fa6-solid-magnifying-glass',
      title: 'SEO & content',
      description: 'Rank higher, get found, grow organically.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-bullhorn',
      title: 'Paid advertising',
      description: 'ROI-focused campaigns, fully managed.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-chart-line',
      title: 'Analytics & CRO',
      description: 'More conversions from the traffic you have.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-lightbulb',
      title: 'Strategy & advice',
      description: 'Clear recommendations, zero jargon.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-envelope-open-text',
      title: 'Email & nurture',
      description: 'Automated sequences that convert over time.',
      to: '#',
      lift: true,
    },
  ] satisfies ContentCardItem[],
}

// An italic intro line + a UiList of features, for the image-card body.
const featureBody = (intro: string, features: string[]) => () => h('div', [
  h('p', { class: 'text-sm italic text-primary' }, intro),
  h(UiList, { items: features, class: 'mt-4 text-sm' }),
])

const content3Cta: ButtonProps = {
  color: 'primary',
  variant: 'outline',
  size: 'md',
  block: true,
  trailingIcon: 'i-fa6-solid-arrow-right',
  class: 'justify-center',
}

// Footer spans the card so the block CTA button goes full-width.
const content3Ui = { footer: 'w-full' }

export const content3 = {
  headline: 'Scope of work',
  title: 'What do you need help with?',
  description: 'Whatever stage you are at, pick the engagement that fits — each one comes with clear deliverables and a team that owns the outcome.',
  items: [
    {
      image: { src: placeholderImage, bleed: true },
      title: 'Lead generation',
      description: featureBody('Pipeline running dry? Need leads now?', ['Qualified leads', 'No long lock-ins', 'Every channel covered', 'Tracked end-to-end']),
      cta: { ...content3Cta, label: 'Get leads now', to: '#' },
      ui: content3Ui,
      lift: true,
    },
    {
      image: { src: placeholderImage, bleed: true },
      title: 'Launches & campaigns',
      description: featureBody('Bringing something new to market?', ['End-to-end builds', 'Honest budget advice', 'Fully managed', 'Free strategy session']),
      cta: { ...content3Cta, label: 'Get a free plan', to: '#' },
      ui: content3Ui,
      lift: true,
    },
    {
      image: { src: placeholderImage, bleed: true },
      title: 'Ongoing growth',
      description: featureBody('Day-to-day marketing and optimisation', ['Fast execution', 'Clear reporting', 'Transparent pricing', 'Dedicated team']),
      cta: { ...content3Cta, label: 'View services', to: '#' },
      ui: content3Ui,
      lift: true,
    },
    {
      image: { src: placeholderImage, bleed: true },
      title: 'Enterprise & multi-brand',
      description: featureBody('Managing multiple products or regions?', ['Priority support', 'Reliable delivery', 'Direct invoicing', 'Ongoing account']),
      cta: { ...content3Cta, label: 'Learn more', to: '#' },
      ui: content3Ui,
      lift: true,
    },
  ],
}

export const content4 = {
  headline: 'Featured services',
  title: 'Demand generation for modern brands',
  description: 'Considered, well-built campaigns across launches, growth, and high-performance funnels — tailored to how you sell.',
  items: [
    {
      icon: 'i-fa6-solid-rocket',
      title: 'Go-to-market launches',
      description: 'From the ground up, our campaigns respond to your market and audience.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-bullseye',
      title: 'Lead generation funnels',
      description: 'Funnels shaped around your buyer journey, with proven experience across high-intent campaigns in your market.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-magnifying-glass',
      title: 'SEO & content engines',
      description: 'Content programs built around search demand, movement, and daily discovery — sitting naturally within your brand.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-arrow-up-right-dots',
      title: 'Conversion optimisation',
      description: 'Additional revenue unlocked through careful work with testing, messaging, and existing traffic.',
      to: '#',
      lift: true,
    },
    {
      icon: 'i-fa6-solid-robot',
      title: 'Marketing automation',
      description: 'High-performance nurture that prioritises efficiency, relevance, and well-resolved workflows.',
      to: '#',
      lift: true,
    },
  ],
}

const content5Cta: ButtonProps = {
  variant: 'soft',
  size: 'xs',
  color: 'primary',
  trailingIcon: 'i-fa6-solid-arrow-right',
}

const cell = {
  root: 'rounded-none ring-0 bg-default transition-colors hover:bg-elevated/50',
  container: 'flex h-full flex-col',
  body: 'flex-1',
}

export const content5 = {
  headline: 'Core services',
  title: 'Everything we do, under one roof',
  description: 'One team for strategy, campaigns, optimisation and reporting — across every channel.',
  items: [
    {
      icon: 'i-fa6-solid-bullseye',
      title: 'Lead Generation',
      description: 'Qualified, sales-ready leads delivered to your pipeline. We build, launch and optimise campaigns with tracking end-to-end and no long lock-ins.',
      cta: { ...content5Cta, label: 'View Lead Generation', to: '#' },
      ui: cell,
    },
    {
      icon: 'i-fa6-solid-bullhorn',
      title: 'Paid Advertising',
      description: 'Expert management of Google, Meta and LinkedIn ads — with honest budget advice and a fully accountable, ROI-focused spend.',
      cta: { ...content5Cta, label: 'View Paid Ads', to: '#' },
      ui: cell,
    },
    {
      icon: 'i-fa6-solid-magnifying-glass',
      title: 'SEO & Content',
      description: 'Struggling to get found? We help you rank for the searches that matter and turn organic traffic into a predictable source of demand.',
      cta: { ...content5Cta, label: 'View SEO', to: '#' },
      ui: cell,
    },
    {
      icon: 'i-fa6-solid-chart-line',
      title: 'Analytics & CRO',
      description: 'Ongoing testing and optimisation to keep your funnel converting efficiently, grow revenue and catch drop-off before it costs you.',
      cta: { ...content5Cta, label: 'View Optimisation', to: '#' },
      ui: cell,
    },
    {
      icon: 'i-fa6-solid-envelope-open-text',
      title: 'Email & Automation',
      description: 'From welcome flows to win-back sequences, we build the automations that nurture leads and drive repeat revenue on autopilot.',
      cta: { ...content5Cta, label: 'View Automation', to: '#' },
      ui: cell,
    },
    {
      icon: 'i-fa6-solid-building',
      title: 'Enterprise & Agencies',
      description: 'Dedicated support for larger teams and white-label partners — priority delivery, reliable scheduling and direct invoicing.',
      cta: { ...content5Cta, label: 'View Enterprise', to: '#' },
      ui: cell,
    },
  ],
}

export const content6 = {
  image: {
    alt: 'Recent campaign',
    badge: { icon: 'i-fa6-solid-chart-line', title: '500+', description: 'Campaigns delivered' }
  },
  headline: 'Why choose us',
  title: 'Why brands choose us',
  description: 'Specialist knowledge of your market, backed by results you can measure.',
  items: [
    {
      title:'Market expertise',
      description: 'We know your space — the audience, the competition, and what actually converts.',
    },
    {
      icon: 'i-fa6-solid-shield-halved',
      title: 'Strategy, not guesswork',
      description: 'We fix the root cause of weak performance so results keep compounding.',
    },
    {
      icon: 'i-fa6-solid-award',
      title: 'Proven results',
      description: 'Hundreds of brands trust us. The proof is in the pipeline we deliver.',
    },
    {
      icon: 'i-fa6-solid-thumbs-up',
      title: 'Results guaranteed',
      description: 'Work done right the first time, fully backed by our performance guarantee.',
    },
    {
      icon: 'i-fa6-solid-hand-holding-dollar',
      title: 'No lock-in contracts',
      description: 'We earn your business through results, not paperwork. Start with no obligation.',
    },
    {
      icon: 'i-fa6-solid-clock',
      title: 'Reliable delivery',
      description: 'Consistent teams, dependable timelines and clear communication. No chasing.',
    },
  ],
}

export const content7 = {
  headline: 'Trusted by clients',
  title: 'Why brands choose us',
  description: 'For more than ten years we have helped founders, marketers and in-house teams grow without hidden costs, delays or confusing advice.',
  items: [
    {
      icon: 'i-fa6-solid-bolt',
      title: 'Fast turnaround',
      description: 'Campaigns live in weeks, not months.',
    },
    {
      icon: 'i-fa6-solid-tag',
      title: 'Upfront pricing',
      description: 'Know your options before work begins.',
    },
    {
      icon: 'i-fa6-solid-circle-check',
      title: 'No lock-in contracts',
      description: 'Month to month, earned through results.',
    },
    {
      icon: 'i-fa6-solid-trophy',
      title: '10+ years experience',
      description: () => h('span', ['Trusted by ', h('strong', { class: 'font-semibold text-default' }, '300+ growing brands'), '.']),
    },
    {
      icon: 'i-fa6-solid-shield-halved',
      title: 'Zero-risk audit',
      description: () => h('span', ['Usually $500 — ', h('strong', { class: 'font-bold text-highlighted' }, 'FREE'), ' today.']),
    },
    {
      icon: 'i-fa6-solid-handshake',
      title: 'Trusted by agencies',
      description: 'Reliable delivery and clear communication.',
    },
  ],
}

export const content8 = {
  image: {
    alt: 'Working alongside your team',
    ui: { image: 'aspect-4/5' },
  },
  headline: 'How we work with your team',
  title: 'A growth partner that fits how you operate',
  description: 'We have worked alongside founders, marketers and agencies for over ten years — and we have built the way we operate around what the relationship needs.',
  items: [
    {
      icon: 'i-fa6-solid-phone',
      title: 'One brief, we handle the rest',
      description: 'Send us the goal and the context. We coordinate from there — strategy, build and launch — before any spend goes live.',
    },
    {
      icon: 'i-fa6-solid-tag',
      title: 'Upfront pricing before we start',
      description: 'You get a clear, fixed scope before any work begins — everything you need for sign-off without delays. No open-ended retainers.',
    },
    {
      icon: 'i-fa6-solid-comments',
      title: 'Direct, proactive communication',
      description: 'We keep you informed and flag issues early — removing the back-and-forth from your desk.',
    },
    {
      icon: 'i-fa6-solid-file-lines',
      title: 'Reporting for your records',
      description: 'Every campaign comes with clear reporting — spend, results and next steps — structured for stakeholders and board updates.',
    },
  ],
}

export const content9 = {
  headline: 'Simple process',
  title: 'How it works',
  items: [
    {
      icon: 'i-fa6-solid-phone',
      title: 'Tell us your goals',
      description: 'Share where you want to grow and what you have tried. The more context you give, the faster we can prepare.',
    },
    {
      icon: 'i-fa6-solid-magnifying-glass',
      title: 'We diagnose',
      description: 'Our team audits your funnel, identifies what is holding growth back and explains what is causing it.',
    },
    {
      icon: 'i-fa6-solid-file-invoice-dollar',
      title: 'We explain your options',
      description: 'You receive clear advice and upfront pricing for the plan before any work begins.',
    },
    {
      icon: 'i-fa6-solid-circle-check',
      title: 'Growth delivered',
      description: 'We launch, optimise and report — and get qualified leads flowing into your pipeline.',
    },
    
  ],
}

export const content10 = {
  headline: 'How it works',
  title: 'Four steps. Zero hassle.',
  description: 'From the first call to the first leads — here is exactly what to expect.',
  items: [
    {
      icon: 'i-fa6-solid-phone',
      title: 'Get in touch',
      description: 'Call us or request a proposal online. Tell us your goals and we will take it from there.',
    },
    {
      icon: 'i-fa6-solid-calendar-check',
      title: 'Book a strategy call',
      description: 'We map out a plan that suits you — often within a day or two.',
    },
    {
      icon: 'i-fa6-solid-rocket',
      title: 'We launch & optimise',
      description: 'Our team builds your campaigns and gets them performing fast, tracked and transparent.',
    },
    {
      icon: 'i-fa6-solid-face-smile',
      title: 'Leads roll in',
      description: 'Qualified leads land in your pipeline, backed by clear reporting. Simple.',
    },
  ],
}

export const content11 = {
  headline: 'Why choose us',
  title: 'The growth partner that does it properly',
  description: () => h('div', [
    h('p', 'We built our reputation one result at a time — showing up when we say we will, charging what we quote, and treating your budget like our own.'),
    h('p', 'No vanity metrics, no surprise invoices, no long lock-ins. Just measurable growth from a team that owns the outcome as much as you do.'),
  ]),
  items: [
    {
      icon: 'i-fa6-solid-chart-line',
      title: 'Measurable results',
      description: 'Every campaign is tracked, so you always know exactly what your spend returns.',
    },
    {
      icon: 'i-fa6-solid-hand-holding-dollar',
      title: 'Transparent pricing',
      description: 'Clear proposals before we start. The price we say is the price you pay.',
    },
    {
      icon: 'i-fa6-solid-clock',
      title: 'On time, every time',
      description: 'We respect your deadlines and deliver within the timelines we promise.',
    },
    {
      icon: 'i-fa6-solid-thumbs-up',
      title: 'No long lock-ins',
      description: 'We earn your business month to month through results, not contracts.',
    },
  ],
}

export const content12 = {
  headline: 'Why choose us',
  title: 'Not your average agency.',
  description: () => h('div', [
    h('p', 'We earned our reputation the hard way — one result at a time, for clients who stayed because the numbers kept moving.'),
    h('p', 'No hand-offs to junior staff, no jargon, no games. You work with the people doing the work, and you see exactly where every dollar goes.'),
  ]),
  items: [
    {
      icon: 'i-fa6-solid-chart-line',
      title: 'Measurable results',
      description: 'Every dollar tracked and accounted for.',
    },
    {
      icon: 'i-fa6-solid-hand-holding-dollar',
      title: 'Transparent pricing',
      description: 'The price we quote is the price you pay.',
    },
    {
      icon: 'i-fa6-solid-clock',
      title: 'On time, every time',
      description: 'We deliver within the timelines we promise.',
    },
    {
      icon: 'i-fa6-solid-thumbs-up',
      title: 'No long lock-ins',
      description: 'Not performing? You are free to walk.',
    }
  ],
}

const capability = (term: string, description: string): ListItem => ({
  label: () => h('span', [h('span', { class: 'font-bold text-highlighted' }, term), ` — ${description}`]),
})

export const content13 = {
  image: { alt: 'Recent campaign' },
  headline: 'Our capability',
  title: 'Managing complexity with care',
  description: 'Many of our engagements involve established brands, regulated industries, or technical constraints. Our role is to coordinate these elements clearly, working closely with your marketing, sales, and product teams.',
  items: [
    capability('Rebrands & repositioning', 'Extensive experience working within established brands, coordinating messaging changes and upgrades while respecting the equity already in place.'),
    capability('Regulated & complex markets', 'Proven experience across regulated and technically complex industries, with careful coordination alongside compliance and legal teams.'),
    capability('High-performance funnels', 'Certified conversion knowledge applied in market, supporting efficient, high-converting campaigns through coordinated testing and execution.'),
  ],
}

export const content14 = {
  headline: 'How we work',
  title: 'Built around the way you operate',
  description: 'A closer look at what each engagement involves — and how we keep the process transparent from first brief to launch.',
  items: [
    {
      image: { alt: 'Strategy session with the team' },
      headline: 'Step 01 — Discovery',
      title: 'Strategy that starts with your numbers',
      description: 'We begin every engagement by digging into what is actually moving — and what is not. No generic playbooks; the plan is shaped around your funnel, your market, and the goals you are measured on.',
      links: [
        { label: 'See our approach', to: '#', color: 'neutral' as const, trailingIcon: 'i-lucide-arrow-right' },
      ],
    },
    {
      image: { alt: 'Campaign build in progress' },
      headline: 'Step 02 — Build',
      title: 'Build and launch, fully managed',
      description: 'Once the plan is agreed, we handle the build end to end — creative, tracking, and setup — so nothing goes live half-wired. You approve, we ship, and the same people stay on it after launch.',
      links: [
        { label: 'View services', to: '#', color: 'neutral' as const, trailingIcon: 'i-lucide-arrow-right' },
      ],
    },
    {
      image: { alt: 'Reviewing reporting dashboard' },
      headline: 'Step 03 — Report',
      title: 'Honest reporting, week after week',
      description: 'You always know where every dollar goes and what it returns. When something works we double down together; when it does not, we tell you plainly and change course.',
    },
  ],
}

export const content16 = {
  headline: 'Real results',
  title: 'Before and after, side by side',
  description: 'Drag the slider on each project to see the transformation for yourself — real work from real clients.',
  items: [
    {
      before: { src: samplePhoto, alt: 'Overgrown side path before' },
      after: { src: samplePhoto, alt: 'Clean gravel path after' },
      title: 'Mosman',
      description: 'Overgrown side path → clean, low-maintenance gravel runway.',
    },
    {
      before: { src: samplePhoto, alt: 'Weed-choked courtyard before' },
      after: { src: samplePhoto, alt: 'Manicured courtyard after' },
      title: 'Chatswood',
      description: 'Weed-choked courtyard garden → clean, manicured low-maintenance beds.',
    },
  ],
}

export const content15 = {
  headline: 'Compare',
  title: 'What makes us different',
  description: 'See how working with us compares to the typical agency experience — side by side.',
  columns: [
    {
      title: 'Typical Marketing Agency',
      items: [
        'Locked-in 12-month contracts',
        'Junior staff run your account',
        'Surprise invoices every month',
        'Vanity metrics in the reports',
        'You chase them for updates',
      ],
    },
    {
      title: 'Working With Us',
      items: [
        'Month to month, earned through results',
        'Senior specialists do the work',
        'The price we quote is the price you pay',
        'Revenue and pipeline, tracked end-to-end',
        'Proactive updates before you ask',
      ],
    },
  ],
}
