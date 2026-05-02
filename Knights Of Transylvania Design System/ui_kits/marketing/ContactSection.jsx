// Contact — form + map placeholder
const { useState: useStateContact } = React;

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
                <div className="kot-contact__map-pin">
                  <i data-lucide="map-pin" />
                </div>
                <div className="kot-contact__map-label">Cluj-Napoca · Transilvania</div>
              </div>
              <ul className="kot-contact__list">
                <li><i data-lucide="map-pin" /><div><strong>Bază</strong>Cluj-Napoca, România</div></li>
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
