"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
    const [mounted, setMounted] = useState(false);

    // Smooth trailing effect using motion springs
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <motion.div
            className="-translate-x-1/2 -translate-y-1/2 opactiy-80 pointer-events-none fixed top-0 left-0 z-100 hidden size-6 rounded-full border border-black sm:block dark:border-white"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        />
    );
}
