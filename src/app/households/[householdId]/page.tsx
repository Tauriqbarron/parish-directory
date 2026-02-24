// =============================================================================
// HOUSEHOLD DETAIL PAGE
// =============================================================================
// Shows a single household with all its members and family tree view.
//
// LEARNING GOALS:
// - Dynamic route params
// - Composing detail views from multiple components
// =============================================================================

// TODO: Import components: HouseholdMemberList, FamilyTree, PageHeader
// TODO: Import { notFound } from 'next/navigation'

// TODO: Define PageProps with params: { householdId: string }

// TODO: Create the HouseholdDetailPage component
// - Logic:
//   1. Parse householdId from params
//   2. Fetch household with members from FastAPI
//   3. If not found, call notFound()
//   4. Render PageHeader with household name
//   5. Render FamilyTree component
//   6. Render HouseholdMemberList component
//   7. Show household address information
