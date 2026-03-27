"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
    const [mounted, setMounted] = useState(false);

    // Smooth trailing effect using motion springs
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const scale = useMotionValue(1);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    const cursorScale = useSpring(scale, springConfig);

    useEffect(() => {
        setMounted(true);
        let timeoutId: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Increase radius/scale during movement
            scale.set(2);

            // Reset scale when movement stops
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                scale.set(1);
            }, 100);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, [mouseX, mouseY, scale]);

    if (!mounted) return null;

    return (
        <motion.div
            className="-translate-x-1/2 -translate-y-1/2 pointer-events-none fixed top-0 left-0 z-100 hidden size-6 rounded-full border border-white opacity-80 mix-blend-difference sm:block"
            aria-hidden="true"
            style={{
                x: cursorX,
                y: cursorY,
                scale: cursorScale,
            }}
        />
    );
}
