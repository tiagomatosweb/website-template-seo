import type { VNodeChild } from 'vue'
import type { PageSectionProps } from '@nuxt/ui'

// A header field may be a plain string or a render function — () => h(...) — so a data
// object can highlight a word without embedding markup in a string.
export type SectionText = string | (() => VNodeChild)

// `ownSlots` names UPageSection slots the calling component fills from its own
// template (e.g. Faq2's #description); they're excluded from `forwardedSlots`
// so a parent slot of the same name doesn't double-render.
export function usePageSection<T extends Record<string, unknown>>(
  props: T,
  customKeys: (keyof T)[] = [],
  ownSlots: string[] = [],
) {
  const headlineFn = computed(() => (isRenderFn(props.headline) ? props.headline : undefined))
  const titleFn = computed(() => (isRenderFn(props.title) ? props.title : undefined))
  const descriptionFn = computed(() => (isRenderFn(props.description) ? props.description : undefined))

  const sectionProps = computed(() => {
    const out: Record<string, unknown> = {}
    for (const key in props) {
      if (customKeys.includes(key)) continue
      // Absent optional props stay out — an explicit `undefined` would clobber
      // static attrs merged before v-bind (e.g. a fixed orientation).
      if (props[key] === undefined) continue
      // Function-valued header fields render via slots, not the string prop.
      if ((key === 'headline' || key === 'title' || key === 'description') && isRenderFn(props[key])) continue
      out[key] = props[key]
    }
    return out as PageSectionProps
  })

  const handledSlots = new Set(['default', ...ownSlots])
  const slots = useSlots()
  const forwardedSlots = computed(() =>
    Object.fromEntries(Object.entries(slots).filter(([name]) => !handledSlots.has(name))),
  )

  return { sectionProps, headlineFn, titleFn, descriptionFn, forwardedSlots }
}
