// =============================================================================
// DASHBOARD TYPES
// =============================================================================
// Types for the dashboard statistics and overview data.
//
// LEARNING GOALS:
// - Complex nested object types
// - Types for charting/visualization data
// =============================================================================

// TODO: Define an interface called 'DashboardStats'
// - totalParishioners: number
// - totalHouseholds: number
// - totalMinistries: number
// - activeMinistries: number
// - upcomingRosterEntries: number — entries in the next 7 days
// - unassignedSlots: number — roster slots with no person assigned

// TODO: Define an interface called 'MinistryOverviewItem'
// - ministryId: string
// - ministryName: string
// - memberCount: number
// - status: MinistryStatus
// - nextScheduledDate: string | null
//
// LEARNING: 'string | null' means the value is either a string or null.
// This is different from 'string | undefined' or optional ('?').
// null = "we checked and there's no value"
// undefined = "we didn't check / property doesn't exist"

// TODO: Define an interface called 'RecentActivityItem'
// - id: string
// - type: 'member_added' | 'roster_created' | 'ministry_created' | 'member_removed'
// - description: string — human-readable description
// - timestamp: string
// - relatedEntityId: string — ID of the ministry/person involved
//
// LEARNING: The 'type' field as a union lets you use discriminated unions
// later if you need type-specific data for each activity type.

// TODO: Define an interface called 'DashboardData'
// - stats: DashboardStats
// - ministryOverview: MinistryOverviewItem[]
// - recentActivity: RecentActivityItem[]
// - rosterThisWeek: RosterEntryWithDetails[]
