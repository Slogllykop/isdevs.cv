"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    const prefersReduced = usePrefersReducedMotion();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(0.25rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0rem)" }}
            transition={
                prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.4, ease: "easeOut" }
            }
            className="h-full w-full"
        >
            {children}
        </motion.div>
    );
}
