<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content1
    </div>

    <UPageSection
      headline="What we do"
      title="Growth services built around your goals"
      description="From lead generation to full-funnel campaigns, our team handles it all with transparent reporting and results you can measure."
    >
      <template #body>
        <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
          <UiCard
            v-for="(item, i) in [
              { icon: 'i-fa6-solid-bullseye', title: 'Lead generation', description: 'Qualified, sales-ready leads delivered to your pipeline — targeted, tracked and built to convert.', to: '#', lift: true },
              { icon: 'i-fa6-solid-magnifying-glass', title: 'SEO & content', description: 'Rank for the searches that matter and turn organic traffic into a predictable source of demand.', to: '#', lift: true },
              { icon: 'i-fa6-solid-bullhorn', title: 'Paid advertising', description: 'Google and Meta campaigns with no long lock-ins and ROI-focused spend that scales with your goals.', to: '#', lift: true },
              { icon: 'i-fa6-solid-envelope-open-text', title: 'Email & nurture', description: 'Automated, personalised sequences that turn cold leads into loyal customers.', to: '#', lift: true },
              { icon: 'i-fa6-solid-chart-line', title: 'Analytics & CRO', description: 'Data-driven testing and optimisation to squeeze more revenue from the traffic you already have.', to: '#', lift: true },
              { icon: 'i-fa6-solid-lightbulb', title: 'Strategy & advice', description: 'Clear, honest recommendations mapped to your goals — no jargon, no fluff.', to: '#', lift: true },
            ]"
            :key="i"
            v-bind="item"
          />
        </UPageGrid>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content2
    </div>

    <UPageSection
      headline="What we do"
      title="Big campaigns. Quick wins. Real results."
      description="From full-funnel lead generation to the quick wins in between, we build the campaigns that move your numbers — and show you exactly how."
    >
      <template #body>
        <UPageGrid class="sm:auto-rows-fr lg:grid-cols-3">
          <UiCard
            v-for="(item, i) in [
              {
                icon: { icon: 'i-fa6-solid-rocket', inverted: true },
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
              { icon: 'i-fa6-solid-magnifying-glass', title: 'SEO & content', description: 'Rank higher, get found, grow organically.', to: '#', lift: true },
              { icon: 'i-fa6-solid-bullhorn', title: 'Paid advertising', description: 'ROI-focused campaigns, fully managed.', to: '#', lift: true },
              { icon: 'i-fa6-solid-chart-line', title: 'Analytics & CRO', description: 'More conversions from the traffic you have.', to: '#', lift: true },
              { icon: 'i-fa6-solid-lightbulb', title: 'Strategy & advice', description: 'Clear recommendations, zero jargon.', to: '#', lift: true },
              { icon: 'i-fa6-solid-envelope-open-text', title: 'Email & nurture', description: 'Automated sequences that convert over time.', to: '#', lift: true },
            ]"
            :key="i"
            v-bind="item"
          />
        </UPageGrid>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content3
    </div>

    <UPageSection
      headline="Scope of work"
      title="What do you need help with?"
      description="Whatever stage you are at, pick the engagement that fits — each one comes with clear deliverables and a team that owns the outcome."
    >
      <template #body>
        <UPageGrid class="sm:grid-cols-2 lg:grid-cols-4">
          <UiCard
            v-for="(item, i) in [
              {
                title: 'Lead generation',
                intro: 'Pipeline running dry? Need leads now?',
                features: ['Qualified leads', 'No long lock-ins', 'Every channel covered', 'Tracked end-to-end'],
                cta: { label: 'Get leads now', to: '#' },
              },
              {
                title: 'Launches & campaigns',
                intro: 'Bringing something new to market?',
                features: ['End-to-end builds', 'Honest budget advice', 'Fully managed', 'Free strategy session'],
                cta: { label: 'Get a free plan', to: '#' },
              },
              {
                title: 'Ongoing growth',
                intro: 'Day-to-day marketing and optimisation',
                features: ['Fast execution', 'Clear reporting', 'Transparent pricing', 'Dedicated team'],
                cta: { label: 'View services', to: '#' },
              },
              {
                title: 'Enterprise & multi-brand',
                intro: 'Managing multiple products or regions?',
                features: ['Priority support', 'Reliable delivery', 'Direct invoicing', 'Ongoing account'],
                cta: { label: 'Learn more', to: '#' },
              },
            ]"
            :key="i"
            :image="{ src: placeholderImage, bleed: true }"
            :title="item.title"
            :cta="{ color: 'primary', variant: 'outline', size: 'md', block: true, trailingIcon: 'i-fa6-solid-arrow-right', class: 'justify-center', ...item.cta }"
            :ui="{ footer: 'w-full' }"
            lift
          >
            <template #description>
              <p class="text-sm italic text-primary">{{ item.intro }}</p>
              <UiList :items="[...item.features]" class="mt-4 text-sm" />
            </template>
          </UiCard>
        </UPageGrid>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content4
    </div>

    <UPageSection>
      <template #body>
        <UPageGrid class="lg:grid-cols-3">
          <div class="flex flex-col justify-center p-2 sm:col-span-2 sm:p-0 lg:col-span-1 lg:pr-6">
            <div class="font-display text-sm font-semibold uppercase tracking-widest text-primary justify-start mb-2">
              Featured services
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl">
              Demand generation for modern brands
            </h2>
            <div class="text-lg leading-relaxed text-pretty [&_p]:text-lg text-left text-balance mt-3">
              Considered, well-built campaigns across launches, growth, and high-performance funnels — tailored to how you sell.
            </div>
          </div>

          <UiCard
            v-for="(item, i) in [
              { icon: 'i-fa6-solid-rocket', title: 'Go-to-market launches', description: 'From the ground up, our campaigns respond to your market and audience.', to: '#', lift: true },
              { icon: 'i-fa6-solid-bullseye', title: 'Lead generation funnels', description: 'Funnels shaped around your buyer journey, with proven experience across high-intent campaigns in your market.', to: '#', lift: true },
              { icon: 'i-fa6-solid-magnifying-glass', title: 'SEO & content engines', description: 'Content programs built around search demand, movement, and daily discovery — sitting naturally within your brand.', to: '#', lift: true },
              { icon: 'i-fa6-solid-arrow-up-right-dots', title: 'Conversion optimisation', description: 'Additional revenue unlocked through careful work with testing, messaging, and existing traffic.', to: '#', lift: true },
              { icon: 'i-fa6-solid-robot', title: 'Marketing automation', description: 'High-performance nurture that prioritises efficiency, relevance, and well-resolved workflows.', to: '#', lift: true },
            ]"
            :key="i"
            v-bind="item"
          />
        </UPageGrid>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content5
    </div>

    <UPageSection
      headline="Core services"
      title="Everything we do, under one roof"
      description="One team for strategy, campaigns, optimisation and reporting — across every channel."
    >
      <template #body>
        <UCard class="overflow-hidden" :ui="{ body: 'p-0 sm:p-0' }">
          <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-0 lg:gap-0 *:border-default *:border-b [&>*:last-child]:border-b-0 sm:*:border-r sm:[&>*:nth-child(2n)]:border-r-0 sm:[&>*:nth-last-child(-n+2)]:border-b-0 lg:[&>*:nth-child(2n)]:border-r lg:[&>*:nth-child(3n)]:border-r-0 lg:[&>*:nth-last-child(-n+3)]:border-b-0">
            <UiCard
              v-for="(item, i) in [
                { icon: 'i-fa6-solid-bullseye', title: 'Lead Generation', description: 'Qualified, sales-ready leads delivered to your pipeline. We build, launch and optimise campaigns with tracking end-to-end and no long lock-ins.', cta: { variant: 'soft', size: 'xs', color: 'primary', trailingIcon: 'i-fa6-solid-arrow-right', label: 'View Lead Generation', to: '#' }, ui: cell },
                { icon: 'i-fa6-solid-bullhorn', title: 'Paid Advertising', description: 'Expert management of Google, Meta and LinkedIn ads — with honest budget advice and a fully accountable, ROI-focused spend.', cta: { variant: 'soft', size: 'xs', color: 'primary', trailingIcon: 'i-fa6-solid-arrow-right', label: 'View Paid Ads', to: '#' }, ui: cell },
                { icon: 'i-fa6-solid-magnifying-glass', title: 'SEO & Content', description: 'Struggling to get found? We help you rank for the searches that matter and turn organic traffic into a predictable source of demand.', cta: { variant: 'soft', size: 'xs', color: 'primary', trailingIcon: 'i-fa6-solid-arrow-right', label: 'View SEO', to: '#' }, ui: cell },
                { icon: 'i-fa6-solid-chart-line', title: 'Analytics & CRO', description: 'Ongoing testing and optimisation to keep your funnel converting efficiently, grow revenue and catch drop-off before it costs you.', cta: { variant: 'soft', size: 'xs', color: 'primary', trailingIcon: 'i-fa6-solid-arrow-right', label: 'View Optimisation', to: '#' }, ui: cell },
                { icon: 'i-fa6-solid-envelope-open-text', title: 'Email & Automation', description: 'From welcome flows to win-back sequences, we build the automations that nurture leads and drive repeat revenue on autopilot.', cta: { variant: 'soft', size: 'xs', color: 'primary', trailingIcon: 'i-fa6-solid-arrow-right', label: 'View Automation', to: '#' }, ui: cell },
                { icon: 'i-fa6-solid-building', title: 'Enterprise & Agencies', description: 'Dedicated support for larger teams and white-label partners — priority delivery, reliable scheduling and direct invoicing.', cta: { variant: 'soft', size: 'xs', color: 'primary', trailingIcon: 'i-fa6-solid-arrow-right', label: 'View Enterprise', to: '#' }, ui: cell },
              ]"
              :key="i"
              v-bind="item"
            />
          </UPageGrid>
        </UCard>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content6
    </div>

    <UPageSection
      orientation="horizontal"
      headline="Why choose us"
      title="Why brands choose us"
      description="Specialist knowledge of your market, backed by results you can measure."
    >
      <template #body>
        <UiFigure
          alt="Recent campaign"
          :badge="{ icon: 'i-fa6-solid-chart-line', title: '500+', description: 'Campaigns delivered' }"
        />
      </template>
      <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
        <UiCard
          v-for="(item, i) in [
            { icon: 'i-fa6-solid-bullseye', title: 'Market expertise', description: 'We know your space — the audience, the competition, and what actually converts.' },
            { icon: 'i-fa6-solid-shield-halved', title: 'Strategy, not guesswork', description: 'We fix the root cause of weak performance so results keep compounding.' },
            { icon: 'i-fa6-solid-award', title: 'Proven results', description: 'Hundreds of brands trust us. The proof is in the pipeline we deliver.' },
            { icon: 'i-fa6-solid-thumbs-up', title: 'Results guaranteed', description: 'Work done right the first time, fully backed by our performance guarantee.' },
            { icon: 'i-fa6-solid-hand-holding-dollar', title: 'No lock-in contracts', description: 'We earn your business through results, not paperwork. Start with no obligation.' },
            { icon: 'i-fa6-solid-clock', title: 'Reliable delivery', description: 'Consistent teams, dependable timelines and clear communication. No chasing.' },
          ]"
          :key="i"
          v-bind="item"
        />
      </UPageGrid>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content7
    </div>

    <UPageSection
      headline="Trusted by clients"
      title="Why brands choose us"
      description="For more than ten years we have helped founders, marketers and in-house teams grow without hidden costs, delays or confusing advice."
    >
      <template #body>
        <UiFeatureItems
          orientation="horizontal"
          :columns="2"
          :items="[
            { icon: 'i-fa6-solid-bolt', title: 'Fast turnaround', description: 'Campaigns live in weeks, not months.' },
            { icon: 'i-fa6-solid-tag', title: 'Upfront pricing', description: 'Know your options before work begins.' },
            { icon: 'i-fa6-solid-circle-check', title: 'No lock-in contracts', description: 'Month to month, earned through results.' },
            { icon: 'i-fa6-solid-trophy', title: '10+ years experience', description: 'Trusted by 300+ growing brands.' },
            { icon: 'i-fa6-solid-shield-halved', title: 'Zero-risk audit', description: 'Usually $500 — FREE today.' },
            { icon: 'i-fa6-solid-handshake', title: 'Trusted by agencies', description: 'Reliable delivery and clear communication.' },
          ]"
        />
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content8
    </div>

    <UPageSection
      headline="How we work with your team"
      title="A growth partner that fits how you operate"
      description="We have worked alongside founders, marketers and agencies for over ten years — and we have built the way we operate around what the relationship needs."
    >
      <template #body>
        <div class="grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16">
          <UiFigure alt="Working alongside your team" :ui="{ image: 'aspect-4/5' }" />

          <div>
            <UiFeatureItem
              v-for="(item, i) in [
                { icon: 'i-fa6-solid-phone', title: 'One brief, we handle the rest', description: 'Send us the goal and the context. We coordinate from there — strategy, build and launch — before any spend goes live.' },
                { icon: 'i-fa6-solid-tag', title: 'Upfront pricing before we start', description: 'You get a clear, fixed scope before any work begins — everything you need for sign-off without delays. No open-ended retainers.' },
                { icon: 'i-fa6-solid-comments', title: 'Direct, proactive communication', description: 'We keep you informed and flag issues early — removing the back-and-forth from your desk.' },
                { icon: 'i-fa6-solid-file-lines', title: 'Reporting for your records', description: 'Every campaign comes with clear reporting — spend, results and next steps — structured for stakeholders and board updates.' },
              ]"
              :key="i"
              v-bind="item"
            />
          </div>
        </div>
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content9
    </div>

    <UPageSection headline="Simple process" title="How it works">
      <template #body>
        <UiSteps
          :items="[
            { icon: 'i-fa6-solid-phone', title: 'Tell us your goals', description: 'Share where you want to grow and what you have tried. The more context you give, the faster we can prepare.' },
            { icon: 'i-fa6-solid-magnifying-glass', title: 'We diagnose', description: 'Our team audits your funnel, identifies what is holding growth back and explains what is causing it.' },
            { icon: 'i-fa6-solid-file-invoice-dollar', title: 'We explain your options', description: 'You receive clear advice and upfront pricing for the plan before any work begins.' },
            { icon: 'i-fa6-solid-circle-check', title: 'Growth delivered', description: 'We launch, optimise and report — and get qualified leads flowing into your pipeline.' },
          ]"
        />
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content10
    </div>

    <UPageSection
      orientation="horizontal"
      headline="How it works"
      title="Four steps. Zero hassle."
      description="From the first call to the first leads — here is exactly what to expect."
      :ui="{
        container: 'lg:grid-cols-[0.8fr_1.2fr] lg:items-start gap-8 lg:gap-16',
        header: 'lg:sticky lg:top-28 lg:self-start',
        title: 'text-5xl sm:text-6xl leading-[0.95]',
        description: 'text-xl text-muted max-w-sm',
      }"
    >
      <ol class="relative">
        <span aria-hidden="true" class="absolute left-9 top-4 bottom-4 w-px bg-accented" />
        <li
          v-for="(item, i) in [
            { icon: 'i-fa6-solid-phone', title: 'Get in touch', description: 'Call us or request a proposal online. Tell us your goals and we will take it from there.' },
            { icon: 'i-fa6-solid-calendar-check', title: 'Book a strategy call', description: 'We map out a plan that suits you — often within a day or two.' },
            { icon: 'i-fa6-solid-rocket', title: 'We launch & optimise', description: 'Our team builds your campaigns and gets them performing fast, tracked and transparent.' },
            { icon: 'i-fa6-solid-face-smile', title: 'Leads roll in', description: 'Qualified leads land in your pipeline, backed by clear reporting. Simple.' },
          ]"
          :key="item.title"
          class="relative flex gap-7 pb-12 last:pb-0"
        >
          <span class="relative z-10 flex size-18 shrink-0 items-center justify-center rounded-md bg-inverted font-display font-black text-2xl text-inverted">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div class="pt-3">
            <div class="flex items-center gap-2.5">
              <UiIconTile :icon="item.icon" variant="naked" class="size-5" />
              <h3>{{ item.title }}</h3>
            </div>
            <p class="mt-2 text-toned max-w-md">{{ item.description }}</p>
          </div>
        </li>
      </ol>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content11
    </div>

    <UPageSection orientation="horizontal" headline="Why choose us" title="The growth partner that does it properly">
      <template #description>
        <p>We built our reputation one result at a time — showing up when we say we will, charging what we quote, and treating your budget like our own.</p>
        <p>No vanity metrics, no surprise invoices, no long lock-ins. Just measurable growth from a team that owns the outcome as much as you do.</p>
      </template>
      <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
        <UiCard
          v-for="(item, i) in [
            { icon: 'i-fa6-solid-chart-line', title: 'Measurable results', description: 'Every campaign is tracked, so you always know exactly what your spend returns.' },
            { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Transparent pricing', description: 'Clear proposals before we start. The price we say is the price you pay.' },
            { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We respect your deadlines and deliver within the timelines we promise.' },
            { icon: 'i-fa6-solid-thumbs-up', title: 'No long lock-ins', description: 'We earn your business month to month through results, not contracts.' },
          ]"
          :key="i"
          v-bind="item"
        />
      </UPageGrid>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content12
    </div>

    <UPageSection orientation="horizontal" headline="Why choose us" title="Not your average agency." :ui="{ container: 'lg:items-center' }">
      <template #description>
        <p>We earned our reputation the hard way — one result at a time, for clients who stayed because the numbers kept moving.</p>
        <p>No hand-offs to junior staff, no jargon, no games. You work with the people doing the work, and you see exactly where every dollar goes.</p>
      </template>
      <UiFeatureItems
        :items="[
          { icon: 'i-fa6-solid-chart-line', title: 'Measurable results', description: 'Every dollar tracked and accounted for.' },
          { icon: 'i-fa6-solid-hand-holding-dollar', title: 'Transparent pricing', description: 'The price we quote is the price you pay.' },
          { icon: 'i-fa6-solid-clock', title: 'On time, every time', description: 'We deliver within the timelines we promise.' },
          { icon: 'i-fa6-solid-thumbs-up', title: 'No long lock-ins', description: 'Not performing? You are free to walk.' },
        ]"
      />
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content13
    </div>

    <UPageSection orientation="horizontal" headline="Our capability" title="Managing complexity with care" description="Many of our engagements involve established brands, regulated industries, or technical constraints. Our role is to coordinate these elements clearly, working closely with your marketing, sales, and product teams.">
      <template #body>
        <UiList
          :items="[
            capability('Rebrands & repositioning', 'Extensive experience working within established brands, coordinating messaging changes and upgrades while respecting the equity already in place.'),
            capability('Regulated & complex markets', 'Proven experience across regulated and technically complex industries, with careful coordination alongside compliance and legal teams.'),
            capability('High-performance funnels', 'Certified conversion knowledge applied in market, supporting efficient, high-converting campaigns through coordinated testing and execution.'),
          ]"
          :icon="{ size: 'md' }"
          :ui="{ root: 'space-y-6', icon: 'text-primary' }"
        />
      </template>
      <UiFigure alt="Recent campaign" />
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content14
    </div>

    <UPageSection
      headline="How we work"
      title="Built around the way you operate"
      description="A closer look at what each engagement involves — and how we keep the process transparent from first brief to launch."
    >
      <template #body>
        <UiZigZag
          :items="[
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
          ]"
        />
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content15
    </div>

    <UPageSection
      headline="Compare"
      title="What makes us different"
      description="See how working with us compares to the typical agency experience — side by side."
      :ui="{
        headline: 'justify-center',
        title: 'text-center',
        description: 'text-center',
        body: 'mx-auto w-full max-w-4xl',
        links: 'justify-center',
      }"
    >
      <template #body>
        <UiComparison
          :columns="[
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
          ]"
        />
      </template>
    </UPageSection>

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content16
    </div>

    <UPageSection
      headline="Real results"
      title="Before and after, side by side"
      description="Drag the slider on each project to see the transformation for yourself — real work from real clients."
    >
      <template #body>
        <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
          <UiBeforeAfter
            v-for="(item, i) in [
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
            ]"
            :key="i"
            v-bind="item"
          />
        </UPageGrid>
      </template>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { ListItem } from '~/components/ui/List.vue'
import placeholderImage from '~/assets/img/placeholder-image.png'
import samplePhoto from '~/assets/img/pexels-reneterp-13821194.jpg'

useSeoMeta({
  title: 'Content — variants',
  robots: 'noindex, nofollow',
})

const cell = {
  root: 'rounded-none ring-0 bg-default transition-colors hover:bg-elevated/50',
  container: 'flex h-full flex-col',
  body: 'flex-1',
}

const capability = (term: string, description: string): ListItem => ({
  label: () => h('span', [h('span', { class: 'font-bold text-highlighted' }, term), ` — ${description}`]),
})
</script>
