import SpartanIcon from './SpartanIcon'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-brand">
          <div className="nav-logo">
            <SpartanIcon />
          </div>
          <span className="nav-brand-text">spartan</span>
        </a>
        <div className="nav-links">
          <a href="#projects" className="hide-mobile">Projects</a>
          <a href="https://hirespartan.io" target="_blank" rel="noreferrer" className="hide-mobile">About us</a>
          <a href="https://hirespartan.io/careers" target="_blank" rel="noreferrer" className="hide-mobile">Careers</a>
          <a href="https://github.com/c0x12c" target="_blank" rel="noreferrer" className="nav-cta">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
