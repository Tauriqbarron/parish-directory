// =============================================================================
// PERSON PROFILE COMPONENT
// =============================================================================
// Full profile view for a single parishioner. Shows all their information
// including household, sacraments, and ministry memberships.
//
// LEARNING GOALS:
// - Composing multiple data sources into one view
// - Tab/section navigation within a component
// - Conditional rendering for optional data sections
// =============================================================================

// TODO: Define PersonProfileProps interface
// - person: PersonWithSacraments
// - household: HouseholdWithMembers | null
// - ministries: MinistryMember[] — ministries this person belongs to

// TODO: Create the PersonProfile component
// - Logic:
//   1. Header section: Avatar, name, basic contact info, age
//   2. Tab navigation: "Details" | "Sacraments" | "Household" | "Ministries"
//      - Use useState<string> for active tab
//   3. Details tab: Full address, notes, dates (createdAt, updatedAt)
//   4. Sacraments tab: List each sacrament with type, date, additional data
//      - Use SacramentBadges sub-component for visual display
//   5. Household tab: Show household name, all members with roles
//      - Link each member's name to their /directory/[id] page
//   6. Ministries tab: List ministries with role and join date
//      - Link each ministry to /ministries/[id]
