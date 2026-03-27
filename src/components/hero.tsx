"use client";

import { IconFileText } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import {
    GREETING,
    PROFILE_IMAGE,
    PROFILE_NAME,
    SOCIAL_LINKS,
} from "@/lib/constants";

const Tape = () => (
    <div className="-rotate-2 -translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 z-10 h-10 w-28 rounded-sm bg-foreground/15 shadow-sm backdrop-blur-[2px] transition-all duration-500 before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/5 before:to-transparent" />
);

const Polaroid = () => {
    return (
        <motion.div
            initial={{
                rotate: -3,
                y: 20,
                opacity: 0,
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            }}
            animate={{
                rotate: -2,
                y: 0,
                opacity: 1,
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
            }}
            whileHover={{
                rotate: 0,
                boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col items-center bg-card p-4 pb-14 ring-1 ring-border/20 dark:shadow-[0_0_40px_rgba(0,0,0,0.4)] dark:ring-white/5"
        >
            <Tape />
            <div className="relative h-[346px] w-[276px] overflow-hidden border border-foreground/10 bg-muted grayscale transition-all duration-700 group-hover:grayscale-0">
                <Image
                    src={PROFILE_IMAGE}
                    alt={PROFILE_NAME}
                    fill
                    sizes="276px"
                    className="object-cover transition-transform duration-700"
                    priority
                />
            </div>
            <p className="mt-8 font-serif text-sm italic tracking-tight opacity-40">
                Pune, India
            </p>
        </motion.div>
    );
};

export const Hero = () => {
    return (
        <section className="grid grid-cols-1 gap-12 pt-4 pb-20 md:grid-cols-5 md:items-center md:py-20">
            <div className="flex flex-col gap-8 md:col-span-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <h1 className="max-w-xl font-bold font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        Hey, I'm {PROFILE_NAME}.
                    </h1>
                    <p className="max-w-lg font-medium text-foreground/80 text-lg leading-relaxed sm:text-xl">
                        {GREETING}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 px-5 py-2.5 font-medium text-foreground/70 text-sm transition-all hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
                        >
                            <IconFileText size={16} stroke={2} />
                            View Resume
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <div className="h-[3px] w-12 bg-foreground/15" />
                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-sm tracking-tight">
                            Find me on
                        </span>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-foreground/50 transition-colors hover:text-foreground"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[280px] md:col-span-2 md:block md:max-w-none">
                <Polaroid />
            </div>
        </section>
    );
};
