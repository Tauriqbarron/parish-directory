// =============================================================================
// SELECT COMPONENT
// =============================================================================
// A styled select dropdown with label and error state.
// Similar to Input but for <select> elements.
//
// LEARNING GOALS:
// - React.SelectHTMLAttributes<HTMLSelectElement>
// - Typing option arrays
// - Generic select for type-safe option values
// =============================================================================

// TODO: Define SelectOption interface
// - value: string
// - label: string

// TODO: Define SelectProps interface
// - Extend React.SelectHTMLAttributes<HTMLSelectElement>
// - label: string (optional)
// - error: string (optional)
// - options: SelectOption[]
// - placeholder: string (optional) — shown as first disabled option

// TODO: Create the Select component
// - Similar structure to Input (label, select element, error message)
// - Render <option> elements from the options array
// - If placeholder provided, render a disabled first option with that text
