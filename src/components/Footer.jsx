import SpartanIcon from './SpartanIcon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <SpartanIcon size={20} color="#5c5c6e" />
          &copy; 2026 c0x12c, Inc.
        </div>
        <div className="footer-links">
          <a href="https://github.com/c0x12c" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://hirespartan.io" target="_blank" rel="noreferrer">Website</a>
          <a href="mailto:hello@c0x12c.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}
