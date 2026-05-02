// Proiecte — major team programs
function ProjectsSection() {
  const { Container, Eyebrow, Reveal, Photo, Pill } = window.KOT_UI;
  const projects = [
    { title: 'ICU Worlds 2025', tag: 'Mondial', tone: 'cyan',
      desc: 'Am fost nucleul primei echipe naționale care a reprezentat România la ICU Cheerleading Worlds în SUA.' },
    { title: 'Campionatul European', tag: 'Internațional', tone: 'orange',
      desc: '8 participări ca echipă reprezentativă a României. 7 medalii europene câștigate la juniori și seniori.' },
    { title: 'Campionatul Național 2026', tag: 'Gazdă', tone: 'cyan',
      desc: '30 mai, Nova PG Arena Turda. 700+ sportivi, 1000+ spectatori, 10+ structuri sportive în luptă pentru aur.' },
    { title: 'Team Romania', tag: 'Lot', tone: 'orange',
      desc: 'Lider al proiectelor de dezvoltare care au pus România pe harta cheerleadingului mondial.' },
    { title: '20+ titluri naționale', tag: 'Palmares', tone: 'cyan',
      desc: 'Peste 20 de titluri câștigate de grupele KOT la nivel național, la toate categoriile de vârstă.' },
  ];

  return (
    <section className="kot-section kot-section--ink" id="proiecte">
      <Container>
        <Reveal>
          <Eyebrow color="cyan">Proiecte</Eyebrow>
          <h2 className="kot-section__title kot-section__title--inv">Mai mult decât o echipă.<br/>O mișcare.</h2>
        </Reveal>
        <div className="kot-projects__grid">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <article className={'kot-project kot-project--' + p.tone}>
                <Photo tone={p.tone} ratio="16/9" caption={'Foto: ' + p.title} />
                <div className="kot-project__body">
                  <Pill tone={p.tone} soft>{p.tag}</Pill>
                  <h3 className="kot-project__title">{p.title}</h3>
                  <p className="kot-project__desc">{p.desc}</p>
                  <a href="#" className="kot-project__link">
                    <span>Citește povestea</span>
                    <i data-lucide="arrow-right" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

window.KOT_Projects = ProjectsSection;
