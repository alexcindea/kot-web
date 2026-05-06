// Contact — form + map placeholder
const { useState: useStateContact } = React;

const contactMapQuery = encodeURIComponent('Str. Fabricii de Zahăr 109, 400631 Cluj-Napoca, Romania');
const contactMapLat = 46.786109;
const contactMapLon = 23.6263783;
const contactMapBbox = [
  contactMapLon - 0.0036,
  contactMapLat - 0.0022,
  contactMapLon + 0.0036,
  contactMapLat + 0.0022,
].map((value) => value.toFixed(6)).join('%2C');
const contactMapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${contactMapBbox}&layer=mapnik&marker=${contactMapLat}%2C${contactMapLon}`;
const contactMapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${contactMapQuery}`;

function ContactSection() {
  const { Container, Eyebrow, Reveal } = window.KOT_UI;
  const [name, setName] = useStateContact('');
  const [email, setEmail] = useStateContact('');
  const [message, setMessage] = useStateContact('');
  const [sent, setSent] = useStateContact(false);
  const [err, setErr] = useStateContact('');

  function submit(e) {
    e.preventDefault();
    if (!name || !email || !message) { setErr('Completează toate câmpurile.'); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('Adresă de email invalidă.'); return; }
    setErr('');
    setSent(true);
  }

  return (
    <section className="kot-section kot-section--white" id="contact">
      <Container>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="kot-section__title">Vino la antrenament.<br/>Sau scrie-ne.</h2>
        </Reveal>
        <div className="kot-contact__layout">
          <Reveal delay={80}>
            <form className="kot-contact__form" onSubmit={submit}>
              {sent ? (
                <div className="kot-contact__sent">
                  <i data-lucide="check-circle-2" />
                  <h3>Mesaj trimis!</h3>
                  <p>Te sunăm sau scriem în maxim 24 de ore.</p>
                </div>
              ) : (
                <>
                  <label className="kot-field">
                    <span>Nume</span>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Maria Popescu" />
                  </label>
                  <label className="kot-field">
                    <span>Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="maria@email.ro" />
                  </label>
                  <label className="kot-field">
                    <span>Mesaj</span>
                    <textarea rows="5" value={message} onChange={e => setMessage(e.target.value)} placeholder="Vreau să mă înscriu la grupa juniori..." />
                  </label>
                  {err && <div className="kot-contact__err">{err}</div>}
                  <button type="submit" className="kot-btn kot-btn--primary kot-btn--lg">
                    <span>Trimite mesajul</span>
                    <i data-lucide="send" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
          <Reveal delay={160}>
            <aside className="kot-contact__info">
              <div className="kot-contact__map">
                <iframe
                  className="kot-contact__map-frame"
                  src={contactMapEmbedUrl}
                  title="Harta Knights of Transylvania in Cluj-Napoca"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="kot-contact__map-overlay">
                  <div className="kot-contact__map-card">
                    <div className="kot-contact__map-kicker">
                      <i data-lucide="map-pin" />
                      <span>Sala KOT · Cluj-Napoca</span>
                    </div>
                    <div className="kot-contact__map-label">Str. Fabricii de Zahăr 109</div>
                  </div>
                  <a className="kot-contact__map-link" href={contactMapDirectionsUrl} target="_blank" rel="noopener noreferrer">
                    <span>Navighează</span>
                    <i data-lucide="arrow-right" />
                  </a>
                </div>
              </div>
              <ul className="kot-contact__list">
                <li><i data-lucide="map-pin" /><div><strong>Bază</strong>Str. Fabricii de Zahăr 109, 400631 Cluj-Napoca</div></li>
                <li><i data-lucide="user" /><div><strong>Carmen Biriș</strong>Persoană de contact</div></li>
                <li><i data-lucide="phone" /><div><strong>Telefon</strong>0799 822 100</div></li>
                <li><i data-lucide="trophy" /><div><strong>30 mai 2026</strong>Campionatul Național · Turda</div></li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

window.KOT_Contact = ContactSection;
