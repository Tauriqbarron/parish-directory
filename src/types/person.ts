// =============================================================================
// PERSON TYPES
// =============================================================================
// These types mirror the Person model from the Parish Database (FastAPI backend).
// They represent data fetched FROM the existing API, not stored by this app.
//
// LEARNING GOALS:
// - Define interfaces vs types (use interface for object shapes, type for unions)
// - Use optional properties with '?'
// - Use union types for constrained string values
// - Understand 'readonly' for data from APIs you don't mutate directly
// =============================================================================

import { SacramentType } from "./sacrament";

// TODO: Define a union type called 'Gender'
// - Should be one of: 'male' | 'female'
// - This constrains the value to only these three strings
// - LEARNING: Union types are like enums but more flexible in TypeScript
export type Gender = "male" | "female";


// TODO: Define an interface called 'Person'
// - id: number (required) — primary key from database
// - firstName: string (required)
// - middleName: string (optional — use '?')
// - lastName: string (required)
// - dateOfBirth: string (optional) — ISO date string from API e.g. "1990-05-15"
// - gender: Gender (optional) — use the union type defined above
// - email: string (optional)
// - phone: string (optional)
// - addressLine1: string (optional)
// - addressLine2: string (optional)
// - city: string (optional)
// - postalCode: string (optional)
// - notes: string (optional)
// - createdAt: string (required) — ISO datetime from API
// - updatedAt: string (required) — ISO datetime from API
//
// LEARNING: Interfaces define the "shape" of objects. They are the bread and
// butter of TypeScript. Every API response should have a corresponding interface.

export interface Person {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth?: string;
  gender?: Gender;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postalCode?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}


// TODO: Define a type called 'PersonSummary'
// - Use Pick<Person, 'id' | 'firstName' | 'lastName' | 'email' | 'phone'>
// - This creates a lighter version of Person for list views
// - LEARNING: Pick<T, K> is a utility type that creates a new type by picking
//   specific properties from an existing type. Very useful for API responses
//   that return partial data.
export type PersonSummary = Pick<Person, 'id' | 'firstName' | 'lastName' | 'email' | 'phone'>;


// TODO: Define an interface called 'PersonSearchParams'
// - query: string (optional) — free text search
// - gender: Gender (optional) — filter by gender
// - minAge: number (optional) — filter by minimum age
// - maxAge: number (optional) — filter by maximum age
// - hasSacrament: SacramentType (optional) — import from sacrament.ts
// - page: number (optional, default 1)
// - pageSize: number (optional, default 20)
//
// LEARNING: Search/filter params are a great use case for interfaces with
// all-optional properties. They map directly to URL query parameters.
export interface PersonSearchParams {
  query?: string;
  gender?: Gender;
  minAge?: number;
  maxAge?: number;
  hasSacrament?: SacramentType;
  page?: number;
  pageSize?: number;
}


// TODO: Define a type called 'PersonFormData'
// - Use Omit<Person, 'id' | 'createdAt' | 'updatedAt'>
// - This is what you send when CREATING a person — no id or timestamps yet
// - LEARNING: Omit<T, K> removes properties from a type. The inverse of Pick.
//   Use it when most fields are needed but a few should be excluded.
export type PersonFormData = Omit<Person, 'id' | 'createdAt' | 'updatedAt'>;