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

import { cn } from '@/lib/utils';
import React from 'react';

// TODO: Define CardProps interface
// - children: React.ReactNode
// - className: string (optional)
// - onClick: (() => void) (optional) — makes the card clickable

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

type CardSubcomponentProps = Omit<CardProps, 'onClick'>;
// LEARNING: '(() => void)' is a function type that takes no arguments
// and returns nothing. It's the type for event callbacks that don't
// need to return a value.

// TODO: Create the Card component
// - Renders a <div> with base styles: rounded border, shadow, white background
// - If onClick is provided, add cursor-pointer and hover styles
// - Apply className on top of base styles using cn()
function Card({ children, className: classname, onClick }: CardProps) {
    const baseStyles = 'rounded border, shadow, bg-white';
    const onClickStyles = 'cursor-pointer, hover';
    const combinedClassName = cn(baseStyles, onClick ? onClickStyles : '', classname);
    return (
        <div className={combinedClassName} onClick={onClick}>
            {children}
        </div>
    );
}

// TODO: Create Card.Header sub-component
// - Renders children in a <div> with bottom border, padding, font-bold
// - Props: { children: React.ReactNode; className?: string }
function CardHeader({ children, className }: CardSubcomponentProps) {
    const baseStyles = 'border-b p-4 font-bold';
    const combinedClassname = cn(baseStyles, className);

    return <div className={combinedClassname}>{children}</div>;
}
// TODO: Create Card.Body sub-component
// - Renders children in a <div> with padding
// - Props: { children: React.ReactNode; className?: string }
function CardBody({ children, className }: CardSubcomponentProps) {
    const baseStyles = 'p-4';
    const combinedClassname = cn(baseStyles, className);
    return <div className={combinedClassname}>{children}</div>;
}

// TODO: Create Card.Footer sub-component
// - Renders children in a <div> with top border, padding, flex layout
// - Props: { children: React.ReactNode; className?: string }
function CardFooter({ children, className }: CardSubcomponentProps) {
    const baseStyles = 'border-t p-4 flex';
    const combinedClassname = cn(baseStyles, className);

    return <div className={combinedClassname}>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
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
