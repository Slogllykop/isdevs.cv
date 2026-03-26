import { Hero } from "@/components/hero";

export default function Home() {
    return (
        <div className="flex flex-col gap-24">
            <Hero />
            {/* Other sections could go here */}
        </div>
    );
}
