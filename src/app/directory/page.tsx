// =============================================================================
// DIRECTORY PAGE
// =============================================================================
// Searchable, filterable list of all parishioners.
//
// THIS IS A CLIENT COMPONENT — needs interactivity (search, filters, pagination).
//
// LEARNING GOALS:
// - 'use client' directive and when you need it
// - Using custom hooks in pages
// - Client-side search and pagination
// - Next.js useRouter and useSearchParams for URL state
// =============================================================================

// TODO: Add 'use client' at the top of the file
// LEARNING: 'use client' marks this as a Client Component because it needs:
// - useState (for search state)
// - useEffect (in the custom hook)
// - Event handlers (onClick, onChange)
// Server Components can't use any of these!

// TODO: Import hooks: useParishioners, usePagination
// TODO: Import components: PersonCard, PersonSearchFilters, Pagination, SearchBar, LoadingSkeleton
// TODO: Import Next.js: useRouter, useSearchParams

// TODO: Create the DirectoryPage component
// - Logic:
//   1. Read initial search params from URL using useSearchParams()
//      - LEARNING: useSearchParams() gives you the URL query string.
//        This means the search state is in the URL (?query=smith&page=2),
//        which makes the page bookmarkable and shareable.
//   2. Use useParishioners hook with initial filters from URL
//   3. When filters change:
//      - Update the hook's filters
//      - Update the URL using router.push() or router.replace()
//      - LEARNING: router.replace() updates the URL without adding a
//        browser history entry. Use it for filter changes.
//   4. Render:
//      - PageHeader with title "Parish Directory" and count
//      - PersonSearchFilters component
//      - Grid of PersonCard components (or loading skeletons)
//      - Pagination component at the bottom
