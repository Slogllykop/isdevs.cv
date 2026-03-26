import { ContactEmail } from "@/components/ui/contact-email";

export const metadata = {
    title: "Contact | Indraneel Sinare",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-[50vh] flex-col items-start justify-center gap-12">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
                    Let's Connect
                </h1>
                <p className="max-w-2xl font-medium text-foreground/80 text-lg leading-relaxed sm:text-xl">
                    I'm currently looking for new opportunities. Whether you
                    have a question or just want to say hi, I'll try my best to
                    get back to you!
                </p>
            </div>

            <ContactEmail />
        </div>
    );
}
