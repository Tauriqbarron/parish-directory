// =============================================================================
// USE PAGINATION HOOK
// =============================================================================
// Reusable pagination logic.
//
// LEARNING GOALS:
// - Derived/computed values (totalPages from total + pageSize)
// - useMemo for expensive calculations
// - Encapsulating related state
// =============================================================================

// TODO: Define UsePaginationResult interface
// - page: number
// - pageSize: number
// - totalPages: number
// - setPage: (page: number) => void
// - nextPage: () => void
// - prevPage: () => void
// - isFirstPage: boolean
// - isLastPage: boolean

// TODO: Create the usePagination hook
// - Parameters: (total: number, pageSize?: number)
// - Logic:
//   1. useState for current page (start at 1)
//   2. Calculate totalPages = Math.ceil(total / pageSize)
//      - Use useMemo since this depends on total and pageSize
//   3. Create nextPage/prevPage with boundary checks
//   4. Derive isFirstPage/isLastPage booleans
//
// LEARNING: useMemo caches a computed value and only recalculates when
// dependencies change. For simple math like this it's optional, but
// for expensive computations (sorting large arrays, complex filters)
// it prevents recalculating on every render.
