"use client";

import { useReducedMotion } from "motion/react";

/**
 * Returns `prefers-reduced-motion`-aware Framer Motion props.
 *
 * When the user has requested reduced motion in their OS settings,
 * entrance animations are skipped (elements appear instantly) while
 * the component tree stays identical — no conditional rendering.
 *
 * Usage:
 * ```tsx
 * const prefersReduced = usePrefersReducedMotion();
 * <motion.div {...(prefersReduced && { initial: false, animate: false })} />
 * ```
 */
export function usePrefersReducedMotion(): boolean {
    return useReducedMotion() ?? false;
}
