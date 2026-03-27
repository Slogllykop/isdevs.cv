"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT_EMAIL, NAV_LINKS, PROFILE_NAME } from "@/lib/constants";
import { ThemeToggleButton } from "./ui/skiper-ui/skiper26";

export function Header() {
    const firstName = PROFILE_NAME.split(" ")[0];
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll for seamless transition
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Close menu on navigation
    useEffect(() => {
        if (pathname) {
            setIsOpen(false);
        }
    }, [pathname]);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:h-20 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="group relative z-50 font-medium font-serif text-xl tracking-tight transition-opacity hover:opacity-80 md:text-2xl"
                >
                    {firstName}.
                    <motion.div
                        className="-bottom-1 absolute left-0 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"
                        initial={false}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative font-medium text-sm transition-colors hover:text-foreground/80 ${
                                pathname === link.href
                                    ? "text-foreground"
                                    : "text-foreground/80"
                            }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="-bottom-1 absolute left-0 h-px w-full bg-foreground"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                    <ThemeToggleButton variant="circle" start="top-right" />
                </nav>

                {/* Mobile Icons Header */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggleButton variant="circle" start="top-right" />
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-110 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IconX size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IconMenu2 size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-100 overflow-hidden md:hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {/* The Expanding Circular Background */}
                        <motion.div
                            className="absolute top-8 right-11 h-1 w-1 rounded-full bg-background"
                            variants={{
                                closed: {
                                    scale: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.4, 0, 0.2, 1],
                                        delay: 0.2,
                                    },
                                },
                                open: {
                                    scale: 3000, // Very large to cover screen from a tiny dot
                                    transition: {
                                        duration: 0.5,
                                        ease: [0.4, 0, 0.2, 1],
                                    },
                                },
                            }}
                            style={{
                                transformOrigin: "center",
                                pointerEvents: "none",
                            }}
                        />

                        {/* Link Container */}
                        <motion.div
                            className="relative flex h-full flex-col items-center justify-center px-6"
                            variants={{
                                closed: {
                                    opacity: 0,
                                    transition: {
                                        staggerChildren: 0.05,
                                        staggerDirection: -1,
                                    },
                                },
                                open: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 0.3, // Wait for background to grow
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            <div className="flex flex-col items-center gap-6">
                                {NAV_LINKS.map((link) => (
                                    <motion.div
                                        key={link.href}
                                        variants={{
                                            closed: { y: 20, opacity: 0 },
                                            open: { y: 0, opacity: 1 },
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`font-medium font-serif text-3xl tracking-tight transition-colors hover:text-foreground/60 md:text-4xl ${
                                                pathname === link.href
                                                    ? "text-foreground"
                                                    : "text-foreground/75"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Optional Bottom Contact Info */}
                            <motion.div
                                variants={{
                                    closed: { opacity: 0 },
                                    open: { opacity: 1 },
                                }}
                                className="absolute bottom-12 text-center"
                                transition={{ delay: 0.8 }}
                            >
                                <p className="font-medium text-foreground/40 text-sm uppercase tracking-widest">
                                    Get in touch
                                </p>
                                <p className="mt-2 font-medium">
                                    {CONTACT_EMAIL}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
