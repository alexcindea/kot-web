// Grupele noastre — squads by age group
function GroupsSection() {
  const { Container, Eyebrow, Reveal, Photo, Pill } = window.KOT_UI;
  const groups = [
    { name: 'Mini', age: '5–8 ani', count: '18 sportivi', tone: 'cyan', caption: 'Foto: grupa Mini la antrenament' },
    { name: 'Juniori', age: '9–12 ani', count: '24 sportivi', tone: 'orange', caption: 'Foto: piramidă' },
    { name: 'Cadeți', age: '13–15 ani', count: '20 sportivi', tone: 'cyan', caption: 'Foto: stunt cu basket-toss' },
    { name: 'Seniori', age: '16+ ani', count: '22 sportivi', tone: 'orange', caption: 'Foto: rutină de competiție' },
  ];

  return (
    <section className="kot-section kot-section--paper" id="grupe">
      <Container>
        <Reveal>
          <Eyebrow>Grupele noastre</Eyebrow>
          <h2 className="kot-section__title">Patru grupe.<br/>O singură echipă.</h2>
        </Reveal>
        <div className="kot-groups__grid">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 80}>
              <article className="kot-group-card">
                <Photo tone={g.tone} ratio="4/5" caption={g.caption}>
                  <span className="kot-group-card__age">{g.age}</span>
                </Photo>
                <div className="kot-group-card__body">
                  <h3 className="kot-group-card__name">{g.name}</h3>
                  <div className="kot-group-card__meta">{g.count}</div>
                  <a href="#" className="kot-group-card__link">
                    <span>Vezi grupa</span>
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

window.KOT_Groups = GroupsSection;
