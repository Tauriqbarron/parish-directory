// =============================================================================
// DASHBOARD PAGE (Home)
// =============================================================================
// The main dashboard showing parish statistics, ministry overview,
// recent activity, and this week's roster.
//
// THIS IS A SERVER COMPONENT — fetches data on the server.
//
// LEARNING GOALS:
// - Server-side data fetching in Next.js App Router
// - Async Server Components
// - Composing dashboard from multiple data sources
// - Passing server-fetched data to client components
// =============================================================================

// TODO: Import dashboard components: StatCard, RecentActivity, QuickActions, MinistryOverview
// TODO: Import types: DashboardData

// TODO: Create an async function to fetch dashboard data
// - async function getDashboardData(): Promise<DashboardData>
// - Fetch from internal API: fetch('/api/dashboard/stats', { cache: 'no-store' })
//   - LEARNING: In server components, you call fetch() directly — no useEffect needed!
//   - 'cache: no-store' means always fetch fresh data (dynamic rendering)
//   - Other options: 'force-cache' (static), { next: { revalidate: 60 } } (ISR)
//   - These caching strategies are unique to Next.js and very important.

// TODO: Create the Dashboard page component (async!)
// - export default async function DashboardPage()
//   - LEARNING: Server Components can be async functions!
//     This is impossible in regular React (no async function components).
//     Next.js handles the async rendering on the server.
// - Logic:
//   1. const data = await getDashboardData()
//   2. Render a grid layout:
//      - Row 1: StatCard grid (4 cards showing key numbers)
//      - Row 2: Two columns
//        - Left: MinistryOverview showing all ministries with member counts
//        - Right: RecentActivity feed
//      - Row 3: QuickActions (links to common tasks)
//      - Row 4: This week's roster summary

export default function DashboardPage() {
  return (
    <div>
      <h1>Parish Directory Dashboard</h1>
      {/* TODO: Implement dashboard layout as described above */}
    </div>
  );
}
