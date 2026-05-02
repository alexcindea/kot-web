// Top navigation — transparent over hero, opaque after scroll
const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
  const [mobileOpen, setMobileOpen] = useStateNav(false);

  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#despre', label: 'Despre' },
    { href: '#grupe', label: 'Grupele' },
    { href: '#staff', label: 'Staff' },
    { href: '#proiecte', label: 'Proiecte' },
    { href: '#evenimente', label: 'Evenimente' },
    { href: '#sponsorizare', label: 'Sponsorizare' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={'kot-nav ' + (scrolled ? 'is-scrolled' : '')}>
      <div className="kot-nav__inner">
        <a href="#top" className="kot-nav__logo">
          <img src="../../assets/logo-kot-shield-transparent.png" alt="KOT" />
          <span className="kot-nav__wordmark">KOT<span>cheerleading</span></span>
        </a>
        <nav className="kot-nav__links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="kot-nav__cta">
          <a href="#contact" className="kot-btn kot-btn--primary kot-btn--sm">
            <span>Vino la antrenament</span>
          </a>
        </div>
        <button
          className="kot-nav__menu"
          aria-label="Meniu"
          onClick={() => setMobileOpen(o => !o)}
        >
          <i data-lucide={mobileOpen ? 'x' : 'menu'} />
        </button>
      </div>
      {mobileOpen && (
        <div className="kot-nav__mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

window.KOT_Nav = Nav;
