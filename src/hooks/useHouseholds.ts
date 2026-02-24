// =============================================================================
// USE HOUSEHOLDS HOOK
// =============================================================================
// Manages fetching household data from the FastAPI backend.
// Similar pattern to useParishioners but for household data.
//
// LEARNING GOALS:
// - Reinforcing the custom hook pattern
// - Applying the same fetch/loading/error pattern to a different data type
// =============================================================================

// TODO: Define the return type interface 'UseHouseholdsResult'
// - households: HouseholdWithMembers[]
// - total: number
// - isLoading: boolean
// - error: string | null
// - page: number
// - totalPages: number
// - setPage: (page: number) => void
// - refresh: () => void

// TODO: Create the useHouseholds custom hook
// - Signature: function useHouseholds(): UseHouseholdsResult
// - Logic: Same pattern as useParishioners but fetches from '/households'
//   and returns HouseholdWithMembers[] data
