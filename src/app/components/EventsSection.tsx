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
        <div className="kot-mark" data-reveal>
          <span className="kot-mark__num kot-mark__num--orange" aria-hidden="true">05</span>
          <span className="kot-mark__rule" aria-hidden="true" />
          <span className="kot-mark__label">Evenimente</span>
        </div>
        <h2 className="kot-section__title" data-reveal>
          Evenimente în care<br />ne vezi <em>live</em>.
        </h2>
        <p className="kot-section__sub" data-reveal>
          Aici apar doar fotografia și titlul fiecărui eveniment.
        </p>

        <div className="kot-events__grid" data-reveal>
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
