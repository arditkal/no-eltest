import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Hovedmeny">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" aria-label="No-EL – Hjem">
            <span className="nav-logo-mark">N</span>
            No-EL
          </Link>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Hjem</Link></li>
            <li><Link href="/om-oss" onClick={() => setMenuOpen(false)}>Om oss</Link></li>
            <li><Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
            <li><Link href="/personvern" onClick={() => setMenuOpen(false)}>Personvern</Link></li>
            <li><a href="#kurs" className="nav-cta" onClick={() => setMenuOpen(false)}>Se kurs</a></li>
          </ul>
          <button
            className="mobile-toggle"
            aria-label="Åpne meny"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="nav-logo" style={{ color: 'var(--color-white)', fontSize: '1.3rem' }}>
                <span className="nav-logo-mark">N</span>
                No-EL
              </Link>
              <p>Norges ledende plattform for e-læring innen eiendomsmegling. Vi hjelper deg med å holde kompetansen oppdatert – når og hvor du vil.</p>
            </div>
            <div>
              <h4>Navigasjon</h4>
              <ul className="footer-links">
                <li><Link href="/">Hjem</Link></li>
                <li><Link href="/om-oss">Om oss</Link></li>
                <li><Link href="/kontakt">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4>Kurs</h4>
              <ul className="footer-links">
                <li><a href="#kurs">Alle kurs</a></li>
                <li><a href="#kurs">Etterutdanning</a></li>
                <li><a href="#kurs">Ny som megler</a></li>
              </ul>
            </div>
            <div>
              <h4>Juridisk</h4>
              <ul className="footer-links">
                <li><Link href="/personvern">Personvern</Link></li>
                <li><Link href="/personvern">Vilkår</Link></li>
                <li><Link href="/personvern">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} No-EL. Alle rettigheter forbeholdt.</span>
            <div className="footer-bottom-links">
              <Link href="/personvern">Personvernerklæring</Link>
              <Link href="/kontakt">Kontakt oss</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
