// =============================================================================
// HOUSEHOLD TYPES
// =============================================================================
// These types mirror the Household and HouseholdMember models from the
// Parish Database. Households group people by family/living arrangement.
//
// LEARNING GOALS:
// - Compose types that reference other types (Person inside Household)
// - Use union types for roles
// - Understand intersection types with '&'
// =============================================================================

// TODO: Define a union type called 'HouseholdRole'
// - 'head' | 'spouse' | 'child' | 'other'

// TODO: Define an interface called 'Household'
// - id: number
// - name: string — e.g. "The Smith Family"
// - addressLine1: string (optional)
// - addressLine2: string (optional)
// - city: string (optional)
// - postalCode: string (optional)
// - createdAt: string
// - updatedAt: string

// TODO: Define an interface called 'HouseholdMember'
// - id: number
// - householdId: number
// - personId: number
// - role: HouseholdRole — uses the union type above
// - isPrimaryHousehold: boolean
// - person: Person — the full person object (populated by API joins)
//
// LEARNING: This shows composition — a HouseholdMember contains a full Person.
// The API returns nested/joined data, and your types should reflect that.

// TODO: Define an interface called 'HouseholdWithMembers'
// - Use intersection: Household & { members: HouseholdMember[] }
// - This extends Household with an array of members
// - LEARNING: Intersection types ('&') combine two types into one.
//   This is useful when an API endpoint returns an entity with related data.
//   Alternative approach: extend the interface with 'extends' keyword.
