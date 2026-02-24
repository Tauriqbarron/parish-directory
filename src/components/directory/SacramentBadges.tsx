// =============================================================================
// SACRAMENT BADGES COMPONENT
// =============================================================================
// Displays a row of badges showing which sacraments a person has received.
// Each sacrament type gets a different colored badge.
//
// LEARNING GOALS:
// - Array.map() for rendering lists
// - Using constants for display labels
// - Simple presentational component
// =============================================================================

// TODO: Define SacramentBadgesProps interface
// - sacraments: Sacrament[] (imported from @/types)

// TODO: Create the SacramentBadges component
// - Logic:
//   1. Map over sacraments array
//   2. For each sacrament, render a Badge component
//      - Use SACRAMENT_LABELS[sacrament.sacramentType] for the display text
//      - Map sacrament types to badge variants:
//        baptism → 'info'
//        first_communion → 'success'
//        confirmation → 'warning'
//        marriage → 'default'
//        holy_orders → 'danger'
//   3. Use sacrament.id as the key prop for each Badge
//
// LEARNING: When rendering lists in React, every item needs a unique 'key' prop.
// React uses keys to efficiently update the DOM when the list changes.
// Always use a stable identifier (like id), never use array index as key.
