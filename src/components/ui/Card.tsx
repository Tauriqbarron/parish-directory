// =============================================================================
// CARD COMPONENT
// =============================================================================
// A container card with optional header, body, and footer sections.
//
// LEARNING GOALS:
// - Compound component pattern (Card, Card.Header, Card.Body, Card.Footer)
// - React.ReactNode for flexible children
// - Combining multiple sub-components
// =============================================================================

// TODO: Define CardProps interface
// - children: React.ReactNode
// - className: string (optional)
// - onClick: (() => void) (optional) — makes the card clickable
//
// LEARNING: '(() => void)' is a function type that takes no arguments
// and returns nothing. It's the type for event callbacks that don't
// need to return a value.

// TODO: Create the Card component
// - Renders a <div> with base styles: rounded border, shadow, white background
// - If onClick is provided, add cursor-pointer and hover styles
// - Apply className on top of base styles using cn()

// TODO: Create Card.Header sub-component
// - Renders children in a <div> with bottom border, padding, font-bold
// - Props: { children: React.ReactNode; className?: string }

// TODO: Create Card.Body sub-component
// - Renders children in a <div> with padding
// - Props: { children: React.ReactNode; className?: string }

// TODO: Create Card.Footer sub-component
// - Renders children in a <div> with top border, padding, flex layout
// - Props: { children: React.ReactNode; className?: string }

// LEARNING: Compound components are assigned as properties of the parent:
//   Card.Header = CardHeader
//   Card.Body = CardBody
//   Card.Footer = CardFooter
// Usage:
//   <Card>
//     <Card.Header>Title</Card.Header>
//     <Card.Body>Content</Card.Body>
//     <Card.Footer><Button>Save</Button></Card.Footer>
//   </Card>
//
// This is a very common pattern in React component libraries.
