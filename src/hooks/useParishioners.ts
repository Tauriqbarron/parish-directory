// =============================================================================
// USE PARISHIONERS HOOK
// =============================================================================
// Manages fetching, searching, and paginating parishioner data
// from the FastAPI backend.
//
// LEARNING GOALS:
// - Custom hooks that combine multiple hooks
// - Data fetching with useEffect
// - Loading/error state management
// - Returning objects from hooks (not just single values)
// =============================================================================

// TODO: Define the return type interface 'UseParishionersResult'
// - people: PersonSummary[]
// - total: number
// - isLoading: boolean
// - error: string | null
// - page: number
// - totalPages: number
// - setPage: (page: number) => void
// - setFilters: (filters: PersonSearchParams) => void
// - refresh: () => void

// TODO: Create the useParishioners custom hook
// - Signature: function useParishioners(initialFilters?: PersonSearchParams): UseParishionersResult
// - Logic:
//   1. useState for people array, loading, error, page, filters
//   2. useEffect that fires when page or filters change:
//      - Set loading = true
//      - Call parishApi.get<PaginatedResponse<PersonSummary>>('/persons', { ...filters, page })
//      - On success: set people and total
//      - On error: set error message
//      - Finally: set loading = false
//      - LEARNING: The useEffect dependency array [page, filters] means
//        this runs on mount AND whenever page or filters change.
//        This is how you sync UI state with server data.
//   3. Create refresh function that re-runs the fetch with current params
//   4. Return the full result object
//
// LEARNING: Custom hooks let you extract stateful logic into reusable functions.
// Without this hook, every page that shows parishioners would duplicate
// all this loading/error/fetch logic. With the hook:
//   const { people, isLoading, error, setPage } = useParishioners()
// Clean, reusable, testable.
