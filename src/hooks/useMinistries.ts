// =============================================================================
// USE MINISTRIES HOOK
// =============================================================================
// Manages ministry CRUD operations via Next.js API routes.
//
// LEARNING GOALS:
// - Hooks that handle both reading AND writing data
// - Optimistic updates (update UI before server confirms)
// - Callback memoization with useCallback
// =============================================================================

// TODO: Define 'UseministriesResult' interface
// - ministries: Ministry[]
// - isLoading: boolean
// - error: string | null
// - createMinistry: (input: CreateMinistryInput) => Promise<Ministry | null>
// - updateMinistry: (id: string, input: UpdateMinistryInput) => Promise<Ministry | null>
// - deleteMinistry: (id: string) => Promise<boolean>
// - refresh: () => void

// TODO: Create the useMinistries custom hook
// - Logic:
//   1. Fetch ministries from /api/ministries on mount
//   2. createMinistry function:
//      - POST to /api/ministries
//      - On success: add the new ministry to the local array
//      - Return the created ministry
//   3. updateMinistry function:
//      - PUT to /api/ministries/[id]
//      - On success: replace the ministry in the local array
//      - Return the updated ministry
//   4. deleteMinistry function:
//      - DELETE to /api/ministries/[id]
//      - On success: remove from the local array
//      - Return true/false for success
//   5. Wrap mutation functions in useCallback to prevent unnecessary re-renders
//
// LEARNING: useCallback memoizes functions so they maintain the same reference
// between renders. Without it, every render creates a new function object,
// which can cause child components to re-render unnecessarily.
// useCallback(fn, [deps]) only creates a new function when deps change.
