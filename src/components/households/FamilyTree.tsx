// =============================================================================
// FAMILY TREE COMPONENT
// =============================================================================
// A visual representation of household relationships.
// Shows head and spouse at top, children below.
//
// LEARNING GOALS:
// - CSS Grid/Flexbox for tree-like layouts
// - Filtering and grouping array data
// =============================================================================

// TODO: Define FamilyTreeProps interface
// - members: HouseholdMember[]

// TODO: Create the FamilyTree component
// - Logic:
//   1. Group members by role:
//      - heads = members.filter(m => m.role === 'head')
//      - spouses = members.filter(m => m.role === 'spouse')
//      - children = members.filter(m => m.role === 'child')
//      - others = members.filter(m => m.role === 'other')
//   2. Render a tree layout:
//      - Top row: Head and Spouse side by side (with connecting line)
//      - Bottom row: Children in a row (with lines connecting to parents)
//      - Separate section for 'other' members
//   3. Each person node shows avatar, name, and link to profile
