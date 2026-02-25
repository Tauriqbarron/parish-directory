// =============================================================================
// BADGE COMPONENT
// =============================================================================
// A small label/tag for displaying status, categories, or counts.
// Used for sacrament badges, ministry status, member roles, etc.
//
// LEARNING GOALS:
// - Simple presentational component
// - Variant-based styling
// =============================================================================

import { cn } from "@/lib/utils";
import React from "react";

// TODO: Define BadgeProps interface
// - children: React.ReactNode
// - variant: 'default' | 'success' | 'warning' | 'danger' | 'info' (optional, default 'default')
// - className: string (optional)

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
    className?: string; 
}

export default function Badge({children, variant = 'default', className}: BadgeProps) {
    const baseStyles= 'inline-flex items-center text-xs font-medium rounded-full px-2.5 py-0.5';
    const variantStyles = {
        default : 'bg-gray-100 text-gray-800',
        success : 'bg-green-100 text-green-800',
        warning : 'bg-yellow-100 text-yellow-800',
        danger : 'bg-red-100 text-red-800',
        info : 'bg-blue-100 text-blue-800'
    }

    const combinedClassName = cn(baseStyles,variantStyles[variant], className);

    return (
        <span className={combinedClassName}>{children}</span>
    )
}

// TODO: Create the Badge component
// - Render a <span> with small text, rounded-full, padding
// - Map variants to Tailwind colors:
//   default: 'bg-gray-100 text-gray-800'
//   success: 'bg-green-100 text-green-800'
//   warning: 'bg-yellow-100 text-yellow-800'
//   danger: 'bg-red-100 text-red-800'
//   info: 'bg-blue-100 text-blue-800'
