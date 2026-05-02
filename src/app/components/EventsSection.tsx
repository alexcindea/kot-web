'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

const events = [
  { year: 2025, kind: 'Competiție', title: 'Campionatul Național', loc: 'Cluj-Napoca', tone: 'cyan' },
  { year: 2025, kind: 'Spectacol',  title: 'Gala KOT',            loc: 'Sibiu · Filarmonică', tone: 'orange' },
  { year: 2024, kind: 'Competiție', title: 'Cupa României',        loc: 'București', tone: 'cyan' },
  { year: 2024, kind: 'Spectacol',  title: 'Halftime liceu',       loc: 'CCS Sibiu', tone: 'orange' },
  { year: 2024, kind: 'Tabără',     title: 'Tabăra Națională',     loc: 'Sibiu', tone: 'cyan' },
  { year: 2023, kind: 'Competiție', title: 'Cupa Transilvaniei',   loc: 'Brașov', tone: 'orange' },
]

const years = ['Toate', 2025, 2024, 2023] as const
const kinds = ['Toate', 'Competiție', 'Spectacol', 'Tabără'] as const

export default function EventsSection() {
  const [year, setYear] = useState<(typeof years)[number]>('Toate')
  const [kind, setKind] = useState<(typeof kinds)[number]>('Toate')

  const filtered = events.filter(
    (e) =>
      (year === 'Toate' || e.year === year) &&
      (kind === 'Toate' || e.kind === kind),
  )

  return (
    <section className="kot-section kot-section--white" id="evenimente">
      <div className="kot-container">
        <div className="kot-eyebrow-row">
          <span className="kot-eyebrow-dot dot-orange" />
          <span className="kot-eyebrow-text">Evenimente</span>
        </div>
        <h2 className="kot-section__title">
          Foto din spectacole<br />și competiții.
        </h2>

        <div className="kot-events__filters">
          <div className="kot-filter-group">
            <span className="kot-filter-group__label">An</span>
            {years.map((y) => (
              <button
                key={String(y)}
                className={`kot-filter${year === y ? ' is-on' : ''}`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
          <div className="kot-filter-group">
            <span className="kot-filter-group__label">Tip</span>
            {kinds.map((k) => (
              <button
                key={k}
                className={`kot-filter${kind === k ? ' is-on' : ''}`}
                onClick={() => setKind(k)}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="kot-events__grid">
          {filtered.map((e, i) => (
            <article key={e.title + i} className="kot-event-card">
              <div
                className={`kot-photo kot-photo--${e.tone}`}
                style={{ aspectRatio: '3/2', borderRadius: 0 }}
              />
              <div className="kot-event-card__body">
                <div className="kot-event-card__row">
                  <span className={`kot-pill kot-pill--${e.tone} kot-pill--soft`}>{e.kind}</span>
                  <span className="kot-event-card__year">{e.year}</span>
                </div>
                <h3 className="kot-event-card__title">{e.title}</h3>
                <div className="kot-event-card__loc">
                  <MapPin size={14} />
                  {e.loc}
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="kot-events__empty">
              Nu există evenimente pentru filtrele selectate.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
