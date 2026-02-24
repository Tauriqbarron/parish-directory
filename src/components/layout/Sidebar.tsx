// =============================================================================
// SIDEBAR COMPONENT
// =============================================================================
// Left sidebar navigation with icons and labels.
//
// LEARNING GOALS:
// - 'use client' directive
// - Active state management with usePathname
// - Icon + text navigation patterns
// =============================================================================

// TODO: Add 'use client' at the top

// TODO: Define a local interface for navigation items
// - label: string
// - href: string
// - icon: React.ReactNode (SVG icon)

// TODO: Create the Sidebar component
// - Logic:
//   1. Define navigation items array:
//      - Dashboard (/) — home icon
//      - Directory (/directory) — people icon
//      - Households (/households) — house icon
//      - Ministries (/ministries) — group icon
//   2. Use usePathname() to determine active link
//   3. Render a <aside> with:
//      - Fixed left positioning, full height
//      - Dark or light background
//      - Navigation items as vertical list
//      - Active item highlighted with different background/text color
//      - Icons with labels (or just icons on mobile)
//   4. Responsive: hide on mobile, show on desktop (md: breakpoint)
