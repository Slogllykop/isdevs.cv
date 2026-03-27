import { ContactEmail } from "@/components/ui/contact-email";
import { CONTACT_EMAIL, PROFILE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = {
    title: "Contact",
    description: `Get in touch with ${PROFILE_NAME} for frontend development opportunities, freelance projects, or collaborations.`,
};

function ContactJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact`,
        name: `Contact - ${PROFILE_NAME}`,
        description: `Get in touch with ${PROFILE_NAME} for opportunities or collaborations.`,
        mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: PROFILE_NAME,
            email: CONTACT_EMAIL,
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
                name: "Contact",
                item: `${SITE_URL}/contact`,
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

export default function ContactPage() {
    return (
        <>
            <ContactJsonLd />
            <div className="flex min-h-[50vh] flex-col items-start justify-center gap-12">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
                        Let's Connect
                    </h1>
                    <p className="max-w-2xl font-medium text-foreground/80 text-lg leading-relaxed sm:text-xl">
                        I'm currently looking for new opportunities. Whether you
                        have a question or just want to say hi, I'll try my best
                        to get back to you!
                    </p>
                </div>

                <ContactEmail />
            </div>
        </>
    );
}
