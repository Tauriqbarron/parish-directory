// =============================================================================
// PERSON CARD COMPONENT
// =============================================================================
// Displays a parishioner's summary info in the directory list.
// Used on the /directory page in a grid layout.
//
// LEARNING GOALS:
// - Typing component props with imported interfaces
// - Conditional rendering with &&
// - Next.js Link component for client-side navigation
// =============================================================================

// TODO: Define PersonCardProps interface
// - person: PersonSummary (imported from @/types)
// - onClick: (() => void) (optional)

// TODO: Create the PersonCard component
// - Logic:
//   1. Render a Card component
//   2. Show avatar circle with initials (use getInitials utility)
//   3. Show full name (use getFullName utility)
//   4. Show email and phone if they exist (conditional rendering)
//   5. Wrap in Next.js <Link href={`/directory/${person.id}`}>
//      - LEARNING: Next.js <Link> does client-side navigation without
//        full page reloads. It also prefetches the linked page on hover.
//   6. Optionally show sacrament badges if person has sacrament data
