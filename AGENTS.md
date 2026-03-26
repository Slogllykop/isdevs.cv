# AGENTS.md

This document serves as a guide for future AI coding agents or human developers working on this repository.

## 🤖 AI Agent Instructions

When operating within this repository, prioritize the following architecture and design guidelines. Always adopt the persona of a **Senior Frontend Developer** with 10+ years of Next.js experience. Ensure code is DRY, modular, SOLID, clean, and highly scalable.

### 🛠️ Technology Stack
- **Core**: Next.js 16 (App Router), TypeScript, React Compiler.
- **Styling**: Tailwind CSS v4 using inline `@theme` directives without extensive `tailwind.config.js`. You MUST ONLY use `oklch` for colors.
- **Typography**: Google Fonts via `next/font/google`: **Lora** (Serif) for headings, **Open Sans** (Sans) for body text.
- **Icons**: Tabler icons strictly (`@tabler/icons-react`).
- **Animation**: Framer Motion (`motion/react`) for micro-interactions and the View Transitions API for theme toggling.
- **Linting & Formatting**: Biome.js exclusively. Run `pnpm biome check --write ./src` after generating code.
- **Package Manager**: `pnpm`.

### 🎨 Design Philosophy & Aesthetics
- **Color Scheme**: Strict monochrome with minimal usage of off-whites and dark grays (`oklch` syntax only). The light theme has a subtle paper grain overlay (`public/paper-transparent.png`).
- **Minimalism**: Avoid thick borders, heavy drop-shadows, and unnecessary visual noise. Keep UI components breathable with intentional white space.
- **Typography**: Maintain clear hierarchy using Lora for dramatic display text and Open Sans for readable body content.
- **Sizing**: **Never use hardcoded pixel values**. Always use `rem` or `em` units for padding, margins, and typography. Use `dvh` (dynamic viewport height) over `100vh` or `screen`.
- **Interactions**: Incorporate graceful, non-obtrusive micro-interactions that add a premium feel without bogging down usability. The theme toggle should utilize the `document.startViewTransition` API with a radial mask animation (circle grow). A custom cursor dot should gently trail the actual cursor.

### 🏗️ Architecture & Data Standards
- **Component Paradigm**: Default to React Server Components (RSC) unless interactivity (`useState`, `useEffect`, `motion`) or browser APIs are required (`"use client"`). Push client boundaries as far down the tree as possible.
- **Data Fetching Patterns**: Utilize caching and Incremental Static Regeneration (ISR). The `/blogs` route must fetch from `https://blog.isdevs.cv/api/v1/get-blogs` with a revalidation time of 24 hours (`86400` seconds).
- **Single Source of Truth**: All dummy and static application data (projects, work history, skills, contact information) MUST be located in `src/lib/constants.ts`. Do not hardcode data arrays directly within the page or component files.

### ✅ Formatting Rules
If you create or edit files, be sure to run `pnpm biome check --write ./src` to handle auto-sorting of Tailwind classes, fixing unused TypeScript imports, and maintaining strict lint rules. Do not use Prettier or ESLint, they are not configured.
