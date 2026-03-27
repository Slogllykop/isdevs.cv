"use client";

import { useEffect, useRef } from "react";

/**
 * AudioFeedback component provides global audio response for hover events
 * on interactive elements like cards, buttons, and links.
 */
export function AudioFeedback() {
    const audioCtxRef = useRef<AudioContext | null>(null);
    const audioBufferRef = useRef<AudioBuffer | null>(null);

    useEffect(() => {
        // Initialize AudioContext only on the client
        const AudioContextClass =
            // biome-ignore lint/suspicious/noExplicitAny: Required for Safari support
            window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass && !audioCtxRef.current) {
            audioCtxRef.current = new AudioContextClass();
        }

        // Fetch and decode the audio file once to avoid re-requests
        const loadAudio = async () => {
            try {
                const response = await fetch("/tap.wav");
                const arrayBuffer = await response.arrayBuffer();
                if (audioCtxRef.current) {
                    const audioBuffer =
                        await audioCtxRef.current.decodeAudioData(arrayBuffer);
                    audioBufferRef.current = audioBuffer;
                }
            } catch (error) {
                console.error("Failed to load tap sound:", error);
            }
        };

        if (!audioBufferRef.current) {
            loadAudio();
        }

        const playSound = () => {
            if (audioCtxRef.current && audioBufferRef.current) {
                // Resume AudioContext if suspended (browser auto-play policy requires user interaction)
                if (audioCtxRef.current.state === "suspended") {
                    audioCtxRef.current.resume().catch(() => {});
                }
                const source = audioCtxRef.current.createBufferSource();
                source.buffer = audioBufferRef.current;
                source.connect(audioCtxRef.current.destination);
                source.start(0);
            }
        };

        let lastElement: HTMLElement | null = null;

        const handleInteraction = (e: Event) => {
            // Find the closest interactive ancestor
            const target = (e.target as HTMLElement).closest(
                'a:not(.blog-card):not(.project-card), button, [role="button"], .group:not(.blog-card):not(.project-card), .bg-card, .skill-card, input, select, textarea',
            ) as HTMLElement;

            // Only play if we've entered a new interactive element and it's not the same as before
            if (target && target !== lastElement) {
                playSound();
                lastElement = target;
            } else if (!target) {
                lastElement = null;
            }
        };

        // Use mouseover and focusin for event delegation
        document.addEventListener("mouseover", handleInteraction);
        document.addEventListener("focusin", handleInteraction);

        return () => {
            document.removeEventListener("mouseover", handleInteraction);
            document.removeEventListener("focusin", handleInteraction);
            if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
                audioCtxRef.current.close().catch(() => {});
                audioCtxRef.current = null;
            }
            audioBufferRef.current = null;
        };
    }, []);

    return null;
}
