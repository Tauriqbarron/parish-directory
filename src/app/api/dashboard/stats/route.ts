// =============================================================================
// DASHBOARD STATS API ROUTE
// =============================================================================
// Aggregates data from multiple sources for the dashboard.
//
// LEARNING GOALS:
// - Aggregation queries in Prisma
// - Combining data from multiple sources (local DB + external API)
// - Promise.all for parallel queries
// =============================================================================

// TODO: Create GET handler
// - Logic:
//   1. Run all queries in parallel with Promise.all:
//      - Total parishioners: fetch count from FastAPI /persons/count
//      - Total households: fetch count from FastAPI /households/count
//      - Total/active ministries: prisma.ministry.count() with filters
//      - Upcoming roster entries: prisma.rosterEntry.count({
//          where: { date: { gte: today, lte: nextWeek } }
//        })
//      - Recent activity: prisma.activityLog.findMany({ take: 10, orderBy: ... })
//      - Ministry overview: prisma.ministry.findMany({
//          include: { _count: { select: { members: true } } }
//        })
//   2. Assemble into DashboardData shape
//   3. Return NextResponse.json(data)
