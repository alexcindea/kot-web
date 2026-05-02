// Staff KOT — coach portraits
function StaffSection() {
  const { Container, Eyebrow, Reveal, Photo } = window.KOT_UI;
  const staff = [
    { name: 'Antrenor 1', role: 'Head coach · Seniori', tone: 'cyan' },
    { name: 'Antrenor 2', role: 'Coach · Juniori', tone: 'orange' },
    { name: 'Antrenor 3', role: 'Coach · Mini', tone: 'cyan' },
    { name: 'Antrenor 4', role: 'Coregraf', tone: 'orange' },
  ];
  return (
    <section className="kot-section kot-section--white" id="staff">
      <Container>
        <Reveal>
          <Eyebrow>Staff KOT</Eyebrow>
          <h2 className="kot-section__title">Antrenorii din spatele rezultatelor.</h2>
          <p className="kot-section__sub">Această secțiune urmează să fie actualizată cu portrete și nume reale.</p>
        </Reveal>
        <div className="kot-staff__grid">
          {staff.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="kot-staff-card">
                <Photo tone={s.tone} ratio="1/1" caption={'Foto: portret ' + s.name} />
                <div className="kot-staff-card__name">{s.name}</div>
                <div className="kot-staff-card__role">{s.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

window.KOT_Staff = StaffSection;
