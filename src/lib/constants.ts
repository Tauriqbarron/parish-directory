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

import '@/types'
import { HouseholdRole, MemberRole, SacramentType } from '@/types';

// TODO: Define PARISH_API_URL
// - Should read from process.env.NEXT_PUBLIC_PARISH_API_URL
// - Fallback to 'http://localhost:8000' for local development
// - LEARNING: NEXT_PUBLIC_ prefix makes env vars available in the browser.
//   Without this prefix, they're only available in server components and API routes.
export const PARISH_API_URL = process.env.NEXT_PUBLIC_PARISH_API_URL || "http://localhost:8000";

// TODO: Define SERVICE_TIMES as a readonly array using 'as const'
// - Contains objects with: { value: ServiceTime, label: string }
// - e.g. { value: 'sunday_9_30am', label: '9:30 AM Sunday Mass' }
// - 'as const' makes the values literal types, not just 'string'
// - LEARNING: 'as const' is a const assertion. Without it:
//   const x = ['a', 'b'] → type is string[]
//   const x = ['a', 'b'] as const → type is readonly ['a', 'b']
//   This gives you exact types instead of broad ones.

export const SERVICE_TIMES = [
    {value: 'sunday_9_30am', label:'9:30am Sunday Mass'},
    {value: 'sunday_8am', label:'8:00am Sunday Mass'},
    {value: 'sunday_11am', label:'11:00am Sunday Mass'},
    {value: 'saturday_6pm', label:'6:00pm Saturday Mass'},
] as const;

// TODO: Define SACRAMENT_LABELS as a Record<SacramentType, string>
// - Maps sacrament type values to display labels
// - e.g. 'first_communion' → 'First Communion'
// - LEARNING: Record ensures every SacramentType has a label.
//   If you add a new SacramentType, TypeScript forces you to add a label here.
export const SACRAMENT_LABELS: Record<SacramentType, string> = { 
    baptism: 'Baptism',
    first_communion: 'First Communion',
    confirmation: 'Confirmation',
    marriage: 'Marriage',
    holy_orders: 'Holy Orders',
};


// TODO: Define HOUSEHOLD_ROLE_LABELS as Record<HouseholdRole, string>
export const HOUSEHOLD_ROLE_LABELS: Record<HouseholdRole, string> = {
    head: 'Head of Household',
    spouse: 'Spouse',
    child: 'Child',
    other: 'Other',
};

// TODO: Define MEMBER_ROLE_LABELS as Record<MemberRole, string>
export const MEMBER_ROLE_LABELS: Record<MemberRole, string> = {
    leader: 'Leader',
    coordinator: 'Coordinator',
    member: 'Member',
};

// TODO: Define ITEMS_PER_PAGE as a number constant (e.g. 20)
export const ITEMS_PER_PAGE = 20;