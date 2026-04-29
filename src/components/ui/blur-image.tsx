"use client";

import type { ImageProps } from "next/image";
import Image from "next/image";
import { useCallback, useState } from "react";

/**
 * A lazy-loading image wrapper that shows a blurry low-quality placeholder,
 * a subtle pulse animation while loading, and a smooth fade-in once loaded.
 *
 * Respects `prefers-reduced-motion` via CSS — pulse and fade are disabled
 * automatically through the global reduced-motion reset in globals.css.
 *
 * Usage:
 * ```tsx
 * <BlurImage
 *   src="/photo.png"
 *   alt="Photo"
 *   fill
 *   blurSrc="/photo-blur.webp"       // tiny ~20px blurred placeholder
 *   containerClassName="h-80 w-64"    // sizing goes on the wrapper
 * />
 * ```
 */

type BlurImageProps = ImageProps & {
    /** Tiny blurred placeholder image URL (ideally < 1KB, ~20px wide) */
    blurSrc: string;
    /** Extra classes for the outer wrapper div */
    containerClassName?: string;
    /** Override background-size for the blur placeholder (default: "cover") */
    blurSize?: string;
    /** Override background-position for the blur placeholder (default: "center") */
    blurPosition?: string;
};

export function BlurImage({
    blurSrc,
    containerClassName = "",
    blurSize = "cover",
    blurPosition = "center",
    className = "",
    priority,
    ...imageProps
}: BlurImageProps) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    return (
        <div
            className={`blur-image-wrapper ${loaded ? "blur-image--loaded" : ""} ${containerClassName}`}
            style={{
                backgroundImage: `url(${blurSrc})`,
                backgroundSize: blurSize,
                backgroundPosition: blurPosition,
                backgroundRepeat: "no-repeat",
            }}
        >
            <Image
                {...imageProps}
                className={`blur-image-inner ${className}`}
                loading={priority ? undefined : "lazy"}
                priority={priority}
                onLoad={handleLoad}
            />
        </div>
    );
}
