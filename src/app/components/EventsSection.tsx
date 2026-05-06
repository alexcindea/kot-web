import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { HomepageEvent, SitePhotosDocument } from '@/sanity/lib/types'

const eventFallback: HomepageEvent[] = [
  { title: 'UNTOLD', tone: 'cyan' as const, slot: 'untold' as const },
  { title: 'Zilele Clujului', tone: 'orange' as const, slot: 'zileleClujului' as const },
  { title: 'Sports Festival', tone: 'cyan' as const, slot: 'sportsFestival' as const },
  { title: 'Meciuri UBT', tone: 'orange' as const, slot: 'meciuriUbt' as const },
  { title: 'Wonder Family Fest', tone: 'cyan' as const, slot: 'wonderFamilyFest' as const },
  { title: 'Season Opening Show', tone: 'orange' as const, slot: 'seasonOpeningShow' as const },
]

type EventsSectionProps = {
  events?: HomepageEvent[]
  photos?: SitePhotosDocument['events']
}

export default function EventsSection({ events, photos }: EventsSectionProps) {
  const resolvedEvents = events?.length ? events : eventFallback

  const eventsWithPhotos = resolvedEvents.map((event) => ({
    ...event,
    photo: photos?.[event.slot],
  }))

  return (
    <section className="kot-section kot-section--white" id="evenimente">
      <div className="kot-container">
        <div className="kot-eyebrow-row">
          <span className="kot-eyebrow-dot dot-orange" />
          <span className="kot-eyebrow-text">Evenimente</span>
        </div>
        <h2 className="kot-section__title">
          Evenimente în care<br />ne vezi live.
        </h2>
        <p className="kot-section__sub">
          Aici apar doar fotografia și titlul fiecărui eveniment.
        </p>

        <div className="kot-events__grid">
          {eventsWithPhotos.map((e) => (
            <article key={e.slot} className="kot-event-card">
              <div className={`kot-photo kot-photo--${e.tone}`} style={{ aspectRatio: '3/2', borderRadius: 0 }}>
                {e.photo?.asset && (
                  <Image
                    src={urlForImage(e.photo).width(1200).height(800).fit('crop').auto('format').url()}
                    alt={e.photo?.alt ?? e.title}
                    fill
                    className="kot-photo__img"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                  />
                )}
                {!e.photo?.asset && (
                  <div className="kot-photo__inner">
                    <span className="kot-event-card__placeholder">{e.title}</span>
                  </div>
                )}
                {e.photo?.caption && <div className="kot-photo__caption">{e.photo.caption}</div>}
              </div>
              <div className="kot-event-card__body">
                <h3 className="kot-event-card__title">{e.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
