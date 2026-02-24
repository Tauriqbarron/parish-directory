// =============================================================================
// APPLICATION CONSTANTS
// =============================================================================
// Centralized configuration values used throughout the app.
//
// LEARNING GOALS:
// - 'as const' assertions for literal types
// - Readonly arrays and objects
// - Deriving types from constants (typeof + indexing)
// =============================================================================

// TODO: Define PARISH_API_URL
// - Should read from process.env.NEXT_PUBLIC_PARISH_API_URL
// - Fallback to 'http://localhost:8000' for local development
// - LEARNING: NEXT_PUBLIC_ prefix makes env vars available in the browser.
//   Without this prefix, they're only available in server components and API routes.

// TODO: Define SERVICE_TIMES as a readonly array using 'as const'
// - Contains objects with: { value: ServiceTime, label: string }
// - e.g. { value: 'sunday_9_30am', label: '9:30 AM Sunday Mass' }
// - 'as const' makes the values literal types, not just 'string'
// - LEARNING: 'as const' is a const assertion. Without it:
//   const x = ['a', 'b'] → type is string[]
//   const x = ['a', 'b'] as const → type is readonly ['a', 'b']
//   This gives you exact types instead of broad ones.

// TODO: Define SACRAMENT_LABELS as a Record<SacramentType, string>
// - Maps sacrament type values to display labels
// - e.g. 'first_communion' → 'First Communion'
// - LEARNING: Record ensures every SacramentType has a label.
//   If you add a new SacramentType, TypeScript forces you to add a label here.

// TODO: Define HOUSEHOLD_ROLE_LABELS as Record<HouseholdRole, string>

// TODO: Define MEMBER_ROLE_LABELS as Record<MemberRole, string>

// TODO: Define ITEMS_PER_PAGE as a number constant (e.g. 20)
