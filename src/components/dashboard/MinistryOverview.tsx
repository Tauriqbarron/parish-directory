// =============================================================================
// MINISTRY OVERVIEW COMPONENT
// =============================================================================
// Shows a summary list of all ministries with member counts and status.
// Used on the dashboard for a quick glance at ministry health.
//
// LEARNING GOALS:
// - Rendering sorted/filtered lists
// - Using Badge component for status display
// =============================================================================

// TODO: Define MinistryOverviewProps interface
// - ministries: MinistryOverviewItem[]

// TODO: Create the MinistryOverview component
// - Logic:
//   1. Render a Card with header "Ministry Overview"
//   2. Sort ministries: active first, then by member count descending
//   3. Map over ministries and render each as a row:
//      - Ministry name (link to /ministries/[id])
//      - Member count
//      - Status badge
//      - Next scheduled date (if available)
//   4. If no ministries, show "No ministries yet" with link to create one
