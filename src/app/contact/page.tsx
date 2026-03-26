import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
    title: "Contact | Indraneel Sinare",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-[50vh] flex-col items-start justify-center gap-8">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
                    Let's Connect
                </h1>
                <p className="max-w-2xl font-medium text-foreground/80 text-lg leading-relaxed sm:text-xl">
                    I'm currently looking for new opportunities. Whether you
                    have a question or just want to say hi, I'll try my best to
                    get back to you!
                </p>
            </div>

            <div className="mt-4">
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center rounded-sm border border-foreground/20 bg-foreground/5 px-8 py-4 font-semibold text-lg transition-colors hover:bg-foreground hover:text-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground"
                >
                    {CONTACT_EMAIL}
                </a>
            </div>
        </div>
    );
}
