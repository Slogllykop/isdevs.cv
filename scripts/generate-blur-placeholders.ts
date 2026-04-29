/**
 * generate-blur-placeholders.ts
 *
 * Generates tiny (~20px wide) blurred WebP placeholder images
 * for every source image in public/ that is used by the site.
 *
 * Output: public/blur/<filename>.webp
 *
 * Run: pnpm generate:blur
 */

import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { basename, extname, resolve } from "node:path";
import sharp from "sharp";

const PUBLIC = resolve("public");
const OUT = resolve(PUBLIC, "blur");

// Configuration
const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".avif"];
const EXCLUDED_FILES = ["paper-transparent.png"];

if (!existsSync(OUT)) {
    mkdirSync(OUT, { recursive: true });
}

async function generate(): Promise<void> {
    // Automatically find all images in public directory
    const files = readdirSync(PUBLIC).filter((file) => {
        const ext = extname(file).toLowerCase();
        return (
            ALLOWED_EXTENSIONS.includes(ext) && !EXCLUDED_FILES.includes(file)
        );
    });

    if (files.length === 0) {
        console.log("No images found in public directory.");
        return;
    }

    console.log(`Found ${files.length} images. Generating placeholders...\n`);

    for (const file of files) {
        const input = resolve(PUBLIC, file);
        const name = basename(file, extname(file));
        const output = resolve(OUT, `${name}.webp`);

        try {
            await sharp(input)
                .resize(20)
                .blur(3)
                .webp({ quality: 20 })
                .toFile(output);

            console.log(`✓ ${file} → blur/${name}.webp`);
        } catch (error) {
            console.error(`✗ Error processing ${file}:`, error);
        }
    }

    console.log("\nDone — blur placeholders generated.");
}

generate();
