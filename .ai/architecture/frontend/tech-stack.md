---
last-updated: 2026-04-12
---

# Frontend Tech Stack & Directory Structure

## Overview

This is a small one-page landing page built as a learning project. It is meant for practicing semantic HTML, SCSS, Bootstrap, responsive layout work, and a small amount of TypeScript for lightweight interactions.

The page uses a handcrafted Ukrainian embroidery theme with sections such as About us, Our collection, Customer order, and Testimonials.

## Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Build tool | Vite | Local development and production builds |
| Language | TypeScript | Small UI behavior and build checks |
| Markup | HTML | Semantic page structure |
| Styling | SCSS | Project-specific layout and section styles |
| UI framework | Bootstrap 5 | Grid, layout, typography, utilities, and components |
| Icon set | Font Awesome | Icons |
| Fonts | Google Fonts | External typography |
| Deployment | GitHub Actions / GitHub Pages | Static deployment |

## Directory Structure

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
Main HTML document for the landing page.

### `src/main.ts`
TypeScript entry point. Keep it short and use it only to initialize feature scripts.

### `src/scripts/`
Small UI behavior modules, such as mobile menu or smooth scrolling.

### `src/styles/main.scss`
Main SCSS entry file. It imports folder-level style indexes.

### `src/styles/abstracts/`
Variables, functions, mixins, and other SCSS helpers.

### `src/styles/vendors/`
Bootstrap and Font Awesome setup.

### `src/styles/base/`
Global foundations such as reset, typography, and page defaults.

### `src/styles/layout/`
Major page sections and structural styles.

### `src/styles/components/`
Reusable UI pieces not tied to one section.

### `src/styles/pages/`
Page-specific styles.

## Styling Approach

- Use Bootstrap first for layout and common UI patterns.
- Add custom styles only when needed.
- Prefix project-specific classes with `y-`.
- Prefer flat, readable selectors.
- Keep naming clear and section-oriented.

## Responsive Design

- Prefer Bootstrap grid and utilities first.
- Add custom media queries only when needed.
- Keep mobile-first thinking.

## TypeScript Usage

TypeScript is used only for small interactions such as:

- opening and closing the mobile menu
- smooth scrolling

## Deployment

The repository includes a GitHub Actions workflow for static deployment to GitHub Pages.

## Working Principles

- Keep the project simple and educational.
- Prefer semantic HTML.
- Keep SCSS organized by responsibility.
- Keep TypeScript focused on interactions.
- Prefer readability over complexity.
