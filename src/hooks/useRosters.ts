// =============================================================================
// USE ROSTERS HOOK
// =============================================================================
// Manages roster data fetching and CRUD operations.
//
// LEARNING GOALS:
// - Date range-based fetching
// - Grouping data by date (transforming flat array to Record)
// =============================================================================

// TODO: Define 'UseRostersResult' interface
// - roster: WeeklyRoster (Record<string, RosterEntryWithDetails[]>)
// - isLoading: boolean
// - error: string | null
// - createEntry: (input: CreateRosterInput) => Promise<void>
// - deleteEntry: (rosterId: string) => Promise<void>
// - setDateRange: (start: string, end: string) => void
// - refresh: () => void

// TODO: Create the useRosters custom hook
// - Signature: function useRosters(ministryId: string, initialStart?: string, initialEnd?: string): UseRostersResult
// - Logic:
//   1. useState for dateRange (start, end), loading, error
//   2. useEffect: fetch roster entries from /api/rosters?ministryId=X&startDate=Y&endDate=Z
//   3. Transform flat array response into WeeklyRoster (grouped by date)
//      - Use Array.reduce() to group entries by their date field
//   4. createEntry: POST to /api/rosters, then refresh
//   5. deleteEntry: DELETE to /api/rosters/[id], then refresh
