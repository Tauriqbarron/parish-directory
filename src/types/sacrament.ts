// =============================================================================
// SACRAMENT TYPES
// =============================================================================
// Sacraments are religious milestones (Baptism, First Communion, etc.)
// stored per person in the Parish Database.
//
// LEARNING GOALS:
// - Discriminated unions (different shapes based on a 'type' field)
// - Generic types for sacrament-specific additional data
// - Record<K, V> utility type
// =============================================================================

import { Person } from "./person";

// TODO: Define a union type called 'SacramentType'
// - 'baptism' | 'first_communion' | 'confirmation' | 'marriage' | 'holy_orders'
export type SacramentType =
  | "baptism"
  | "first_communion"
  | "confirmation"
  | "marriage"
  | "holy_orders";


// TODO: Define an interface called 'BaptismData'
// - godfather: string (optional)
// - godmother: string (optional)
// - minister: string (optional)
// - church: string (optional)
export interface BaptismData {
  godfather?: string;
  godmother?: string;
  minister?: string;
  church?: string;
}


// TODO: Define an interface called 'MarriageData'
// - spouseName: string
// - minister: string (optional)
// - church: string (optional)
// - witnessOne: string (optional)
// - witnessTwo: string (optional)
export interface MarriageData {
  spouseName: string;
  minister?: string;
  church?: string;
  witnessOne?: string;
  witnessTwo?: string;
}


// TODO: Define a type called 'SacramentAdditionalData'
// - This should be a conditional/mapped type:
//   BaptismData if sacramentType is 'baptism'
//   MarriageData if sacramentType is 'marriage'
//   Record<string, string> for all others (generic key-value pairs)
//
// LEARNING: Record<K, V> creates an object type with keys of type K and
// values of type V. Record<string, string> means any string key, string value.
// This is useful when the shape is dynamic/unknown.
export type SacramentAdditionalData<T extends SacramentType> =
  T extends "baptism" ? BaptismData :
  T extends "marriage" ? MarriageData :
  Record<string, string>;

// TODO: Define an interface called 'Sacrament'
// - id: number
// - personId: number
// - sacramentType: SacramentType
// - dateReceived: string — ISO date
// - notes: string (optional)
// - additionalData: SacramentAdditionalData (optional)
// - createdAt: string
// - updatedAt: string
export interface Sacrament {
  id: number;
  personId: number;
  sacramentType: SacramentType;
  dateReceived: string;
  notes?: string;
  additionalData?: SacramentAdditionalData<SacramentType>;
  createdAt: string;
  updatedAt: string;
}

// TODO: Define a type called 'PersonWithSacraments'
// - Use: Person & { sacraments: Sacrament[] }
// - LEARNING: This is a common pattern — the detail view of a person
//   includes their sacrament records as a nested array.
export type PersonWithSacraments = Person & { sacraments: Sacrament[] };