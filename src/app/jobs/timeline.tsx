"use client";

import { IconBriefcase, IconCode } from "@tabler/icons-react";
import { motion } from "motion/react";
import { EXPERIENCES } from "@/lib/constants";

const getIcon = (name: string) => {
    switch (name) {
        case "briefcase":
            return <IconBriefcase size={20} className="text-foreground/80" />;
        case "code":
            return <IconCode size={20} className="text-foreground/80" />;
        default:
            return <IconBriefcase size={20} className="text-foreground/80" />;
    }
};

export function JobsTimeline() {
    return (
        <div className="relative ml-4 flex flex-col gap-12 border-foreground/10 border-l pl-8 sm:ml-6 sm:gap-16">
            {EXPERIENCES.map((job, index) => (
                <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col gap-4"
                >
                    {/* Timeline dot */}
                    <div className="-left-[45px] sm:-left-[53px] absolute top-0 flex size-10 items-center justify-center rounded-full border border-foreground/10 bg-background shadow-sm">
                        {getIcon(job.logo)}
                    </div>

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold font-serif text-xl sm:text-2xl">
                                {job.role}
                            </h2>
                            <span className="font-medium text-foreground/80">
                                {job.company}
                            </span>
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
