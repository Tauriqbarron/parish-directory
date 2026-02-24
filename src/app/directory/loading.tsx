// =============================================================================
// DIRECTORY LOADING STATE
// =============================================================================
// Shows a skeleton grid while the directory page is loading.
//
// LEARNING: Each route segment can have its own loading.tsx.
// This loading state is specific to the /directory route.
// =============================================================================

// TODO: Create a DirectoryLoading component
// - Render a grid of LoadingSkeleton components with variant='card'
// - Match the same grid layout as the directory page (e.g. 3 columns)
// - This gives users a visual hint of what's coming

export default function DirectoryLoading() {
  return (
    <div>
      {/* TODO: Replace with grid of LoadingSkeleton variant='card' */}
      <p>Loading directory...</p>
    </div>
  );
}
