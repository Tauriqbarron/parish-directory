// =============================================================================
// MINISTRY MEMBERS API ROUTE
// =============================================================================
// Manage members of a specific ministry.
//
// LEARNING GOALS:
// - Nested dynamic routes in API
// - Cross-database references (personId from FastAPI DB, ministryId from local)
// - Upsert operations
// =============================================================================

// TODO: Create GET handler — list members of this ministry
// - Query: prisma.ministryMember.findMany({
//     where: { ministryId },
//     orderBy: { role: 'asc' }
//   })
// - NOTE: The person details come from FastAPI, so you may need to
//   enrich the response by fetching person data separately:
//   1. Get member records from local DB
//   2. Collect all personIds
//   3. Batch fetch person summaries from FastAPI: /persons?ids=1,2,3
//   4. Merge person data into member records

// TODO: Create POST handler — add a member to this ministry
// - Body: { personId: number, role: MemberRole }
// - Check if person is already a member (prevent duplicates)
// - Create: prisma.ministryMember.create({ data: { ministryId, personId, role, joinedAt: new Date() } })

// TODO: Create DELETE handler — remove a member
// - Use searchParams to get memberId
// - Delete: prisma.ministryMember.delete({ where: { id: memberId } })
