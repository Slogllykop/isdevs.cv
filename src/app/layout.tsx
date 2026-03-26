import type { Metadata } from "next";
import { Inter, Lora, Open_Sans } from "next/font/google";
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
    title: "Indraneel Sinare - Portfolio",
    description: "Personal portfolio website of Indraneel Sinare",
};

import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
                "font-sans",
                inter.variable,
            )}
            suppressHydrationWarning
        >
            <body className="relative flex min-h-dvh flex-col font-sans">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="pointer-events-none fixed inset-0 z-50 bg-[url('/paper-transparent.png')] bg-repeat opacity-50 mix-blend-multiply dark:opacity-0" />
                    <Cursor />
                    <Header />
                    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
