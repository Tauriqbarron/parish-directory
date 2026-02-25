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
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: ApiError;
}


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
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
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
export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, string[]>;
}

// TODO: Define a type called 'HttpMethod'
// - 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// TODO: Define a generic interface called 'FetchOptions<TBody>'
// - method: HttpMethod
// - body: TBody (optional)
// - headers: Record<string, string> (optional)
// - params: Record<string, string | number | boolean | undefined> (optional)
//
// LEARNING: This typed fetch wrapper means you can't accidentally pass
// a number where a string is expected in headers, or forget the method.
export interface FetchOptions<TBody> {
  method: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
}

// TODO: Define a type guard function signature called 'isApiError'
// - Parameters: (value: unknown) => value is ApiError
// - LEARNING: Type guards are functions that narrow types at runtime.
//   'value is ApiError' is a type predicate — it tells TypeScript that
//   if this function returns true, the value IS an ApiError.
//   You'll implement this in lib/utils.ts
export function isApiError(value: unknown): value is ApiError { return true; } 