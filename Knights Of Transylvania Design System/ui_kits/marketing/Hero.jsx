// Hero — kinetic headline with rotating phrase
const { useState: useStateHero, useEffect: useEffectHero } = React;

function Hero() {
  const { KineticText, Container } = window.KOT_UI;
  const phrases = ['ÎN INIMA TRANSILVANIEI', 'MOMENTUL TĂU WOOW', 'PERFORMANȚĂ ȘI SPECTACOL'];
  const [idx, setIdx] = useStateHero(0);

  useEffectHero(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % phrases.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="kot-hero" id="top">
      <div className="kot-hero__shapes" aria-hidden="true">
        <div className="kot-hero__shape kot-hero__shape--cyan" />
        <div className="kot-hero__shape kot-hero__shape--orange" />
      </div>
      <Container className="kot-hero__inner">
        <div className="kot-hero__eyebrow">
          <span className="kot-hero__dot" />
          KNIGHTS OF TRANSYLVANIA · CLUJ-NAPOCA
        </div>
        <h1 className="kot-hero__title">
          <KineticText text="CHEERLEADING" stagger={45} delay={100} />
          <br />
          <span className="kot-hero__rotate" key={idx}>
            <KineticText text={phrases[idx]} stagger={30} delay={0} className="kot-hero__rotate-inner" />
          </span>
        </h1>
        <p className="kot-hero__lede">
          Peste 130 de sportivi între 5 și 30 de ani, 16 instructori și 12
          țări în care am dus tricolorul. În 2025 am fost nucleul primei
          echipe naționale a României la ICU Cheerleading Worlds.
        </p>
        <div className="kot-hero__ctas">
          <a href="#contact" className="kot-btn kot-btn--primary kot-btn--lg">
            <span>Vino la antrenament</span>
            <i data-lucide="arrow-right" />
          </a>
          <a href="#despre" className="kot-btn kot-btn--ghost kot-btn--lg">
            <i data-lucide="play" />
            <span>Despre KOT</span>
          </a>
        </div>
        <div className="kot-hero__stats">
          <div><strong>130+</strong><span>Sportivi activi</span></div>
          <div><strong>16+</strong><span>Instructori</span></div>
          <div><strong>12+</strong><span>Țări concurate</span></div>
          <div><strong>10K+</strong><span>Spectatori</span></div>
        </div>
      </Container>
      <div className="kot-hero__scroll">
        <span>SCROLL</span>
        <i data-lucide="chevron-right" style={{ transform: 'rotate(90deg)' }} />
      </div>
    </section>
  );
}

window.KOT_Hero = Hero;
