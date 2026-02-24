// =============================================================================
// MINISTRY CARD COMPONENT
// =============================================================================
// Displays a ministry summary in the ministries list view.
//
// LEARNING GOALS:
// - Displaying different states with badges
// - Conditional rendering based on data
// =============================================================================

// TODO: Define MinistryCardProps interface
// - ministry: Ministry & { memberCount?: number }

// TODO: Create the MinistryCard component
// - Logic:
//   1. Render a Card component
//   2. Card.Header: Ministry name + status Badge
//      - Map status to badge variant: active → 'success', inactive → 'danger', seasonal → 'warning'
//   3. Card.Body:
//      - Description (truncated if long)
//      - Meeting info (day, time, location) if available
//      - Member count if available
//   4. Card.Footer:
//      - "View Details" link to /ministries/[id]
//      - "Edit" link to /ministries/[id]/edit
