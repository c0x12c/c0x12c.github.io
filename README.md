# c0x12c.github.io

Official website for **c0x12c** — built with [Jekyll](https://jekyllrb.com/) and the [Architect](https://github.com/pages-themes/architect) theme, hosted on [GitHub Pages](https://pages.github.com/).

## Getting Started

### Prerequisites

- Ruby 3.3+ (Ruby 4.x is not yet supported by `github-pages`)
- Bundler (`gem install bundler`)

### Local Development

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview the site.

## Customizing the Theme

This site uses the [Architect](https://github.com/pages-themes/architect) theme via `remote_theme` in `_config.yml`.

### Overriding Styles

Create `assets/css/style.scss` to add custom styles on top of the theme defaults:

```scss
---
---

@import "jekyll-theme-architect";

// Your custom styles below
```

### Overriding Layouts

To customize the HTML layout, copy the theme's [default layout](https://github.com/pages-themes/architect/blob/master/_layouts/default.html) into `_layouts/default.html` and edit it.

### Adding Pages

Create new `.md` files in the root directory with front matter:

```yaml
---
layout: default
title: My Page
---
```

### Configuration

Site-wide settings are in `_config.yml`. See the [Jekyll configuration docs](https://jekyllrb.com/docs/configuration/) and the [Architect theme README](https://github.com/pages-themes/architect#readme) for available options.

## Contributing

We welcome contributions from the community. Please follow the guidelines below.

### How to Contribute

1. **Fork** this repository
2. **Create a branch** from `master` with a descriptive name (e.g., `fix/typo-in-docs`, `feat/add-blog-post`)
3. **Make your changes** locally and verify they render correctly with `bundle exec jekyll serve`
4. **Commit** using [conventional commits](https://www.conventionalcommits.org/) (e.g., `feat: add new blog post`, `fix: correct broken link`)
5. **Push** your branch and open a **Pull Request** against `master`

### Content Guidelines

- Write in clear, concise English
- Use Markdown for all content pages
- Place images in an `assets/images/` directory and use relative paths
- Keep file and directory names lowercase with hyphens (e.g., `my-new-page.md`)

### Code Style

- Use 2-space indentation for YAML, HTML, and Markdown files
- Ensure no trailing whitespace
- End files with a single newline

### Pull Request Process

1. Ensure the site builds without errors (`bundle exec jekyll build`)
2. Provide a clear description of what your PR changes and why
3. PRs require at least one approving review before merge
4. Keep PRs focused — one logical change per PR

### Reporting Issues

Found a bug or have a suggestion? [Open an issue](https://github.com/c0x12c/c0x12c.github.io/issues/new) with:

- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior

## License

This project is open source under the [MIT License](LICENSE).
