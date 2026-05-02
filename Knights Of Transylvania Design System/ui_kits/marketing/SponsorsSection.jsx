// Sponsorizare — pitch + form 230 + logo strip
function SponsorsSection() {
  const { Container, Eyebrow, Reveal } = window.KOT_UI;
  const sponsors = [
    'CCS Sibiu', 'Primăria Sibiu', 'ProSport', 'Erasmus+',
    'Decathlon', 'CEC Bank', 'Hochland', 'Sibex',
    'Continental', 'Hervis', 'Brio', 'OMV',
  ];
  return (
    <section className="kot-section kot-section--orange" id="sponsorizare">
      <Container>
        <div className="kot-sponsor__layout">
          <Reveal>
            <Eyebrow color="white">Sponsorizare</Eyebrow>
            <h2 className="kot-section__title kot-section__title--inv">Ajută echipa<br/>să zboare mai sus.</h2>
            <p className="kot-section__sub kot-section__sub--inv">
              Asociere cu un proiect sportiv credibil. Vizibilitate în
              contexte pozitive și organizate. Public tânăr și familii active.
              Energie care atrage atenția publicului. <strong>Suntem momentul tău WOOW.</strong>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="kot-sponsor__cards">
              <article className="kot-sponsor-card">
                <i data-lucide="file-text" />
                <h3>Mapa de prezentare</h3>
                <p>PDF cu obiective, audiență și pachete de sponsorizare 2026.</p>
                <a href="#" className="kot-btn kot-btn--dark kot-btn--sm">
                  <i data-lucide="download" />
                  <span>Descarcă mapa</span>
                </a>
              </article>
              <article className="kot-sponsor-card">
                <i data-lucide="heart-handshake" />
                <h3>Formular 230</h3>
                <p>Redirecționează 3.5% din impozit către KOT. Durează 2 minute.</p>
                <a href="#" className="kot-btn kot-btn--dark kot-btn--sm">
                  <i data-lucide="download" />
                  <span>Descarcă formularul</span>
                </a>
              </article>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="kot-sponsor__logos">
            <div className="kot-sponsor__logos-label">Sponsori și parteneri</div>
            <div className="kot-sponsor__logos-strip">
              {sponsors.map((s, i) => (
                <div key={i} className="kot-sponsor-logo">{s}</div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

window.KOT_Sponsors = SponsorsSection;
