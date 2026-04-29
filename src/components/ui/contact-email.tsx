"use client";

import { IconCheck, IconCopy, IconMail } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

export function ContactEmail() {
    const [copied, setCopied] = useState(false);
    const prefersReduced = usePrefersReducedMotion();
    const noMotion = { duration: 0 };

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="flex w-full max-w-2xl flex-col items-stretch gap-4 sm:flex-row">
            <motion.button
                type="button"
                onClick={handleCopy}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReduced ? noMotion : { duration: 0.4 }}
                whileTap={prefersReduced ? undefined : { scale: 0.995 }}
                className={cn(
                    "group relative flex min-h-22 flex-3 items-center justify-between gap-6 overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/2 px-8 py-5 transition-all hover:bg-foreground/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50",
                )}
                aria-label={copied ? "Email copied" : "Copy email address"}
            >
                <div className="flex flex-col items-start gap-1">
                    <span className="font-medium text-[0.65rem] text-foreground/30 uppercase tracking-[0.25em]">
                        Direct Email
                    </span>
                    <span className="font-serif text-2xl tracking-tight sm:text-3xl lg:text-4xl">
                        {CONTACT_EMAIL}
                    </span>
                </div>

                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/5 bg-foreground/5 transition-all group-hover:bg-foreground/10 lg:h-12 lg:w-12">
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={
                                    prefersReduced
                                        ? false
                                        : {
                                              opacity: 0,
                                              scale: 0.5,
                                              rotate: -20,
                                          }
                                }
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={
                                    prefersReduced
                                        ? { opacity: 0 }
                                        : { opacity: 0, scale: 0.5 }
                                }
                                transition={
                                    prefersReduced ? noMotion : undefined
                                }
                                className="text-foreground"
                                aria-live="polite"
                            >
                                <IconCheck size={20} className="lg:size-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="copy"
                                initial={
                                    prefersReduced
                                        ? false
                                        : { opacity: 0, scale: 0.5 }
                                }
                                animate={{ opacity: 1, scale: 1 }}
                                exit={
                                    prefersReduced
                                        ? { opacity: 0 }
                                        : { opacity: 0, scale: 1.5 }
                                }
                                transition={
                                    prefersReduced ? noMotion : undefined
                                }
                                className="text-foreground/40 transition-colors group-hover:text-foreground"
                            >
                                <IconCopy size={20} className="lg:size-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                    prefersReduced ? noMotion : { duration: 0.4, delay: 0.1 }
                }
                whileTap={prefersReduced ? undefined : { scale: 0.98 }}
                className="flex flex-1"
            >
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex h-full min-h-22 w-full items-center justify-center rounded-[2rem] bg-foreground text-background transition-all hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 active:scale-[0.98]"
                    title="Open in mail client"
                    aria-label="Open email client"
                >
                    <IconMail size={28} className="lg:size-10" />
                </a>
            </motion.div>
        </div>
    );
}
