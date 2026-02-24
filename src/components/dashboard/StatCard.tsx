// =============================================================================
// STAT CARD COMPONENT
// =============================================================================
// Displays a single statistic with label, value, and optional trend.
// Used on the dashboard for key metrics like total parishioners, ministries, etc.
//
// LEARNING GOALS:
// - Simple presentational component
// - Number formatting
// =============================================================================

// TODO: Define StatCardProps interface
// - label: string — e.g. "Total Parishioners"
// - value: number — the statistic value
// - icon: React.ReactNode (optional) — icon to display
// - trend: { value: number; isPositive: boolean } (optional) — e.g. "+5 this week"

// TODO: Create the StatCard component
// - Logic:
//   1. Render a Card component
//   2. Show the icon (if provided) and label
//   3. Show the value in large, bold text
//   4. If trend provided, show trend value with up/down arrow and color
//      - Positive: green text, up arrow
//      - Negative: red text, down arrow
