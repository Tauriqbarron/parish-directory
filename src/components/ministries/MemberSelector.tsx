// =============================================================================
// MEMBER SELECTOR COMPONENT
// =============================================================================
// Search and select parishioners to add to a ministry.
// Combines search, display of current members, and add/remove actions.
//
// LEARNING GOALS:
// - Complex interactive component with multiple states
// - useEffect for data fetching on search
// - Managing arrays in state (add/remove items)
// - Typing event handlers
// =============================================================================

// TODO: Define MemberSelectorProps interface
// - currentMembers: MinistryMember[]
// - onAddMember: (personId: number, role: MemberRole) => Promise<void>
// - onRemoveMember: (memberId: string) => Promise<void>
// - onUpdateRole: (memberId: string, newRole: MemberRole) => Promise<void>

// TODO: Create the MemberSelector component
// - Logic:
//   1. SearchBar to search parishioners by name
//   2. Dropdown results showing matching parishioners
//      - Filter out people who are already members
//   3. Clicking a result opens a role selector (Leader, Coordinator, Member)
//   4. After selecting role, call onAddMember
//   5. Below search: list of current members
//      - Show name, role, join date
//      - Dropdown to change role → calls onUpdateRole
//      - Remove button → confirm with Modal, then call onRemoveMember
