"use client";

import { useEffect, useRef } from "react";

/**
 * AudioFeedback component provides global audio response for hover events
 * on interactive elements like cards, buttons, and links.
 */
export function AudioFeedback() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Preload the tap sound
        const audio = new Audio("/tap.wav");
        audio.preload = "auto";
        audioRef.current = audio;

        const playSound = () => {
            if (audioRef.current) {
                // Clone the node or reset time to allow rapid playback
                const sound = audioRef.current.cloneNode() as HTMLAudioElement;
                sound.play().catch(() => {
                    // Ignore errors (e.g., user hasn't interacted with the page yet)
                });
            }
        };

        let lastElement: HTMLElement | null = null;

        const handleMouseOver = (e: MouseEvent) => {
            // Find the closest interactive ancestor
            const target = (e.target as HTMLElement).closest(
                'a:not(.blog-card):not(.project-card), button, [role="button"], .group:not(.blog-card):not(.project-card), .bg-card, .skill-card',
            ) as HTMLElement;

            // Only play if we've entered a new interactive element and it's not the same as before
            if (target && target !== lastElement) {
                playSound();
                lastElement = target;
            } else if (!target) {
                lastElement = null;
            }
        };

        // Use mouseover for event delegation
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            document.removeEventListener("mouseover", handleMouseOver);
            if (audioRef.current) {
                audioRef.current = null;
            }
        };
    }, []);

    return null;
}
