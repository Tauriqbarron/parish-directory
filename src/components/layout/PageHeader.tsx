// =============================================================================
// PAGE HEADER COMPONENT
// =============================================================================
// Consistent header for each page with title, description, and actions.
//
// LEARNING GOALS:
// - Flexible component with optional sections
// - React.ReactNode for action buttons slot
// =============================================================================

// TODO: Define PageHeaderProps interface
// - title: string
// - description: string (optional)
// - actions: React.ReactNode (optional) — buttons or links to show on the right
// - backHref: string (optional) — if provided, show a back arrow link

// TODO: Create the PageHeader component
// - Logic:
//   1. Render a <div> with flex layout (title left, actions right)
//   2. If backHref, render a back arrow link using Next.js Link
//   3. Render title as <h1>
//   4. Render description as <p> in gray text if provided
//   5. Render actions on the right side if provided
