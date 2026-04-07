---
last-updated: 2026-04-06
---

# Frontend Tech Stack & Directory Layout

## Overview

This is a small static one-page landing page built as a learning project. The goal of the project is to practice semantic HTML, CSS/SCSS, responsive layout techniques, Bootstrap usage, and a small amount of TypeScript for simple interactions such as the mobile menu and smooth scrolling.

The page presents a handcrafted Ukrainian embroidery theme with a short introductory hero section and section-based content such as About us, Our collection, Customer order, and Testimonials.

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
| Deployment | GitHub Pages workflow | Static site deployment from GitHub Actions |

## Directory Structure

The project is intentionally simple and organized around a single page.

```text
Lesson1/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.ts
    ├── styles.scss
    ├── _variables.scss
    ├── _navbar.scss
    ├── _hero.scss
    ├── _about-us.scss
    ├── _our-collection.scss
    ├── _order.scss
    ├── _testimonials.scss
    ├── _footer.scss
    ├── _buttons.scss
    └── _big-img.scss
```

## File Roles

### `index.html`

The main document for the landing page. It contains the page structure and links to external assets such as Google Fonts.

### `src/main.ts`

The main TypeScript entry file for UI behavior. It should stay small and only coordinate interaction logic by importing feature-specific scripts.

### `src/styles.scss`

The main SCSS entry file. It imports Bootstrap, project variables, vendor styles, and the project-specific partials.

### `src/_variables.scss`

Central configuration file for SCSS variables. It stores:
* Bootstrap overrides
* project-specific design variables
* shared values such as sizes, spacing, and typography settings

### Section and component partials

The rest of the SCSS files represent page sections or reusable styling groups:
* header
* navigation
* hero area
* about section
* collection section
* order section
* testimonials
* footer
* buttons

### `public/`

Static assets that are served as-is, such as images and icons.

## Styling Approach

Styling is based on a combination of Bootstrap and custom SCSS.

### Bootstrap usage

Bootstrap is used as much as possible for:
* containers
* grid layout
* typography
* buttons
* navs
* forms
* helpers
* utility classes

The project does not override Bootstrap styles globally. Instead, when custom behavior or appearance is needed, a separate project-specific class is created with the `y-` prefix.

### Custom class naming

Project-specific classes use the `y-` prefix to clearly distinguish them from Bootstrap and Font Awesome classes.

### SCSS organization

The SCSS codebase is structured as a layered set of partials:
* variables and configuration
* vendor imports
* base styles
* layout sections
* reusable components

The project is intended to evolve toward a `7-1`-style Sass structure, even if the current implementation is still compact.

## TypeScript Usage

TypeScript is used only for small interactive features:
* opening and closing the mobile menu
* smooth scrolling or similar lightweight behavior

The project does not rely on a large client-side application architecture.

## External Assets

### Google Fonts

The page loads a web font from Google Fonts and uses it as the base font family.

### Font Awesome

Font Awesome provides icons used in buttons and decorative UI elements.

## Deployment

The repository includes a GitHub Actions workflow for static deployment to GitHub Pages. The workflow follows the standard Vite static hosting approach.

## Working Principles

* Keep the project simple and educational.
* Prefer semantic HTML.
* Use Bootstrap first, then add custom y- classes only when needed.
* Keep SCSS organized by section and responsibility.
* Keep TypeScript small and focused on interactions.
