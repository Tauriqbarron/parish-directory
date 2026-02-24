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
