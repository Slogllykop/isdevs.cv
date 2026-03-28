# isdevs.cv | Personal Portfolio

A professional, state-of-the-art portfolio website for **Indraneel Sinare**, architected with a focus on performance, scalability, and premium aesthetics. This repository serves as a showcase of advanced frontend engineering practices using the latest React and Next.js ecosystem.

## 🛠️ Technology Stack

This project is built using a bleeding-edge stack to ensure maximum efficiency and a superior developer experience:

- **Core**: [Next.js 16 (App Router)](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), [React 19 (React Compiler)](https://react.dev).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) utilizing inline `@theme` directives and **OKLCH** color syntax.
- **Typography**: [Google Fonts](https://fonts.google.com) (**Lora** for headings, **Open Sans** for body text).
- **Icons**: [Tabler Icons](https://tabler.io/icons) (`@tabler/icons-react`).
- **Animation**: [Framer Motion](https://motion.dev) (`motion/react`) for fluid micro-interactions.
- **Linting & Formatting**: [Biome.js](https://biomejs.dev) for strict, high-performance code quality checks.
- **Package Manager**: [pnpm](https://pnpm.io).

## 🎨 Design Philosophy

Inspired by minimalist and high-end digital agency aesthetics:

- **Monochrome Elegance**: A strict monochrome color palette using `oklch` for precise color control.
- **Subtle Texture**: A light theme featuring a paper grain overlay (`/public/paper-transparent.png`) for a premium, tactile feel.
- **Dynamic Interactions**: Graceful transitions using the View Transitions API and Framer Motion, including a custom cursor dot and radial mask theme toggling.
- **Responsive & Lightweight**: Optimized for all viewports using `rem`/`em` units and `dvh` for layout consistency.

## 🏗️ Architecture & Data Standards

- **React Server Components (RSC)**: Prioritizing server-side rendering to push client-side boundaries to the edges.
- **Single Source of Truth**: All static data (projects, work history, skills, contact info) is centralized in `src/lib/constants.ts` for ease of maintenance.
- **Incremental Static Regeneration (ISR)**: The `/blogs` route utilizes high-performance caching and revalidation.

## 🚀 Getting Started

### Prerequisites

- Node.js (Late LTS)
- pnpm installed globally

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Slogllykop/isdevs.cv.git
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

### Code Quality & Formatting

This project enforces strict linting and formatting via Biome. Before committing, ensure your code matches the project standards:

```bash
pnpm lint
pnpm format
```

## 🏗️ Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable, atomic UI components.
- `src/lib/`: Utility functions and the `constants.ts` data file.
- `public/`: Static assets including the signature paper grain overlay.

---

Built with precision by [Indraneel Sinare](https://www.isdevs.cv)
