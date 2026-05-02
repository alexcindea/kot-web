// Footer
function Footer() {
  const { Container } = window.KOT_UI;
  return (
    <footer className="kot-footer">
      <Container>
        <div className="kot-footer__top">
          <div className="kot-footer__brand">
            <img src="../../assets/logo-kot-shield-transparent.png" alt="KOT" />
            <div>
              <div className="kot-footer__name">Knights Of Transylvania</div>
              <div className="kot-footer__sub">Performanță și spectacol în inima Transilvaniei</div>
            </div>
          </div>
          <div className="kot-footer__links">
            <div>
              <h5>Echipa</h5>
              <a href="#despre">Despre</a>
              <a href="#grupe">Grupele</a>
              <a href="#staff">Staff</a>
            </div>
            <div>
              <h5>Activitate</h5>
              <a href="#proiecte">Proiecte</a>
              <a href="#evenimente">Evenimente</a>
              <a href="#sponsorizare">Sponsorizare</a>
            </div>
            <div>
              <h5>Urmărește</h5>
              <a href="#"><i data-lucide="instagram" />Instagram</a>
              <a href="#"><i data-lucide="facebook" />Facebook</a>
              <a href="#"><i data-lucide="youtube" />YouTube</a>
            </div>
          </div>
        </div>
        <div className="kot-footer__bottom">
          <span>© 2026 Knights Of Transylvania · Cluj-Napoca</span>
          <span>Hai KOT! 🧡💙</span>
        </div>
      </Container>
    </footer>
  );
}

window.KOT_Footer = Footer;
