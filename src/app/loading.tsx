// =============================================================================
// ROOT LOADING STATE
// =============================================================================
// This file is automatically used by Next.js to show a loading UI
// while page content is being fetched/rendered.
//
// LEARNING: Next.js App Router uses file conventions:
// - page.tsx = the page content
// - layout.tsx = shared wrapper
// - loading.tsx = loading state (wraps page in React Suspense)
// - error.tsx = error boundary
// - not-found.tsx = 404 page
// =============================================================================

// TODO: Create a Loading component
// - Render a centered LoadingSkeleton or spinner
// - This shows automatically when navigating between pages
// - Keep it simple — just a loading indicator

export default function Loading() {
  return (
    <div>
      {/* TODO: Replace with LoadingSkeleton component */}
      <p>Loading...</p>
    </div>
  );
}
