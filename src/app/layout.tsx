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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parish Directory",
  description: "Parishioner directory and ministry management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* TODO: Add <Sidebar /> and <Navbar /> here */}
        {/* TODO: Wrap {children} in a <main> with proper layout */}
        {children}
      </body>
    </html>
  );
}
