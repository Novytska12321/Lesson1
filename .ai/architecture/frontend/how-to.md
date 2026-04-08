---
last-updated: 2026-04-08
---

# Frontend How-To Recipes

This file contains practical recipes for working on the landing page project. Use it when you need to add a new section, extend the styling, wire a small interaction, or keep the file structure consistent.

## Add a New Page Section

Use this when you want to add a new section to the landing page, such as an extra informational block or a new content area.

### Steps

1. Add the semantic HTML structure in `index.html`.
2. Create a matching SCSS partial in `src/styles/layout/`.
3. Add a project-specific class with the `y-` prefix if the section needs custom styling.
4. Import the new layout partial from `src/styles/layout/_index.scss`.
5. Keep the section styling flat, readable, and focused on one responsibility.

### Notes

- Prefer Bootstrap layout classes for container, grid, spacing, and alignment.
- Use custom styles only for project-specific appearance.
- Keep the HTML easy to scan, even if the section combines Bootstrap and custom classes.

## Add or Update a Styled UI Element

Use this when you need a reusable visual element such as a button variant or a shared block of markup.

### Steps

1. Check whether the element belongs to `src/styles/components/` instead of a section file.
2. Add or update the component SCSS partial.
3. Use the `y-` prefix for custom project classes.
4. Keep the selector structure flat and avoid deep nesting.
5. Import the component partial from `src/styles/components/_index.scss`.

### Notes

- Reusable elements should not be tied to one page section unless they truly belong there.
- Prefer clear class names over overly clever selector chains.

## Add a Small UI Behavior Script

Use this when you need a lightweight interaction such as opening the mobile menu or enabling smooth scroll.

### Steps

1. Create a new file in `src/scripts/`.
2. Export a single initialization function named `init...`.
3. Keep the script focused on DOM behavior and event handling only.
4. Import and call the initializer from `src/main.ts`.
5. Make sure the script does not contain styling responsibilities.

### Notes

- Scripts should stay small and predictable.
- If a behavior grows larger, split it into separate modules rather than expanding one file indefinitely.

## Update the Main Script Entry Point

Use this when you change the way the page initializes scripts.

### Steps

1. Keep `src/main.ts` as the only TypeScript entry point.
2. Import the main stylesheet entry.
3. Import the feature scripts from `src/scripts/`.
4. Call the initializer functions after the DOM is ready.
5. Avoid putting feature logic directly in `main.ts`.

### Notes

- `main.ts` should coordinate initialization, not own business logic.
- Keep it short and easy to read.

## Add or Update SCSS Variables

Use this when you need to change shared values such as colors, sizes, typography, or Bootstrap overrides.

### Steps

1. Update `src/styles/abstracts/_variables.scss`.
2. Keep Bootstrap overrides and project design tokens in the same configuration layer.
3. Reuse variables across multiple sections instead of duplicating values.
4. If needed, add helper functions or mixins to the `abstracts/` layer.
5. Keep style configuration separate from generated CSS rules.

### Notes

- Put shared values in one place.
- Avoid scattering magic numbers across unrelated SCSS files.

## Add Vendor Styles

Use this when you need to integrate Bootstrap or Font Awesome into the SCSS structure.

### Steps

1. Put vendor setup files in `src/styles/vendors/`.
2. Keep Bootstrap-related imports and configuration in the vendor layer.
3. Keep Font Awesome import setup isolated in its own vendor partial.
4. Import the vendor folder from the main SCSS entry point through folder indexes.
5. Do not spread vendor configuration across layout or component files.

### Notes

- Vendor code should stay clearly separated from project-specific styles.
- Keep the vendor layer easy to identify and replace if needed.

## Add Global Base Styles

Use this when you need resets, typography defaults, or other page-wide foundational styles.

### Steps

1. Put the styles in `src/styles/base/`.
2. Keep the content small and focused on global foundations.
3. Avoid section-specific styling here.
4. Import the base folder through `src/styles/base/_index.scss`.

### Notes

- Base styles should support the page, not define individual sections.
- If Bootstrap already handles a concern well, do not duplicate it.

## Organize Styles by Folder Indexes

Use this when you add or move SCSS files.

### Steps

1. Keep one `_index.scss` file in every folder under `src/styles/`.
2. Import local partials only inside that folder’s `_index.scss`.
3. Make `src/styles/main.scss` the single top-level SCSS entry point.
4. Do not import individual partials directly from `main.scss` if the folder index can do it.
5. Keep imports grouped by responsibility.

### Notes

- Folder indexes keep the structure easy to navigate.
- The top-level entry file should remain clean and short.

## Add a New Font or Icon Asset

Use this when you need typography or icon support for the landing page.

### Steps

1. Add the font link or icon setup in the appropriate HTML or vendor style entry.
2. Keep Google Fonts usage intentional and centralized.
3. Use Font Awesome icons where they improve clarity or usability.
4. Reflect font choices in the shared styling variables.

### Notes

- Typography and icon decisions are part of the design system of the page.
- Keep them consistent across the landing page.

## Keep Styling Readable

Use this as a general rule when editing any HTML or SCSS file.

### Principles

- Prefer semantic HTML first.
- Prefer Bootstrap classes first for layout and common UI patterns.
- Use project-specific classes only when custom styling is needed.
- Keep selectors flat and easy to understand.
- Use nesting sparingly.
- Keep each file focused on a single responsibility.
- Make future edits obvious to the next person reading the code.

## Checklist Before You Edit

- Is the change layout, component, base, or page-specific?
- Can Bootstrap already solve part of the problem?
- Does the custom style need a `y-` class?
- Should this live in `abstracts/`, `vendors/`, `base/`, `layout/`, `components/`, or `pages/`?
- Can the script stay in `src/scripts/` and be initialized from `main.ts`?
- Will the result stay simple enough for a learning project?

## Notes for AI Assistants

- Prefer the existing folder-based architecture.
- Keep TypeScript small and behavior-only.
- Keep SCSS organized by responsibility.
- Keep the landing page easy to understand and maintain.
- When in doubt, choose the simplest structure that still stays clean.