import Photo from '@/app/components/ui/Photo'
import SectionMark from '@/app/components/ui/SectionMark'
import SlotCode from '@/app/components/ui/SlotCode'
import { staff } from '@/app/content/staff'
import { staffPhotoSlots } from '@/sanity/photoSlots'
import type { SitePhotosDocument } from '@/sanity/lib/types'

export default function StaffSection({ images }: { images?: SitePhotosDocument['staff'] }) {
  return (
    <section className="kot-section kot-section--ink" id="staff">
      <div className="kot-container">
        <SectionMark index="03" tone="white">Staff KOT</SectionMark>
        <h2 className="kot-section__title kot-section__title--inv" data-reveal="wipe">
          Echipa din spatele<br /><em>rezultatelor</em>.
        </h2>
        <p className="kot-section__sub kot-section__sub--inv" data-reveal>
          Această secțiune urmează să fie actualizată cu portrete și nume reale.
        </p>
        <div className="kot-staff__grid" data-reveal-group>
          {staff.map((s) => (
            <div key={s.slot} className="kot-staff-card">
              <Photo
                tone={s.tone}
                ratio="4/5"
                caption={`Foto: ${s.name}`}
                image={images?.[s.slot]}
              >
                {!images?.[s.slot]?.asset && (
                  <SlotCode code={staffPhotoSlots[s.slot].code} />
                )}
              </Photo>
              <div className="kot-staff-card__plate">
                <div className="kot-staff-card__name">{s.name}</div>
                <div className="kot-staff-card__role">{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
