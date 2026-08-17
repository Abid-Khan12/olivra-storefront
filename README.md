# Olivra

Olivra is a modern e-commerce storefront inspired by Sapphire, built to deliver a polished, animation-driven shopping experience for a fashion and apparel brand.

## Features

- **Scroll-aware navigation** — The header stays transparent over the hero on load, shifts to a muted background once the page is scrolled, and hides on scroll-down while reappearing on scroll-up for an unobtrusive browsing experience.
- **Hero carousel** — A full-bleed hero section with an auto-rotating slider, edge-to-edge background imagery, and centered title and subtitle overlays.
- **New arrivals section with carousel** — A horizontally scrollable showcase of the latest products, with slide counts that adapt responsively across breakpoints.
- **Sticky scroll-pinned section** — A scroll-driven showcase that transitions between categories as the user scrolls, rather than through manual swiping.
- **Gallery section** — A curated visual gallery highlighting brand imagery and lookbook content.
- **Trending section with carousel** — A product carousel for trending items, featuring a hover-reveal panel with size selection and quick add-to-bag actions.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui
- Motion (Framer Motion)

## Getting Started

Follow the steps below to get a local copy up and running.

### Prerequisites

- Node.js (v18 or later recommended)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/olivra.git
```

### 2. Move into the project directory

```bash
cd olivra
```

### 3. Install dependencies

This project is built and managed with **pnpm**. If you have pnpm installed, run:

```bash
pnpm install
```

#### Using npm instead of pnpm

If you'd rather use npm, switch package managers cleanly with these steps:

1. Remove the pnpm lockfile so it doesn't conflict with npm:
   ```bash
   rm pnpm-lock.yaml
   ```
2. Install dependencies with npm — this generates a fresh `package-lock.json`:
   ```bash
   npm install
   ```
3. From here on, use `npm run <script>` in place of `pnpm <script>` for every command below.

### 4. Run the development server

```bash
pnpm dev
```

Or, if using npm:

```bash
npm run dev
```

### 5. Open the app

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## License

This project is for educational and portfolio purposes only, built as a clone for practice.
