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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TODO: Add rewrites for FastAPI proxy as described above
};

export default nextConfig;
