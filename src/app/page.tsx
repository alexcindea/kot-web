import Image from 'next/image'
import {
  ArrowRight, Play, ChevronRight, ChevronDown,
  MapPin, User, Phone, Trophy,
  FileText, HeartHandshake, Download, Star,
} from 'lucide-react'
import Nav from './components/Nav'
import HeroRotate from './components/HeroRotate'
import EventsSection from './components/EventsSection'
import SiteFooter from './components/SiteFooter'
import ContactMap from './components/ContactMap'
import ContactForm from './contact-form'
import groupsStyles from './groups-section.module.css'
import projectsStyles from './projects-section.module.css'
import { urlForImage } from '@/sanity/lib/image'
import { getHomepageContent, getSitePhotos, getSponsors } from '@/sanity/lib/queries'
import type { HomepageProject, SanityPhotoAsset, SanitySponsor, SitePhotosDocument } from '@/sanity/lib/types'

export const revalidate = 60

const photoDimensionsByRatio: Record<string, { width: number; height: number }> = {
  '16/9': { width: 1600, height: 900 },
  '4/5': { width: 960, height: 1200 },
  '2/3': { width: 800, height: 1200 },
  '1/1': { width: 1200, height: 1200 },
}

/* ── Shared primitives ────────────────────────────────────── */

function Photo({
  caption, ratio = '16/9', tone = 'cyan', image, children,
}: {
  caption?: string
  ratio?: string
  tone?: 'cyan' | 'orange' | 'ink'
  image?: SanityPhotoAsset
  children?: React.ReactNode
}) {
  const resolvedCaption = image?.caption ?? caption
  const dimensions = photoDimensionsByRatio[ratio] ?? photoDimensionsByRatio['16/9']
  const imageUrl = image?.asset
    ? urlForImage(image).width(dimensions.width).height(dimensions.height).fit('crop').auto('format').url()
    : null

  return (
    <div className={`kot-photo kot-photo--${tone}`} style={{ aspectRatio: ratio }}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={image?.alt ?? resolvedCaption ?? 'Knights Of Transylvania photo'}
          fill
          className="kot-photo__img"
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
        />
      )}
      <div className="kot-photo__inner">{children}</div>
      {resolvedCaption && <div className="kot-photo__caption">{resolvedCaption}</div>}
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

type AboutMilestone = {
  id: string
  year: string
  label: string
  tone: 'cyan' | 'orange'
  caption: string
  ratio: string
  slot?: keyof NonNullable<SitePhotosDocument['aboutMilestones']>
  featured?: boolean
}

function MilestoneCard({
  milestone,
  images,
}: {
  milestone: AboutMilestone
  images?: SitePhotosDocument['aboutMilestones']
}) {
  return (
    <div className={`kot-milestone${milestone.featured ? ' kot-milestone--featured' : ''}`}>
      <Photo
        tone={milestone.tone}
        ratio={milestone.ratio}
        caption={milestone.caption}
        image={milestone.slot ? images?.[milestone.slot] : undefined}
      >
        <div className="kot-milestone__year">{milestone.year}</div>
        <div className="kot-milestone__label">{milestone.label}</div>
      </Photo>
    </div>
  )
}

const milestones: AboutMilestone[] = [
  {
    id: 'origin-2014',
    year: '2014',
    label: 'Începutul',
    tone: 'cyan',
    caption: 'Foto: începuturile KOT',
    ratio: '5/8',
    slot: 'milestone2012',
  },
  {
    id: 'first-medal-2015',
    year: '2015',
    label: 'Prima medalie',
    tone: 'orange',
    caption: 'Foto: prima medalie KOT',
    ratio: '5/8',
    slot: 'milestone2016',
  },
  {
    id: 'varsity-2023',
    year: '2023',
    label: 'Începutul varsity',
    tone: 'cyan',
    caption: 'Foto: începutul grupei varsity',
    ratio: '1/1',
  },
  {
    id: 'sala-kot-2023',
    year: '2023',
    label: 'Sala KOT',
    tone: 'orange',
    caption: 'Foto: Sala KOT',
    ratio: '1/1',
  },
  {
    id: 'worlds-2025',
    year: '2025',
    label: 'Campionatul mondial',
    tone: 'cyan',
    caption: 'Foto: Campionatul Mondial',
    ratio: '21/9',
    slot: 'milestone2024',
    featured: true,
  },
]

const aboutMilestonesTop = milestones.filter((milestone) =>
  milestone.id === 'origin-2014' || milestone.id === 'first-medal-2015',
)

const aboutMilestonesMid = milestones.filter((milestone) =>
  milestone.id === 'varsity-2023' || milestone.id === 'sala-kot-2023',
)

const aboutMilestoneFeatured = milestones.find((milestone) => milestone.featured)

type TrainingGroup = {
  id: keyof NonNullable<SitePhotosDocument['groups']>
  name: string
  age: string
  format: string
  description: string
  note?: string
  tone: 'cyan' | 'orange'
}

function GroupAccordionItem({
  group,
  images,
}: {
  group: TrainingGroup
  images?: SitePhotosDocument['groups']
}) {
  const image = images?.[group.id]
  const imageUrl = image?.asset
    ? urlForImage(image).width(1200).height(900).fit('crop').auto('format').url()
    : null
  const toneClass = group.tone === 'cyan' ? groupsStyles.groupAccordionCyan : groupsStyles.groupAccordionOrange
  const noteText = group.note ? (/[.!?]$/.test(group.note) ? group.note : `${group.note}.`) : null

  return (
    <details className={`${groupsStyles.groupAccordion} ${toneClass}`}>
      <summary className={groupsStyles.groupAccordionSummary}>
        <div className={groupsStyles.groupAccordionSummaryMain}>
          <div className={groupsStyles.groupAccordionHeadingRow}>
            <h3 className={groupsStyles.groupAccordionName}>{group.name}</h3>
            <span className={groupsStyles.groupAccordionAge}>{group.age}</span>
            {group.note && <span className={groupsStyles.groupAccordionNote}>{group.note}</span>}
          </div>
          <div className={groupsStyles.groupAccordionFormat}>{group.format}</div>
        </div>
        <span className={groupsStyles.groupAccordionIcon} aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </summary>

      <div className={groupsStyles.groupAccordionBody}>
        <div className={groupsStyles.groupAccordionContent}>
          <p className={groupsStyles.groupAccordionDescription}>{group.description}</p>
          {noteText && <p className={groupsStyles.groupAccordionNoteText}>{noteText}</p>}

          <div className={groupsStyles.groupAccordionMeta}>
            <div className={groupsStyles.groupAccordionMetaItem}>
              <strong>Vârstă</strong>
              <span>{group.age}</span>
            </div>
            <div className={groupsStyles.groupAccordionMetaItem}>
              <strong>Format</strong>
              <span>{group.format}</span>
            </div>
          </div>

          <a href="#contact" className={groupsStyles.groupAccordionLink}>
            <span>Încearcă și tu</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className={groupsStyles.groupAccordionMedia}>
          {imageUrl ? (
            <div className={groupsStyles.groupAccordionImageWrap}>
              <Image
                src={imageUrl}
                alt={image?.alt ?? `${group.name} group photo`}
                width={1200}
                height={900}
                className={groupsStyles.groupAccordionImage}
              />
            </div>
          ) : (
            <div className={groupsStyles.groupAccordionPlaceholder}>
              <span className={groupsStyles.groupAccordionPlaceholderLabel}>Foto grupă</span>
              <strong>Adăugăm fotografia aici după ce o alegem.</strong>
            </div>
          )}
        </div>
      </div>
    </details>
  )
}

const groups: TrainingGroup[] = [
  {
    id: 'mini',
    name: 'Mini',
    age: '5–7 ani',
    format: 'Start',
    description: 'Grupa în care cei mici descoperă bazele cheerleadingului prin joc, ritm și încredere.',
    tone: 'cyan',
  },
  {
    id: 'u13Mixt',
    name: 'U13 Mixt',
    age: 'Sub 13 ani',
    format: 'Mixt',
    description: 'Pentru sportivii U13 care lucrează tehnica de bază, coordonarea și lucrul în echipă.',
    tone: 'orange',
  },
  {
    id: 'u13FeteHu',
    name: 'U13 Fete',
    age: 'Sub 13 ani',
    format: 'Fete',
    description: 'Grupă dedicată fetelor U13, într-un ritm potrivit de învățare și progres.',
    note: 'Predare în limba maghiară',
    tone: 'cyan',
  },
  {
    id: 'primaryLevel1',
    name: 'Primary Level 1',
    age: '8–13 ani',
    format: 'Level 1',
    description: 'Pentru sportivii 8–13 ani care construiesc fundația tehnică și încep să lucreze în formulă de echipă.',
    tone: 'orange',
  },
  {
    id: 'primaryLevel2',
    name: 'Primary Level 2',
    age: '8–13 ani',
    format: 'Level 2',
    description: 'Grupă de progres pentru sportivii care sunt gata să treacă la cerințe și combinații mai avansate.',
    tone: 'cyan',
  },
  {
    id: 'u19',
    name: 'U19',
    age: 'Sub 19 ani',
    format: 'Competițional',
    description: 'Categorie pentru sportivii care își dezvoltă constanța, expresivitatea și lucrul de echipă la nivel U19.',
    tone: 'orange',
  },
  {
    id: 'seniori',
    name: 'Seniori',
    age: '16+ ani',
    format: 'Competițional',
    description: 'Grupa seniorilor reunește sportivii 16+ care lucrează rutine complete, energie de concurs și identitate de echipă.',
    tone: 'cyan',
  },
]

const staff = [
  { name: 'Antrenor 1', role: 'Head Coach · Seniori', tone: 'cyan'   as const, slot: 'coach1' as const },
  { name: 'Antrenor 2', role: 'Coach · Juniori',      tone: 'orange' as const, slot: 'coach2' as const },
  { name: 'Antrenor 3', role: 'Coach · Mini',         tone: 'cyan'   as const, slot: 'coach3' as const },
  { name: 'Antrenor 4', role: 'Coregraf',             tone: 'orange' as const, slot: 'coach4' as const },
]

const projectFallback: HomepageProject[] = [
  {
    title: 'Mondial / Team RO',
    label: 'Mondial',
    tone: 'cyan',
    slot: 'mondialTeamRo',
    story: 'Drumul spre Team Romania a adunat antrenamente, selecții și responsabilitatea de a reprezenta mai mult decât o echipă: o direcție întreagă de creștere pentru cheer sportul românesc.',
  },
  {
    title: 'Erasmus',
    label: 'Dezvoltare',
    tone: 'orange',
    slot: 'erasmus',
    story: 'Proiectul aduce schimb de experiență, idei noi și contexte internaționale care se întorc apoi în sala KOT prin metode, ritm și încredere.',
  },
  {
    title: 'Tabăra Națională',
    label: 'Comunitate',
    tone: 'cyan',
    slot: 'tabaraNationala',
    story: 'Aici se leagă mai repede grupurile, se lucrează concentrat și se creează acel timp comun în care progresul tehnic merge mână în mână cu energia de echipă.',
  },
  {
    title: 'Frumusețe fără filtru',
    label: 'Identitate',
    tone: 'orange',
    slot: 'frumuseteFaraFiltru',
    story: 'Este un proiect construit în jurul autenticității, expresiei și felului în care sportul poate da curaj, prezență și voce.',
  },
  {
    title: 'Nicio zi fără spor(t)',
    label: 'Mișcare',
    tone: 'cyan',
    slot: 'nicioZiFaraSport',
    story: 'Inițiativa pune accent pe consecvență, obiceiuri sănătoase și ideea că sportul se construiește zi de zi, nu doar la evenimente mari.',
  },
]

const sponsorFallbackNames = [
  'CCS Sibiu', 'Primăria Cluj', 'ProSport', 'Erasmus+',
  'Decathlon', 'CEC Bank', 'Hochland', 'Sibex',
  'Continental', 'Hervis', 'Brio', 'OMV',
]

const contactMapQuery = encodeURIComponent('Str. Fabricii de Zahăr 109, 400631 Cluj-Napoca, Romania')
const contactMapLat = 46.786109
const contactMapLon = 23.6263783
const contactMapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${contactMapQuery}`

function ProjectAccordionItem({
  project,
  images,
}: {
  project: HomepageProject
  images?: SitePhotosDocument['projects']
}) {
  const image = images?.[project.slot]
  const toneClass = project.tone === 'cyan' ? projectsStyles.projectAccordion : `${projectsStyles.projectAccordion} ${projectsStyles.projectAccordionOrange}`

  return (
    <details className={toneClass}>
      <summary className={projectsStyles.projectAccordionSummary}>
        <div className={projectsStyles.projectAccordionSummaryText}>
          <span className={projectsStyles.projectAccordionLabel}>{project.label}</span>
          <h3 className={projectsStyles.projectAccordionTitle}>{project.title}</h3>
        </div>
        <span className={projectsStyles.projectAccordionIcon} aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </summary>

      <div className={projectsStyles.projectAccordionBody}>
        <div className={projectsStyles.projectAccordionMedia}>
          <Photo
            caption={`Foto: ${project.title}`}
            ratio="16/9"
            tone={project.tone}
            image={image}
          >
            {!image?.asset && (
              <div className={projectsStyles.projectAccordionPlaceholder}>
                <span className={projectsStyles.projectAccordionPlaceholderLabel}>Proiect</span>
                <strong>{project.title}</strong>
              </div>
            )}
          </Photo>
        </div>

        <div className={projectsStyles.projectAccordionContent}>
          <p className={projectsStyles.projectAccordionStory}>{project.story}</p>
        </div>
      </div>
    </details>
  )
}

/* ── Page ─────────────────────────────────────────────────── */

export default async function Home() {
  const homepageContent = await getHomepageContent()
  const sitePhotos = await getSitePhotos()
  const sanitySponsors = await getSponsors()
  const homepageProjects = homepageContent?.projects?.length ? homepageContent.projects : projectFallback

  const homepageSponsors: SanitySponsor[] = sanitySponsors.length > 0
    ? sanitySponsors
    : sponsorFallbackNames.map((name) => ({ _id: name, name }))

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
                <span>Încearcă și tu</span>
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
            <div className="kot-about__hero-row">
              <div className="kot-about__intro">
                <h2 className="kot-section__title">
                  Etalonul țării<br />în cheer sport.
                </h2>

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

              <div className="kot-about__milestones kot-about__milestones--top">
                {aboutMilestonesTop.map((milestone) => (
                  <MilestoneCard
                    key={milestone.id}
                    milestone={milestone}
                    images={sitePhotos?.aboutMilestones}
                  />
                ))}
              </div>
            </div>

            <div className="kot-about__milestones kot-about__milestones--mid">
              {aboutMilestonesMid.map((milestone) => (
                <MilestoneCard
                  key={milestone.id}
                  milestone={milestone}
                  images={sitePhotos?.aboutMilestones}
                />
              ))}
            </div>

            {aboutMilestoneFeatured && (
              <div className="kot-about__milestones kot-about__milestones--bottom">
                <MilestoneCard milestone={aboutMilestoneFeatured} images={sitePhotos?.aboutMilestones} />
              </div>
            )}
          </div>
        </section>

        {/* ── Groups ── */}
        <section className="kot-section kot-section--paper" id="grupe">
          <div className="kot-container">
            <Eyebrow>Grupele noastre</Eyebrow>
            <h2 className="kot-section__title">
              7 grupe.<br />O singură familie.
            </h2>
            <p className="kot-section__sub">
              Apasă pe grupa potrivită pentru a vedea categoria, formatul și spațiul rezervat pentru fotografia ei.
            </p>
            <div className={groupsStyles.groupsStack}>
              {groups.map((g) => (
                <GroupAccordionItem key={g.id} group={g} images={sitePhotos?.groups} />
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
              Echipa din spatele rezultatelor.
            </h2>
            <p className="kot-section__sub">
              Această secțiune urmează să fie actualizată cu portrete și nume reale.
            </p>
            <div className="kot-staff__grid">
              {staff.map((s) => (
                <div key={s.slot} className="kot-staff-card">
                  <Photo
                    tone={s.tone}
                    ratio="4/5"
                    caption={`Foto: ${s.name}`}
                    image={sitePhotos?.staff?.[s.slot]}
                  />
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
              Povestea din spatele<br />proiectelor KOT.
            </h2>
            <p className="kot-section__sub kot-section__sub--inv">
              Apasă pe fiecare proiect pentru a deschide povestea din spatele lui.
            </p>
            <div className={projectsStyles.projectsStack}>
              {homepageProjects.map((project) => (
                <ProjectAccordionItem
                  key={project._key ?? project.slot}
                  project={project}
                  images={sitePhotos?.projects}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Events (client — filterable) ── */}
        <EventsSection photos={sitePhotos?.events} events={homepageContent?.events} />

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
                {homepageSponsors.map((sponsor) => {
                  const logoUrl = sponsor.logo?.asset
                    ? urlForImage(sponsor.logo).width(800).height(320).fit('max').auto('format').url()
                    : null

                  const content = logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt={sponsor.logo?.alt ?? sponsor.name}
                      width={800}
                      height={320}
                      className="kot-sponsor-logo__image"
                    />
                  ) : (
                    sponsor.name
                  )

                  return sponsor.websiteUrl ? (
                    <a
                      key={sponsor._id}
                      className={`kot-sponsor-logo${logoUrl ? ' kot-sponsor-logo--image' : ''}`}
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={sponsor._id} className={`kot-sponsor-logo${logoUrl ? ' kot-sponsor-logo--image' : ''}`}>
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="kot-section kot-section--white" id="contact">
          <div className="kot-container">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="kot-section__title">
              Încearcă și tu.<br />Sau scrie-ne.
            </h2>
            <div className="kot-contact__layout">
              {/* Form (client) */}
              <ContactForm />

              {/* Info + map */}
              <aside className="kot-contact__info">
                <ContactMap
                  latitude={contactMapLat}
                  longitude={contactMapLon}
                  address="Str. Fabricii de Zahăr 109"
                  locationLabel="Sala KOT · Cluj-Napoca"
                  directionsUrl={contactMapDirectionsUrl}
                />
                <ul className="kot-contact__list">
                  <li>
                    <MapPin size={20} />
                    <div><strong>Bază</strong><span>Str. Fabricii de Zahăr 109, 400631 Cluj-Napoca</span></div>
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

      <SiteFooter />
    </>
  )
}
