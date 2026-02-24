// =============================================================================
// ROSTER TYPES
// =============================================================================
// Rosters schedule ministry members for specific dates/services.
// E.g. "John Smith is reading at 9am Mass on March 15th"
//
// LEARNING GOALS:
// - Complex type composition
// - Date handling types
// - Mapped types for schedule views
// =============================================================================

import { Ministry } from "./ministry";
import { PersonSummary } from "./person";

// TODO: Define a union type called 'ServiceTime'
// - 'saturday_6pm' | 'sunday_8am' | 'sunday_9_30am' | 'sunday_11am'
// - These represent the Mass times at your parish
// - LEARNING: Even though these look like they could be free text,
//   constraining them to a union means you get autocomplete and
//   type-checking everywhere you use them.
export type ServiceTime =
  | "saturday_6pm"
  | "sunday_8am"
  | "sunday_9_30am"
  | "sunday_11am";

// TODO: Define an interface called 'RosterEntry'
// - id: string — UUID
// - ministryId: string — which ministry
// - personId: number — who is assigned
// - date: string — ISO date of the assignment
// - serviceTime: ServiceTime
// - notes: string (optional) — e.g. "Covering for Mary"
// - createdAt: string
// - updatedAt: string
export interface RosterEntry {
  id: string;
  ministryId: string;
  personId: number;
  date: string;
  serviceTime: ServiceTime;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// TODO: Define an interface called 'RosterEntryWithDetails'
// - Extends RosterEntry
// - Add: person: PersonSummary
// - Add: ministry: Pick<Ministry, 'id' | 'name'>
//
// LEARNING: Pick here grabs only id and name from Ministry.
// In list/calendar views you don't need the full Ministry object.
export interface RosterEntryWithDetails extends RosterEntry {
  person: PersonSummary;
  ministry: Pick<Ministry, 'id' | 'name'>;
}

// TODO: Define a type called 'WeeklyRoster'
// - Should be: Record<string, RosterEntryWithDetails[]>
// - The key is the date string (e.g. "2025-03-15")
// - The value is all roster entries for that date
// - LEARNING: Record<string, T[]> is perfect for grouping data by a key.
//   You'll use this to build the calendar/schedule view.
export type WeeklyRoster = Record<string, RosterEntryWithDetails[]>;

// TODO: Define an interface called 'CreateRosterInput'
// - ministryId: string
// - personId: number
// - date: string
// - serviceTime: ServiceTime
// - notes: string (optional)
export interface CreateRosterInput {
  ministryId: string;
  personId: number;
  date: string;
  serviceTime: ServiceTime;
  notes?: string;
}

// TODO: Define a type called 'BulkCreateRosterInput'
// - Should be: CreateRosterInput[]
// - LEARNING: Sometimes you need to create many entries at once
//   (e.g. fill out a whole month's schedule). An array type alias
//   makes the API contract clear.
export type BulkCreateRosterInput = CreateRosterInput[];
