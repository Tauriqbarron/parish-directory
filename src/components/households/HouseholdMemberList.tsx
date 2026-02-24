// =============================================================================
// HOUSEHOLD MEMBER LIST COMPONENT
// =============================================================================
// Displays all members of a household with their roles.
//
// LEARNING GOALS:
// - Rendering arrays of complex objects
// - Using utility functions for display
// =============================================================================

// TODO: Define HouseholdMemberListProps interface
// - members: HouseholdMember[]

// TODO: Create the HouseholdMemberList component
// - Logic:
//   1. Sort members by role (head first, then spouse, children, other)
//   2. Map over members and render each with:
//      - Avatar with initials
//      - Full name (link to /directory/[personId])
//      - Role badge using HOUSEHOLD_ROLE_LABELS
//      - Primary household indicator if isPrimaryHousehold
