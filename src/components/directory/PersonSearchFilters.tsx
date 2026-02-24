// =============================================================================
// PERSON SEARCH FILTERS
// =============================================================================
// Filter panel for the directory page. Combines search, gender filter,
// age range, and sacrament status filters.
//
// LEARNING GOALS:
// - Managing complex form state with useReducer (not just useState)
// - Lifting state up (filters live in parent, this component just renders UI)
// - Controlled select/input components
// =============================================================================

// TODO: Define PersonSearchFiltersProps interface
// - filters: PersonSearchParams (the current filter state)
// - onFiltersChange: (filters: PersonSearchParams) => void
//
// LEARNING: This is "lifting state up" — the parent page owns the filter
// state and passes it down. This component renders the UI and calls back
// when the user changes a filter. The parent can then re-fetch data.

// TODO: Create the PersonSearchFilters component
// - Logic:
//   1. Render SearchBar component for free-text search
//   2. Render Select for gender filter (All, Male, Female, Other)
//   3. Render two number Inputs for age range (min/max)
//   4. Render Select for sacrament filter (All, Baptism, First Communion, etc.)
//      - Use SACRAMENT_LABELS from constants to populate options
//   5. Render a "Clear Filters" button that resets all to defaults
//   6. When any filter changes, call onFiltersChange with the updated params
