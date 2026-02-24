// =============================================================================
// ROSTER CALENDAR COMPONENT
// =============================================================================
// Weekly/monthly view of ministry assignments. The most complex component.
//
// LEARNING GOALS:
// - Date manipulation in TypeScript
// - Complex state management (multiple weeks, drag-to-assign)
// - Rendering grids/calendars
// - useReducer for complex state (better than multiple useState)
// =============================================================================

// TODO: Define RosterCalendarProps interface
// - ministryId: string
// - roster: WeeklyRoster — Record<string, RosterEntryWithDetails[]>
// - onCreateEntry: (input: CreateRosterInput) => Promise<void>
// - onDeleteEntry: (rosterId: string) => Promise<void>
// - availableMembers: MinistryMember[]

// TODO: Define a local type for CalendarView: 'week' | 'month'

// TODO: Create the RosterCalendar component
// - Logic:
//   1. useState for current view (week/month)
//   2. useState for the displayed date range (start/end dates)
//   3. Navigation: Previous/Next buttons to shift the date range
//   4. Render a grid:
//      - Columns: one per ServiceTime (Saturday 6pm, Sunday 8am, etc.)
//      - Rows: one per date in the range
//      - Each cell shows assigned person(s) or an empty "+" button
//   5. Clicking "+" opens a Modal with member selection dropdown
//   6. Clicking an assigned person shows options: view profile, remove
//
// LEARNING: useReducer is better than useState when you have:
// - Multiple related state values (view, startDate, endDate, selectedCell)
// - Complex state transitions (navigating forward changes both start and end)
// - State that depends on previous state
//
// Define a reducer with actions like:
//   { type: 'SET_VIEW', payload: CalendarView }
//   { type: 'NAVIGATE', payload: 'prev' | 'next' }
//   { type: 'SELECT_CELL', payload: { date: string, serviceTime: ServiceTime } }
//   { type: 'CLEAR_SELECTION' }
