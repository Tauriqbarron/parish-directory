// =============================================================================
// ROSTER API ROUTE
// =============================================================================
// Manage roster/schedule entries for ministry assignments.
//
// LEARNING GOALS:
// - Date filtering in Prisma queries
// - Bulk create operations
// - Query optimization with select
// =============================================================================

// TODO: Create GET handler
// - Query params: ministryId, startDate, endDate
// - Logic:
//   1. Build Prisma where clause:
//      { ministryId, date: { gte: startDate, lte: endDate } }
//   2. Include related data (person summary, ministry name)
//   3. Group results by date for the WeeklyRoster type
//      - LEARNING: Prisma returns flat arrays. You transform them into
//        the grouped Record<string, RosterEntry[]> shape in application code.
//        Use Array.reduce() to group by date.

// TODO: Create POST handler
// - Accept single CreateRosterInput or BulkCreateRosterInput
// - For bulk: use prisma.rosterEntry.createMany({ data: entries })
// - Validate: check for duplicate assignments (same person, date, serviceTime)
// - Return created entries
