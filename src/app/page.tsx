import Image from "next/image";
import { GREETING, PROFILE_IMAGE, PROFILE_NAME } from "@/lib/constants";

export default function Home() {
    return (
        <div className="flex min-h-[60vh] flex-col items-start justify-center gap-8">
            <div className="relative size-32 overflow-hidden rounded-full border border-foreground/10 shadow-sm ring-4 ring-background sm:size-40">
                <Image
                    src={PROFILE_IMAGE}
                    alt={PROFILE_NAME}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
                    {PROFILE_NAME}
                </h1>
                <p className="max-w-2xl font-medium text-foreground/80 text-lg leading-relaxed sm:text-xl md:leading-relaxed">
                    {GREETING}
                </p>
            </div>
        </div>
    );
}
