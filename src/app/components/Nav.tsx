'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, m } from 'motion/react'
import type { Variants } from 'motion/react'

const links = [
  { href: '/#despre', label: 'Despre noi' },
  { href: '/#grupe', label: 'Grupele' },
  { href: '/#staff', label: 'Staff' },
  { href: '/#proiecte', label: 'Proiecte' },
  { href: '/#evenimente', label: 'Evenimente' },
  { href: '/#sponsorizare', label: 'Sponsorizare' },
  { href: '/#contact', label: 'Contact' },
]

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.045, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: 'easeIn' } },
}

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      // Duck out of the way going down, glide back the moment you scroll up.
      setHidden(y > 320 && y > lastY)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`kot-nav${scrolled ? ' is-scrolled' : ''}${hidden && !mobileOpen ? ' is-hidden' : ''}`}
    >
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

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            className="kot-nav__mobile"
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {links.map((l) => (
              <m.div key={l.href} variants={menuItemVariants}>
                <Link href={l.href} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              </m.div>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
