'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#despre', label: 'Despre noi' },
  { href: '/#grupe', label: 'Grupele' },
  { href: '/#staff', label: 'Staff' },
  { href: '/#proiecte', label: 'Proiecte' },
  { href: '/#evenimente', label: 'Evenimente' },
  { href: '/#sponsorizare', label: 'Sponsorizare' },
  { href: '/#contact', label: 'Contact' },
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
        <Link href="/#top" className="kot-nav__logo">
          <Image
            src="/logo-kot-shield.svg"
            alt="Knights Of Transylvania logo"
            width={1447}
            height={1054}
            loading="eager"
            fetchPriority="high"
          />
          <span className="kot-nav__wordmark">
            <span className="kot-nav__wordmark-main">Knights of Transylvania</span>
            <span className="kot-nav__wordmark-sub">Cheerleaders</span>
          </span>
        </Link>

        <nav className="kot-nav__links" aria-label="Navigare principală">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="kot-nav__cta">
          <Link href="/#contact" className="kot-btn kot-btn--primary kot-btn--sm">
            Încearcă și tu
          </Link>
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
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
