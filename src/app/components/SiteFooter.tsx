import Image from 'next/image'

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

export default function SiteFooter() {
  const wordmarkItems = Array.from({ length: 4 })

  return (
    <footer className="kot-footer">
      <div className="kot-footer__giant" aria-hidden="true">
        <div className="kot-footer__giant-track">
          {wordmarkItems.map((_, i) => (
            <span key={i} className="kot-footer__giant-item">
              Knights of Transylvania <span className="kot-footer__giant-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="kot-container">
        <div className="kot-footer__top">
          <div className="kot-footer__brand">
            <Image
              src="/logo-kot-shield.svg"
              alt="Knights Of Transylvania logo"
              width={1447}
              height={1054}
            />
            <div>
              <div className="kot-footer__name">Knights Of Transylvania</div>
              <div className="kot-footer__sub">Performanță și spectacol în inima Transilvaniei</div>
            </div>
          </div>
          <div className="kot-footer__links">
            <div>
              <h5>Echipa</h5>
              <a href="/#despre">Despre</a>
              <a href="/#grupe">Grupele</a>
              <a href="/#staff">Staff</a>
            </div>
            <div>
              <h5>Activitate</h5>
              <a href="/#proiecte">Noutăți</a>
              <a href="/noutati">Toate articolele</a>
              <a href="/#evenimente">Evenimente</a>
              <a href="/#sponsorizare">Sponsorizare</a>
            </div>
            <div>
              <h5>Urmărește</h5>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <IconInstagram />Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <IconFacebook />Facebook
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <IconYoutube />YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="kot-footer__bottom">
          <span>© 2026 Knights Of Transylvania · Cluj-Napoca</span>
          <span>Hai KOT! KOT orange and cyan, no excuses.</span>
        </div>
      </div>
    </footer>
  )
}