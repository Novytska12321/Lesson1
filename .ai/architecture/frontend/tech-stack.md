---
last-updated: 2026-04-08
---

# Frontend Tech Stack & Directory Structure

## Overview

This is a small static one-page landing page created as a learning project. The project is meant to practice semantic HTML, CSS/SCSS, responsive web design, Bootstrap usage, and a small amount of TypeScript for simple page interactions.

The page presents a handcrafted Ukrainian embroidery theme with a short intro and section-based content such as About us, Our collection, Customer order, and Testimonials.

## Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Build tool | Vite | Fast local development and production build |
| Language | TypeScript | Small UI behavior and interaction logic |
| Markup | HTML | Semantic page structure |
| Styling | SCSS | Project-specific layout and section styles |
| UI framework | Bootstrap 5 | Grid, layout, typography, utilities, and components |
| Icon set | Font Awesome | Decorative and functional icons |
| Fonts | Google Fonts | External typography source |
| Deployment | GitHub Actions / GitHub Pages | Static site deployment |

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
The single HTML document for the landing page. It contains the page structure and links to external assets such as Google Fonts.

### `src/main.ts`
The main TypeScript entry file for UI behavior. It should stay small and only initialize feature-specific scripts.

### `src/scripts/`
Small UI behavior modules.

- `mobile-menu.ts` — mobile navigation open/close logic
- `smooth-scroll.ts` — smooth scrolling behavior for in-page navigation

Each script should expose one clear initialization function.

### `src/styles/main.scss`
The main SCSS entry file. It imports project styles, vendor styles, and the SCSS folders used by the landing page.

### `src/styles/abstracts/`
Configuration and SCSS helper layer:
- variables
- functions
- mixins
- shared style tools

### `src/styles/vendors/`
Third-party style integration layer:
- Bootstrap import setup
- Font Awesome import setup
- vendor-specific configuration and overrides

### `src/styles/base/`
Global foundations:
- reset
- typography
- global page-level defaults

These files may remain small when Bootstrap already provides the needed base styling.

### `src/styles/layout/`
Major page sections and structural styles:
- navbar
- hero
- about us
- testimonials
- collection
- large image block
- order
- footer

### `src/styles/components/`
Reusable UI pieces that are not tied to one specific page section:
- buttons
- shared interface elements

### `src/styles/pages/`
Page-specific styles.

This folder is kept even if it starts small, because it is useful for educational structure and future growth. For now, it mainly holds styles specific to the home page.

## Styling Approach

### Bootstrap usage
Bootstrap is used as much as possible for:
- containers
- grid layout
- typography
- forms
- buttons
- navs
- helpers and utility classes

The project does **not** override Bootstrap globally. When custom appearance or behavior is needed, a separate project class with the `y-` prefix is used instead.

### Custom class naming
Project-specific classes use the `y-` prefix to clearly distinguish them from Bootstrap and Font Awesome classes.

### Selector style
Use flat, readable selectors whenever possible.

Prefer:
- `.hero`
- `.hero-title`
- `.hero-lead-text`
- `.hero-btn`

Avoid:
- deeply nested descendant selectors
- styling that depends on long HTML chains
- unnecessary selector complexity

### BEM-inspired naming
Use a simplified, BEM-inspired naming style:
- clear
- flat
- consistent
- easy to scan

The goal is readability, not strict BEM ceremony.

## SCSS Organization

The SCSS structure is inspired by the `7-1` Sass pattern and is split by responsibility:

- `abstracts/` — configuration and helpers
- `vendors/` — third-party style entry points
- `base/` — global foundations
- `layout/` — page sections
- `components/` — reusable UI parts
- `pages/` — page-specific styles

This structure makes it easier to find where a style belongs.

## Variables

Keep shared styling values in `_variables.scss`.

Use it for:
- Bootstrap overrides
- custom design tokens
- base font family
- container widths
- section sizes
- spacing and layout constants
- reusable style values

## Bootstrap Overrides

- Prefer configuration over ad-hoc overrides.
- If Bootstrap variables need to change, do it in the SCSS configuration layer.
- Keep the override strategy explicit and easy to find.
- Do not patch Bootstrap styles directly in many places.

## Fonts

- Load external web fonts intentionally and use them as part of the global typography setup.
- Keep the base font family consistent with the font configuration defined in `_variables.scss`.
- Treat font loading as part of the project styling setup, not as a one-off page hack.

## Icons

- Use Font Awesome for icons.
- Keep icon usage simple and consistent.
- Use icons where they support usability or visual clarity, not as decoration everywhere.

## Responsive Design

- Use Bootstrap grid and utilities first for responsiveness.
- Add custom media queries only when needed.
- Keep mobile-first thinking.
- Make section-level styles responsive without overcomplicating the CSS.

## TypeScript Usage

TypeScript is used only for small interactive features such as:
- opening and closing the mobile menu
- smooth scrolling or similar lightweight behavior

The project does not rely on a large client-side application architecture.

## Deployment

The repository includes a GitHub Actions workflow for static deployment to GitHub Pages. The workflow follows the standard Vite static hosting approach.

## Working Principles

- Keep the project simple and educational.
- Prefer semantic HTML.
- Use Bootstrap first, then add custom `y-` classes only when needed.
- Keep SCSS organized by responsibility and section.
- Keep TypeScript small and focused on interactions.
- Prefer flat selectors and readable styles over complex nesting.
