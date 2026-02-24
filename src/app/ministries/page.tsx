// =============================================================================
// MINISTRIES LIST PAGE
// =============================================================================
// Shows all ministries with member counts, status, and actions.
//
// LEARNING GOALS:
// - Mixing server and client components on one page
// - Server data fetching + client interactivity
// - Next.js Link for navigation
// =============================================================================

// TODO: Create as a SERVER COMPONENT (no 'use client')
// - Fetch ministries on the server
// - Render a grid of MinistryCard components
// - Include "Create New Ministry" button linking to /ministries/new
// - Each MinistryCard links to /ministries/[id]
//
// LEARNING: Even though the list page itself is a server component,
// individual MinistryCard components can be client components if they
// need interactivity (like a status toggle or delete button).
// This is the "server component with client islands" pattern.
