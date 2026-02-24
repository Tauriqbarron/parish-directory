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
