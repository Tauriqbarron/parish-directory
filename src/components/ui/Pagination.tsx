// =============================================================================
// PAGINATION COMPONENT
// =============================================================================
//
// LEARNING GOALS:
// - Deriving component state from props
// - Array.from() for generating page number arrays
// - Callback props with typed parameters
// =============================================================================

// TODO: Define PaginationProps interface
// - currentPage: number
// - totalPages: number
// - onPageChange: (page: number) => void
//
// LEARNING: This is a "controlled" component — the parent manages the
// current page state. Pagination just renders UI and calls back.

// TODO: Create the Pagination component
// - Logic:
//   1. Calculate visible page numbers (show max 5 pages with ellipsis)
//      - Always show first page, last page, and pages around current
//      - e.g. for page 5 of 10: [1, '...', 4, 5, 6, '...', 10]
//   2. Render Previous button (disabled on page 1)
//   3. Render page number buttons (highlight current page)
//   4. Render Next button (disabled on last page)
//   5. Call onPageChange(newPage) when any button is clicked
