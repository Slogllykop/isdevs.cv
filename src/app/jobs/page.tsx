import { EXPERIENCES, PROFILE_NAME, SITE_URL } from "@/lib/constants";
import { JobsTimeline } from "./timeline";

export const metadata = {
    title: "Experience",
    description: `${PROFILE_NAME}'s professional journey - Frontend Engineer experience at Bloomintek, building e-commerce platforms, annotation tools, and project management solutions.`,
};

function JobsJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/jobs`,
        name: `Work Experience - ${PROFILE_NAME}`,
        description: `Professional journey and work experience of ${PROFILE_NAME}.`,
        mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: PROFILE_NAME,
            hasOccupation: EXPERIENCES.map((exp) => ({
                "@type": "Occupation",
                name: exp.role,
                description: exp.description.join(" "),
                occupationLocation: {
                    "@type": "Country",
                    name: "India",
                },
                hiringOrganization: {
                    "@type": "Organization",
                    name: exp.company,
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
                name: "Experience",
                item: `${SITE_URL}/jobs`,
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

export default function JobsPage() {
    return (
        <>
            <JobsJsonLd />
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
        </>
    );
}
