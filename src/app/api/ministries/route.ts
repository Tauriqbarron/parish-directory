// =============================================================================
// MINISTRIES API ROUTE (Collection)
// =============================================================================
// Handles GET (list all) and POST (create) for ministries.
//
// LEARNING GOALS:
// - Next.js Route Handlers (the App Router way to build APIs)
// - Request/Response objects (Web API standard, not Express-style)
// - Prisma ORM for database queries
// - Input validation
// - HTTP status codes
// =============================================================================

// TODO: Import NextRequest, NextResponse from 'next/server'
// TODO: Import prisma from '@/lib/db'
// TODO: Import types: CreateMinistryInput, Ministry, PaginatedResponse

// TODO: Create the GET handler
// - export async function GET(request: NextRequest)
// - Logic:
//   1. Parse query params from request.nextUrl.searchParams
//      - page, pageSize, status filter
//   2. Query ministries using Prisma:
//      const ministries = await prisma.ministry.findMany({
//        skip: (page - 1) * pageSize,
//        take: pageSize,
//        where: status ? { status } : undefined,
//        orderBy: { name: 'asc' },
//        include: { _count: { select: { members: true } } }
//      })
//      - LEARNING: Prisma provides a type-safe query builder.
//        findMany = SELECT * FROM ministries
//        skip/take = OFFSET/LIMIT for pagination
//        where = WHERE clause
//        include._count = adds a count of related records
//   3. Get total count: await prisma.ministry.count({ where: ... })
//   4. Return NextResponse.json(paginatedResponse)
//
// LEARNING: Next.js Route Handlers use the Web Request/Response APIs,
// not the Express req/res pattern. NextRequest extends Request with
// helper methods like .nextUrl for parsing URLs.

// TODO: Create the POST handler
// - export async function POST(request: NextRequest)
// - Logic:
//   1. Parse body: const body: CreateMinistryInput = await request.json()
//   2. Validate required fields (name at minimum)
//      - If invalid, return NextResponse.json(error, { status: 400 })
//   3. Create ministry: await prisma.ministry.create({ data: body })
//   4. Return NextResponse.json(ministry, { status: 201 })
//
// LEARNING: Status codes matter!
// 200 = OK (successful GET/PUT)
// 201 = Created (successful POST)
// 400 = Bad Request (validation error)
// 404 = Not Found
// 500 = Internal Server Error
