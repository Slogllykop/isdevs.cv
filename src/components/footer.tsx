import { CONTACT_EMAIL, PROFILE_NAME } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="mt-auto py-8">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
                <p className="text-foreground/50 text-sm">
                    © {new Date().getFullYear()} {PROFILE_NAME}. All rights
                    reserved.
                </p>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-foreground/50 text-sm transition-colors hover:text-foreground"
                >
                    {CONTACT_EMAIL}
                </a>
            </div>
        </footer>
    );
}
