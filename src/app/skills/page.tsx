import {
    IconBrandCpp,
    IconBrandDocker,
    IconBrandFigma,
    IconBrandFramerMotion,
    IconBrandGit,
    IconBrandHtml5,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandRedux,
    IconBrandSupabase,
    IconBrandTailwind,
    IconBrandTypescript,
    IconDatabase,
    IconRefresh,
    IconSparkles,
} from "@tabler/icons-react";
import { PROFILE_NAME, SITE_URL, SKILLS } from "@/lib/constants";

export const metadata = {
    title: "Skills",
    description: `Explore the technologies and tools ${PROFILE_NAME} uses - React, Next.js, TypeScript, TanStack Query, Shadcn/UI, and more.`,
};

const getIcon = (name: string) => {
    switch (name) {
        case "brand-react":
            return <IconBrandReact size={24} stroke={1.5} />;
        case "brand-next-js":
            return <IconBrandNextjs size={24} stroke={1.5} />;
        case "brand-typescript":
            return <IconBrandTypescript size={24} stroke={1.5} />;
        case "brand-tailwind":
            return <IconBrandTailwind size={24} stroke={1.5} />;
        case "brand-html5":
            return <IconBrandHtml5 size={24} stroke={1.5} />;
        case "brand-tanstack":
            return <IconRefresh size={24} stroke={1.5} />;
        case "brand-redux":
            return <IconBrandRedux size={24} stroke={1.5} />;
        case "brand-framer-motion":
            return <IconBrandFramerMotion size={24} stroke={1.5} />;
        case "brand-postgresql":
            return <IconDatabase size={24} stroke={1.5} />;
        case "brand-docker":
            return <IconBrandDocker size={24} stroke={1.5} />;
        case "brand-git":
            return <IconBrandGit size={24} stroke={1.5} />;
        case "brand-supabase":
            return <IconBrandSupabase size={24} stroke={1.5} />;
        case "brand-figma":
            return <IconBrandFigma size={24} stroke={1.5} />;
        case "brand-cpp":
            return <IconBrandCpp size={24} stroke={1.5} />;
        case "brand-python":
            return <IconBrandPython size={24} stroke={1.5} />;
        case "sparkles":
            return <IconSparkles size={24} stroke={1.5} />;
        default:
            return null;
    }
};

function SkillsJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${SITE_URL}/skills`,
        name: `Skills - ${PROFILE_NAME}`,
        description: `Technologies and tools used by ${PROFILE_NAME} including React, Next.js, TypeScript, TanStack Query, Shadcn/UI, and more.`,
        mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: PROFILE_NAME,
        },
    };

    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Skills",
                item: `${SITE_URL}/skills`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires dangerouslySetInnerHTML
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires dangerouslySetInnerHTML
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbs),
                }}
            />
        </>
    );
}

export default function SkillsPage() {
    return (
        <>
            <SkillsJsonLd />
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold font-serif text-3xl tracking-tight sm:text-4xl">
                        Skills
                    </h1>
                    <p className="text-foreground/80 text-lg">
                        Technologies and tools I work with everyday.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {SKILLS.map((skill) => (
                        <div
                            key={skill.name}
                            className="skill-card flex flex-col items-start gap-4 rounded-xl border border-foreground/10 bg-foreground/5 p-6 transition-all hover:border-foreground/20 hover:bg-foreground/10 hover:shadow-sm"
                        >
                            <div className="text-foreground">
                                {getIcon(skill.icon)}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-foreground">
                                    {skill.name}
                                </span>
                                <span className="text-foreground/60 text-xs">
                                    {skill.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
