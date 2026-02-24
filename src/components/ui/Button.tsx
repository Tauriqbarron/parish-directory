// =============================================================================
// BUTTON COMPONENT
// =============================================================================
// A reusable button with variants, sizes, and loading states.
// This is your first React component — take time to understand every part.
//
// LEARNING GOALS:
// - React.FC vs function components (prefer function components)
// - Typing props with interfaces
// - React.ButtonHTMLAttributes for HTML prop passthrough
// - Variants pattern (common in component libraries)
// - Children prop
// - Forwarding refs with React.forwardRef
// =============================================================================

// TODO: Import React and necessary types

// TODO: Define a type called 'ButtonVariant'
// - 'primary' | 'secondary' | 'danger' | 'ghost'

// TODO: Define a type called 'ButtonSize'
// - 'sm' | 'md' | 'lg'

// TODO: Define an interface called 'ButtonProps'
// - Extend React.ButtonHTMLAttributes<HTMLButtonElement>
//   (this gives you onClick, disabled, type, className, etc. for free)
// - variant: ButtonVariant (optional, default 'primary')
// - size: ButtonSize (optional, default 'md')
// - isLoading: boolean (optional)
// - children: React.ReactNode
//
// LEARNING: Extending React.ButtonHTMLAttributes means your Button
// accepts ALL standard HTML button attributes plus your custom ones.
// React.ReactNode is the type for anything renderable: strings, numbers,
// elements, arrays, fragments, null. Always use it for children.

// TODO: Create the Button component
// - Use: export default function Button({ variant = 'primary', size = 'md',
//         isLoading = false, children, className, disabled, ...rest }: ButtonProps)
// - Logic:
//   1. Build className string based on variant and size
//      - Use the cn() utility from lib/utils
//      - Map each variant to Tailwind classes:
//        primary: 'bg-blue-600 text-white hover:bg-blue-700'
//        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//        danger: 'bg-red-600 text-white hover:bg-red-700'
//        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100'
//      - Map each size to Tailwind padding/text:
//        sm: 'px-3 py-1.5 text-sm'
//        md: 'px-4 py-2 text-base'
//        lg: 'px-6 py-3 text-lg'
//   2. Return a <button> element
//      - Spread {...rest} to pass through all HTML attributes
//      - Set disabled={disabled || isLoading}
//      - Show a spinner icon when isLoading (a simple SVG or text '...')
//      - Render children
//
// LEARNING: The '...rest' spread pattern is fundamental in React.
// It passes all unhandled props to the underlying HTML element.
// This means someone using <Button onClick={fn} id="my-btn"> just works.
