import type { VNodeChild } from 'vue'

// A header/content field may be a plain string or a render function — () => h(...) —
// so a data object can highlight a word or nest markup without embedding HTML in a string.
export const isRenderFn = (v: unknown): v is (() => VNodeChild) => typeof v === 'function'

// A grid/list item is either its normal data object OR a render function that draws
// arbitrary content into that cell — the escape hatch for a one-off panel, image or CTA
// that doesn't fit the item shape. Sections branch on isRenderFn to pick the renderer.
export type RenderItem<T> = T | (() => VNodeChild)
