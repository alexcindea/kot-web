import groupsStyles from '@/app/groups-section.module.css'
import SectionMark from '@/app/components/ui/SectionMark'
import GroupAccordionItem from './GroupAccordionItem'
import { groups } from '@/app/content/groups'
import type { SitePhotosDocument } from '@/sanity/lib/types'

export default function GroupsSection({ images }: { images?: SitePhotosDocument['groups'] }) {
  return (
    <section className="kot-section kot-section--paper" id="grupe">
      <div className="kot-container">
        <SectionMark index="02" tone="ember">Grupele noastre</SectionMark>
        <h2 className="kot-section__title" data-reveal="wipe">
          7 grupe.<br />O singură <em>familie</em>.
        </h2>
        <p className="kot-section__sub" data-reveal>
          Apasă pe grupa potrivită pentru a vedea categoria, formatul și spațiul rezervat pentru fotografia ei.
        </p>
        <div className={groupsStyles.groupsStack} data-reveal-group>
          {groups.map((g) => (
            <GroupAccordionItem key={g.id} group={g} images={images} />
          ))}
        </div>
      </div>
    </section>
  )
}
