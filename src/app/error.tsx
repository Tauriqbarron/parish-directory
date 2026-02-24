// =============================================================================
// ROOT ERROR BOUNDARY
// =============================================================================
// Catches unhandled errors in any child page and shows a fallback UI.
//
// THIS MUST BE A CLIENT COMPONENT ('use client') because error boundaries
// use React's error boundary feature which requires client-side JavaScript.
//
// LEARNING GOALS:
// - Error boundaries in Next.js
// - 'use client' requirement for error handling
// - reset() function to retry rendering
// =============================================================================

// TODO: Add 'use client' at the top

// TODO: Define ErrorProps interface
// - error: Error & { digest?: string }
// - reset: () => void — function to retry rendering the page
//
// LEARNING: 'digest' is a hash of the error that occurred on the server.
// It's safe to show to users (unlike the full error message which might
// contain sensitive information).

// TODO: Create the Error component
// - Logic:
//   1. Log the error (console.error or send to error tracking service)
//      - Use useEffect to log once on mount
//   2. Render a user-friendly error message
//   3. Render a "Try Again" button that calls reset()
//      - reset() tells Next.js to re-render the page segment

'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* TODO: Implement error UI as described above */}
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
