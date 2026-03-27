import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { PROFILE_NAME, PROJECTS, SITE_URL } from "@/lib/constants";

export const metadata = {
    title: "Projects",
    description: `Explore open-source projects built by ${PROFILE_NAME} - including OpenKanban, Clarity, Oculus, Echo, and Breve. High-quality web applications and browser extensions.`,
};

function ProjectsJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects`,
        name: `Projects - ${PROFILE_NAME}`,
        description: `Open-source projects and web applications built by ${PROFILE_NAME}.`,
        mainEntity: {
            "@type": "ItemList",
            itemListElement: PROJECTS.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "SoftwareApplication",
                    name: project.title,
                    description: project.description,
                    url: project.link || project.github,
                    author: {
                        "@type": "Person",
                        "@id": `${SITE_URL}/#person`,
                    },
                },
            })),
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
                name: "Projects",
                item: `${SITE_URL}/projects`,
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

export default function ProjectsPage() {
    return (
        <>
            <ProjectsJsonLd />
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold font-serif text-3xl tracking-tight sm:text-4xl">
                        Projects
                    </h1>
                    <p className="text-foreground/80 text-lg">
                        A selection of my recent works and personal projects.
                    </p>
                </div>

                <div className="flex flex-col gap-8 sm:gap-12">
                    {PROJECTS.map((project) => (
                        <article
                            key={project.title}
                            className="project-card group flex flex-col gap-3 border-foreground/10 border-b pb-8 last:border-0 last:pb-0"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="font-semibold font-serif text-xl sm:text-2xl">
                                    {project.title}
                                </h2>
                                <div className="flex flex-wrap items-center gap-3 text-foreground/60">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 transition-colors hover:text-foreground"
                                            aria-label={`GitHub Repository for ${project.title}`}
                                        >
                                            <IconBrandGithub
                                                size={20}
                                                stroke={2}
                                            />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 transition-colors hover:text-foreground"
                                            aria-label={`Live Project for ${project.title}`}
                                        >
                                            <IconExternalLink
                                                size={20}
                                                stroke={2}
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="max-w-2xl text-foreground/80 leading-relaxed">
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
