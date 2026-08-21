import projectsStyles from '@/app/projects-section.module.css'
import SectionMark from '@/app/components/ui/SectionMark'
import ProjectAccordionItem from './ProjectAccordionItem'
import type { HomepageProject, SitePhotosDocument } from '@/sanity/lib/types'

export default function ProjectsSection({ projects, images }: { projects: HomepageProject[]; images?: SitePhotosDocument['projects'] }) {
  return (
    <section className="kot-section kot-section--ink" id="proiecte">
      <div className="kot-container">
        <SectionMark index="04" tone="ember">Proiecte</SectionMark>
        <h2 className="kot-section__title kot-section__title--inv" data-reveal="wipe">
          Povestea din spatele<br />proiectelor <em>KOT</em>.
        </h2>
        <p className="kot-section__sub kot-section__sub--inv" data-reveal>
          Apasă pe fiecare proiect pentru a deschide povestea din spatele lui.
        </p>
        <div className={projectsStyles.projectsStack} data-reveal-group>
          {projects.map((project) => (
            <ProjectAccordionItem
              key={project._key ?? project.slot}
              project={project}
              images={images}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
