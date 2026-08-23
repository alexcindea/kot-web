import Image from 'next/image'
import { ArrowRight, Check, Download, FileText, HeartHandshake } from 'lucide-react'

import SectionMark from '@/app/components/ui/SectionMark'
import {
  SPONSOR_CONTACT_URL,
  SPONSOR_DECK_URL,
  sponsorBenefits,
  sponsorReach,
} from '@/app/content/sponsorship'
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
              Sponsorii sunt motivul pentru care putem duce sportivii la concursuri.{' '}
              <strong>Suntem momentul tău WOOW.</strong>
            </p>

            <ul className="kot-sponsor__benefits">
              {sponsorBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <Check size={18} aria-hidden="true" />
                  <div>
                    <strong>{benefit.title}</strong>
                    <span>{benefit.detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="kot-sponsor__ctas">
              <a href={SPONSOR_CONTACT_URL} className="kot-btn kot-btn--dark kot-btn--lg">
                <span>Devino sponsor</span>
                <ArrowRight size={18} />
              </a>
              <a
                href={SPONSOR_DECK_URL}
                className="kot-btn kot-btn--chalk kot-btn--lg"
                download
              >
                <Download size={18} />
                <span>Descarcă mapa</span>
              </a>
            </div>
          </div>

          <div className="kot-sponsor__cards" data-reveal-group>
            <article className="kot-sponsor-card">
              <FileText size={28} />
              <h3>Mapa de prezentare</h3>
              <p>PDF cu obiective, audiență și pachete de sponsorizare 2026.</p>
              <a href={SPONSOR_DECK_URL} className="kot-btn kot-btn--dark kot-btn--sm" download>
                <Download size={16} />
                <span>Descarcă mapa</span>
              </a>
            </article>
            <article className="kot-sponsor-card">
              <HeartHandshake size={28} />
              <h3>Formular 230</h3>
              <p>Redirecționează 3.5% din impozit către KOT. Durează 2 minute.</p>
              <a href={SPONSOR_CONTACT_URL} className="kot-btn kot-btn--dark kot-btn--sm">
                <span>Cere formularul</span>
                <ArrowRight size={16} />
              </a>
            </article>
          </div>
        </div>

        {/* The pitch, in the terms a sponsor actually buys: reach. */}
        <div className="kot-sponsor__reach" data-reveal-group role="list" aria-label="KOT în cifre pentru sponsori">
          {sponsorReach.map((item) => (
            <div key={item.label} role="listitem">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <em>{item.detail}</em>
            </div>
          ))}
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
