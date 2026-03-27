import { Hero } from "@/components/hero";
import {
    EXPERIENCES,
    PROFILE_NAME,
    PROJECTS,
    SITE_URL,
    SKILLS,
    SOCIAL_LINKS,
} from "@/lib/constants";

function HomeJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": SITE_URL,
        name: `${PROFILE_NAME} - Portfolio`,
        url: SITE_URL,
        mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: PROFILE_NAME,
            url: SITE_URL,
            jobTitle: "Frontend Engineer",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "IN",
            },
            sameAs: SOCIAL_LINKS.map((link) => link.href),
            knowsAbout: SKILLS.map((skill) => skill.name),
            worksFor: {
                "@type": "Organization",
                name: EXPERIENCES[0].company,
            },
            hasOccupation: EXPERIENCES.map((exp) => ({
                "@type": "Occupation",
                name: exp.role,
            })),
            mainEntityOfPage: PROJECTS.map((project) => ({
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                url: project.link || project.github,
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

export default function Home() {
    return (
        <>
            <HomeJsonLd />
            <div className="flex flex-col gap-24">
                <Hero />
                {/* Other sections could go here */}
            </div>
        </>
    );
}
