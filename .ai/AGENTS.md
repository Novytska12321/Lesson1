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

## Symlinks

| Tool path | Target |
|-----------|--------|
| `.claude/CLAUDE.md` | → `../.ai/AGENTS.md` |
| `.claude/rules` | → `../.ai/architecture/frontend/rules` |
| `.cursor/rules` | → `../.ai/architecture/frontend/rules` |
| `.junie/guidelines.md` | → `../.ai/AGENTS.md` |
