// =============================================================================
// INPUT COMPONENT
// =============================================================================
// A form input with label, error state, and helper text.
//
// LEARNING GOALS:
// - Controlled vs uncontrolled components
// - React.ChangeEvent<HTMLInputElement> type
// - forwardRef for form library compatibility
// - Connecting labels to inputs with htmlFor/id
// =============================================================================
import { cn } from '@/lib/utils';
import React from 'react';

// TODO: Define InputProps interface
// - Extend React.InputHTMLAttributes<HTMLInputElement>
// - label: string (optional) — displayed above the input
// - error: string (optional) — error message displayed below input
// - helperText: string (optional) — hint text displayed below input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}
// LEARNING: When extending InputHTMLAttributes, you get:
// - value, onChange, onBlur, placeholder, type, name, id, etc.
// - React's onChange is typed as React.ChangeEvent<HTMLInputElement>
//   which gives you event.target.value with full type safety.

// TODO: Create the Input component using React.forwardRef
// - forwardRef signature: React.forwardRef<HTMLInputElement, InputProps>(
//     (props, ref) => { ... }
//   )
// - Logic:
//   1. Destructure: { label, error, helperText, className, id, ...rest }
//   2. Generate a unique id if not provided (use React.useId() hook)
//   3. Render label with htmlFor={id} if label exists
//   4. Render <input ref={ref} id={id} {...rest} /> with Tailwind styles
//      - Base: 'w-full rounded-md border px-3 py-2'
//      - Error state: 'border-red-500 focus:ring-red-500'
//      - Normal state: 'border-gray-300 focus:ring-blue-500'
//   5. Render error message in red below input if error exists
//   6. Render helperText in gray below input if helperText exists
//
// LEARNING: forwardRef lets parent components access the underlying
// <input> element directly. This is essential for form libraries
// (React Hook Form) and focus management. Without forwardRef, the
// ref would point to the wrapper div, not the actual input.

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, helperText, className, id, ...rest },
    ref,
) {
    const uid = React.useId();
    const baseStyle = 'w-full rounded-md border px-3 py-2';
    const errorStyle = 'border-red-500 focus:ring-red-500';
    const normalStyle = 'border-gray-300 focus:ring-blue-500';
    const combinedClassName = cn(baseStyle, error ? errorStyle : normalStyle, className);
    const inputId = id ?? uid;
    return (
        <div>
            {label} && <label htmlFor={inputId}>{label}</label>
            <input ref={ref} id={inputId} className={combinedClassName} {...rest}></input>
            {error} && <p className='text-red-500'>{error}</p>
            {helperText} && <p className='text-gray-500'>{helperText}</p>
        </div>
    );
});
