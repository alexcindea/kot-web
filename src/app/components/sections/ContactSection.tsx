import { MapPin, User, Phone, Trophy } from 'lucide-react'

import SectionMark from '@/app/components/ui/SectionMark'
import ContactMap from '@/app/components/ContactMap'
import ContactForm from '@/app/contact-form'
import { contactMapDirectionsUrl, contactMapLat, contactMapLon } from '@/app/content/site'

export default function ContactSection() {
  return (
    <section className="kot-section kot-section--white" id="contact">
      <div className="kot-container">
        <SectionMark index="07">Contact</SectionMark>
        <h2 className="kot-section__title" data-reveal="wipe">
          Încearcă și tu.<br />Sau <em>scrie-ne</em>.
        </h2>
        <div className="kot-contact__layout" data-reveal-group>
          {/* Form (client) */}
          <ContactForm />

          {/* Info + map */}
          <aside className="kot-contact__info">
            <ContactMap
              latitude={contactMapLat}
              longitude={contactMapLon}
              address="Str. Fabricii de Zahăr 109"
              locationLabel="Sala KOT · Cluj-Napoca"
              directionsUrl={contactMapDirectionsUrl}
            />
            <ul className="kot-contact__list">
              <li>
                <MapPin size={20} />
                <div><strong>Bază</strong><span>Str. Fabricii de Zahăr 109, 400631 Cluj-Napoca</span></div>
              </li>
              <li>
                <User size={20} />
                <div><strong>Persoană de contact</strong><span>Carmen Biriș</span></div>
              </li>
              <li>
                <Phone size={20} />
                <div><strong>Telefon</strong><span>0799 822 100</span></div>
              </li>
              <li>
                <Trophy size={20} />
                <div><strong>30 mai 2026</strong><span>Campionatul Național · Turda</span></div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
