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
