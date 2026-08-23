import AboutGallery from '@/app/components/AboutGallery'
import SectionMark from '@/app/components/ui/SectionMark'
import type { AboutMilestoneEntry } from '@/sanity/lib/types'

/** Reads the milestone list straight from Sanity, so adding one is a Studio edit. */
export default function AboutSection({ milestones }: { milestones: AboutMilestoneEntry[] }) {
  const years = milestones.map((milestone) => milestone.year).filter(Boolean)
  const range = years.length > 1 ? `${years[0]} — ${years[years.length - 1]}` : years[0] ?? ''

  return (
    <section className="kot-section kot-section--white" id="despre">
      <div className="kot-container">
        <SectionMark index="01">Despre noi</SectionMark>
        <div className="kot-about__intro" data-reveal>
          <h2 className="kot-section__title">
            Etalonul țării<br />în <em>cheer sport</em>.
          </h2>

          <div className="kot-about__copy">
            <p className="kot-about__lede">
              Knights Of Transylvania este structura clujeană devenită etalonul
              României în materie de cheer sport — peste 130 de sportivi între
              5 și 30 de ani, 16 instructori specializați și 20 de titluri
              naționale câștigate la toate categoriile de vârstă.
            </p>
            <p className="kot-about__body">
              Suntem liderul proiectelor care au pus România pe harta
              cheerleadingului mondial. Avem 8 participări ca echipă
              reprezentativă la Campionatul European, 7 medalii europene la
              juniori și seniori, și am fost nucleul primei echipe naționale la
              ICU Cheerleading Worlds 2025 din SUA.
            </p>
          </div>
        </div>

        {milestones.length > 0 && (
          <div className="kot-about__timeline" data-reveal>
            <div className="kot-about__timeline-head">
              <span className="kot-about__timeline-label">Momentele care ne-au construit</span>
              {range && (
                <span className="kot-about__timeline-range">{range}</span>
              )}
            </div>
            <AboutGallery milestones={milestones} />
          </div>
        )}
      </div>
    </section>
  )
}
