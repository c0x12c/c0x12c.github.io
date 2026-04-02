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
