import GitHubIcon from './GitHubIcon'

export default function Cta() {
  return (
    <section className="cta">
      <div className="cta-bg" />
      <div className="cta-content">
        <h2>Ready to build<br /><span className="gradient">something exceptional?</span></h2>
        <p>We welcome contributions. Check out our repos and open a PR.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/c0x12c" target="_blank" rel="noreferrer" className="btn btn-primary">
            <GitHubIcon />
            Explore on GitHub
          </a>
          <a href="https://hirespartan.io" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Work with us
          </a>
        </div>
      </div>
    </section>
  )
}
