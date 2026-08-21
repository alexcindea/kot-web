import { ChevronDown } from 'lucide-react'

import projectsStyles from '@/app/projects-section.module.css'
import Photo from '@/app/components/ui/Photo'
import { projectPhotoSlots } from '@/sanity/photoSlots'
import type { HomepageProject, SitePhotosDocument } from '@/sanity/lib/types'

export default function ProjectAccordionItem({
  project,
  images,
}: {
  project: HomepageProject
  images?: SitePhotosDocument['projects']
}) {
  const image = images?.[project.slot]
  const toneClass = project.tone === 'ember' ? projectsStyles.projectAccordion : `${projectsStyles.projectAccordion} ${projectsStyles.projectAccordionFlame}`

  return (
    <details className={toneClass}>
      <summary className={projectsStyles.projectAccordionSummary}>
        <div className={projectsStyles.projectAccordionSummaryText}>
          <span className={projectsStyles.projectAccordionLabel}>{project.label}</span>
          <h3 className={projectsStyles.projectAccordionTitle}>{project.title}</h3>
        </div>
        <span className={projectsStyles.projectAccordionIcon} aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </summary>

      <div className={projectsStyles.projectAccordionBody}>
        <div className={projectsStyles.projectAccordionMedia}>
          <Photo
            caption={`Foto: ${project.title}`}
            ratio="16/9"
            tone={project.tone}
            image={image}
          >
            {!image?.asset && (
              <div className={projectsStyles.projectAccordionPlaceholder}>
                <span className={projectsStyles.projectAccordionPlaceholderLabel}>
                  Proiect · slot {projectPhotoSlots[project.slot].code}
                </span>
                <strong>{project.title}</strong>
              </div>
            )}
          </Photo>
        </div>

        <div className={projectsStyles.projectAccordionContent}>
          <p className={projectsStyles.projectAccordionStory}>{project.story}</p>
        </div>
      </div>
    </details>
  )
}
