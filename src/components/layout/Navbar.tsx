// =============================================================================
// NAVBAR COMPONENT
// =============================================================================
// Top navigation bar with parish name, search, and user actions.
//
// LEARNING GOALS:
// - 'use client' directive (this component needs interactivity)
// - Next.js usePathname for active link highlighting
// - Responsive design with Tailwind
// =============================================================================

// TODO: Add 'use client' at the top (this component uses hooks)

// TODO: Create the Navbar component
// - Logic:
//   1. Use usePathname() from next/navigation to get current route
//   2. Render a <nav> with:
//      - Parish name / logo on the left
//      - Navigation links in the center:
//        Dashboard (/), Directory (/directory), Households (/households),
//        Ministries (/ministries)
//      - Highlight the active link based on current pathname
//      - Search icon on the right (optional global search)
//   3. Use Tailwind for:
//      - Fixed top positioning
//      - White background with bottom border
//      - Responsive padding
