"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export default function NotFound() {
    const prefersReduced = usePrefersReducedMotion();
    const noMotion = { duration: 0 };

    return (
        <div className="flex min-h-[60dvh] flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                    prefersReduced
                        ? noMotion
                        : { duration: 0.5, ease: "easeOut" }
                }
                className="flex flex-col items-center gap-6"
            >
                <div className="relative mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={
                            prefersReduced
                                ? noMotion
                                : { delay: 0.2, duration: 0.5 }
                        }
                        className="flex items-center justify-center rounded-full bg-muted/30 p-12"
                    />
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={
                            prefersReduced
                                ? noMotion
                                : { delay: 0.4, duration: 0.5 }
                        }
                        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 font-black font-serif text-8xl text-foreground tracking-tighter"
                    >
                        404
                    </motion.h1>
                </div>

                <div className="space-y-3">
                    <h2 className="font-medium font-serif text-3xl text-foreground tracking-tight">
                        Page not found
                    </h2>
                    <p className="max-w-md font-sans text-muted-foreground leading-relaxed">
                        The page you are looking for doesn't exist or has been
                        moved. Let's get you back to safety.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        prefersReduced
                            ? noMotion
                            : { delay: 0.6, duration: 0.5 }
                    }
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-medium font-sans text-primary-foreground text-sm transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/20"
                    >
                        <span className="relative flex items-center gap-2">
                            <IconArrowLeft
                                size={18}
                                className="group-hover:-translate-x-1 transition-transform duration-300"
                            />
                            Back to Home
                        </span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
