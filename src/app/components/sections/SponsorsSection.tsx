import Image from 'next/image'
import { FileText, HeartHandshake, Download } from 'lucide-react'

import SectionMark from '@/app/components/ui/SectionMark'
import { urlForImage } from '@/sanity/lib/image'
import type { SanitySponsor } from '@/sanity/lib/types'

export default function SponsorsSection({ sponsors }: { sponsors: SanitySponsor[] }) {
  return (
    <section className="kot-section kot-section--orange" id="sponsorizare">
      <div className="kot-container">
        <div className="kot-sponsor__layout">
          <div data-reveal>
            <SectionMark index="06" tone="white">Sponsorizare</SectionMark>
            <h2 className="kot-section__title kot-section__title--inv">
              Ajută echipa<br />să zboare <em>mai sus</em>.
            </h2>
            <p className="kot-section__sub kot-section__sub--inv">
              Asociere cu un proiect sportiv credibil. Vizibilitate în
              contexte pozitive și organizate. Public tânăr și familii active.
              Energie care atrage atenția publicului.{' '}
              <strong>Suntem momentul tău WOOW.</strong>
            </p>
          </div>
          <div className="kot-sponsor__cards" data-reveal-group>
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
        <div className="kot-sponsor__logos" data-reveal>
          <div className="kot-sponsor__logos-label">Sponsori și parteneri</div>
          <div className="kot-sponsor__logos-strip" data-reveal-group="fast">
            {sponsors.map((sponsor) => {
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
  )
}
