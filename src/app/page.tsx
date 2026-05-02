import Image from 'next/image'
import {
  ArrowRight, Play, ChevronRight,
  MapPin, User, Phone, Trophy,
  FileText, HeartHandshake, Download, Star,
} from 'lucide-react'

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
function IconYoutube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )
}
import Nav from './components/Nav'
import HeroRotate from './components/HeroRotate'
import EventsSection from './components/EventsSection'
import ContactForm from './contact-form'

/* ── Shared primitives ────────────────────────────────────── */

function Photo({
  caption, ratio = '16/9', tone = 'cyan', children,
}: {
  caption?: string
  ratio?: string
  tone?: 'cyan' | 'orange' | 'ink'
  children?: React.ReactNode
}) {
  return (
    <div className={`kot-photo kot-photo--${tone}`} style={{ aspectRatio: ratio }}>
      <div className="kot-photo__inner">{children}</div>
      {caption && <div className="kot-photo__caption">{caption}</div>}
    </div>
  )
}

function Eyebrow({ children, color = 'orange' }: { children: React.ReactNode; color?: 'orange' | 'cyan' | 'white' }) {
  return (
    <div className="kot-eyebrow-row">
      <span className={`kot-eyebrow-dot dot-${color}`} />
      <span className="kot-eyebrow-text">{children}</span>
    </div>
  )
}

function Pill({ children, tone = 'cyan', soft }: { children: React.ReactNode; tone?: 'cyan' | 'orange'; soft?: boolean }) {
  return (
    <span className={`kot-pill kot-pill--${tone}${soft ? ' kot-pill--soft' : ''}`}>
      {children}
    </span>
  )
}

function MarqueeStrip({ items, tone = 'orange', Icon = Star }: {
  items: string[]
  tone?: 'orange' | 'cyan' | 'ink'
  Icon?: React.ComponentType<{ size?: number }>
}) {
  const repeated = [...items, ...items, ...items, ...items]
  return (
    <div className={`kot-marquee kot-marquee--${tone}`} aria-hidden="true">
      <div className="kot-marquee__track">
        {repeated.map((it, i) => (
          <span key={i} className="kot-marquee__item">
            <span>{it}</span>
            <Icon size={22} />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Data ─────────────────────────────────────────────────── */

const milestones = [
  { year: '2012', label: 'Începutul',    tone: 'cyan'   as const, caption: 'Foto: prima echipă, 12 fete' },
  { year: '2016', label: 'Primul podium', tone: 'orange' as const, caption: 'Foto: medalia de bronz națională' },
  { year: '2019', label: 'Erasmus+',     tone: 'cyan'   as const, caption: 'Foto: schimb internațional' },
  { year: '2024', label: 'Team Romania', tone: 'orange' as const, caption: 'Foto: stunt în salt' },
]

const groups = [
  { name: 'Mini',    age: '5–8 ani',  count: '18 sportivi', tone: 'cyan'   as const, caption: 'Foto: grupa Mini la antrenament' },
  { name: 'Juniori', age: '9–12 ani', count: '24 sportivi', tone: 'orange' as const, caption: 'Foto: piramidă' },
  { name: 'Cadeți',  age: '13–15 ani',count: '20 sportivi', tone: 'cyan'   as const, caption: 'Foto: stunt cu basket-toss' },
  { name: 'Seniori', age: '16+ ani',  count: '22 sportivi', tone: 'orange' as const, caption: 'Foto: rutină de competiție' },
]

const staff = [
  { name: 'Antrenor 1', role: 'Head Coach · Seniori', tone: 'cyan'   as const },
  { name: 'Antrenor 2', role: 'Coach · Juniori',      tone: 'orange' as const },
  { name: 'Antrenor 3', role: 'Coach · Mini',         tone: 'cyan'   as const },
  { name: 'Antrenor 4', role: 'Coregraf',             tone: 'orange' as const },
]

const projects = [
  {
    title: 'ICU Worlds 2025', tag: 'Mondial', tone: 'cyan' as const,
    desc: 'Am fost nucleul primei echipe naționale care a reprezentat România la ICU Cheerleading Worlds în SUA.',
  },
  {
    title: 'Campionatul European', tag: 'Internațional', tone: 'orange' as const,
    desc: '8 participări ca echipă reprezentativă a României. 7 medalii europene câștigate la juniori și seniori.',
  },
  {
    title: 'Campionatul Național 2026', tag: 'Gazdă', tone: 'cyan' as const,
    desc: '30 mai, Nova PG Arena Turda. 700+ sportivi, 1000+ spectatori, 10+ structuri sportive în luptă pentru aur.',
  },
  {
    title: 'Team Romania', tag: 'Lot', tone: 'orange' as const,
    desc: 'Lider al proiectelor de dezvoltare care au pus România pe harta cheerleadingului mondial.',
  },
  {
    title: '20+ titluri naționale', tag: 'Palmares', tone: 'cyan' as const,
    desc: 'Peste 20 de titluri câștigate de grupele KOT la nivel național, la toate categoriile de vârstă.',
  },
]

const sponsors = [
  'CCS Sibiu', 'Primăria Cluj', 'ProSport', 'Erasmus+',
  'Decathlon', 'CEC Bank', 'Hochland', 'Sibex',
  'Continental', 'Hervis', 'Brio', 'OMV',
]

/* ── Page ─────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="kot-hero" id="top">
          <div className="kot-hero__shapes" aria-hidden="true">
            <div className="kot-hero__shape kot-hero__shape--cyan" />
            <div className="kot-hero__shape kot-hero__shape--orange" />
          </div>

          <div className="kot-container kot-hero__inner">
            <div className="kot-hero__eyebrow">
              <span className="kot-hero__dot" />
              KNIGHTS OF TRANSYLVANIA · CLUJ-NAPOCA
            </div>

            <h1 className="kot-hero__title">
              CHEERLEADING<br />
              <HeroRotate />
            </h1>

            <p className="kot-hero__lede">
              Peste 130 de sportivi între 5 și 30 de ani, 16 instructori și 12
              țări în care am dus tricolorul. În 2025 am fost nucleul primei
              echipe naționale a României la ICU Cheerleading Worlds.
            </p>

            <div className="kot-hero__ctas">
              <a href="#contact" className="kot-btn kot-btn--primary kot-btn--lg">
                <span>Vino la antrenament</span>
                <ArrowRight size={18} />
              </a>
              <a href="#despre" className="kot-btn kot-btn--ghost kot-btn--lg">
                <Play size={18} />
                <span>Despre KOT</span>
              </a>
            </div>

            <div className="kot-hero__stats">
              <div><strong>130+</strong><span>Sportivi activi</span></div>
              <div><strong>16+</strong><span>Instructori</span></div>
              <div><strong>12+</strong><span>Țări concurate</span></div>
              <div><strong>10K+</strong><span>Spectatori</span></div>
            </div>
          </div>

          <div className="kot-hero__scroll" aria-hidden="true">
            <span>SCROLL</span>
            <ChevronRight size={16} />
          </div>
        </section>

        {/* ── Marquee 1 ── */}
        <MarqueeStrip
          tone="orange"
          items={['MOMENTUL TĂU WOOW', 'KNIGHTS OF TRANSYLVANIA', 'KOT', 'CLUJ-NAPOCA', 'CHEERLEADING']}
        />

        {/* ── About ── */}
        <section className="kot-section kot-section--white" id="despre">
          <div className="kot-container">
            <Eyebrow>Despre noi</Eyebrow>
            <h2 className="kot-section__title">
              Etalonul țării<br />în cheer sport.
            </h2>

            <div className="kot-about__layout">
              <div>
                <p className="kot-about__lede">
                  Knights Of Transylvania este structura clujeană devenită etalonul
                  României în materie de cheer sport — peste 130 de sportivi între
                  5 și 30 de ani, 16 instructori specializați și 20 de titluri
                  naționale câștigate la toate categoriile de vârstă.
                </p>
                <p className="kot-about__body">
                  Suntem liderul proiectelor care au pus România pe harta
                  cheerleadingului mondial. Avem 8 participări ca echipă
                  reprezentativă la Campionatul European, 7 medalii europene la
                  juniori și seniori, și am fost nucleul primei echipe naționale la
                  ICU Cheerleading Worlds 2025 din SUA.
                </p>
              </div>
              <div>
                <div className="kot-about__milestones">
                  {milestones.map((m) => (
                    <div key={m.year} className="kot-milestone">
                      <Photo tone={m.tone} ratio="4/5" caption={m.caption}>
                        <div className="kot-milestone__year">{m.year}</div>
                        <div className="kot-milestone__label">{m.label}</div>
                      </Photo>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Groups ── */}
        <section className="kot-section kot-section--paper" id="grupe">
          <div className="kot-container">
            <Eyebrow>Grupele noastre</Eyebrow>
            <h2 className="kot-section__title">
              Patru grupe.<br />O singură echipă.
            </h2>
            <div className="kot-groups__grid">
              {groups.map((g) => (
                <article key={g.name} className="kot-group-card">
                  <Photo tone={g.tone} ratio="4/5" caption={g.caption}>
                    <span className="kot-group-card__age">{g.age}</span>
                  </Photo>
                  <div className="kot-group-card__body">
                    <h3 className="kot-group-card__name">{g.name}</h3>
                    <div className="kot-group-card__meta">{g.count}</div>
                    <a href="#contact" className="kot-group-card__link">
                      <span>Înscrie-te</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marquee 2 ── */}
        <MarqueeStrip
          tone="cyan"
          Icon={Trophy}
          items={['ICU WORLDS 2025', 'TEAM ROMANIA', '20+ TITLURI NAȚIONALE', 'CAMPIONAT NAȚIONAL TURDA 2026']}
        />

        {/* ── Staff ── */}
        <section className="kot-section kot-section--white" id="staff">
          <div className="kot-container">
            <Eyebrow>Staff KOT</Eyebrow>
            <h2 className="kot-section__title">
              Antrenorii din spatele rezultatelor.
            </h2>
            <p className="kot-section__sub">
              Această secțiune urmează să fie actualizată cu portrete și nume reale.
            </p>
            <div className="kot-staff__grid">
              {staff.map((s, i) => (
                <div key={i} className="kot-staff-card">
                  <Photo tone={s.tone} ratio="1/1" caption={`Foto: ${s.name}`} />
                  <div className="kot-staff-card__name">{s.name}</div>
                  <div className="kot-staff-card__role">{s.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="kot-section kot-section--ink" id="proiecte">
          <div className="kot-container">
            <Eyebrow color="cyan">Proiecte</Eyebrow>
            <h2 className="kot-section__title kot-section__title--inv">
              Mai mult decât o echipă.<br />O mișcare.
            </h2>
            <div className="kot-projects__grid">
              {projects.map((p, i) => (
                <article key={i} className={`kot-project kot-project--${p.tone}`}>
                  <Photo tone={p.tone} ratio="16/9" caption={`Foto: ${p.title}`} />
                  <div className="kot-project__body">
                    <Pill tone={p.tone} soft>{p.tag}</Pill>
                    <h3 className="kot-project__title">{p.title}</h3>
                    <p className="kot-project__desc">{p.desc}</p>
                    <a href="#contact" className="kot-project__link">
                      <span>Citește povestea</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Events (client — filterable) ── */}
        <EventsSection />

        {/* ── Sponsors ── */}
        <section className="kot-section kot-section--orange" id="sponsorizare">
          <div className="kot-container">
            <div className="kot-sponsor__layout">
              <div>
                <Eyebrow color="white">Sponsorizare</Eyebrow>
                <h2 className="kot-section__title kot-section__title--inv">
                  Ajută echipa<br />să zboare mai sus.
                </h2>
                <p className="kot-section__sub kot-section__sub--inv">
                  Asociere cu un proiect sportiv credibil. Vizibilitate în
                  contexte pozitive și organizate. Public tânăr și familii active.
                  Energie care atrage atenția publicului.{' '}
                  <strong>Suntem momentul tău WOOW.</strong>
                </p>
              </div>
              <div className="kot-sponsor__cards">
                <article className="kot-sponsor-card">
                  <FileText size={28} />
                  <h3>Mapa de prezentare</h3>
                  <p>PDF cu obiective, audiență și pachete de sponsorizare 2026.</p>
                  <a href="#" className="kot-btn kot-btn--dark kot-btn--sm">
                    <Download size={16} />
                    <span>Descarcă mapa</span>
                  </a>
                </article>
                <article className="kot-sponsor-card">
                  <HeartHandshake size={28} />
                  <h3>Formular 230</h3>
                  <p>Redirecționează 3.5% din impozit către KOT. Durează 2 minute.</p>
                  <a href="#" className="kot-btn kot-btn--dark kot-btn--sm">
                    <Download size={16} />
                    <span>Descarcă formularul</span>
                  </a>
                </article>
              </div>
            </div>
            <div className="kot-sponsor__logos">
              <div className="kot-sponsor__logos-label">Sponsori și parteneri</div>
              <div className="kot-sponsor__logos-strip">
                {sponsors.map((s, i) => (
                  <div key={i} className="kot-sponsor-logo">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="kot-section kot-section--white" id="contact">
          <div className="kot-container">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="kot-section__title">
              Vino la antrenament.<br />Sau scrie-ne.
            </h2>
            <div className="kot-contact__layout">
              {/* Form (client) */}
              <ContactForm />

              {/* Info + map */}
              <aside className="kot-contact__info">
                <div className="kot-contact__map">
                  <div className="kot-contact__map-pin">
                    <MapPin size={24} />
                  </div>
                  <div className="kot-contact__map-label">Cluj-Napoca · Transilvania</div>
                </div>
                <ul className="kot-contact__list">
                  <li>
                    <MapPin size={20} />
                    <div><strong>Bază</strong><span>Cluj-Napoca, România</span></div>
                  </li>
                  <li>
                    <User size={20} />
                    <div><strong>Carmen Biriș</strong><span>Persoană de contact</span></div>
                  </li>
                  <li>
                    <Phone size={20} />
                    <div><strong>Telefon</strong><span>0799 822 100</span></div>
                  </li>
                  <li>
                    <Trophy size={20} />
                    <div><strong>30 mai 2026</strong><span>Campionatul Național · Turda</span></div>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="kot-footer">
        <div className="kot-container">
          <div className="kot-footer__top">
            <div className="kot-footer__brand">
              <Image src="/logo-kot-shield-transparent.png" alt="KOT" width={45} height={56} />
              <div>
                <div className="kot-footer__name">Knights Of Transylvania</div>
                <div className="kot-footer__sub">Performanță și spectacol în inima Transilvaniei</div>
              </div>
            </div>
            <div className="kot-footer__links">
              <div>
                <h5>Echipa</h5>
                <a href="#despre">Despre</a>
                <a href="#grupe">Grupele</a>
                <a href="#staff">Staff</a>
              </div>
              <div>
                <h5>Activitate</h5>
                <a href="#proiecte">Proiecte</a>
                <a href="#evenimente">Evenimente</a>
                <a href="#sponsorizare">Sponsorizare</a>
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
            <span>Hai KOT! 🧡💙</span>
          </div>
        </div>
      </footer>
    </>
  )
}
