// =============================================================================
// LOADING SKELETON COMPONENT
// =============================================================================
// Animated placeholder that shows while content is loading.
// Provides a better UX than a spinner by hinting at the content's shape.
//
// LEARNING GOALS:
// - CSS animations with Tailwind (animate-pulse)
// - Flexible layout components
// =============================================================================

import { cn } from '@/lib/utils';

// TODO: Define LoadingSkeletonProps interface
// - variant: 'text' | 'card' | 'avatar' | 'table-row' (optional, default 'text')
// - count: number (optional, default 1) — how many skeleton items to render
// - className: string (optional)

interface LoadingSkeletonProps {
    variant?: 'text' | 'card' | 'avatar' | 'table-row';
    count?: number;
    className?: string;
}

// TODO: Create the LoadingSkeleton component
// - Logic:
//   1. Use Array.from({ length: count }) to create an array of skeletons
//   2. Map each variant to a shape:
//      - 'text': A single gray bar (h-4 rounded bg-gray-200 animate-pulse)
//      - 'card': A card-shaped rectangle (h-32 rounded-lg bg-gray-200 animate-pulse)
//      - 'avatar': A circle (w-10 h-10 rounded-full bg-gray-200 animate-pulse)
//      - 'table-row': A row with multiple gray bars of varying widths
//   3. Apply className on top of base styles
//
// LEARNING: animate-pulse is a Tailwind utility that creates a gentle
// fade-in/fade-out animation. It's the standard loading skeleton effect.

export default function LoadingSkeleton({ variant = 'text', count = 1, className }: LoadingSkeletonProps) {
    const baseStyles = 'bg-gray-200 animate-pulse';
    const skeletons = Array.from({ length: count }).map((_, index) => {
        let skeleton;
        switch (variant) {
            case 'card': {
                const cardStyles = 'h-32 rounded-lg';
                const combinedClassName = cn(baseStyles, cardStyles, className);
                skeleton = <div key={index} className={combinedClassName} />;
                break;
            }
            case 'avatar': {
                const avatarStyles = 'w-10 h-10 rounded-full';
                const combinedAvatarClassName = cn(baseStyles, avatarStyles, className);
                skeleton = <div key={index} className={combinedAvatarClassName} />;
                break;
            }
            case 'table-row': {
                const rowStyles = 'h-4 rounded w-full mb-2 last:mb-0';
                const combinedRowClassName = cn(baseStyles, rowStyles, className);
                skeleton = (
                    <div key={index} className="w-full">
                        <div className={cn(combinedRowClassName, 'w-3/4')} />
                        <div className={cn(combinedRowClassName, 'w-1/2')} />
                        <div className={cn(combinedRowClassName, 'w-5/6')} />
                    </div>
                );
                break;
            }
            case 'text':
            default:
                const textStyles = 'h-4 rounded w-full';
                const combinedTextClassName = cn(baseStyles, textStyles, className);
                skeleton = <div key={index} className={combinedTextClassName} />;
                break;
        }
        return skeleton;
    });
    return <>{skeletons}</>;
}
