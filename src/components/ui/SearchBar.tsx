// =============================================================================
// SEARCH BAR COMPONENT
// =============================================================================
// A search input with debounced onChange — prevents API calls on every keystroke.
//
// LEARNING GOALS:
// - Custom hooks in practice (useDebounce)
// - Controlled input with local state + debounced callback
// - React.useEffect cleanup
// =============================================================================

// TODO: Define SearchBarProps interface
// - onSearch: (query: string) => void — called with debounced search term
// - placeholder: string (optional, default 'Search...')
// - initialValue: string (optional, default '')
// - debounceMs: number (optional, default 300)

// TODO: Create the SearchBar component
// - Logic:
//   1. Create local state for the input value: useState(initialValue)
//   2. Use the useDebounce hook (from hooks/useDebounce.ts) to debounce the value
//   3. useEffect: when debouncedValue changes, call onSearch(debouncedValue)
//   4. Render an Input component with a search icon (magnifying glass SVG)
//   5. Add a clear button (X) that resets the input when there's text
//
// LEARNING: The debounce pattern is critical for search UIs.
// Without it, typing "Smith" fires 5 API calls: "S", "Sm", "Smi", "Smit", "Smith"
// With 300ms debounce, it waits until the user stops typing, then fires once.
// This is a great example of why custom hooks exist — useDebounce encapsulates
// the timer logic so SearchBar just uses it declaratively.
