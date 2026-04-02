const PROJECTS = [
  {
    icon: '\u{1f6e1}\u{fe0f}',
    name: 'ai-toolkit',
    url: 'https://github.com/c0x12c/ai-toolkit',
    stars: 49,
    desc: 'Stop AI coding agents from shipping sloppy code. Structured workflows with quality gates for Claude Code, Codex, Cursor, and more. 72 slash commands, 23 rules, 31 skills.',
    lang: 'JavaScript',
    langClass: 'js',
  },
  {
    icon: '\u{1f4c4}',
    name: 'pageindex-kt',
    url: 'https://github.com/c0x12c/pageindex-kt',
    stars: 11,
    desc: 'LLM-powered document indexing for the JVM. Builds tree-structured indexes like a table of contents. Uses LLM reasoning to navigate -- no vector database, no chunking needed.',
    lang: 'Kotlin',
    langClass: 'kotlin',
  },
  {
    icon: '\u{26a1}',
    name: 'devterm-kit',
    url: 'https://github.com/c0x12c/devterm-kit',
    stars: 14,
    desc: 'One-command terminal setup. Installs Starship, Catppuccin theme, Oh My Zsh, Nerd Fonts, fzf, eza, bat, and more. Beautiful terminal in under 2 minutes on macOS and Linux.',
    lang: 'Shell',
    langClass: 'shell',
  },
]

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-top">
        <div className="card-icon">{project.icon}</div>
        <div className="card-stars">
          <StarIcon />
          {project.stars}
        </div>
      </div>
      <h3>
        <a href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
      </h3>
      <p className="desc">{project.desc}</p>
      <div className="card-footer">
        <span className="lang-badge">
          <span className={`lang-dot ${project.langClass}`} />
          {project.lang}
        </span>
        <a href={project.url} target="_blank" rel="noreferrer" className="card-link">
          View repo
          <ArrowIcon />
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <h2>Open Source</h2>
        <h3>Projects we've shipped</h3>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
