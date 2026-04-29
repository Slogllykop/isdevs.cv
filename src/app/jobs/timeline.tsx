"use client";

import { motion } from "motion/react";
import { BlurImage } from "@/components/ui/blur-image";
import { EXPERIENCES } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

// Uniform timeline indicator - simple and clean
const TimelineIndicator = () => (
    <div className="size-2 rounded-full bg-foreground/40" />
);

export function JobsTimeline() {
    const prefersReduced = usePrefersReducedMotion();

    return (
        <div className="relative ml-4 flex flex-col gap-12 border-foreground/10 border-l pl-8 sm:ml-6 sm:gap-16">
            {EXPERIENCES.map((job, index) => (
                <motion.div
                    key={`${job.company}-${job.role}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={
                        prefersReduced
                            ? { duration: 0 }
                            : { duration: 0.5, delay: index * 0.1 }
                    }
                    className="relative flex flex-col gap-4"
                >
                    {/* Timeline dot */}
                    <div className="-left-11.25 sm:-left-13.25 absolute top-0 flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-sm">
                        <TimelineIndicator />
                    </div>

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold font-serif text-xl sm:text-2xl">
                                {job.role}
                            </h2>
                            <div className="flex items-center gap-2.5">
                                {job.logo && (
                                    <BlurImage
                                        src={job.logo}
                                        alt={`${job.company} logo`}
                                        fill
                                        blurSrc={`/blur/${job.logo.replace(/\.[^.]+$/, "").replace(/^\//, "")}.webp`}
                                        blurSize="contain"
                                        blurPosition="center"
                                        containerClassName="relative size-8 rounded-md border border-foreground/10 bg-white/5"
                                        className="rounded-md object-contain p-0.5"
                                    />
                                )}
                                <span className="font-medium text-foreground/80">
                                    {job.company}
                                </span>
                            </div>
                        </div>
                        <span className="shrink-0 font-medium text-foreground/60 text-sm">
                            {job.date}
                        </span>
                    </div>

                    <ul className="ml-4 flex list-disc flex-col gap-3 text-foreground/80 marker:text-foreground/40">
                        {job.description.map((desc, i) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: Renders static data
                            <li key={i} className="pl-1 leading-relaxed">
                                {desc}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
}
