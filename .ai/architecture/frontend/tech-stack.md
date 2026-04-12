---
last-updated: 2026-04-12
---

# Frontend Tech Stack & Directory Structure

## Overview

This is a small static one-page landing page created as a learning project. The goal is to practice semantic HTML, SCSS, responsive layout work, Bootstrap usage, and a small amount of TypeScript for lightweight interactions.

The page presents a handcrafted Ukrainian embroidery theme with sections such as About us, Our collection, Customer order, and Testimonials.

## Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Build tool | Vite | Local development and production builds |
| Language | TypeScript | Small UI behavior and build-time checks |
| Markup | HTML | Semantic page structure |
| Styling | SCSS | Project-specific layout and section styles |
| UI framework | Bootstrap 5 | Grid, layout, typography, utilities, and components |
| Icon set | Font Awesome | Icons |
| Fonts | Google Fonts | External typography |
| Deployment | GitHub Actions / GitHub Pages | Static deployment |

## Directory Structure

The project is intentionally compact and centered around a single page.

```text
Lesson1/
├── index.html
├── package.json
├── vite.config.js
├── tsconfig.json
├── package-lock.json
├── public/
└── src/
    ├── main.ts
    ├── scripts/
    └── styles/
```

## File Roles

### `index.html`
The main HTML document. It contains the page structure and external asset links.

### `src/main.ts`
The TypeScript entry point. Keep it small and use it only to initialize feature scripts.

### `src/scripts/`
Small UI behavior modules, for example:
- mobile menu logic
- smooth scrolling

Each module should expose one clear initialization function.

### `src/styles/main.scss`
The main SCSS entry file. It imports the folder-level style indexes.

### `src/styles/abstracts/`
Configuration and helpers:
- variables
- functions
- mixins

### `src/styles/vendors/`
Third-party style setup:
- Bootstrap import/configuration
- Font Awesome import/configuration

### `src/styles/base/`
Global foundations:
- reset
- typography
- page defaults

### `src/styles/layout/`
Major page sections and their structural styles.

### `src/styles/components/`
Reusable UI pieces not tied to one page section.

### `src/styles/pages/`
Page-specific styles.

## Styling Approach

- Use Bootstrap as much as possible for layout and common UI patterns.
- Add custom project styles only when Bootstrap is not enough.
- Prefix all project-specific classes with `y-`.
- Prefer flat, readable selectors over deep nesting.
- Use a simplified BEM-inspired style only when it improves clarity.

## Responsive Design

- Prefer Bootstrap grid and utilities first.
- Add custom media queries only when needed.
- Keep mobile-first thinking.
- Keep section styles responsive without overcomplicating the CSS.

## TypeScript Usage

TypeScript is used only for small interactions, such as:
- opening and closing the mobile menu
- smooth scrolling

The project does not use a large client-side application architecture.

## Deployment

The repository includes a GitHub Actions workflow for static deployment to GitHub Pages.

## Working Principles

- Keep the project simple and educational.
- Prefer semantic HTML.
- Use Bootstrap first, then add custom `y-` classes only when needed.
- Keep SCSS organized by responsibility.
- Keep TypeScript focused on interactions.
- Prefer readability over complexity.
