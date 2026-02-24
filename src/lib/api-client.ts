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
