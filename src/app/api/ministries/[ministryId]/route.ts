// =============================================================================
// MINISTRY API ROUTE (Individual)
// =============================================================================
// Handles GET (one), PUT (update), DELETE for a single ministry.
//
// LEARNING GOALS:
// - Dynamic API route params
// - Prisma update and delete operations
// - Error handling (not found, validation)
// =============================================================================

// TODO: Define route params type
// - interface RouteParams { params: { ministryId: string } }

// TODO: Create GET handler
// - Logic:
//   1. Get ministryId from params
//   2. const ministry = await prisma.ministry.findUnique({
//        where: { id: ministryId },
//        include: { members: { include: { person: true } } }
//      })
//   3. If not found: return NextResponse.json(error, { status: 404 })
//   4. Return the ministry with members

// TODO: Create PUT handler
// - Logic:
//   1. Parse body as UpdateMinistryInput
//   2. Validate
//   3. await prisma.ministry.update({ where: { id }, data: body })
//   4. Return updated ministry

// TODO: Create DELETE handler
// - Logic:
//   1. Delete all members first (cascade): prisma.ministryMember.deleteMany({ where: { ministryId } })
//   2. Delete the ministry: prisma.ministry.delete({ where: { id } })
//   3. Return NextResponse.json({ success: true })
//
// LEARNING: Prisma doesn't always auto-cascade deletes.
// You need to handle related records explicitly or configure
// cascade in the Prisma schema with onDelete: Cascade.
