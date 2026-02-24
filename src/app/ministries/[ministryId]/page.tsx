// =============================================================================
// MINISTRY DETAIL PAGE
// =============================================================================
// Shows ministry info, members list, and roster schedule.
//
// LEARNING GOALS:
// - Combining server-fetched data with client-side interactivity
// - Tab-based layouts
// - Passing server data as props to interactive client components
// =============================================================================

// TODO: This page has two parts:
// 1. Server Component wrapper: Fetches ministry data
// 2. Client Component child: Handles member management and roster interaction

// Server part:
// - Fetch ministry with members from /api/ministries/[id]?include=members
// - Fetch roster data from /api/rosters?ministryId=[id]
// - Pass both as props to the client component

// Client part (could be a separate component file):
// - Renders tabs: "Overview" | "Members" | "Roster"
// - Overview: Ministry details (name, description, meeting info, status)
// - Members: MemberSelector component for add/remove
// - Roster: RosterCalendar component
