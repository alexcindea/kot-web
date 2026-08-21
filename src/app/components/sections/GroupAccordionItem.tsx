import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

import groupsStyles from '@/app/groups-section.module.css'
import type { TrainingGroup } from '@/app/content/groups'
import { urlForImage } from '@/sanity/lib/image'
import { groupPhotoSlots } from '@/sanity/photoSlots'
import type { SitePhotosDocument } from '@/sanity/lib/types'

export default function GroupAccordionItem({
  group,
  images,
}: {
  group: TrainingGroup
  images?: SitePhotosDocument['groups']
}) {
  const image = images?.[group.id]
  const imageUrl = image?.asset
    ? urlForImage(image).width(1200).height(900).fit('crop').auto('format').url()
    : null
  const toneClass = group.tone === 'flame' ? groupsStyles.groupAccordionFlame : groupsStyles.groupAccordionEmber
  const noteText = group.note ? (/[.!?]$/.test(group.note) ? group.note : `${group.note}.`) : null

  return (
    <details className={`${groupsStyles.groupAccordion} ${toneClass}`}>
      <summary className={groupsStyles.groupAccordionSummary}>
        <div className={groupsStyles.groupAccordionSummaryMain}>
          <div className={groupsStyles.groupAccordionHeadingRow}>
            <h3 className={groupsStyles.groupAccordionName}>{group.name}</h3>
            <span className={groupsStyles.groupAccordionAge}>{group.age}</span>
            {group.note && <span className={groupsStyles.groupAccordionNote}>{group.note}</span>}
          </div>
          <div className={groupsStyles.groupAccordionFormat}>{group.format}</div>
        </div>
        <span className={groupsStyles.groupAccordionIcon} aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </summary>

      <div className={groupsStyles.groupAccordionBody}>
        <div className={groupsStyles.groupAccordionContent}>
          <p className={groupsStyles.groupAccordionDescription}>{group.description}</p>
          {noteText && <p className={groupsStyles.groupAccordionNoteText}>{noteText}</p>}

          <div className={groupsStyles.groupAccordionMeta}>
            <div className={groupsStyles.groupAccordionMetaItem}>
              <strong>Vârstă</strong>
              <span>{group.age}</span>
            </div>
            <div className={groupsStyles.groupAccordionMetaItem}>
              <strong>Format</strong>
              <span>{group.format}</span>
            </div>
          </div>

          <a href="#contact" className={groupsStyles.groupAccordionLink}>
            <span>Încearcă și tu</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className={groupsStyles.groupAccordionMedia}>
          {imageUrl ? (
            <div className={groupsStyles.groupAccordionImageWrap}>
              <Image
                src={imageUrl}
                alt={image?.alt ?? `${group.name} group photo`}
                width={1200}
                height={900}
                className={groupsStyles.groupAccordionImage}
              />
            </div>
          ) : (
            <div className={groupsStyles.groupAccordionPlaceholder}>
              <span className={groupsStyles.groupAccordionPlaceholderLabel}>
                Foto grupă · slot {groupPhotoSlots[group.id].code}
              </span>
              <strong>Adăugăm fotografia aici după ce o alegem.</strong>
            </div>
          )}
        </div>
      </div>
    </details>
  )
}
