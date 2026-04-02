# CLAUDE.md

## Project Overview
GitHub Pages site for c0x12c using Jekyll 4 with the Architect remote theme.

## Tech Stack
- Jekyll 4.3+ with Liquid templates
- Theme: `pages-themes/architect@v0.2.0` (via `remote_theme`)
- Ruby 3.4+ (not 4.x — incompatible with Jekyll)
- CI: GitHub Actions (`bundle exec jekyll build`)

## Local Development
```bash
bundle install
bundle exec jekyll serve
# Site at http://localhost:4000
```

## Project Structure
- `index.md` — homepage (layout: default)
- `_config.yml` — Jekyll + theme configuration
- `Gemfile` — Ruby dependencies (jekyll, jekyll-remote-theme, jekyll-seo-tag)
- `assets/css/style.scss` — custom style overrides (import `jekyll-theme-architect` first)
- `_layouts/` — layout overrides (copy from theme repo to customize)
- `.github/workflows/` — CI workflows

## Content Rules
- All pages are Markdown with YAML front matter (`layout: default`, `title: ...`)
- File names: lowercase, hyphen-separated (e.g., `my-page.md`)
- Images go in `assets/images/`, use relative paths
- 2-space indentation for YAML/HTML/Markdown
- No trailing whitespace; end files with a single newline

## Git Conventions
- Branch from `master`, prefix: `ducdt/<description>`
- Conventional commits: `feat:`, `fix:`, `docs:`, `ci:`, `chore:`
- One logical change per commit
- PR must pass `bundle exec jekyll build` in CI before merge

## Do NOT
- Use `github-pages` gem (pins Jekyll 3.9, broken on Ruby 3.4+)
- Add Ruby 4.x to CI (incompatible with current Jekyll/Liquid)
- Commit `_site/`, `.jekyll-cache/`, or `.sass-cache/`
