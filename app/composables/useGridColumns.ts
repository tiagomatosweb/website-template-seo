export type GridColumns = 1 | 2 | 3 | 4

// Each value pins EVERY breakpoint the UPageGrid base sets (sm + lg). The base is
// `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`; without an explicit lg: the base's
// lg:grid-cols-3 leaks through (e.g. columns=2 would still render 3 on desktop).
// tailwind-merge (via UPageGrid's tv) then dedupes each breakpoint to last-wins.
const COLUMN_CLASSES: Record<GridColumns, string> = {
  1: 'grid-cols-1 sm:grid-cols-1 lg:grid-cols-1',
  2: 'sm:grid-cols-2 lg:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

// Seamless-grid hairline dividers, keyed to the lg column count so the "last column"
// (no border-r) and "last row" (no border-b) rules match the actual layout. Mobile is
// 1 col, sm is 2 cols, lg is the chosen count. Full static strings so Tailwind keeps them.
// gap-0 at every breakpoint (the project's pageGrid base sets gap at each) so cells
// touch — the hairlines are the only separation.
const DIVIDER_BASE = 'gap-0 sm:gap-0 lg:gap-0 *:border-default *:border-b [&>*:last-child]:border-b-0 '
  + 'sm:*:border-r sm:[&>*:nth-child(2n)]:border-r-0 sm:[&>*:nth-last-child(-n+2)]:border-b-0'

// One column: cells stack, separated only by bottom hairlines (no vertical borders
// at any breakpoint). Own string — DIVIDER_BASE's sm 2-col rules don't apply here.
const DIVIDER_SINGLE = 'gap-0 sm:gap-0 lg:gap-0 *:border-default *:border-b [&>*:last-child]:border-b-0'

const DIVIDER_CLASSES: Record<GridColumns, string> = {
  1: DIVIDER_SINGLE,
  2: `${DIVIDER_BASE} lg:[&>*:nth-child(2n)]:border-r-0 lg:[&>*:nth-last-child(-n+2)]:border-b-0`,
  3: `${DIVIDER_BASE} lg:[&>*:nth-child(2n)]:border-r lg:[&>*:nth-child(3n)]:border-r-0 lg:[&>*:nth-last-child(-n+3)]:border-b-0`,
  4: `${DIVIDER_BASE} lg:[&>*:nth-child(2n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-last-child(-n+4)]:border-b-0`,
}

export function useGridColumns(columns: MaybeRefOrGetter<GridColumns | undefined>, fallback: GridColumns = 3) {
  return computed(() => COLUMN_CLASSES[toValue(columns) ?? fallback])
}

export function useGridDividers(columns: MaybeRefOrGetter<GridColumns | undefined>, fallback: GridColumns = 3) {
  return computed(() => DIVIDER_CLASSES[toValue(columns) ?? fallback])
}
