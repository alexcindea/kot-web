// Evenimente — filterable photo grid
const { useState: useStateEv } = React;

function EventsSection() {
  const { Container, Eyebrow, Reveal, Photo, Pill } = window.KOT_UI;
  const events = [
    { year: 2025, kind: 'Competiție', title: 'Campionatul Național', loc: 'Cluj-Napoca', tone: 'cyan' },
    { year: 2025, kind: 'Spectacol', title: 'Gala KOT', loc: 'Sibiu · Filarmonică', tone: 'orange' },
    { year: 2024, kind: 'Competiție', title: 'Cupa României', loc: 'București', tone: 'cyan' },
    { year: 2024, kind: 'Spectacol', title: 'Halftime liceu', loc: 'CCS Sibiu', tone: 'orange' },
    { year: 2024, kind: 'Tabără', title: 'Tabăra Națională', loc: 'Sibiu', tone: 'cyan' },
    { year: 2023, kind: 'Competiție', title: 'Cupa Transilvaniei', loc: 'Brașov', tone: 'orange' },
  ];
  const years = ['Toate', 2025, 2024, 2023];
  const kinds = ['Toate', 'Competiție', 'Spectacol', 'Tabără'];
  const [year, setYear] = useStateEv('Toate');
  const [kind, setKind] = useStateEv('Toate');

  const filtered = events.filter(e =>
    (year === 'Toate' || e.year === year) &&
    (kind === 'Toate' || e.kind === kind)
  );

  return (
    <section className="kot-section kot-section--white" id="evenimente">
      <Container>
        <Reveal>
          <Eyebrow>Evenimente</Eyebrow>
          <h2 className="kot-section__title">Foto din spectacole<br/>și competiții.</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="kot-events__filters">
            <div className="kot-filter-group">
              <span className="kot-filter-group__label">An</span>
              {years.map(y => (
                <button
                  key={y}
                  className={'kot-filter ' + (year === y ? 'is-on' : '')}
                  onClick={() => setYear(y)}
                >{y}</button>
              ))}
            </div>
            <div className="kot-filter-group">
              <span className="kot-filter-group__label">Tip</span>
              {kinds.map(k => (
                <button
                  key={k}
                  className={'kot-filter ' + (kind === k ? 'is-on' : '')}
                  onClick={() => setKind(k)}
                >{k}</button>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="kot-events__grid">
          {filtered.map((e, i) => (
            <Reveal key={e.title + i} delay={i * 50}>
              <article className="kot-event-card">
                <Photo tone={e.tone} ratio="3/2" caption={'Foto: ' + e.title} />
                <div className="kot-event-card__body">
                  <div className="kot-event-card__row">
                    <Pill tone={e.tone} soft>{e.kind}</Pill>
                    <span className="kot-event-card__year">{e.year}</span>
                  </div>
                  <h3 className="kot-event-card__title">{e.title}</h3>
                  <div className="kot-event-card__loc">
                    <i data-lucide="map-pin" />
                    {e.loc}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div className="kot-events__empty">Nu există evenimente pentru filtrele selectate.</div>
          )}
        </div>
      </Container>
    </section>
  );
}

window.KOT_Events = EventsSection;
