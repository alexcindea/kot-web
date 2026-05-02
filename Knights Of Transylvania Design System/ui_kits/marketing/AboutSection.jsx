// Despre noi — story with milestone photos
function AboutSection() {
  const { Container, Eyebrow, Reveal, Photo } = window.KOT_UI;
  const milestones = [
    { year: '2012', label: 'Începutul', tone: 'cyan', caption: 'Foto: prima echipă, 12 fete' },
    { year: '2016', label: 'Primul podium', tone: 'orange', caption: 'Foto: medalia de bronz națională' },
    { year: '2019', label: 'Erasmus+', tone: 'cyan', caption: 'Foto: schimb internațional' },
    { year: '2024', label: 'Team Romania', tone: 'orange', caption: 'Foto: stunt în salt' },
  ];

  return (
    <section className="kot-section kot-section--white" id="despre">
      <Container>
        <Reveal>
          <Eyebrow>Despre noi</Eyebrow>
          <h2 className="kot-section__title">Etalonul țării<br/>în cheer sport.</h2>
        </Reveal>
        <div className="kot-about__layout">
          <Reveal delay={100}>
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
          </Reveal>
          <Reveal delay={200}>
            <div className="kot-about__milestones">
              {milestones.map((m, i) => (
                <div key={i} className="kot-milestone">
                  <Photo tone={m.tone} ratio="4/5" caption={m.caption}>
                    <div className="kot-milestone__year">{m.year}</div>
                    <div className="kot-milestone__label">{m.label}</div>
                  </Photo>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

window.KOT_About = AboutSection;
