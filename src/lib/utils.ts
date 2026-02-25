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

import { ApiError, Person } from "@/types";

// TODO: Implement the 'isApiError' type guard
// - Parameters: (value: unknown) => value is ApiError
// - Logic: Check that value is an object, has 'message' (string) and 'code' (string)
// - LEARNING: Type guards use runtime checks to narrow types.
//   After calling: if (isApiError(error)) { ... }
//   Inside the if block, TypeScript KNOWS error is ApiError.

export function isApiError(value: unknown): value is ApiError {
    return (
        typeof value === 'object' &&
        value !== null &&
        'message' in value &&
        typeof (value as ApiError).message === 'string' &&
        'code' in value &&
        typeof (value as ApiError).code === 'string'
    );
}

// TODO: Create 'formatDate' function
// - Parameters: (dateString: string, style?: 'short' | 'long') => string
// - Logic: Use Intl.DateTimeFormat with 'en-NZ' locale
//   - 'short': "15 Mar 2025"
//   - 'long': "Saturday, 15 March 2025"
// - LEARNING: Intl.DateTimeFormat is built into browsers and Node.js.
//   Always use it instead of manual date formatting or libraries like moment.
export function formatDate(dateString: string, style: 'short' | 'long'): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = style === 'short'
        ? { day: 'numeric', month: 'short', year: 'numeric' }
        : { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-NZ', options).format(date);
}

// TODO: Create 'formatRelativeTime' function
// - Parameters: (dateString: string) => string
// - Returns: "2 hours ago", "3 days ago", "just now", etc.
// - LEARNING: Intl.RelativeTimeFormat handles this. Useful for "Recent Activity".
export function formatRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffinhours = Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60));
    if (diffinhours === 0) return 'just now';
    const rtf = new Intl.RelativeTimeFormat('en-NZ', { numeric: 'auto' });
    return rtf.format(diffinhours, 'hour');
}

// TODO: Create 'getInitials' function
// - Parameters: (firstName: string, lastName: string) => string
// - Returns: "TS" for "Tauriq Smith"
// - Used for avatar placeholders in the directory
export function getInitials(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
}

// TODO: Create 'getFullName' function
// - Parameters: (person: Pick<Person, 'firstName' | 'middleName' | 'lastName'>) => string
// - Returns: "Tauriq Barron" or "Tauriq M. Barron" if middle name exists
// - LEARNING: Using Pick<Person, ...> as the parameter type means this
//   function accepts any object that has at least those three properties.
//   You don't need to pass a full Person object.
export function getFullName(person: Pick<Person, 'firstName' | 'middleName' | 'lastName'>): string {
    const { firstName, middleName, lastName } = person;
    return middleName
        ? `${firstName} ${middleName.charAt(0).toUpperCase()}. ${lastName}`
        : `${firstName} ${lastName}`;
}

// TODO: Create 'calculateAge' function
// - Parameters: (dateOfBirth: string) => number
// - Logic: Calculate age from ISO date string to today's date
// - Handle edge cases: birthday hasn't occurred yet this year
export function calculateAge(dateOfBirth: string): number {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
    if (!hasHadBirthdayThisYear) {
        age--;
    }
    return age;
}
// TODO: Create 'cn' function (className merger)
// - Parameters: (...classes: (string | undefined | false)[]) => string
// - Logic: Filter out falsy values, join with spaces
// - e.g. cn('bg-blue', isActive && 'text-white', undefined) → 'bg-blue text-white'
// - LEARNING: This is the most common utility in React + Tailwind projects.
//   It lets you conditionally apply CSS classes cleanly.
export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
}