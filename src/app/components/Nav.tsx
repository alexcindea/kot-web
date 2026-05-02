'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#despre', label: 'Despre' },
  { href: '#grupe', label: 'Grupele' },
  { href: '#staff', label: 'Staff' },
  { href: '#proiecte', label: 'Proiecte' },
  { href: '#evenimente', label: 'Evenimente' },
  { href: '#sponsorizare', label: 'Sponsorizare' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`kot-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="kot-nav__inner">
        <a href="#top" className="kot-nav__logo">
          <Image src="/logo-kot-shield-transparent.png" alt="KOT shield" width={38} height={48} />
          <span className="kot-nav__wordmark">
            KOT
            <span>cheerleading</span>
          </span>
        </a>

        <nav className="kot-nav__links" aria-label="Navigare principală">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="kot-nav__cta">
          <a href="#contact" className="kot-btn kot-btn--primary kot-btn--sm">
            Vino la antrenament
          </a>
        </div>

        <button
          className="kot-nav__menu"
          aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="kot-nav__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
