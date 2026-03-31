import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import { CONTACT_EMAIL, PROFILE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const lora = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
    display: "swap",
});

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${PROFILE_NAME} - Frontend Engineer & Full Stack Developer`,
        template: `%s | ${PROFILE_NAME}`,
    },
    description: `${PROFILE_NAME} is a results-driven Frontend Engineer specializing in React, Next.js, and TypeScript. Building high-quality, performant web applications with clean, scalable code. Based in Pune, India.`,
    keywords: [
        "isdevs.cv",
        "isdevs",
        PROFILE_NAME,
        "Frontend Engineer",
        "Full Stack Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript",
        "Web Developer Pune",
        "Portfolio",
        "Software Engineer",
        "JavaScript Developer",
        "slogllykop",
    ],
    authors: [{ name: PROFILE_NAME, url: SITE_URL }],
    creator: PROFILE_NAME,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: PROFILE_NAME,
        title: `${PROFILE_NAME} - Frontend Engineer & Full Stack Developer`,
        description:
            "Results-driven Frontend Engineer specializing in React, Next.js, and TypeScript. Building high-quality, performant web applications.",
    },
    twitter: {
        card: "summary_large_image",
        title: `${PROFILE_NAME} - Frontend Engineer & Full Stack Developer`,
        description:
            "Results-driven Frontend Engineer specializing in React, Next.js, and TypeScript. Building high-quality, performant web applications.",
    },
    icons: {
        icon: [
            { url: "/icon.png", sizes: "16x16", type: "image/png" },
            { url: "/icon.png", sizes: "32x32", type: "image/png" },
            { url: "/icon.png", sizes: "96x96", type: "image/png" },
            { url: "/icon.png", sizes: "192x192", type: "image/png" },
        ],
        apple: [
            { url: "/apple-icon.png", sizes: "57x57", type: "image/png" },
            { url: "/apple-icon.png", sizes: "60x60", type: "image/png" },
            { url: "/apple-icon.png", sizes: "72x72", type: "image/png" },
            { url: "/apple-icon.png", sizes: "76x76", type: "image/png" },
            { url: "/apple-icon.png", sizes: "114x114", type: "image/png" },
            { url: "/apple-icon.png", sizes: "120x120", type: "image/png" },
            { url: "/apple-icon.png", sizes: "144x144", type: "image/png" },
            { url: "/apple-icon.png", sizes: "152x152", type: "image/png" },
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
    },
    alternates: {
        canonical: SITE_URL,
    },
};

import { AudioFeedback } from "@/components/audio-feedback";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: PROFILE_NAME,
                alternateName: CONTACT_EMAIL.split("@")[1],
                description: `Personal portfolio of ${PROFILE_NAME} - Frontend Engineer & Full Stack Developer`,
                publisher: { "@id": `${SITE_URL}/#person` },
            },
            {
                "@type": "Person",
                "@id": `${SITE_URL}/#person`,
                name: PROFILE_NAME,
                url: SITE_URL,
                jobTitle: "Frontend Engineer",
                description:
                    "Results-driven Frontend Engineer with experience in developing high-quality web applications utilizing JavaScript/TypeScript and frameworks such as React and Next.js.",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pune",
                    addressCountry: "IN",
                },
                sameAs: [
                    "https://www.linkedin.com/in/indraneel-sinare",
                    "https://github.com/Slogllykop",
                ],
                knowsAbout: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Node.js",
                    "PostgreSQL",
                    "Supabase",
                    "Git",
                    "Docker",
                    "Frontend Development",
                    "Full Stack Development",
                ],
            },
            {
                "@type": "SiteNavigationElement",
                "@id": `${SITE_URL}/#navigation`,
                name: "Primary Navigation",
                url: SITE_URL,
                hasPart: [
                    {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/#home`,
                        name: "Home",
                        url: SITE_URL,
                    },
                    {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/projects/#webpage`,
                        name: "Projects",
                        url: `${SITE_URL}/projects`,
                    },
                    {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/jobs/#webpage`,
                        name: "Work History",
                        url: `${SITE_URL}/jobs`,
                    },
                    {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/skills/#webpage`,
                        name: "Skills",
                        url: `${SITE_URL}/skills`,
                    },
                    {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/blogs/#webpage`,
                        name: "Blogs",
                        url: `${SITE_URL}/blogs`,
                    },
                    {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/contact/#webpage`,
                        name: "Contact",
                        url: `${SITE_URL}/contact`,
                    },
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires dangerouslySetInnerHTML
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                lora.variable,
                openSans.variable,
            )}
            suppressHydrationWarning
        >
            <head>
                <JsonLd />
            </head>
            <body className="relative flex min-h-dvh flex-col font-open-sans">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="pointer-events-none fixed inset-0 z-50 bg-[url('/paper-transparent.png')] bg-repeat opacity-50 mix-blend-multiply dark:opacity-0" />
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
                    >
                        Skip to content
                    </a>
                    <AudioFeedback />
                    <Cursor />
                    <Header />
                    <main
                        id="main-content"
                        className="mx-auto w-full max-w-4xl flex-1 scroll-mt-20 px-6 py-12"
                    >
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
