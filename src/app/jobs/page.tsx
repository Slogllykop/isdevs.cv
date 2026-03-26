import { JobsTimeline } from "./timeline";

export const metadata = {
    title: "Experience | Indraneel Sinare",
    description: "My professional journey and work experience.",
};

export default function JobsPage() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold font-serif text-3xl tracking-tight sm:text-4xl">
                    Work Experience
                </h1>
                <p className="text-foreground/80 text-lg">
                    My professional journey so far.
                </p>
            </div>

            <JobsTimeline />
        </div>
    );
}
