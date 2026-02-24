# Parish Directory — Learning Order & Resources

## How to Use This Guide

Work through the steps in order. Each step has a **What to Do** section (the files from the plan to work on) and a **Resources** section (links to read/watch before and during implementation). Don't skip ahead — later steps build on earlier ones.

---

## Step 1: Project Scaffolding

**What to do:** Run `create-next-app` with TypeScript and Tailwind, create all directories, initialise git, create empty files with comments. This is what you hand to Claude Code with the scaffolding instructions from the plan.

**Resources:**
- [Next.js Getting Started — Installation](https://nextjs.org/docs/app/getting-started/installation) — follow this exactly for `create-next-app` with TypeScript + Tailwind
- [Next.js Project Structure](https://nextjs.org/docs/app/getting-started/project-structure) — understand what each file/folder does before you create your own

---

## Step 2: TypeScript Types & Interfaces

**Files:** All files in `src/types/` — person.ts, household.ts, sacrament.ts, ministry.ts, roster.ts, dashboard.ts, api.ts, index.ts

This is where you learn TypeScript fundamentals without any React complexity. Pure type definitions.

**Resources:**

*TypeScript Fundamentals (read these first):*
- [TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) — the essential starting point for string, number, boolean, union types, type aliases, interfaces
- [TypeScript Handbook — Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html) — how to define object shapes, optional properties with `?`, readonly
- [TypeScript Handbook — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) — understand `<T>` syntax, you'll use this heavily in api.ts

*Utility Types (core to this step):*
- [TypeScript Official — Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) — the official reference for Pick, Omit, Partial, Record, Required, Readonly
- [W3Schools — TypeScript Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php) — simpler interactive examples if the official docs are dense
- [Better Stack — Understanding TypeScript Utility Types](https://betterstack.com/community/guides/scaling-nodejs/ts-utility-types/) — practical examples of Pick and Omit with real-world patterns

*Union Types & Discriminated Unions:*
- [TypeScript Handbook — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) — how TypeScript narrows union types, type guards, discriminated unions (used in sacrament.ts)

*Barrel Exports:*
- [TypeScript Handbook — Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html) — understand `export * from` re-export syntax for index.ts

---

## Step 3: Utility Functions & API Client

**Files:** `src/lib/constants.ts`, `src/lib/utils.ts`, `src/lib/api-client.ts`

Now you apply your types in real functions. Still no React — just TypeScript functions.

**Resources:**

*`as const` and Constants:*
- [TypeScript Handbook — More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html) — function typing, overloads, generics in functions
- [TypeScript Handbook — Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) — covers `as const` assertions

*Async/Await & Fetch:*
- [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — understand fetch() before wrapping it with types
- [MDN — Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) — refresh on async/await and Promise patterns
- [MDN — URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) — used in buildQueryString

*Type Guards:*
- [TypeScript Handbook — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) — specifically the "Using type predicates" section for `value is ApiError`

*Date Formatting:*
- [MDN — Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) — for formatDate
- [MDN — Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) — for formatRelativeTime

---

## Step 4: Your First React Components (UI Primitives)

**Files:** `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/Input.tsx`, `src/components/ui/Badge.tsx`, `src/components/ui/LoadingSkeleton.tsx`

This is where you start learning React. Build simple components first.

**Resources:**

*React Fundamentals (read all of these before coding):*
- [React Official — Quick Start](https://react.dev/learn) — the single best starting point, covers components, JSX, props, state, events
- [React Official — Describing the UI](https://react.dev/learn/describing-the-ui) — components, JSX, props, conditional rendering, lists
- [React Official — Your First Component](https://react.dev/learn/your-first-component) — defining and exporting components
- [React Official — Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) — how props work, destructuring, children

*React + TypeScript:*
- [React Official — Using TypeScript](https://react.dev/learn/typescript) — official guide for typing props, hooks, events in React
- [React TypeScript Cheatsheet (GitHub)](https://github.com/typescript-cheatsheets/react) — the definitive reference, bookmark this, you'll use it constantly
- [freeCodeCamp — Learn TypeScript with React Handbook](https://www.freecodecamp.org/news/learn-typescript-with-react-handbook/) — practical walkthrough of TypeScript in a React project

*Component Patterns:*
- [React Official — Conditional Rendering](https://react.dev/learn/conditional-rendering) — `&&`, ternary, early returns
- [MDN — Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) — understand `{...rest}` prop spreading

*Tailwind CSS:*
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — reference for all utility classes
- [Tailwind CSS — Handling Hover, Focus, and Other States](https://tailwindcss.com/docs/hover-focus-and-other-states) — interactive styles

---

## Step 5: More UI Components (Interactive Ones)

**Files:** `src/components/ui/SearchBar.tsx`, `src/components/ui/Modal.tsx`, `src/components/ui/Select.tsx`, `src/components/ui/Pagination.tsx`

These components introduce state and effects.

**Resources:**

*React Hooks:*
- [React Official — useState](https://react.dev/reference/react/useState) — managing component state
- [React Official — useEffect](https://react.dev/reference/react/useEffect) — side effects, cleanup functions, dependency arrays
- [React Official — useId](https://react.dev/reference/react/useId) — generating unique IDs for form accessibility

*Portals (for Modal):*
- [React Official — createPortal](https://react.dev/reference/react-dom/createPortal) — rendering outside the DOM hierarchy

*Event Types:*
- [React Official — Responding to Events](https://react.dev/learn/responding-to-events) — onClick, onChange, event handling
- [React TypeScript Cheatsheet — Forms and Events](https://github.com/typescript-cheatsheets/react#forms-and-events) — typing React events

---

## Step 6: Generic Table Component

**Files:** `src/components/ui/Table.tsx`

This gets its own step because generic components are a major learning milestone. If you understand this, you understand the most powerful React + TypeScript pattern.

**Resources:**
- [React TypeScript Cheatsheet — Generic Components](https://github.com/typescript-cheatsheets/react#generic-components) — how to make components generic
- [TypeScript Handbook — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) — re-read this, focusing on generic functions
- [React Official — Rendering Lists](https://react.dev/learn/rendering-lists) — `.map()`, keys, list rendering patterns

---

## Step 7: Custom Hooks

**Files:** `src/hooks/useDebounce.ts`, `src/hooks/usePagination.ts`, `src/hooks/useParishioners.ts`, `src/hooks/useMinistries.ts`

Build useDebounce and usePagination first (simpler), then the data-fetching hooks.

**Resources:**

*Custom Hooks:*
- [React Official — Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) — the essential guide
- [React Official — useCallback](https://react.dev/reference/react/useCallback) — memoizing functions (used in useMinistries)
- [React Official — useMemo](https://react.dev/reference/react/useMemo) — memoizing computed values (used in usePagination)

*Data Fetching Patterns:*
- [React Official — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) — understanding useEffect for data fetching
- [React Official — You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) — important! Teaches when NOT to use useEffect

---

## Step 8: Feature Components

**Files:** All files in `src/components/directory/`, `src/components/households/`, `src/components/ministries/`, `src/components/dashboard/`, `src/components/layout/`

These compose the UI primitives and hooks into real features.

**Resources:**

*Component Composition:*
- [React Official — Thinking in React](https://react.dev/learn/thinking-in-react) — the mental model for breaking UI into components
- [React Official — Sharing State Between Components (Lifting State Up)](https://react.dev/learn/sharing-state-between-components) — essential for PersonSearchFilters

*Forms:*
- [React Official — Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state) — controlled input pattern
- [React Official — Updating Objects in State](https://react.dev/learn/updating-objects-in-state) — immutable state updates for form data

*useReducer (for RosterCalendar):*
- [React Official — useReducer](https://react.dev/reference/react/useReducer) — alternative to useState for complex state
- [React Official — Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) — when and how to use reducers

*Next.js Link:*
- [Next.js — Link Component](https://nextjs.org/docs/app/api-reference/components/link) — client-side navigation

---

## Step 9: Prisma Schema & Database Setup

**Files:** `prisma/schema.prisma`, `src/lib/db.ts`

Set up your database layer before building pages and API routes.

**Resources:**

*Prisma Fundamentals:*
- [Prisma — Getting Started with Next.js](https://www.prisma.io/docs/guides/nextjs) — the official step-by-step guide for Next.js + Prisma + PostgreSQL
- [Prisma — Schema Reference](https://www.prisma.io/docs/orm/prisma-schema) — models, fields, relations, enums, @@map, @default
- [Prisma — Relations](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations) — one-to-many, many-to-many, how relations work

*Prisma + Next.js Specifics:*
- [Prisma — Comprehensive Guide for Next.js](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help) — singleton pattern, connection pooling, deployment issues
- [Vercel — Build a Fullstack App with Next.js, Prisma, and Postgres](https://vercel.com/kb/guide/nextjs-prisma-postgres) — end-to-end walkthrough

*Prisma Client:*
- [Prisma — CRUD Operations](https://www.prisma.io/docs/orm/prisma-client/queries/crud) — findMany, create, update, delete, include, select
- [Prisma — Filtering and Sorting](https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting) — where, orderBy, contains, gte, lte

---

## Step 10: Next.js Layout & Root Pages

**Files:** `src/app/layout.tsx`, `src/app/page.tsx` (dashboard), `src/app/loading.tsx`, `src/app/error.tsx`, `src/styles/globals.css`

This is where you learn the Next.js App Router fundamentals.

**Resources:**

*Server vs Client Components (read this first!):*
- [Next.js — Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) — the most important Next.js concept to grasp
- [Next.js — When to use Server vs Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components#when-to-use-server-vs-client-components) — the decision table

*App Router:*
- [Next.js — Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) — how layout.tsx and page.tsx work together
- [Next.js — Loading UI and Streaming](https://nextjs.org/docs/app/api-reference/file-conventions/loading) — loading.tsx convention
- [Next.js — Error Handling](https://nextjs.org/docs/app/getting-started/error-handling) — error.tsx convention
- [Next.js — Metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — the metadata export for SEO

*Data Fetching in Server Components:*
- [Next.js — Data Fetching](https://nextjs.org/docs/app/getting-started/data-fetching) — async server components, fetch in server components, caching strategies

---

## Step 11: Next.js API Routes (Route Handlers)

**Files:** All files in `src/app/api/` — ministries, rosters, dashboard

Build the API routes that your pages will consume.

**Resources:**

*Route Handlers:*
- [Next.js — Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) — GET, POST, PUT, DELETE handlers, NextRequest/NextResponse
- [Next.js — Route Handlers API Reference](https://nextjs.org/docs/app/api-reference/file-conventions/route) — file conventions, dynamic segments, request parsing

*Using Prisma in Route Handlers:*
- [Prisma — CRUD Operations](https://www.prisma.io/docs/orm/prisma-client/queries/crud) — reference this again while building your handlers
- [Prisma — Aggregation, Grouping, Summarizing](https://www.prisma.io/docs/orm/prisma-client/queries/aggregation-grouping-summarizing) — for dashboard stats

*HTTP & REST:*
- [MDN — HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) — 200, 201, 400, 404, 500 and when to use each

---

## Step 12: Next.js Feature Pages

**Files:** All page.tsx files in `src/app/directory/`, `src/app/households/`, `src/app/ministries/`

Bring everything together — components, hooks, types, and API routes into full pages.

**Resources:**

*Dynamic Routes:*
- [Next.js — Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) — [paramName] folder convention, accessing params
- [Next.js — generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) — dynamic page titles from data

*Client Components:*
- [Next.js — 'use client' Directive](https://nextjs.org/docs/app/api-reference/directives/use-client) — when and where to add it
- [Next.js — useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router) — programmatic navigation (redirect after create)
- [Next.js — useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params) — reading URL query params for search/filter state

*Parallel Data Fetching:*
- [MDN — Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) — fetching multiple data sources simultaneously
- [Next.js — notFound](https://nextjs.org/docs/app/api-reference/functions/not-found) — triggering 404 pages

---

## Step 13: Polish & Integration Testing

**What to do:** Connect to your existing FastAPI backend, test the full data flow, fix bugs, add loading/error states everywhere.

**Resources:**
- [Next.js — next.config.js Rewrites](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites) — proxy API calls to FastAPI
- [Next.js — Environment Variables](https://nextjs.org/docs/app/guides/environment-variables) — NEXT_PUBLIC_ prefix and .env.local

---

## Bonus: Keep Open at All Times

These are reference pages you'll come back to repeatedly across all steps:

- **[React Official Docs](https://react.dev/learn)** — the source of truth for React
- **[Next.js App Router Docs](https://nextjs.org/docs/app)** — the source of truth for Next.js
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)** — when you hit a type error you don't understand
- **[React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)** — quick answers for "how do I type X in React?"
- **[Prisma Client API Reference](https://www.prisma.io/docs/orm/reference/prisma-client-reference)** — for query syntax
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** — search for any utility class
- **[MDN Web Docs](https://developer.mozilla.org/)** — for any JavaScript/browser API question

---

## Recommended Course (Optional)

If you want a structured video walkthrough alongside this project:

- **[Next.js Official Learn Course](https://nextjs.org/learn/dashboard-app)** — free, builds a dashboard app with App Router, TypeScript, Prisma, and Tailwind. Very similar to what you're building. Work through this in parallel with Steps 9–12.
