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
