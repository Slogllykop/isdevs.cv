"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "./skiper26";

const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Jobs", path: "/jobs" },
    { name: "Skills", path: "/skills" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-md">
            <div className="mx-auto flex h-24 max-w-4xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="whitespace-nowrap font-medium font-serif text-2xl tracking-tight transition-opacity hover:opacity-80"
                >
                    Indraneel.
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">
                    <nav className="hide-scrollbar flex items-center gap-4 overflow-x-auto font-medium text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={clsx(
                                    "whitespace-nowrap transition-colors hover:text-foreground",
                                    pathname === item.path
                                        ? "text-foreground"
                                        : "text-foreground/50",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="ml-2">
                        <ThemeToggleButton variant="circle" start="center" />
                    </div>
                </div>
            </div>
        </header>
    );
}
