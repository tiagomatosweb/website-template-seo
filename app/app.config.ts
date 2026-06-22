export default defineAppConfig({
  // ──────────────────────────────────────────────────────────────────────────
  // SITE — per-client business data. This is the FIRST file to edit when
  // cloning the template for a new website. See REBRAND.md.
  // Read anywhere with: const { site } = useAppConfig()
  // ──────────────────────────────────────────────────────────────────────────
  site: {
    name: 'BusinessName',
    shortName: 'Business',
    tagline: 'Your trusted local specialists',
    blurb: 'A short sentence about the business, the area it serves and what makes it the trusted local choice.',
    // Phone: `display` is what the user sees, `href` is the tel: link (digits only).
    phone: { display: '00 0000 0000', href: 'tel:0000000000' },
    email: 'hello@example.com',
    serviceArea: 'Serving your local area',
    hours: 'Mon–Fri 8am–5pm',
    social: {
      facebook: '#',
      instagram: '#',
    },
  },

  ui: {
    colors: {
      primary: 'primary',
      cta: 'cta',
      neutral: 'gray',
    },
    formField: {
      slots: {
        label: 'font-display font-extrabold text-xs tracking-wide uppercase text-highlighted',
      },
    },
    input: {
      slots: {
        root: 'w-full',
        leadingIcon: 'text-dimmed/80',
      },
      variants: {
        size: {
          xs: { base: 'px-3 py-2', leading: 'ps-3', leadingIcon: 'size-3' },
          sm: { base: 'px-3.5 py-2.5', leading: 'ps-3.5', leadingIcon: 'size-3.5' },
          md: { base: 'px-3.5 py-2.5', leading: 'ps-3.5', leadingIcon: 'size-3.5' },
          lg: { base: 'px-4 py-3', leading: 'ps-4', leadingIcon: 'size-3.5' },
          xl: { base: 'px-4 py-3', leading: 'ps-4', leadingIcon: 'size-3.5' },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary focus-visible:shadow-[0_0_0_3px] focus-visible:shadow-primary/15',
        },
        { leading: true, size: 'xs', class: 'ps-8' },
        { leading: true, size: 'sm', class: 'ps-9' },
        { leading: true, size: 'md', class: 'ps-9' },
        { leading: true, size: 'lg', class: 'ps-9.5' },
        { leading: true, size: 'xl', class: 'ps-9.5' },
      ],
    },
    select: {
      slots: {
        base: 'w-full',
        leadingIcon: 'text-dimmed/80',
      },
      variants: {
        size: {
          xs: { base: 'px-3 py-2', leading: 'ps-3', leadingIcon: 'size-3' },
          sm: { base: 'px-3.5 py-2.5', leading: 'ps-3.5', leadingIcon: 'size-3.5' },
          md: { base: 'px-3.5 py-2.5', leading: 'ps-3.5', leadingIcon: 'size-3.5' },
          lg: { base: 'px-4 py-3', leading: 'ps-4', leadingIcon: 'size-3.5' },
          xl: { base: 'px-4 py-3', leading: 'ps-4', leadingIcon: 'size-3.5' },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary focus-visible:shadow-[0_0_0_3px] focus-visible:shadow-primary/15',
        },
        { leading: true, size: 'xs', class: 'ps-8' },
        { leading: true, size: 'sm', class: 'ps-9' },
        { leading: true, size: 'md', class: 'ps-9' },
        { leading: true, size: 'lg', class: 'ps-9.5' },
        { leading: true, size: 'xl', class: 'ps-9.5' },
      ],
    },
    textarea: {
      slots: {
        root: 'w-full',
      },
      variants: {
        size: {
          xs: { base: 'px-3 py-2' },
          sm: { base: 'px-3.5 py-2.5' },
          md: { base: 'px-3.5 py-2.5' },
          lg: { base: 'px-4 py-3' },
          xl: { base: 'px-4 py-3' },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary focus-visible:shadow-[0_0_0_3px] focus-visible:shadow-primary/15',
        },
      ],
    },
    inputNumber: {
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class: 'focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary focus-visible:shadow-[0_0_0_3px] focus-visible:shadow-primary/15',
        },
      ],
    },
    // Cards: rounded-xl, p-5 sm:p-6 padding, flat by default (lift is opt-in via the
    // `.lift` class on interactive cards). `solid` = dark NEUTRAL panel. See CLAUDE.md.
    card: {
      slots: {
        root: 'rounded-xl',
        body: 'p-5 sm:p-6',
        header: 'p-5 sm:p-6',
        footer: 'p-5 sm:p-6',
      },
      variants: {
        variant: {
          solid: { root: 'bg-neutral-950 text-inverted' },
        },
      },
    },
    pageCard: {
      slots: {
        root: 'rounded-xl',
        container: 'p-5 sm:p-6',
        leadingIcon: 'size-7 text-primary',
        // Card title/description shape, set once (don't restyle per component). Dark
        // `solid` cards override the description COLOR to `text-muted-inverted`.
        title: 'font-display text-lg font-bold tracking-tight leading-snug text-highlighted',
        description: 'text-[15px] text-muted',
      },
      variants: {
        variant: {
          solid: { root: 'bg-neutral-950 text-inverted' },
        },
      },
      // A linked card (`to`, default outline variant) gets a framework hover-bg wash.
      // We don't want it — `.lift` (rise + shadow) is the only hover cue, so the card
      // bg stays put on hover.
      compoundVariants: [
        { variant: 'outline', to: true, class: { root: 'hover:bg-default' } },
      ],
    },
    pageGrid: {
      // Card gutter = gap-6.
      base: 'gap-6 sm:gap-6 lg:gap-6',
    },
    accordion: {
      slots: {
        item: 'border-b border-default last:border-b-0',
        trigger: 'py-5 gap-4 font-display font-bold text-base text-highlighted hover:text-primary transition-colors',
        trailingIcon: 'text-primary',
        body: 'text-base leading-relaxed text-toned pb-5',
      },
    },
    pageCTA: {
      slots: {
        root: 'rounded-none z-10',
        container: 'relative',
        title: 'text-3xl sm:text-4xl lg:text-5xl font-black',
        description: 'text-lg leading-relaxed max-w-3xl mx-auto',
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-neutral-950',
            title: 'text-inverted',
            description: 'text-toned-inverted',
          },
        },
      },
      defaultVariants: {
        variant: 'solid',
      },
    },
    pageHero: {
      slots: {
        container: 'py-16 lg:py-24 gap-12 lg:gap-16',
        headline: 'mb-4 font-display text-sm font-semibold uppercase tracking-widest text-primary',
        title: 'font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-highlighted text-balance',
        description: 'text-lg leading-relaxed text-pretty',
        body: 'mt-8',
        footer: 'mt-8',
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center',
          },
        },
      },
    },
    // Section padding py-16 lg:py-24, title = h2 scale, headline = the kicker look.
    pageSection: {
      slots: {
        container: 'py-16 lg:py-24',
        title: 'text-3xl sm:text-4xl lg:text-5xl font-black',
        // Section lead-in copy is the emphasis tier → text-lg (body <p> default is text-base).
        description: 'text-lg leading-relaxed text-pretty',
        headline: 'font-display text-sm font-semibold uppercase tracking-widest text-primary',
      },
      variants: {
        orientation: {
          vertical: {
            headline: 'justify-start',
            leading: 'justify-start',
            title: 'text-left',
            description: 'text-left text-balance',
            links: 'justify-start',
            features: 'sm:grid-cols-2 lg:grid-cols-3 gap-8',
          },
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center gap-8 lg:gap-16',
          },
        },
      },
    },
    user: {
      slots: {
        // mb-0 + !leading-tight override the global `p` base styles.
        name: 'font-display mb-0 !leading-tight',
        description: 'text-muted mb-0 !leading-tight',
      },
    },
    badge: {
      variants: {
        size: {
          xs: {
            base: 'text-[0.6rem] font-semibold px-2 py-0.5 gap-1 rounded-full',
            leadingIcon: 'size-3',
          },
          sm: {
            base: 'text-xs px-2.5 py-1 gap-1.5 rounded-full',
            leadingIcon: 'size-3',
          },
          md: {
            base: 'text-sm px-3.5 py-1.5 gap-1.5 rounded-full',
            leadingIcon: 'size-3.5',
          },
          lg: {
            base: 'text-base px-4 py-2 gap-2 rounded-full',
            leadingIcon: 'size-4',
          },
          xl: {
            base: 'text-base px-5 py-2.5 gap-2 rounded-full',
            leadingIcon: 'size-4',
          },
        },
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'ring-neutral-200 bg-neutral-50 text-neutral-700',
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: 'border-primary/20 bg-primary-50 text-primary',
        },
      ],
    },
    button: {
      slots: {
        base: 'font-display font-semibold text-[0.88rem] tracking-[0.02em] cursor-pointer',
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'hover:bg-primary-600 active:bg-primary-700',
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'hover:bg-primary hover:text-white active:bg-primary-600 active:text-white',
        },
        {
          color: 'cta',
          variant: 'solid',
          class: 'font-bold hover:bg-cta-700 active:bg-cta-700',
        },
        {
          color: 'cta',
          variant: 'outline',
          class: 'hover:bg-cta-500 hover:text-white active:bg-cta-600 active:text-white',
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'bg-white/10 hover:bg-white/20 active:bg-white/20 disabled:bg-white/10 aria-disabled:bg-white/10',
        },
      ],
      variants: {
        size: {
          xs: { base: 'px-3 py-1.5', trailingIcon: 'size-3' },
          sm: { base: 'px-3.5 py-2', trailingIcon: 'size-3' },
          md: { base: 'px-4 py-2.5', trailingIcon: 'size-3.5' },
          lg: { base: 'px-5 py-3', trailingIcon: 'size-3.5' },
          xl: {
            base: 'px-6 py-3.5',
            leadingIcon: 'size-4',
            trailingIcon: 'size-4',
          },
        },
      },
    },
  },
})
