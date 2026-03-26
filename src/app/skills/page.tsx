import {
    IconBrandCpp,
    IconBrandFramerMotion,
    IconBrandGit,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandSupabase,
    IconBrandTailwind,
    IconBrandTypescript,
    IconBrandVercel,
    IconDatabase,
    IconSparkles,
} from "@tabler/icons-react";
import { SKILLS } from "@/lib/constants";

export const metadata = {
    title: "Skills | Indraneel Sinare",
    description: "Technologies and tools I use.",
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
        case "brand-framer-motion":
            return <IconBrandFramerMotion size={24} stroke={1.5} />;
        case "brand-postgresql":
            return <IconDatabase size={24} stroke={1.5} />;
        case "brand-git":
            return <IconBrandGit size={24} stroke={1.5} />;
        case "brand-supabase":
            return <IconBrandSupabase size={24} stroke={1.5} />;
        case "brand-vercel":
            return <IconBrandVercel size={24} stroke={1.5} />;
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

export default function SkillsPage() {
    return (
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
                        className="flex flex-col items-start gap-4 rounded-xl border border-foreground/10 bg-foreground/5 p-6 transition-all hover:border-foreground/20 hover:bg-foreground/10 hover:shadow-sm"
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
    );
}
