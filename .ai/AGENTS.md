# .ai/ — Agent Entry Point

This folder contains project instructions for AI assistants and editor-integrated agents.

This is a small one-page landing page created as a learning project. It presents a handcrafted Ukrainian embroidery theme with a short intro and section-based content such as About us, Our collection, and Testimonials. The site is meant for practicing HTML, CSS, and JavaScript rather than building a fully interactive production app.

## Purpose

- Provide a single source of truth for working conventions in this project.
- Help AI assistants understand the project structure, code style, and preferred workflows.
- Keep instructions close to the codebase so they are easy to update.

## Project Type

- Frontend learning project
- One-page landing page
- Built with Vite, Bootstrap, and SCSS
- Uses minimal TypeScript for small UI interactions

## Folder Structure
```
.ai/
├── AGENTS.md
└── architecture/
    └── frontend/
        ├── tech-stack.md
        ├── how-to.md
        └── rules/
            ├── styling.mdc
            └── html-structure.mdc
```

## Notes for AI Assistants

- Start with this file to understand the purpose of the `.ai/` folder.
- Use `architecture/frontend/tech-stack.md` to understand the project layout, stack, and file responsibilities.
- Use `architecture/frontend/how-to.md` for practical editing recipes.
- Use `architecture/frontend/rules/styling.mdc` for SCSS, class naming, Bootstrap usage, and visual structure rules.
- Use `architecture/frontend/rules/html-structure.mdc` for semantic HTML and markup organization rules.

## Symlinks

| Tool path | Target |
|-----------|--------|
| `.claude/CLAUDE.md` | → `../.ai/AGENTS.md` |
| `.claude/rules` | → `../.ai/architecture/frontend/rules` |
| `.cursor/rules` | → `../.ai/architecture/frontend/rules` |
| `.junie/guidelines.md` | → `../.ai/AGENTS.md` |
