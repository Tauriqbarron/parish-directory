// =============================================================================
// RECENT ACTIVITY COMPONENT
// =============================================================================
// Displays a feed of recent actions (members added, rosters created, etc.)
//
// LEARNING GOALS:
// - Rendering activity feed lists
// - Using formatRelativeTime utility
// - Discriminated union rendering (different icons per activity type)
// =============================================================================

// TODO: Define RecentActivityProps interface
// - activities: RecentActivityItem[]

// TODO: Create the RecentActivity component
// - Logic:
//   1. Render a Card with header "Recent Activity"
//   2. Map over activities and render each as a list item:
//      - Icon based on activity type:
//        member_added → person icon (green)
//        roster_created → calendar icon (blue)
//        ministry_created → group icon (purple)
//        member_removed → person icon (red)
//      - Description text
//      - Relative timestamp using formatRelativeTime utility
//   3. If no activities, show "No recent activity" message
