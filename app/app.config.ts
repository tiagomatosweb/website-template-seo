export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      cta: 'cta',
      neutral: 'slate',
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
    },
    card: {
      slots: {
        body: 'p-4',
        header: 'p-4',
        footer: 'p-4',
      },
    },
    pageCard: {
      slots: {
        container: 'p-4 sm:p-4',
      },
    },
    accordion: {
      slots: {
        item: 'border-b border-neutral-200 last:border-b-0',
        trigger: 'py-5 gap-4 font-display font-bold text-base text-neutral-900 hover:text-primary transition-colors',
        trailingIcon: 'text-primary',
        body: 'text-base leading-relaxed text-neutral-600 pb-5',
      },
    },
    pageCTA: {
      slots: {
        root: 'rounded-none z-10',
        container: 'relative',
        title: 'text-3xl sm:text-4xl lg:text-5xl font-black',
        description: 'leading-relaxed max-w-3xl mx-auto',
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-primary-950',
            title: 'text-inverted',
            description: 'text-white/80'
          },
        },
      },
      defaultVariants: {
        variant: 'solid'
      }
    },
    pageHero: {
      slots: {
        container: 'py-16 lg:py-24 gap-12 lg:gap-16',
        headline: 'mb-4 font-display font-bold text-primary',
        title: 'font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-neutral-900 text-balance',
        description: 'text-lg leading-relaxed text-neutral-600 text-pretty',
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
      variants: {
        orientation: {
          vertical: {
            headline: 'justify-start',
            leading: 'justify-start',
            title: 'text-left',
            description: 'text-left text-balance',
            links: 'justify-start',
          },
        },
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
        base: 'font-display font-semibold text-[0.88rem] tracking-[0.02em] cursor-pointer'
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
        }
      }
    }
  },
})
