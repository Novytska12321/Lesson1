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

The table lists **where the real files live** in this repo (always under `.ai/` at the project root). That is the path you use when opening or editing sources—not a monorepo-style path outside the project.

The shell snippet below is the **copy-paste** way to recreate links from the repository root. For links created *inside* `.claude/` or `.cursor/`, the `ln -s` target must start with `../.ai/...` because a relative target is resolved from the **parent directory of the symlink**, not from the repo root. That is normal `ln` behavior, not a different folder layout. For `AGENTS.md` in the repo root, `.ai/AGENTS.md` is enough.

```bash
# Run from the repository root (Linux, macOS, Git Bash, WSL).

mkdir -p .cursor .claude .junie

ln -sfn .ai/AGENTS.md AGENTS.md

ln -sfn ../.ai/AGENTS.md .claude/CLAUDE.md
ln -sfn ../.ai/architecture/frontend/rules .claude/rules

ln -sfn ../.ai/architecture/frontend/rules .cursor/rules

ln -sfn ../.ai/AGENTS.md .junie/guidelines.md
```

### Windows and portability

Symlinks in Git work on Windows **if** the checkout can create real symlinks: enable **Developer Mode** (or otherwise allow symlink creation) and use `git config core.symlinks true` before cloning (or re-clone after changing it). Otherwise Git may check out a symlink as a small text file containing the target path, and editors will not see a real link. If your team cannot rely on symlinks on Windows, use real files in `.cursor/rules` / root `AGENTS.md` that duplicate or briefly point to `.ai/…` instead.

| Tool path | Target (in this repo) |
|-----------|------------------------|
| `AGENTS.md` (root of repo) | `.ai/AGENTS.md` |
| `.claude/CLAUDE.md` | `.ai/AGENTS.md` |
| `.claude/rules` | `.ai/architecture/frontend/rules` |
| `.cursor/rules` | `.ai/architecture/frontend/rules` |
| `.junie/guidelines.md` | `.ai/AGENTS.md` |
