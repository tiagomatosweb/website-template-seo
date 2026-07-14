export default defineAppConfig({
  site: {
    name: 'BusinessName',
    description: 'A short sentence about the business, the area it serves and what makes it the trusted local choice.',
    phone: { display: '00 0000 0000', href: 'tel:0000000000' },
    google_rating: '4.9',
    social: {
      facebook: '#',
      instagram: '#',
    },
  },

  ui: {
    colors: {
      primary: 'primary',
      cta: 'cta',
      white: 'white',
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
        header: 'rounded-lg',
        container: 'p-4 sm:p-5',
        leadingIcon: 'size-7 text-primary',
        title: 'font-display text-lg font-bold tracking-tight leading-snug text-highlighted',
        description: 'text-[15px]',
      },
      variants: {
        variant: {
          solid: { root: 'bg-neutral-950 text-inverted' },
        },
      },
      compoundVariants: [
        { variant: 'outline', to: true, class: { root: 'hover:bg-default' } },
      ],
    },
    pageGrid: {
      base: 'gap-6 sm:gap-6 lg:gap-6',
    },
    accordion: {
      slots: {
        root: 'w-full space-y-4',
        item: 'rounded-xl bg-default ring ring-default px-4 sm:px-5 border-0',
        trigger: 'py-4 sm:py-5 gap-4 font-display font-bold text-base text-highlighted hover:text-primary data-[state=open]:text-primary transition-colors cursor-pointer',
        trailingIcon: 'text-highlighted group-data-[state=open]:text-primary transition-colors',
        body: 'text-base leading-relaxed text-toned pb-4 sm:pb-5',
      },
    },
    navigationMenu: {
      slots: {
        linkTrailingIcon: 'size-4 text-highlighted',
        viewport: 'rounded-lg ring-1 ring-default shadow-xl',
        link: 'cursor-pointer',
        childLinkLabel: 'font-medium whitespace-nowrap',
      },
      variants: {
        orientation: {
          horizontal: {
            link: 'font-bold text-sm',
            childList: 'p-1.5',
            childLink: 'px-3 py-1.5 pr-6 font-medium text-sm',
            content: 'w-auto!',
          },
          vertical: {
            link: 'px-3 py-2.5 font-semibold text-lg',
            childLink: 'px-3 py-2.5 text-[15px]',
          },
        },
        active: {
          true: {
            link: 'text-primary! before:bg-primary/8!',
            childLink: 'text-primary! before:bg-primary/8!',
            childLinkIcon: 'text-primary',
          },
          false: {
            link: 'text-toned! hover:text-primary! hover:before:bg-primary/8! data-[state=open]:text-primary! data-[state=open]:before:bg-primary/8! transition-colors before:transition-colors',
            childLink: 'text-muted! hover:text-primary! hover:before:bg-primary/8! transition-colors before:transition-colors',
            childLinkIcon: 'text-dimmed group-hover:text-primary transition-colors',
          },
        },
      },
      compoundVariants: [
        { orientation: 'vertical', collapsed: false, class: { childList: 'ms-3 border-s-2 border-primary/15' } },
      ],
    } as any,
    pageCTA: {
      slots: {
        root: 'rounded-none z-10',
        container: 'relative',
        title: 'text-3xl sm:text-4xl lg:text-5xl font-black',
        description: 'text-lg leading-relaxed max-w-3xl mx-auto [&_p]:text-lg',
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
        description: 'text-lg leading-relaxed text-pretty [&_p]:text-lg',
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
    pageSection: {
      slots: {
        container: 'py-16 lg:py-24',
        title: 'text-3xl sm:text-4xl lg:text-5xl font-black',
        description: 'text-lg leading-relaxed text-pretty [&_p]:text-lg',
        headline: 'font-display text-sm font-semibold uppercase tracking-widest text-primary',
        footer: 'mt-8',
        links: 'flex flex-wrap gap-x-6 gap-y-3',
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
        name: 'font-display mb-0 leading-tight!',
        description: 'text-muted mb-0 leading-tight!',
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
        {
          color: 'white',
          variant: 'solid',
          class: 'bg-white text-highlighted hover:bg-neutral-200 active:bg-neutral-200',
        },
      ],
      variants: {
        size: {
          xs: { base: 'px-3 py-1.5', leadingIcon: 'size-3', trailingIcon: 'size-3' },
          sm: { base: 'px-3.5 py-2', leadingIcon: 'size-3', trailingIcon: 'size-3' },
          md: { base: 'px-4 py-2.5', leadingIcon: 'size-3.5', trailingIcon: 'size-3.5' },
          lg: { base: 'px-5 py-3', leadingIcon: 'size-3.5', trailingIcon: 'size-3.5' },
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
