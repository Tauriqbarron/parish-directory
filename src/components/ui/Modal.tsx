// =============================================================================
// MODAL COMPONENT
// =============================================================================
// A dialog/modal overlay for confirmations, forms, etc.
//
// LEARNING GOALS:
// - React Portals (rendering outside the DOM hierarchy)
// - useEffect for keyboard event listeners
// - Focus trapping (accessibility)
// - Conditional rendering
// =============================================================================

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import { cn } from '@/lib/utils';

// TODO: Define ModalProps interface
// - isOpen: boolean
// - onClose: () => void
// - title: string
// - children: React.ReactNode
// - size: 'sm' | 'md' | 'lg' (optional, default 'md')

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

// TODO: Create the Modal component
// - Logic:
//   1. If !isOpen, return null (render nothing)
//   2. Use React.createPortal to render into document.body
//      - LEARNING: Portals render children into a different DOM node.
//        This means the modal appears at the root level of the page,
//        not nested inside whatever component opens it. This prevents
//        z-index and overflow issues.
//   3. Render a backdrop overlay (semi-transparent black)
//      - onClick on backdrop calls onClose
//   4. Render the modal content centered on screen
//   5. Add useEffect to listen for Escape key → call onClose
//      - Return cleanup function to remove the event listener
//      - LEARNING: useEffect cleanup runs when the component unmounts
//        or before the effect re-runs. Always clean up event listeners!
//   6. Render title in header, children in body

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
    };
    const baseClassname = 'bg-white p-8 rounded-lg shadow-lg';

    useEffect(() => {
        if (!isOpen) return;
        const handleEscKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscKeyDown);
        return () => {
            window.removeEventListener('keydown', handleEscKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const combinedClassName = cn(baseClassname, sizeClasses[size]);

    return createPortal(
        <div>
            <div
                className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={combinedClassName}>
                    <header className="mb-4 flex items-center justify-between">
                        {title}
                        <Button variant="secondary" size="sm" onClick={onClose}>
                            X
                        </Button>
                    </header>
                    <div>{children}</div>
                </div>
            </div>
        </div>,
        document.body,
    );
}
