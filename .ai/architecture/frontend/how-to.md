---
last-updated: 2026-04-12
---

# Frontend How-To Recipes

This file contains practical recipes for working on the landing page project.

## Add a New Page Section

1. Add semantic HTML in `index.html`.
2. Create a matching SCSS partial in `src/styles/layout/`.
3. Add a `y-` class if custom styling is needed.
4. Import the partial from `src/styles/layout/_index.scss`.

## Add or Update a Styled UI Element

1. Check whether the element belongs in `src/styles/components/`.
2. Add or update the component partial.
3. Use the `y-` prefix for project-specific classes.
4. Keep selectors flat.
5. Import the partial from `src/styles/components/_index.scss`.

## Add a Small UI Behavior Script

1. Create a file in `src/scripts/`.
2. Export one initialization function.
3. Keep the file focused on DOM behavior and events.
4. Import and call it from `src/main.ts`.

## Update the Main Script Entry Point

1. Keep `src/main.ts` as the only TypeScript entry point.
2. Import the main stylesheet entry.
3. Import feature scripts from `src/scripts/`.
4. Initialize scripts after the DOM is ready.

## Add or Update SCSS Variables

1. Update `src/styles/abstracts/_variables.scss`.
2. Keep Bootstrap overrides and design tokens there.
3. Reuse variables instead of repeating values.

## Add Vendor Styles

1. Put vendor setup files in `src/styles/vendors/`.
2. Keep Bootstrap setup there.
3. Keep Font Awesome setup there too.
4. Import vendor styles through folder indexes.

## Add Global Base Styles

1. Put the styles in `src/styles/base/`.
2. Keep them small and global.
3. Avoid section-specific styling here.

## Organize Styles by Folder Indexes

1. Keep one `_index.scss` file in each style folder.
2. Import local partials only inside that folder’s index.
3. Keep `src/styles/main.scss` as the only top-level SCSS entry point.

## Add a New Font or Icon Asset

1. Add the font or icon setup in the appropriate HTML or vendor entry.
2. Keep font usage intentional and centralized.
3. Use Font Awesome only where it improves clarity or usability.

## General Editing Rules

- Prefer semantic HTML first.
- Prefer Bootstrap first for layout and common UI patterns.
- Use project-specific classes only when custom styling is needed.
- Keep selectors flat and readable.
- Use nesting sparingly.
- Keep each file focused on one responsibility.

## Checklist Before You Edit

- Is the change layout, component, base, or page-specific?
- Can Bootstrap already solve part of the problem?
- Does the custom style need a `y-` class?
- Should this live in `abstracts/`, `vendors/`, `base/`, `layout/`, `components/`, or `pages/`?
- Can the script stay in `src/scripts/` and be initialized from `main.ts`?
- Will the result stay simple enough for a learning project?
