// =============================================================================
// LOADING SKELETON COMPONENT
// =============================================================================
// Animated placeholder that shows while content is loading.
// Provides a better UX than a spinner by hinting at the content's shape.
//
// LEARNING GOALS:
// - CSS animations with Tailwind (animate-pulse)
// - Flexible layout components
// =============================================================================

// TODO: Define LoadingSkeletonProps interface
// - variant: 'text' | 'card' | 'avatar' | 'table-row' (optional, default 'text')
// - count: number (optional, default 1) — how many skeleton items to render
// - className: string (optional)

// TODO: Create the LoadingSkeleton component
// - Logic:
//   1. Use Array.from({ length: count }) to create an array of skeletons
//   2. Map each variant to a shape:
//      - 'text': A single gray bar (h-4 rounded bg-gray-200 animate-pulse)
//      - 'card': A card-shaped rectangle (h-32 rounded-lg bg-gray-200 animate-pulse)
//      - 'avatar': A circle (w-10 h-10 rounded-full bg-gray-200 animate-pulse)
//      - 'table-row': A row with multiple gray bars of varying widths
//   3. Apply className on top of base styles
//
// LEARNING: animate-pulse is a Tailwind utility that creates a gentle
// fade-in/fade-out animation. It's the standard loading skeleton effect.
