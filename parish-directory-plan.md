# Parish Directory & Ministry Tracker

## Learning Project: React + TypeScript + Next.js

A parishioner directory and ministry management app that connects to your existing Parish Database backend. This project teaches you React, TypeScript, and Next.js by building a real tool your parish can use — while your existing Parish Events Manager (Vue/Nuxt) handles events and your Parish Database (SvelteKit/FastAPI/PostgreSQL) stores core data.

---

## What This Project Is

A **frontend-focused** Next.js application that provides:

- A searchable parishioner directory with household views
- Ministry/group management (Lectors, Eucharistic Ministers, Youth Group, etc.)
- A roster/scheduling system for ministry assignments
- A dashboard with parish statistics and quick actions

It connects to your **existing FastAPI backend** from the Parish Database project for parishioner data, and adds its own API routes (Next.js API Routes) for ministry-specific data stored in PostgreSQL.

---

## Why This Teaches You What You Need

| Skill | How You'll Learn It |
|-------|-------------------|
| **React fundamentals** | Building components, props, state, effects, event handling from scratch |
| **TypeScript with React** | Typing props, state, events, API responses, generics for reusable components |
| **Next.js App Router** | File-based routing, layouts, loading/error states, server vs client components |
| **Next.js API Routes** | Building REST endpoints inside Next.js (Route Handlers) |
| **Data fetching patterns** | Server Components fetching, client-side SWR/React Query, form mutations |
| **React hooks** | useState, useEffect, useContext, useReducer, custom hooks |
| **Modern CSS in React** | Tailwind CSS with TypeScript component patterns |
| **Full-stack TypeScript** | Shared types between frontend and API routes |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     Next.js Application                         │
│                                                                 │
│  ┌──────────────────────┐    ┌───────────────────────────────┐  │
│  │   React Frontend     │    │   Next.js API Routes          │  │
│  │   (App Router)       │───▶│   /api/ministries/*           │  │
│  │                      │    │   /api/rosters/*              │  │
│  │   - Directory pages  │    │   /api/dashboard/*            │  │
│  │   - Ministry pages   │    └──────────────┬────────────────┘  │
│  │   - Roster pages     │                   │                   │
│  │   - Dashboard        │                   │                   │
│  └──────────┬───────────┘                   │                   │
│             │                               │                   │
└─────────────┼───────────────────────────────┼───────────────────┘
              │                               │
              │ Fetch parishioner data        │ Read/write ministry data
              ▼                               ▼
┌──────────────────────────┐    ┌──────────────────────────────┐
│  Existing FastAPI Backend │    │  PostgreSQL                   │
│  (Parish Database)        │    │  (Ministry tables added to    │
│  localhost:8000           │    │   existing parish-database)   │
└──────────────────────────┘    └──────────────────────────────┘
```

---

## Phase 1: Project Initialization & TypeScript Foundations (Week 1)

### Goals

- Set up Next.js with TypeScript
- Define all TypeScript types and interfaces
- Create the project skeleton with commented placeholder files
- Understand the difference between server and client components

### Directory Structure

```
parish-directory/
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (shared shell)
│   │   ├── page.tsx                  # Dashboard home page
│   │   ├── loading.tsx               # Root loading state
│   │   ├── error.tsx                 # Root error boundary
│   │   │
│   │   ├── directory/
│   │   │   ├── page.tsx              # Parishioner directory list
│   │   │   ├── loading.tsx           # Directory loading skeleton
│   │   │   └── [personId]/
│   │   │       └── page.tsx          # Individual parishioner profile
│   │   │
│   │   ├── households/
│   │   │   ├── page.tsx              # Household list view
│   │   │   └── [householdId]/
│   │   │       └── page.tsx          # Household detail with members
│   │   │
│   │   ├── ministries/
│   │   │   ├── page.tsx              # All ministries overview
│   │   │   ├── new/
│   │   │   │   └── page.tsx          # Create new ministry form
│   │   │   └── [ministryId]/
│   │   │       ├── page.tsx          # Ministry detail & members
│   │   │       ├── edit/
│   │   │       │   └── page.tsx      # Edit ministry form
│   │   │       └── roster/
│   │   │           └── page.tsx      # Ministry roster/schedule
│   │   │
│   │   └── api/                      # Next.js Route Handlers
│   │       ├── ministries/
│   │       │   ├── route.ts          # GET all, POST new ministry
│   │       │   └── [ministryId]/
│   │       │       ├── route.ts      # GET one, PUT, DELETE ministry
│   │       │       └── members/
│   │       │           └── route.ts  # GET/POST/DELETE ministry members
│   │       ├── rosters/
│   │       │   ├── route.ts          # GET all, POST new roster entry
│   │       │   └── [rosterId]/
│   │       │       └── route.ts      # GET one, PUT, DELETE roster entry
│   │       └── dashboard/
│   │           └── stats/
│   │               └── route.ts      # GET dashboard statistics
│   │
│   ├── components/
│   │   ├── ui/                       # Generic reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── LoadingSkeleton.tsx
│   │   │
│   │   ├── directory/                # Directory-specific components
│   │   │   ├── PersonCard.tsx
│   │   │   ├── PersonProfile.tsx
│   │   │   ├── PersonSearchFilters.tsx
│   │   │   └── SacramentBadges.tsx
│   │   │
│   │   ├── households/               # Household-specific components
│   │   │   ├── HouseholdCard.tsx
│   │   │   ├── HouseholdMemberList.tsx
│   │   │   └── FamilyTree.tsx
│   │   │
│   │   ├── ministries/               # Ministry-specific components
│   │   │   ├── MinistryCard.tsx
│   │   │   ├── MinistryForm.tsx
│   │   │   ├── MemberSelector.tsx
│   │   │   └── RosterCalendar.tsx
│   │   │
│   │   ├── dashboard/                # Dashboard components
│   │   │   ├── StatCard.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   └── MinistryOverview.tsx
│   │   │
│   │   └── layout/                   # Layout components
│   │       ├── Navbar.tsx
│   │       ├── Sidebar.tsx
│   │       └── PageHeader.tsx
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useParishioners.ts
│   │   ├── useHouseholds.ts
│   │   ├── useMinistries.ts
│   │   ├── useRosters.ts
│   │   ├── useDebounce.ts
│   │   └── usePagination.ts
│   │
│   ├── lib/                          # Utility functions and clients
│   │   ├── api-client.ts             # HTTP client for FastAPI backend
│   │   ├── db.ts                     # Database connection (for API routes)
│   │   ├── utils.ts                  # General utility functions
│   │   └── constants.ts              # App-wide constants
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── person.ts
│   │   ├── household.ts
│   │   ├── sacrament.ts
│   │   ├── ministry.ts
│   │   ├── roster.ts
│   │   ├── dashboard.ts
│   │   ├── api.ts
│   │   └── index.ts                  # Re-exports all types
│   │
│   └── styles/
│       └── globals.css               # Global styles + Tailwind directives
│
└── prisma/                           # Prisma ORM (for ministry tables)
    └── schema.prisma
```

---

## Phase 2: TypeScript Types & Interfaces (Week 1-2)

### File: `src/types/person.ts`

```typescript
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

// TODO: Define a union type called 'Gender'
// - Should be one of: 'male' | 'female' | 'other'
// - This constrains the value to only these three strings
// - LEARNING: Union types are like enums but more flexible in TypeScript

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

// TODO: Define a type called 'PersonSummary'
// - Use Pick<Person, 'id' | 'firstName' | 'lastName' | 'email' | 'phone'>
// - This creates a lighter version of Person for list views
// - LEARNING: Pick<T, K> is a utility type that creates a new type by picking
//   specific properties from an existing type. Very useful for API responses
//   that return partial data.

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

// TODO: Define a type called 'PersonFormData'
// - Use Omit<Person, 'id' | 'createdAt' | 'updatedAt'>
// - This is what you send when CREATING a person — no id or timestamps yet
// - LEARNING: Omit<T, K> removes properties from a type. The inverse of Pick.
//   Use it when most fields are needed but a few should be excluded.
```

### File: `src/types/household.ts`

```typescript
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
```

### File: `src/types/sacrament.ts`

```typescript
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

// TODO: Define a union type called 'SacramentType'
// - 'baptism' | 'first_communion' | 'confirmation' | 'marriage' | 'holy_orders'

// TODO: Define an interface called 'BaptismData'
// - godfather: string (optional)
// - godmother: string (optional)
// - minister: string (optional)
// - church: string (optional)

// TODO: Define an interface called 'MarriageData'
// - spouseName: string
// - minister: string (optional)
// - church: string (optional)
// - witnessOne: string (optional)
// - witnessTwo: string (optional)

// TODO: Define a type called 'SacramentAdditionalData'
// - This should be a conditional/mapped type:
//   BaptismData if sacramentType is 'baptism'
//   MarriageData if sacramentType is 'marriage'
//   Record<string, string> for all others (generic key-value pairs)
//
// LEARNING: Record<K, V> creates an object type with keys of type K and
// values of type V. Record<string, string> means any string key, string value.
// This is useful when the shape is dynamic/unknown.

// TODO: Define an interface called 'Sacrament'
// - id: number
// - personId: number
// - sacramentType: SacramentType
// - dateReceived: string — ISO date
// - notes: string (optional)
// - additionalData: SacramentAdditionalData (optional)
// - createdAt: string
// - updatedAt: string

// TODO: Define a type called 'PersonWithSacraments'
// - Use: Person & { sacraments: Sacrament[] }
// - LEARNING: This is a common pattern — the detail view of a person
//   includes their sacrament records as a nested array.
```

### File: `src/types/ministry.ts`

```typescript
// =============================================================================
// MINISTRY TYPES
// =============================================================================
// Ministries are NEW to this project — they represent parish groups like
// Lectors, Eucharistic Ministers, Choir, Youth Group, etc.
// This data is stored by THIS app's API routes, not the FastAPI backend.
//
// LEARNING GOALS:
// - Enum vs union types (and when to use each)
// - Generic interfaces for CRUD operations
// - Extending interfaces
// =============================================================================

// TODO: Define a union type called 'MinistryStatus'
// - 'active' | 'inactive' | 'seasonal'
// - Seasonal means it only runs part of the year (e.g. Christmas Choir)

// TODO: Define a union type called 'MemberRole'
// - 'leader' | 'coordinator' | 'member'

// TODO: Define an interface called 'Ministry'
// - id: string — UUID generated by database
// - name: string — e.g. "Eucharistic Ministers", "Youth Group"
// - description: string (optional)
// - status: MinistryStatus
// - meetingDay: string (optional) — e.g. "Wednesday"
// - meetingTime: string (optional) — e.g. "7:00 PM"
// - meetingLocation: string (optional) — e.g. "Parish Hall"
// - maxMembers: number (optional) — null means unlimited
// - createdAt: string
// - updatedAt: string

// TODO: Define an interface called 'MinistryMember'
// - id: string — UUID
// - ministryId: string — FK to Ministry
// - personId: number — FK to Person in Parish Database
// - role: MemberRole
// - joinedAt: string — ISO date when they joined the ministry
// - person: PersonSummary (optional) — populated when fetching with details
//
// LEARNING: personId is a number (from PostgreSQL Parish Database) while
// ministryId is a string UUID (from this app). Notice how different systems
// can use different ID strategies and your types reflect that.

// TODO: Define an interface called 'MinistryWithMembers'
// - Extends Ministry using 'extends' keyword (not intersection this time)
// - Add: members: MinistryMember[]
// - Add: memberCount: number
//
// LEARNING: 'extends' is the OOP way to compose interfaces. Compare this
// with the intersection approach in household.ts. Both work, but 'extends'
// gives better error messages and is more readable for clear hierarchies.

// TODO: Define an interface called 'CreateMinistryInput'
// - Use Omit<Ministry, 'id' | 'createdAt' | 'updatedAt'>
// - This is what the POST /api/ministries endpoint accepts

// TODO: Define an interface called 'UpdateMinistryInput'
// - Use Partial<CreateMinistryInput>
// - LEARNING: Partial<T> makes ALL properties optional. This is perfect
//   for PATCH/PUT operations where you only send changed fields.
//   Partial<Omit<...>> is a very common pattern for update DTOs.
```

### File: `src/types/roster.ts`

```typescript
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

// TODO: Define a union type called 'ServiceTime'
// - 'saturday_6pm' | 'sunday_8am' | 'sunday_9_30am' | 'sunday_11am'
// - These represent the Mass times at your parish
// - LEARNING: Even though these look like they could be free text,
//   constraining them to a union means you get autocomplete and
//   type-checking everywhere you use them.

// TODO: Define an interface called 'RosterEntry'
// - id: string — UUID
// - ministryId: string — which ministry
// - personId: number — who is assigned
// - date: string — ISO date of the assignment
// - serviceTime: ServiceTime
// - notes: string (optional) — e.g. "Covering for Mary"
// - createdAt: string
// - updatedAt: string

// TODO: Define an interface called 'RosterEntryWithDetails'
// - Extends RosterEntry
// - Add: person: PersonSummary
// - Add: ministry: Pick<Ministry, 'id' | 'name'>
//
// LEARNING: Pick here grabs only id and name from Ministry.
// In list/calendar views you don't need the full Ministry object.

// TODO: Define a type called 'WeeklyRoster'
// - Should be: Record<string, RosterEntryWithDetails[]>
// - The key is the date string (e.g. "2025-03-15")
// - The value is all roster entries for that date
// - LEARNING: Record<string, T[]> is perfect for grouping data by a key.
//   You'll use this to build the calendar/schedule view.

// TODO: Define an interface called 'CreateRosterInput'
// - ministryId: string
// - personId: number
// - date: string
// - serviceTime: ServiceTime
// - notes: string (optional)
//
// TODO: Define a type called 'BulkCreateRosterInput'
// - Should be: CreateRosterInput[]
// - LEARNING: Sometimes you need to create many entries at once
//   (e.g. fill out a whole month's schedule). An array type alias
//   makes the API contract clear.
```

### File: `src/types/dashboard.ts`

```typescript
// =============================================================================
// DASHBOARD TYPES
// =============================================================================
// Types for the dashboard statistics and overview data.
//
// LEARNING GOALS:
// - Complex nested object types
// - Types for charting/visualization data
// =============================================================================

// TODO: Define an interface called 'DashboardStats'
// - totalParishioners: number
// - totalHouseholds: number
// - totalMinistries: number
// - activeMinistries: number
// - upcomingRosterEntries: number — entries in the next 7 days
// - unassignedSlots: number — roster slots with no person assigned

// TODO: Define an interface called 'MinistryOverviewItem'
// - ministryId: string
// - ministryName: string
// - memberCount: number
// - status: MinistryStatus
// - nextScheduledDate: string | null
//
// LEARNING: 'string | null' means the value is either a string or null.
// This is different from 'string | undefined' or optional ('?').
// null = "we checked and there's no value"
// undefined = "we didn't check / property doesn't exist"

// TODO: Define an interface called 'RecentActivityItem'
// - id: string
// - type: 'member_added' | 'roster_created' | 'ministry_created' | 'member_removed'
// - description: string — human-readable description
// - timestamp: string
// - relatedEntityId: string — ID of the ministry/person involved
//
// LEARNING: The 'type' field as a union lets you use discriminated unions
// later if you need type-specific data for each activity type.

// TODO: Define an interface called 'DashboardData'
// - stats: DashboardStats
// - ministryOverview: MinistryOverviewItem[]
// - recentActivity: RecentActivityItem[]
// - rosterThisWeek: RosterEntryWithDetails[]
```

### File: `src/types/api.ts`

```typescript
// =============================================================================
// API TYPES
// =============================================================================
// Generic types for API communication patterns. These are reusable across
// all features — directory, ministries, rosters, etc.
//
// LEARNING GOALS:
// - Generic types with <T> — the most powerful TypeScript feature
// - Conditional types
// - Type guards
// =============================================================================

// TODO: Define a generic interface called 'ApiResponse<T>'
// - data: T — the actual response payload (generic!)
// - success: boolean
// - message: string (optional) — success or error message
//
// LEARNING: Generics let you create reusable type containers.
// ApiResponse<Person> means { data: Person, success: boolean, ... }
// ApiResponse<Ministry[]> means { data: Ministry[], success: boolean, ... }
// You define the shape ONCE and reuse it with any inner type.

// TODO: Define a generic interface called 'PaginatedResponse<T>'
// - data: T[] — array of items (generic!)
// - total: number — total matching records
// - page: number — current page
// - pageSize: number — items per page
// - totalPages: number — calculated total pages
//
// LEARNING: This is the standard pagination envelope. Every paginated
// endpoint returns this same structure, just with different item types.
// PaginatedResponse<Person> for /directory
// PaginatedResponse<Ministry> for /ministries

// TODO: Define a generic interface called 'ApiError'
// - message: string
// - code: string — machine-readable error code e.g. 'NOT_FOUND', 'VALIDATION_ERROR'
// - details: Record<string, string[]> (optional) — field-level validation errors
//   e.g. { "name": ["Name is required"], "email": ["Invalid email format"] }
//
// LEARNING: Having a consistent error shape means your error handling
// components can work with ANY endpoint's errors.

// TODO: Define a type called 'HttpMethod'
// - 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

// TODO: Define a generic interface called 'FetchOptions<TBody>'
// - method: HttpMethod
// - body: TBody (optional)
// - headers: Record<string, string> (optional)
// - params: Record<string, string | number | boolean | undefined> (optional)
//
// LEARNING: This typed fetch wrapper means you can't accidentally pass
// a number where a string is expected in headers, or forget the method.

// TODO: Define a type guard function signature called 'isApiError'
// - Parameters: (value: unknown) => value is ApiError
// - LEARNING: Type guards are functions that narrow types at runtime.
//   'value is ApiError' is a type predicate — it tells TypeScript that
//   if this function returns true, the value IS an ApiError.
//   You'll implement this in lib/utils.ts
```

### File: `src/types/index.ts`

```typescript
// =============================================================================
// TYPE RE-EXPORTS
// =============================================================================
// Central barrel file that re-exports all types from a single location.
// This lets you import from '@/types' instead of '@/types/person', etc.
//
// LEARNING: Barrel files (index.ts re-exports) are a TypeScript convention
// for cleaner imports. Instead of:
//   import { Person } from '@/types/person'
//   import { Ministry } from '@/types/ministry'
// You can write:
//   import { Person, Ministry } from '@/types'
// =============================================================================

// TODO: Re-export everything from each type file:
// export * from './person'
// export * from './household'
// export * from './sacrament'
// export * from './ministry'
// export * from './roster'
// export * from './dashboard'
// export * from './api'
```

---

## Phase 3: Core Library & Utility Functions (Week 2)

### File: `src/lib/constants.ts`

```typescript
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

// TODO: Define PARISH_API_URL
// - Should read from process.env.NEXT_PUBLIC_PARISH_API_URL
// - Fallback to 'http://localhost:8000' for local development
// - LEARNING: NEXT_PUBLIC_ prefix makes env vars available in the browser.
//   Without this prefix, they're only available in server components and API routes.

// TODO: Define SERVICE_TIMES as a readonly array using 'as const'
// - Contains objects with: { value: ServiceTime, label: string }
// - e.g. { value: 'sunday_9_30am', label: '9:30 AM Sunday Mass' }
// - 'as const' makes the values literal types, not just 'string'
// - LEARNING: 'as const' is a const assertion. Without it:
//   const x = ['a', 'b'] → type is string[]
//   const x = ['a', 'b'] as const → type is readonly ['a', 'b']
//   This gives you exact types instead of broad ones.

// TODO: Define SACRAMENT_LABELS as a Record<SacramentType, string>
// - Maps sacrament type values to display labels
// - e.g. 'first_communion' → 'First Communion'
// - LEARNING: Record ensures every SacramentType has a label.
//   If you add a new SacramentType, TypeScript forces you to add a label here.

// TODO: Define HOUSEHOLD_ROLE_LABELS as Record<HouseholdRole, string>

// TODO: Define MEMBER_ROLE_LABELS as Record<MemberRole, string>

// TODO: Define ITEMS_PER_PAGE as a number constant (e.g. 20)
```

### File: `src/lib/api-client.ts`

```typescript
// =============================================================================
// API CLIENT
// =============================================================================
// A typed HTTP client for communicating with the FastAPI Parish Database
// backend. This wraps fetch() with TypeScript generics for type-safe requests.
//
// LEARNING GOALS:
// - Generic functions (function signatures with <T>)
// - async/await with TypeScript
// - Error handling patterns
// - Building query strings from typed objects
// =============================================================================

// TODO: Import types - ApiResponse, PaginatedResponse, FetchOptions, ApiError

// TODO: Create a helper function called 'buildQueryString'
// - Parameters: params: Record<string, string | number | boolean | undefined>
// - Returns: string — the query string like '?page=1&query=smith'
// - Logic:
//   1. Filter out undefined values
//   2. Convert all values to strings
//   3. Use URLSearchParams to build the query string
//   4. Return empty string if no params
// - LEARNING: URLSearchParams is a built-in browser API that handles
//   URL encoding automatically. Always use it instead of manual string concat.

// TODO: Create an async generic function called 'fetchFromParishApi'
// - Signature: async function fetchFromParishApi<T>(
//     endpoint: string,
//     options?: FetchOptions<unknown>
//   ): Promise<ApiResponse<T>>
// - Logic:
//   1. Build the full URL: PARISH_API_URL + endpoint + query string
//   2. Call fetch() with the method, headers (Content-Type: application/json),
//      and JSON.stringify(body) if body exists
//   3. Check response.ok — if false, parse error and throw
//   4. Parse the JSON response
//   5. Return wrapped in ApiResponse shape: { data: parsed, success: true }
//   6. Catch block: return { data: null as T, success: false, message: error.message }
//
// LEARNING: The generic <T> lets callers specify what type they expect back:
//   const result = await fetchFromParishApi<Person>('/persons/1')
//   // result.data is typed as Person!
//   const list = await fetchFromParishApi<Person[]>('/persons')
//   // result.data is typed as Person[]!

// TODO: Create convenience functions that use fetchFromParishApi:
//
// async function get<T>(endpoint: string, params?: Record<string, ...>): Promise<ApiResponse<T>>
//   - Calls fetchFromParishApi with method: 'GET' and the params
//
// async function post<T, TBody>(endpoint: string, body: TBody): Promise<ApiResponse<T>>
//   - Calls fetchFromParishApi with method: 'POST' and the body
//
// async function put<T, TBody>(endpoint: string, body: TBody): Promise<ApiResponse<T>>
//   - Calls fetchFromParishApi with method: 'PUT' and the body
//
// async function del<T>(endpoint: string): Promise<ApiResponse<T>>
//   - Calls fetchFromParishApi with method: 'DELETE'
//   - Named 'del' because 'delete' is a reserved word in JavaScript
//
// LEARNING: These convenience functions reduce boilerplate. Instead of
// specifying method every time, callers just use get(), post(), etc.
// The dual generics <T, TBody> let you type both the response AND request body.

// TODO: Export all functions as a named object called 'parishApi'
// - export const parishApi = { get, post, put, del }
// - LEARNING: Exporting as a namespace object keeps imports clean:
//   import { parishApi } from '@/lib/api-client'
//   const result = await parishApi.get<Person[]>('/persons')
```

### File: `src/lib/db.ts`

```typescript
// =============================================================================
// DATABASE CONNECTION (for Next.js API Routes)
// =============================================================================
// This file sets up Prisma Client for the ministry-specific data stored
// in PostgreSQL. Only used in API route handlers (server-side only).
//
// LEARNING GOALS:
// - Singleton pattern in Next.js (avoiding multiple DB connections in dev)
// - Understanding server-only code
// - Global type augmentation
// =============================================================================

// TODO: Import PrismaClient from '@prisma/client'

// TODO: Declare a global variable for the Prisma instance
// - In development, Next.js hot-reloads which creates new PrismaClient
//   instances each time. This causes "too many connections" errors.
// - Solution: Store PrismaClient on the global object in development.
//
// - Augment the global type:
//   declare global {
//     var prisma: PrismaClient | undefined
//   }
//
// LEARNING: 'declare global' extends TypeScript's global scope.
// This is type augmentation — you're telling TypeScript that the global
// object now has a 'prisma' property. This pattern is specific to Next.js
// development to handle hot module replacement.

// TODO: Create and export the Prisma client
// - Logic:
//   const prisma = globalThis.prisma ?? new PrismaClient()
//   if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
//   export default prisma
//
// LEARNING: The nullish coalescing operator (??) returns the right side
// only if the left side is null or undefined. This means:
// - First load: globalThis.prisma is undefined → create new PrismaClient
// - Hot reload: globalThis.prisma exists → reuse it
// - Production: Always create new (no global caching needed)
```

### File: `src/lib/utils.ts`

```typescript
// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================
// General-purpose helper functions used across the application.
//
// LEARNING GOALS:
// - Type guard implementations
// - Date formatting with Intl API
// - Generic utility functions
// =============================================================================

// TODO: Implement the 'isApiError' type guard
// - Parameters: (value: unknown) => value is ApiError
// - Logic: Check that value is an object, has 'message' (string) and 'code' (string)
// - LEARNING: Type guards use runtime checks to narrow types.
//   After calling: if (isApiError(error)) { ... }
//   Inside the if block, TypeScript KNOWS error is ApiError.

// TODO: Create 'formatDate' function
// - Parameters: (dateString: string, style?: 'short' | 'long') => string
// - Logic: Use Intl.DateTimeFormat with 'en-NZ' locale
//   - 'short': "15 Mar 2025"
//   - 'long': "Saturday, 15 March 2025"
// - LEARNING: Intl.DateTimeFormat is built into browsers and Node.js.
//   Always use it instead of manual date formatting or libraries like moment.

// TODO: Create 'formatRelativeTime' function
// - Parameters: (dateString: string) => string
// - Returns: "2 hours ago", "3 days ago", "just now", etc.
// - LEARNING: Intl.RelativeTimeFormat handles this. Useful for "Recent Activity".

// TODO: Create 'getInitials' function
// - Parameters: (firstName: string, lastName: string) => string
// - Returns: "TS" for "Tauriq Smith"
// - Used for avatar placeholders in the directory

// TODO: Create 'getFullName' function
// - Parameters: (person: Pick<Person, 'firstName' | 'middleName' | 'lastName'>) => string
// - Returns: "Tauriq Barron" or "Tauriq M. Barron" if middle name exists
// - LEARNING: Using Pick<Person, ...> as the parameter type means this
//   function accepts any object that has at least those three properties.
//   You don't need to pass a full Person object.

// TODO: Create 'calculateAge' function
// - Parameters: (dateOfBirth: string) => number
// - Logic: Calculate age from ISO date string to today's date
// - Handle edge cases: birthday hasn't occurred yet this year

// TODO: Create 'cn' function (className merger)
// - Parameters: (...classes: (string | undefined | false)[]) => string
// - Logic: Filter out falsy values, join with spaces
// - e.g. cn('bg-blue', isActive && 'text-white', undefined) → 'bg-blue text-white'
// - LEARNING: This is the most common utility in React + Tailwind projects.
//   It lets you conditionally apply CSS classes cleanly.
```

---

## Phase 4: Reusable UI Components (Week 2-3)

### File: `src/components/ui/Button.tsx`

```tsx
// =============================================================================
// BUTTON COMPONENT
// =============================================================================
// A reusable button with variants, sizes, and loading states.
// This is your first React component — take time to understand every part.
//
// LEARNING GOALS:
// - React.FC vs function components (prefer function components)
// - Typing props with interfaces
// - React.ButtonHTMLAttributes for HTML prop passthrough
// - Variants pattern (common in component libraries)
// - Children prop
// - Forwarding refs with React.forwardRef
// =============================================================================

// TODO: Import React and necessary types

// TODO: Define a type called 'ButtonVariant'
// - 'primary' | 'secondary' | 'danger' | 'ghost'

// TODO: Define a type called 'ButtonSize'
// - 'sm' | 'md' | 'lg'

// TODO: Define an interface called 'ButtonProps'
// - Extend React.ButtonHTMLAttributes<HTMLButtonElement>
//   (this gives you onClick, disabled, type, className, etc. for free)
// - variant: ButtonVariant (optional, default 'primary')
// - size: ButtonSize (optional, default 'md')
// - isLoading: boolean (optional)
// - children: React.ReactNode
//
// LEARNING: Extending React.ButtonHTMLAttributes means your Button
// accepts ALL standard HTML button attributes plus your custom ones.
// React.ReactNode is the type for anything renderable: strings, numbers,
// elements, arrays, fragments, null. Always use it for children.

// TODO: Create the Button component
// - Use: export default function Button({ variant = 'primary', size = 'md',
//         isLoading = false, children, className, disabled, ...rest }: ButtonProps)
// - Logic:
//   1. Build className string based on variant and size
//      - Use the cn() utility from lib/utils
//      - Map each variant to Tailwind classes:
//        primary: 'bg-blue-600 text-white hover:bg-blue-700'
//        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//        danger: 'bg-red-600 text-white hover:bg-red-700'
//        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100'
//      - Map each size to Tailwind padding/text:
//        sm: 'px-3 py-1.5 text-sm'
//        md: 'px-4 py-2 text-base'
//        lg: 'px-6 py-3 text-lg'
//   2. Return a <button> element
//      - Spread {...rest} to pass through all HTML attributes
//      - Set disabled={disabled || isLoading}
//      - Show a spinner icon when isLoading (a simple SVG or text '...')
//      - Render children
//
// LEARNING: The '...rest' spread pattern is fundamental in React.
// It passes all unhandled props to the underlying HTML element.
// This means someone using <Button onClick={fn} id="my-btn"> just works.
```

### File: `src/components/ui/Card.tsx`

```tsx
// =============================================================================
// CARD COMPONENT
// =============================================================================
// A container card with optional header, body, and footer sections.
//
// LEARNING GOALS:
// - Compound component pattern (Card, Card.Header, Card.Body, Card.Footer)
// - React.ReactNode for flexible children
// - Combining multiple sub-components
// =============================================================================

// TODO: Define CardProps interface
// - children: React.ReactNode
// - className: string (optional)
// - onClick: (() => void) (optional) — makes the card clickable
//
// LEARNING: '(() => void)' is a function type that takes no arguments
// and returns nothing. It's the type for event callbacks that don't
// need to return a value.

// TODO: Create the Card component
// - Renders a <div> with base styles: rounded border, shadow, white background
// - If onClick is provided, add cursor-pointer and hover styles
// - Apply className on top of base styles using cn()

// TODO: Create Card.Header sub-component
// - Renders children in a <div> with bottom border, padding, font-bold
// - Props: { children: React.ReactNode; className?: string }

// TODO: Create Card.Body sub-component
// - Renders children in a <div> with padding
// - Props: { children: React.ReactNode; className?: string }

// TODO: Create Card.Footer sub-component
// - Renders children in a <div> with top border, padding, flex layout
// - Props: { children: React.ReactNode; className?: string }

// LEARNING: Compound components are assigned as properties of the parent:
//   Card.Header = CardHeader
//   Card.Body = CardBody
//   Card.Footer = CardFooter
// Usage:
//   <Card>
//     <Card.Header>Title</Card.Header>
//     <Card.Body>Content</Card.Body>
//     <Card.Footer><Button>Save</Button></Card.Footer>
//   </Card>
//
// This is a very common pattern in React component libraries.
```

### File: `src/components/ui/Input.tsx`

```tsx
// =============================================================================
// INPUT COMPONENT
// =============================================================================
// A form input with label, error state, and helper text.
//
// LEARNING GOALS:
// - Controlled vs uncontrolled components
// - React.ChangeEvent<HTMLInputElement> type
// - forwardRef for form library compatibility
// - Connecting labels to inputs with htmlFor/id
// =============================================================================

// TODO: Define InputProps interface
// - Extend React.InputHTMLAttributes<HTMLInputElement>
// - label: string (optional) — displayed above the input
// - error: string (optional) — error message displayed below input
// - helperText: string (optional) — hint text displayed below input
//
// LEARNING: When extending InputHTMLAttributes, you get:
// - value, onChange, onBlur, placeholder, type, name, id, etc.
// - React's onChange is typed as React.ChangeEvent<HTMLInputElement>
//   which gives you event.target.value with full type safety.

// TODO: Create the Input component using React.forwardRef
// - forwardRef signature: React.forwardRef<HTMLInputElement, InputProps>(
//     (props, ref) => { ... }
//   )
// - Logic:
//   1. Destructure: { label, error, helperText, className, id, ...rest }
//   2. Generate a unique id if not provided (use React.useId() hook)
//   3. Render label with htmlFor={id} if label exists
//   4. Render <input ref={ref} id={id} {...rest} /> with Tailwind styles
//      - Base: 'w-full rounded-md border px-3 py-2'
//      - Error state: 'border-red-500 focus:ring-red-500'
//      - Normal state: 'border-gray-300 focus:ring-blue-500'
//   5. Render error message in red below input if error exists
//   6. Render helperText in gray below input if helperText exists
//
// LEARNING: forwardRef lets parent components access the underlying
// <input> element directly. This is essential for form libraries
// (React Hook Form) and focus management. Without forwardRef, the
// ref would point to the wrapper div, not the actual input.
```

### File: `src/components/ui/SearchBar.tsx`

```tsx
// =============================================================================
// SEARCH BAR COMPONENT
// =============================================================================
// A search input with debounced onChange — prevents API calls on every keystroke.
//
// LEARNING GOALS:
// - Custom hooks in practice (useDebounce)
// - Controlled input with local state + debounced callback
// - React.useEffect cleanup
// =============================================================================

// TODO: Define SearchBarProps interface
// - onSearch: (query: string) => void — called with debounced search term
// - placeholder: string (optional, default 'Search...')
// - initialValue: string (optional, default '')
// - debounceMs: number (optional, default 300)

// TODO: Create the SearchBar component
// - Logic:
//   1. Create local state for the input value: useState(initialValue)
//   2. Use the useDebounce hook (from hooks/useDebounce.ts) to debounce the value
//   3. useEffect: when debouncedValue changes, call onSearch(debouncedValue)
//   4. Render an Input component with a search icon (magnifying glass SVG)
//   5. Add a clear button (X) that resets the input when there's text
//
// LEARNING: The debounce pattern is critical for search UIs.
// Without it, typing "Smith" fires 5 API calls: "S", "Sm", "Smi", "Smit", "Smith"
// With 300ms debounce, it waits until the user stops typing, then fires once.
// This is a great example of why custom hooks exist — useDebounce encapsulates
// the timer logic so SearchBar just uses it declaratively.
```

### File: `src/components/ui/Table.tsx`

```tsx
// =============================================================================
// TABLE COMPONENT
// =============================================================================
// A generic, typed data table. This is the most complex UI component.
//
// LEARNING GOALS:
// - Generic components with <T> — the holy grail of reusable React components
// - Render props / function-as-children pattern
// - keyof T for type-safe column definitions
// =============================================================================

// TODO: Define a generic interface called 'Column<T>'
// - key: keyof T — the property name on the data item
// - header: string — display text for the column header
// - render: ((item: T) => React.ReactNode) (optional) — custom cell renderer
// - sortable: boolean (optional)
// - className: string (optional) — for column-specific width/alignment
//
// LEARNING: keyof T returns a union of all property names of T.
// If T is Person, then keyof T = 'id' | 'firstName' | 'lastName' | ...
// This means you can ONLY specify columns that actually exist on the data type.
// TypeScript will catch typos like 'firstNam' at compile time!

// TODO: Define a generic interface called 'TableProps<T>'
// - data: T[] — the array of items to display
// - columns: Column<T>[] — column definitions
// - keyExtractor: (item: T) => string | number — unique key for each row
// - onRowClick: ((item: T) => void) (optional)
// - emptyMessage: string (optional, default 'No data found')
// - isLoading: boolean (optional)

// TODO: Create the generic Table component
// - Signature: export default function Table<T>({ data, columns, ... }: TableProps<T>)
// - Logic:
//   1. If isLoading, render a loading skeleton (rows of gray animated bars)
//   2. If data is empty, render emptyMessage in a centered cell
//   3. Render <table> with Tailwind styles
//   4. Render <thead> with column headers
//   5. Render <tbody> mapping over data:
//      - For each item, render a <tr> with key={keyExtractor(item)}
//      - For each column, render a <td>
//        - If column.render exists, call column.render(item)
//        - Otherwise, render String(item[column.key])
//      - If onRowClick, add onClick and hover styles to <tr>
//
// LEARNING: Generic components are powerful. This one Table component works for:
//   <Table<Person> data={people} columns={personColumns} />
//   <Table<Ministry> data={ministries} columns={ministryColumns} />
//   <Table<RosterEntry> data={entries} columns={rosterColumns} />
// TypeScript ensures columns match the data type. If you try to add a column
// with key='foo' to a Table<Person>, TypeScript will error because Person has no 'foo'.
```

### File: `src/components/ui/Pagination.tsx`

```tsx
// =============================================================================
// PAGINATION COMPONENT
// =============================================================================
//
// LEARNING GOALS:
// - Deriving component state from props
// - Array.from() for generating page number arrays
// - Callback props with typed parameters
// =============================================================================

// TODO: Define PaginationProps interface
// - currentPage: number
// - totalPages: number
// - onPageChange: (page: number) => void
//
// LEARNING: This is a "controlled" component — the parent manages the
// current page state. Pagination just renders UI and calls back.

// TODO: Create the Pagination component
// - Logic:
//   1. Calculate visible page numbers (show max 5 pages with ellipsis)
//      - Always show first page, last page, and pages around current
//      - e.g. for page 5 of 10: [1, '...', 4, 5, 6, '...', 10]
//   2. Render Previous button (disabled on page 1)
//   3. Render page number buttons (highlight current page)
//   4. Render Next button (disabled on last page)
//   5. Call onPageChange(newPage) when any button is clicked
```

### File: `src/components/ui/Modal.tsx`

```tsx
// =============================================================================
// MODAL COMPONENT
// =============================================================================
// A dialog/modal overlay for confirmations, forms, etc.
//
// LEARNING GOALS:
// - React Portals (rendering outside the DOM hierarchy)
// - useEffect for keyboard event listeners
// - Focus trapping (accessibility)
// - Conditional rendering
// =============================================================================

// TODO: Define ModalProps interface
// - isOpen: boolean
// - onClose: () => void
// - title: string
// - children: React.ReactNode
// - size: 'sm' | 'md' | 'lg' (optional, default 'md')

// TODO: Create the Modal component
// - Logic:
//   1. If !isOpen, return null (render nothing)
//   2. Use React.createPortal to render into document.body
//      - LEARNING: Portals render children into a different DOM node.
//        This means the modal appears at the root level of the page,
//        not nested inside whatever component opens it. This prevents
//        z-index and overflow issues.
//   3. Render a backdrop overlay (semi-transparent black)
//      - onClick on backdrop calls onClose
//   4. Render the modal content centered on screen
//   5. Add useEffect to listen for Escape key → call onClose
//      - Return cleanup function to remove the event listener
//      - LEARNING: useEffect cleanup runs when the component unmounts
//        or before the effect re-runs. Always clean up event listeners!
//   6. Render title in header, children in body
```

---

## Phase 5: Feature Components (Week 3-4)

### File: `src/components/directory/PersonCard.tsx`

```tsx
// =============================================================================
// PERSON CARD COMPONENT
// =============================================================================
// Displays a parishioner's summary info in the directory list.
// Used on the /directory page in a grid layout.
//
// LEARNING GOALS:
// - Typing component props with imported interfaces
// - Conditional rendering with &&
// - Next.js Link component for client-side navigation
// =============================================================================

// TODO: Define PersonCardProps interface
// - person: PersonSummary (imported from @/types)
// - onClick: (() => void) (optional)

// TODO: Create the PersonCard component
// - Logic:
//   1. Render a Card component
//   2. Show avatar circle with initials (use getInitials utility)
//   3. Show full name (use getFullName utility)
//   4. Show email and phone if they exist (conditional rendering)
//   5. Wrap in Next.js <Link href={`/directory/${person.id}`}>
//      - LEARNING: Next.js <Link> does client-side navigation without
//        full page reloads. It also prefetches the linked page on hover.
//   6. Optionally show sacrament badges if person has sacrament data
```

### File: `src/components/directory/PersonSearchFilters.tsx`

```tsx
// =============================================================================
// PERSON SEARCH FILTERS
// =============================================================================
// Filter panel for the directory page. Combines search, gender filter,
// age range, and sacrament status filters.
//
// LEARNING GOALS:
// - Managing complex form state with useReducer (not just useState)
// - Lifting state up (filters live in parent, this component just renders UI)
// - Controlled select/input components
// =============================================================================

// TODO: Define PersonSearchFiltersProps interface
// - filters: PersonSearchParams (the current filter state)
// - onFiltersChange: (filters: PersonSearchParams) => void
//
// LEARNING: This is "lifting state up" — the parent page owns the filter
// state and passes it down. This component renders the UI and calls back
// when the user changes a filter. The parent can then re-fetch data.

// TODO: Create the PersonSearchFilters component
// - Logic:
//   1. Render SearchBar component for free-text search
//   2. Render Select for gender filter (All, Male, Female, Other)
//   3. Render two number Inputs for age range (min/max)
//   4. Render Select for sacrament filter (All, Baptism, First Communion, etc.)
//      - Use SACRAMENT_LABELS from constants to populate options
//   5. Render a "Clear Filters" button that resets all to defaults
//   6. When any filter changes, call onFiltersChange with the updated params
```

### File: `src/components/directory/PersonProfile.tsx`

```tsx
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
```

### File: `src/components/ministries/MinistryForm.tsx`

```tsx
// =============================================================================
// MINISTRY FORM COMPONENT
// =============================================================================
// Create/edit form for ministries. Used on both /ministries/new and
// /ministries/[id]/edit pages.
//
// LEARNING GOALS:
// - Form handling in React (controlled components pattern)
// - useState for form state management
// - Form validation (client-side)
// - Discriminating between create and edit modes
// - React.FormEvent<HTMLFormElement> type
// =============================================================================

// TODO: Define MinistryFormProps interface
// - mode: 'create' | 'edit'
// - initialData: Partial<CreateMinistryInput> (optional — populated for edit mode)
// - onSubmit: (data: CreateMinistryInput) => Promise<void>
// - isSubmitting: boolean
//
// LEARNING: The 'mode' prop uses a union type to distinguish between
// create and edit. The component renders slightly differently for each:
// - Create: empty form, "Create Ministry" button
// - Edit: pre-filled form, "Update Ministry" button

// TODO: Define a local interface called 'FormErrors'
// - Record<string, string> — maps field names to error messages
// - LEARNING: This is simpler than a full form library for learning purposes.
//   Once comfortable, look into React Hook Form or Formik.

// TODO: Create the MinistryForm component
// - Logic:
//   1. useState for form fields:
//      - name: string
//      - description: string
//      - status: MinistryStatus
//      - meetingDay: string
//      - meetingTime: string
//      - meetingLocation: string
//      - maxMembers: number | ''  (empty string for empty input)
//   2. useState<FormErrors> for validation errors
//   3. Initialize form state from initialData if in edit mode (useEffect)
//   4. Create a validate() function:
//      - name is required (min 2 characters)
//      - maxMembers must be positive if provided
//      - Return FormErrors object (empty = valid)
//   5. Create handleSubmit(e: React.FormEvent<HTMLFormElement>):
//      - e.preventDefault() — stop page reload
//      - Run validate(), if errors exist, set them in state and return
//      - Transform form state into CreateMinistryInput shape
//      - Call props.onSubmit(data) — the parent handles the API call
//   6. Render form with:
//      - Input for name (with error display)
//      - Textarea for description
//      - Select for status (Active, Inactive, Seasonal)
//      - Inputs for meeting day, time, location
//      - Input for max members (type="number")
//      - Submit button (show loading state from isSubmitting prop)
//
// LEARNING: React forms are "controlled" — each input's value comes from
// state, and onChange updates state. This gives you full control over
// the form data at all times. The flow is:
//   User types → onChange fires → setState → React re-renders → input shows new value
```

### File: `src/components/ministries/MemberSelector.tsx`

```tsx
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
```

### File: `src/components/ministries/RosterCalendar.tsx`

```tsx
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
```

---

## Phase 6: Custom Hooks (Week 3-4)

### File: `src/hooks/useDebounce.ts`

```typescript
// =============================================================================
// USE DEBOUNCE HOOK
// =============================================================================
// Debounces a value — returns the value only after it hasn't changed
// for the specified delay period.
//
// LEARNING GOALS:
// - Your first custom hook! (functions starting with 'use')
// - useState + useEffect combination
// - setTimeout cleanup pattern
// - Generic hooks
// =============================================================================

// TODO: Create a generic custom hook called 'useDebounce'
// - Signature: function useDebounce<T>(value: T, delay: number): T
// - Logic:
//   1. Create state: const [debouncedValue, setDebouncedValue] = useState<T>(value)
//   2. useEffect that depends on [value, delay]:
//      - Set a timeout: after 'delay' ms, set debouncedValue to value
//      - Return cleanup function that clears the timeout
//      - LEARNING: Every time value changes, the cleanup runs FIRST
//        (clearing the old timeout), then the effect runs (setting new timeout).
//        This is how debouncing works with useEffect.
//   3. Return debouncedValue
//
// Usage: const debouncedSearch = useDebounce(searchInput, 300)
// 'debouncedSearch' only updates 300ms after searchInput stops changing.
```

### File: `src/hooks/useParishioners.ts`

```typescript
// =============================================================================
// USE PARISHIONERS HOOK
// =============================================================================
// Manages fetching, searching, and paginating parishioner data
// from the FastAPI backend.
//
// LEARNING GOALS:
// - Custom hooks that combine multiple hooks
// - Data fetching with useEffect
// - Loading/error state management
// - Returning objects from hooks (not just single values)
// =============================================================================

// TODO: Define the return type interface 'UseParishionersResult'
// - people: PersonSummary[]
// - total: number
// - isLoading: boolean
// - error: string | null
// - page: number
// - totalPages: number
// - setPage: (page: number) => void
// - setFilters: (filters: PersonSearchParams) => void
// - refresh: () => void

// TODO: Create the useParishioners custom hook
// - Signature: function useParishioners(initialFilters?: PersonSearchParams): UseParishionersResult
// - Logic:
//   1. useState for people array, loading, error, page, filters
//   2. useEffect that fires when page or filters change:
//      - Set loading = true
//      - Call parishApi.get<PaginatedResponse<PersonSummary>>('/persons', { ...filters, page })
//      - On success: set people and total
//      - On error: set error message
//      - Finally: set loading = false
//      - LEARNING: The useEffect dependency array [page, filters] means
//        this runs on mount AND whenever page or filters change.
//        This is how you sync UI state with server data.
//   3. Create refresh function that re-runs the fetch with current params
//   4. Return the full result object
//
// LEARNING: Custom hooks let you extract stateful logic into reusable functions.
// Without this hook, every page that shows parishioners would duplicate
// all this loading/error/fetch logic. With the hook:
//   const { people, isLoading, error, setPage } = useParishioners()
// Clean, reusable, testable.
```

### File: `src/hooks/useMinistries.ts`

```typescript
// =============================================================================
// USE MINISTRIES HOOK
// =============================================================================
// Manages ministry CRUD operations via Next.js API routes.
//
// LEARNING GOALS:
// - Hooks that handle both reading AND writing data
// - Optimistic updates (update UI before server confirms)
// - Callback memoization with useCallback
// =============================================================================

// TODO: Define 'UseministriesResult' interface
// - ministries: Ministry[]
// - isLoading: boolean
// - error: string | null
// - createMinistry: (input: CreateMinistryInput) => Promise<Ministry | null>
// - updateMinistry: (id: string, input: UpdateMinistryInput) => Promise<Ministry | null>
// - deleteMinistry: (id: string) => Promise<boolean>
// - refresh: () => void

// TODO: Create the useMinistries custom hook
// - Logic:
//   1. Fetch ministries from /api/ministries on mount
//   2. createMinistry function:
//      - POST to /api/ministries
//      - On success: add the new ministry to the local array
//      - Return the created ministry
//   3. updateMinistry function:
//      - PUT to /api/ministries/[id]
//      - On success: replace the ministry in the local array
//      - Return the updated ministry
//   4. deleteMinistry function:
//      - DELETE to /api/ministries/[id]
//      - On success: remove from the local array
//      - Return true/false for success
//   5. Wrap mutation functions in useCallback to prevent unnecessary re-renders
//
// LEARNING: useCallback memoizes functions so they maintain the same reference
// between renders. Without it, every render creates a new function object,
// which can cause child components to re-render unnecessarily.
// useCallback(fn, [deps]) only creates a new function when deps change.
```

### File: `src/hooks/usePagination.ts`

```typescript
// =============================================================================
// USE PAGINATION HOOK
// =============================================================================
// Reusable pagination logic.
//
// LEARNING GOALS:
// - Derived/computed values (totalPages from total + pageSize)
// - useMemo for expensive calculations
// - Encapsulating related state
// =============================================================================

// TODO: Define UsePaginationResult interface
// - page: number
// - pageSize: number
// - totalPages: number
// - setPage: (page: number) => void
// - nextPage: () => void
// - prevPage: () => void
// - isFirstPage: boolean
// - isLastPage: boolean

// TODO: Create the usePagination hook
// - Parameters: (total: number, pageSize?: number)
// - Logic:
//   1. useState for current page (start at 1)
//   2. Calculate totalPages = Math.ceil(total / pageSize)
//      - Use useMemo since this depends on total and pageSize
//   3. Create nextPage/prevPage with boundary checks
//   4. Derive isFirstPage/isLastPage booleans
//
// LEARNING: useMemo caches a computed value and only recalculates when
// dependencies change. For simple math like this it's optional, but
// for expensive computations (sorting large arrays, complex filters)
// it prevents recalculating on every render.
```

---

## Phase 7: Next.js Pages (App Router) (Week 4-5)

### File: `src/app/layout.tsx`

```tsx
// =============================================================================
// ROOT LAYOUT
// =============================================================================
// The root layout wraps every page in the application. It provides the
// shared shell: navbar, sidebar, and main content area.
//
// THIS IS A SERVER COMPONENT by default in Next.js App Router.
//
// LEARNING GOALS:
// - Server vs Client Components (the biggest Next.js concept)
// - Metadata API for SEO
// - Layout nesting (this wraps all child layouts and pages)
// - Importing global CSS
// =============================================================================

// TODO: Import global styles: import '@/styles/globals.css'
// TODO: Import layout components: Navbar, Sidebar

// TODO: Export metadata object for SEO
// - export const metadata = {
//     title: 'Parish Directory',
//     description: 'Parishioner directory and ministry management'
//   }
//
// LEARNING: In App Router, metadata is exported as a static object
// from layout.tsx or page.tsx. Next.js automatically generates
// <title>, <meta> tags, and Open Graph tags from this.

// TODO: Create the RootLayout component
// - Parameters: { children: React.ReactNode }
//   - LEARNING: 'children' is the page content. Next.js passes the
//     currently active page as children to the layout.
// - Render:
//   1. <html lang="en"> wrapper
//   2. <body> with flex layout
//   3. <Sidebar /> on the left (fixed width)
//   4. <div> flex-1 column on the right containing:
//      a. <Navbar /> at the top
//      b. <main> with padding containing {children}
//
// LEARNING: Server vs Client Components:
// - Server Components (default): Run on the server, can be async,
//   can fetch data directly, CANNOT use useState/useEffect/event handlers
// - Client Components: Add 'use client' at the top, CAN use hooks and events,
//   run on both server (SSR) and client
// - Layout is a server component. Navbar/Sidebar are likely client components
//   (they have interactive elements like navigation state).
```

### File: `src/app/page.tsx`

```tsx
// =============================================================================
// DASHBOARD PAGE (Home)
// =============================================================================
// The main dashboard showing parish statistics, ministry overview,
// recent activity, and this week's roster.
//
// THIS IS A SERVER COMPONENT — fetches data on the server.
//
// LEARNING GOALS:
// - Server-side data fetching in Next.js App Router
// - Async Server Components
// - Composing dashboard from multiple data sources
// - Passing server-fetched data to client components
// =============================================================================

// TODO: Import dashboard components: StatCard, RecentActivity, QuickActions, MinistryOverview
// TODO: Import types: DashboardData

// TODO: Create an async function to fetch dashboard data
// - async function getDashboardData(): Promise<DashboardData>
// - Fetch from internal API: fetch('/api/dashboard/stats', { cache: 'no-store' })
//   - LEARNING: In server components, you call fetch() directly — no useEffect needed!
//   - 'cache: no-store' means always fetch fresh data (dynamic rendering)
//   - Other options: 'force-cache' (static), { next: { revalidate: 60 } } (ISR)
//   - These caching strategies are unique to Next.js and very important.

// TODO: Create the Dashboard page component (async!)
// - export default async function DashboardPage()
//   - LEARNING: Server Components can be async functions!
//     This is impossible in regular React (no async function components).
//     Next.js handles the async rendering on the server.
// - Logic:
//   1. const data = await getDashboardData()
//   2. Render a grid layout:
//      - Row 1: StatCard grid (4 cards showing key numbers)
//      - Row 2: Two columns
//        - Left: MinistryOverview showing all ministries with member counts
//        - Right: RecentActivity feed
//      - Row 3: QuickActions (links to common tasks)
//      - Row 4: This week's roster summary
```

### File: `src/app/directory/page.tsx`

```tsx
// =============================================================================
// DIRECTORY PAGE
// =============================================================================
// Searchable, filterable list of all parishioners.
//
// THIS IS A CLIENT COMPONENT — needs interactivity (search, filters, pagination).
//
// LEARNING GOALS:
// - 'use client' directive and when you need it
// - Using custom hooks in pages
// - Client-side search and pagination
// - Next.js useRouter and useSearchParams for URL state
// =============================================================================

// TODO: Add 'use client' at the top of the file
// LEARNING: 'use client' marks this as a Client Component because it needs:
// - useState (for search state)
// - useEffect (in the custom hook)
// - Event handlers (onClick, onChange)
// Server Components can't use any of these!

// TODO: Import hooks: useParishioners, usePagination
// TODO: Import components: PersonCard, PersonSearchFilters, Pagination, SearchBar, LoadingSkeleton
// TODO: Import Next.js: useRouter, useSearchParams

// TODO: Create the DirectoryPage component
// - Logic:
//   1. Read initial search params from URL using useSearchParams()
//      - LEARNING: useSearchParams() gives you the URL query string.
//        This means the search state is in the URL (?query=smith&page=2),
//        which makes the page bookmarkable and shareable.
//   2. Use useParishioners hook with initial filters from URL
//   3. When filters change:
//      - Update the hook's filters
//      - Update the URL using router.push() or router.replace()
//      - LEARNING: router.replace() updates the URL without adding a
//        browser history entry. Use it for filter changes.
//   4. Render:
//      - PageHeader with title "Parish Directory" and count
//      - PersonSearchFilters component
//      - Grid of PersonCard components (or loading skeletons)
//      - Pagination component at the bottom
```

### File: `src/app/directory/[personId]/page.tsx`

```tsx
// =============================================================================
// PERSON DETAIL PAGE
// =============================================================================
// Shows a single parishioner's full profile.
//
// THIS IS A SERVER COMPONENT — fetches data on the server.
//
// LEARNING GOALS:
// - Dynamic routes with [params] in Next.js App Router
// - Parallel data fetching with Promise.all
// - generateMetadata for dynamic page titles
// - notFound() for 404 pages
// =============================================================================

// TODO: Import types and components
// TODO: Import { notFound } from 'next/navigation'

// TODO: Define the page props type
// - interface PageProps {
//     params: { personId: string }
//   }
// - LEARNING: Next.js passes route parameters as props to page components.
//   The folder name [personId] becomes the key in params.
//   params.personId is ALWAYS a string (from the URL) — parse to number if needed.

// TODO: Export generateMetadata for dynamic SEO
// - export async function generateMetadata({ params }: PageProps) {
//     // Fetch person name, return { title: `${name} | Parish Directory` }
//   }
// - LEARNING: generateMetadata is the async version of the metadata export.
//   Use it when the page title depends on data (like a person's name).

// TODO: Create async data fetching functions
// - async function getPersonWithSacraments(id: number): Promise<PersonWithSacraments>
// - async function getPersonHousehold(id: number): Promise<HouseholdWithMembers | null>
// - async function getPersonMinistries(id: number): Promise<MinistryMember[]>

// TODO: Create the PersonDetailPage component
// - export default async function PersonDetailPage({ params }: PageProps)
// - Logic:
//   1. Parse personId: const id = parseInt(params.personId)
//   2. Fetch all data in parallel:
//      const [person, household, ministries] = await Promise.all([
//        getPersonWithSacraments(id),
//        getPersonHousehold(id),
//        getPersonMinistries(id)
//      ])
//      - LEARNING: Promise.all runs multiple async operations simultaneously.
//        Three sequential fetches: ~900ms total (300ms each)
//        Three parallel fetches: ~300ms total (all at once)
//        ALWAYS use Promise.all for independent data fetches.
//   3. If person is null, call notFound()
//      - LEARNING: notFound() triggers Next.js to show the nearest not-found.tsx
//   4. Render PersonProfile component with all the data
```

### File: `src/app/ministries/page.tsx`

```tsx
// =============================================================================
// MINISTRIES LIST PAGE
// =============================================================================
// Shows all ministries with member counts, status, and actions.
//
// LEARNING GOALS:
// - Mixing server and client components on one page
// - Server data fetching + client interactivity
// - Next.js Link for navigation
// =============================================================================

// TODO: Create as a SERVER COMPONENT (no 'use client')
// - Fetch ministries on the server
// - Render a grid of MinistryCard components
// - Include "Create New Ministry" button linking to /ministries/new
// - Each MinistryCard links to /ministries/[id]
//
// LEARNING: Even though the list page itself is a server component,
// individual MinistryCard components can be client components if they
// need interactivity (like a status toggle or delete button).
// This is the "server component with client islands" pattern.
```

### File: `src/app/ministries/new/page.tsx`

```tsx
// =============================================================================
// CREATE MINISTRY PAGE
// =============================================================================
//
// LEARNING GOALS:
// - Client component for form handling
// - useRouter for programmatic navigation after creation
// - Error handling in forms
// =============================================================================

// TODO: Add 'use client'

// TODO: Create the NewMinistryPage component
// - Logic:
//   1. Use useMinistries hook (just need the createMinistry function)
//   2. useState for isSubmitting and error
//   3. handleSubmit function:
//      - Set isSubmitting = true
//      - Call createMinistry(data)
//      - On success: router.push(`/ministries/${newMinistry.id}`)
//        - LEARNING: router.push() navigates programmatically.
//          After creating a ministry, redirect to its detail page.
//      - On error: set error message
//      - Finally: set isSubmitting = false
//   4. Render PageHeader + MinistryForm in create mode
```

### File: `src/app/ministries/[ministryId]/page.tsx`

```tsx
// =============================================================================
// MINISTRY DETAIL PAGE
// =============================================================================
// Shows ministry info, members list, and roster schedule.
//
// LEARNING GOALS:
// - Combining server-fetched data with client-side interactivity
// - Tab-based layouts
// - Passing server data as props to interactive client components
// =============================================================================

// TODO: This page has two parts:
// 1. Server Component wrapper: Fetches ministry data
// 2. Client Component child: Handles member management and roster interaction

// Server part:
// - Fetch ministry with members from /api/ministries/[id]?include=members
// - Fetch roster data from /api/rosters?ministryId=[id]
// - Pass both as props to the client component

// Client part (could be a separate component file):
// - Renders tabs: "Overview" | "Members" | "Roster"
// - Overview: Ministry details (name, description, meeting info, status)
// - Members: MemberSelector component for add/remove
// - Roster: RosterCalendar component
```

---

## Phase 8: Next.js API Routes (Week 5-6)

### File: `src/app/api/ministries/route.ts`

```typescript
// =============================================================================
// MINISTRIES API ROUTE (Collection)
// =============================================================================
// Handles GET (list all) and POST (create) for ministries.
//
// LEARNING GOALS:
// - Next.js Route Handlers (the App Router way to build APIs)
// - Request/Response objects (Web API standard, not Express-style)
// - Prisma ORM for database queries
// - Input validation
// - HTTP status codes
// =============================================================================

// TODO: Import NextRequest, NextResponse from 'next/server'
// TODO: Import prisma from '@/lib/db'
// TODO: Import types: CreateMinistryInput, Ministry, PaginatedResponse

// TODO: Create the GET handler
// - export async function GET(request: NextRequest)
// - Logic:
//   1. Parse query params from request.nextUrl.searchParams
//      - page, pageSize, status filter
//   2. Query ministries using Prisma:
//      const ministries = await prisma.ministry.findMany({
//        skip: (page - 1) * pageSize,
//        take: pageSize,
//        where: status ? { status } : undefined,
//        orderBy: { name: 'asc' },
//        include: { _count: { select: { members: true } } }
//      })
//      - LEARNING: Prisma provides a type-safe query builder.
//        findMany = SELECT * FROM ministries
//        skip/take = OFFSET/LIMIT for pagination
//        where = WHERE clause
//        include._count = adds a count of related records
//   3. Get total count: await prisma.ministry.count({ where: ... })
//   4. Return NextResponse.json(paginatedResponse)
//
// LEARNING: Next.js Route Handlers use the Web Request/Response APIs,
// not the Express req/res pattern. NextRequest extends Request with
// helper methods like .nextUrl for parsing URLs.

// TODO: Create the POST handler
// - export async function POST(request: NextRequest)
// - Logic:
//   1. Parse body: const body: CreateMinistryInput = await request.json()
//   2. Validate required fields (name at minimum)
//      - If invalid, return NextResponse.json(error, { status: 400 })
//   3. Create ministry: await prisma.ministry.create({ data: body })
//   4. Return NextResponse.json(ministry, { status: 201 })
//
// LEARNING: Status codes matter!
// 200 = OK (successful GET/PUT)
// 201 = Created (successful POST)
// 400 = Bad Request (validation error)
// 404 = Not Found
// 500 = Internal Server Error
```

### File: `src/app/api/ministries/[ministryId]/route.ts`

```typescript
// =============================================================================
// MINISTRY API ROUTE (Individual)
// =============================================================================
// Handles GET (one), PUT (update), DELETE for a single ministry.
//
// LEARNING GOALS:
// - Dynamic API route params
// - Prisma update and delete operations
// - Error handling (not found, validation)
// =============================================================================

// TODO: Define route params type
// - interface RouteParams { params: { ministryId: string } }

// TODO: Create GET handler
// - Logic:
//   1. Get ministryId from params
//   2. const ministry = await prisma.ministry.findUnique({
//        where: { id: ministryId },
//        include: { members: { include: { person: true } } }
//      })
//   3. If not found: return NextResponse.json(error, { status: 404 })
//   4. Return the ministry with members

// TODO: Create PUT handler
// - Logic:
//   1. Parse body as UpdateMinistryInput
//   2. Validate
//   3. await prisma.ministry.update({ where: { id }, data: body })
//   4. Return updated ministry

// TODO: Create DELETE handler
// - Logic:
//   1. Delete all members first (cascade): prisma.ministryMember.deleteMany({ where: { ministryId } })
//   2. Delete the ministry: prisma.ministry.delete({ where: { id } })
//   3. Return NextResponse.json({ success: true })
//
// LEARNING: Prisma doesn't always auto-cascade deletes.
// You need to handle related records explicitly or configure
// cascade in the Prisma schema with onDelete: Cascade.
```

### File: `src/app/api/ministries/[ministryId]/members/route.ts`

```typescript
// =============================================================================
// MINISTRY MEMBERS API ROUTE
// =============================================================================
// Manage members of a specific ministry.
//
// LEARNING GOALS:
// - Nested dynamic routes in API
// - Cross-database references (personId from FastAPI DB, ministryId from local)
// - Upsert operations
// =============================================================================

// TODO: Create GET handler — list members of this ministry
// - Query: prisma.ministryMember.findMany({
//     where: { ministryId },
//     orderBy: { role: 'asc' }
//   })
// - NOTE: The person details come from FastAPI, so you may need to
//   enrich the response by fetching person data separately:
//   1. Get member records from local DB
//   2. Collect all personIds
//   3. Batch fetch person summaries from FastAPI: /persons?ids=1,2,3
//   4. Merge person data into member records

// TODO: Create POST handler — add a member to this ministry
// - Body: { personId: number, role: MemberRole }
// - Check if person is already a member (prevent duplicates)
// - Create: prisma.ministryMember.create({ data: { ministryId, personId, role, joinedAt: new Date() } })

// TODO: Create DELETE handler — remove a member
// - Use searchParams to get memberId
// - Delete: prisma.ministryMember.delete({ where: { id: memberId } })
```

### File: `src/app/api/rosters/route.ts`

```typescript
// =============================================================================
// ROSTER API ROUTE
// =============================================================================
// Manage roster/schedule entries for ministry assignments.
//
// LEARNING GOALS:
// - Date filtering in Prisma queries
// - Bulk create operations
// - Query optimization with select
// =============================================================================

// TODO: Create GET handler
// - Query params: ministryId, startDate, endDate
// - Logic:
//   1. Build Prisma where clause:
//      { ministryId, date: { gte: startDate, lte: endDate } }
//   2. Include related data (person summary, ministry name)
//   3. Group results by date for the WeeklyRoster type
//      - LEARNING: Prisma returns flat arrays. You transform them into
//        the grouped Record<string, RosterEntry[]> shape in application code.
//        Use Array.reduce() to group by date.

// TODO: Create POST handler
// - Accept single CreateRosterInput or BulkCreateRosterInput
// - For bulk: use prisma.rosterEntry.createMany({ data: entries })
// - Validate: check for duplicate assignments (same person, date, serviceTime)
// - Return created entries
```

### File: `src/app/api/dashboard/stats/route.ts`

```typescript
// =============================================================================
// DASHBOARD STATS API ROUTE
// =============================================================================
// Aggregates data from multiple sources for the dashboard.
//
// LEARNING GOALS:
// - Aggregation queries in Prisma
// - Combining data from multiple sources (local DB + external API)
// - Promise.all for parallel queries
// =============================================================================

// TODO: Create GET handler
// - Logic:
//   1. Run all queries in parallel with Promise.all:
//      - Total parishioners: fetch count from FastAPI /persons/count
//      - Total households: fetch count from FastAPI /households/count
//      - Total/active ministries: prisma.ministry.count() with filters
//      - Upcoming roster entries: prisma.rosterEntry.count({
//          where: { date: { gte: today, lte: nextWeek } }
//        })
//      - Recent activity: prisma.activityLog.findMany({ take: 10, orderBy: ... })
//      - Ministry overview: prisma.ministry.findMany({
//          include: { _count: { select: { members: true } } }
//        })
//   2. Assemble into DashboardData shape
//   3. Return NextResponse.json(data)
```

---

## Phase 9: Prisma Schema (Week 5)

### File: `prisma/schema.prisma`

```prisma
// =============================================================================
// PRISMA SCHEMA
// =============================================================================
// Defines the database models for ministry-specific data.
// These tables are ADDED to the existing Parish Database PostgreSQL instance.
//
// LEARNING GOALS:
// - Prisma schema language (models, relations, enums)
// - Understanding how Prisma generates TypeScript types from the schema
// - Database migrations with Prisma
// - Enum types at the database level
// =============================================================================

// TODO: Configure the datasource
// datasource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")  // reads from .env file
// }

// TODO: Configure the Prisma client generator
// generator client {
//   provider = "prisma-client-js"
// }

// TODO: Define enum MinistryStatus
// - ACTIVE
// - INACTIVE
// - SEASONAL
// LEARNING: Prisma enums map to PostgreSQL enum types.
// They constrain the database column to only these values.

// TODO: Define enum MemberRole
// - LEADER
// - COORDINATOR
// - MEMBER

// TODO: Define the Ministry model
// model Ministry {
//   id               String          @id @default(uuid())
//   name             String
//   description      String?         // ? means nullable
//   status           MinistryStatus  @default(ACTIVE)
//   meetingDay       String?         @map("meeting_day")
//   meetingTime      String?         @map("meeting_time")
//   meetingLocation  String?         @map("meeting_location")
//   maxMembers       Int?            @map("max_members")
//   createdAt        DateTime        @default(now()) @map("created_at")
//   updatedAt        DateTime        @updatedAt @map("updated_at")
//   members          MinistryMember[]
//   rosterEntries    RosterEntry[]
//   @@map("ministries")              // table name in PostgreSQL
// }
// LEARNING: @map renames the column in the database while keeping the
// camelCase name in your TypeScript code. This follows the convention
// of snake_case in SQL and camelCase in application code.

// TODO: Define the MinistryMember model
// model MinistryMember {
//   id          String      @id @default(uuid())
//   ministryId  String      @map("ministry_id")
//   personId    Int         @map("person_id")
//                           // NOTE: No @relation to Person — it's in a different schema/API
//   role        MemberRole  @default(MEMBER)
//   joinedAt    DateTime    @default(now()) @map("joined_at")
//   ministry    Ministry    @relation(fields: [ministryId], references: [id])
//   @@unique([ministryId, personId])  // prevent duplicate memberships
//   @@map("ministry_members")
// }
// LEARNING: @@unique creates a compound unique constraint.
// A person can only be in a ministry once. The database enforces this.

// TODO: Define the RosterEntry model
// - id: String UUID
// - ministryId: String FK to Ministry
// - personId: Int (references FastAPI person)
// - date: DateTime
// - serviceTime: String (store as string, validate in application)
// - notes: String? (optional)
// - createdAt, updatedAt
// - Relations: ministry Ministry
// - @@unique([ministryId, personId, date, serviceTime]) — prevent double-booking
// - @@map("roster_entries")

// TODO: Define the ActivityLog model (for recent activity feed)
// - id: String UUID
// - type: String — 'member_added', 'roster_created', etc.
// - description: String
// - relatedEntityId: String
// - timestamp: DateTime @default(now())
// - @@map("activity_log")
```

---

## Phase 10: Configuration Files (Week 1 — set up first)

### File: `next.config.ts`

```typescript
// =============================================================================
// NEXT.JS CONFIGURATION
// =============================================================================

// TODO: Configure Next.js
// - Enable experimental features if needed
// - Set up rewrites to proxy API calls to FastAPI in development:
//   async rewrites() {
//     return [
//       {
//         source: '/parish-api/:path*',
//         destination: 'http://localhost:8000/:path*'
//       }
//     ]
//   }
// LEARNING: Rewrites let the frontend call /parish-api/persons
// and Next.js proxies it to http://localhost:8000/persons.
// This avoids CORS issues in development.
```

### File: `tsconfig.json`

```json
// TODO: Standard Next.js TypeScript config
// Key settings to understand:
// - "strict": true — enables all strict type checking (KEEP THIS ON)
// - "paths": { "@/*": ["./src/*"] } — path aliases so you can import from '@/types' etc.
// - "jsx": "preserve" — Next.js handles JSX compilation
// - "moduleResolution": "bundler" — modern module resolution
```

### File: `.env.local`

```bash
# TODO: Define environment variables
# DATABASE_URL=postgresql://user:password@localhost:5432/parish_database
# NEXT_PUBLIC_PARISH_API_URL=http://localhost:8000
#
# LEARNING: Variables prefixed with NEXT_PUBLIC_ are exposed to the browser.
# DATABASE_URL is server-only (no prefix) — it never reaches the client.
# NEVER put secrets in NEXT_PUBLIC_ variables!
```

---

## Claude Code Instructions

When you take this plan into Claude Code, give it these instructions:

```
Read the file parish-directory-plan.md.

Your task is to ONLY:
1. Initialize a new Next.js project with TypeScript and Tailwind CSS
2. Create ALL directories listed in the plan
3. Initialize as a git repo
4. Create ALL files listed in the plan
5. Fill each file with ONLY the comments from the plan — no actual implementation code
6. The comments should explain what to build, including types, params, logic, and outputs
7. Install Prisma and create the schema.prisma file with the comments
8. Create package.json scripts for dev, build, lint, prisma generate, prisma migrate
9. Create a .gitignore appropriate for Next.js
10. Do NOT write any implementation code — only comments as instructions

The developer (me) will implement all the actual code manually using the comments as guidance.
```

---

## Learning Milestones

After each phase, you should be able to answer:

**Phase 2 (Types):** What's the difference between interface and type? When do you use Pick, Omit, Partial, Record? What are generics?

**Phase 3 (Lib):** How do you make type-safe API calls with generics? What's a type guard? Why use URLSearchParams?

**Phase 4 (UI Components):** How do props work in React? What's the children prop? How do you conditionally render? What's forwardRef for?

**Phase 5 (Features):** How do you compose complex components from simple ones? How does lifting state up work?

**Phase 6 (Hooks):** What are custom hooks? How does useEffect work with dependencies? What's useCallback for?

**Phase 7 (Pages):** What's the difference between server and client components? How does file-based routing work? What's Promise.all?

**Phase 8 (API Routes):** How do Next.js Route Handlers work? How does Prisma query the database? What are HTTP status codes?
