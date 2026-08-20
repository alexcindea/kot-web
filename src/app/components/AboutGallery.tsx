'use client'

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { AboutMilestoneEntry } from '@/sanity/lib/types'
import { aboutSlotCode } from '@/sanity/photoSlots'
import styles from '../about-gallery.module.css'

/** Share of the strip the open panel takes. The rest split what is left. */
const EXPAND_RATIO = 0.46

type AboutGalleryProps = {
  milestones: AboutMilestoneEntry[]
}

/**
 * Accordion timeline for the About section, after React Bits' AccordionGallery
 * (reactbits.dev). Ported rather than vendored: the original drives GSAP and
 * plain <img> tags, while this reads Sanity images through next/image and
 * animates with CSS transitions the rest of the site already uses.
 *
 * The panel count is whatever Sanity holds, so adding a milestone needs no
 * code change — the flex-grow split rebalances on its own.
 */
export default function AboutGallery({ milestones }: AboutGalleryProps) {
  const count = milestones.length
  // Opens on the most recent milestone — the timeline reads left to right.
  const [active, setActive] = useState(Math.max(count - 1, 0))
  const rootRef = useRef<HTMLDivElement>(null)

  // Each photo is sized against the whole strip rather than its own panel, so
  // a collapsed panel crops its image instead of squashing it. Only the
  // horizontal layout needs this; stacked panels below 640px fill their box.
  useEffect(() => {
    const el = rootRef.current
    if (!el || count === 0) return

    const measure = () => {
      const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0
      const usable = Math.max(el.getBoundingClientRect().width - gap * (count - 1), 160)
      el.style.setProperty('--kot-ag-media', `${Math.max(200, usable * EXPAND_RATIO * 1.22)}px`)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [count])

  if (count === 0) return null

  const grow = count > 1 ? (EXPAND_RATIO * (count - 1)) / (1 - EXPAND_RATIO) : 1

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1
      : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1
      : 0
    if (step === 0) return

    event.preventDefault()
    const next = (active + step + count) % count
    setActive(next)
    rootRef.current?.querySelectorAll('button')[next]?.focus()
  }

  return (
    <div className={styles.gallery} ref={rootRef}>
      <ul className={styles.track}>
        {milestones.map((milestone, index) => {
          const isActive = index === active
          const tone = index % 2 === 0 ? 'cyan' : 'orange'
          const code = aboutSlotCode(index)
          const imageUrl = milestone.photo?.asset
            ? urlForImage(milestone.photo).width(900).height(1200).fit('crop').auto('format').url()
            : null

          return (
            <li
              key={milestone._key ?? `${milestone.year}-${index}`}
              className={styles.panel}
              data-state={isActive ? 'active' : index < active ? 'before' : 'after'}
              data-tone={tone}
              style={{
                flexGrow: isActive ? grow : 1,
                // Drives the parallax drift of the photo inside its panel.
                '--kot-ag-drift': Math.max(-1.5, Math.min(1.5, active - index)),
              } as CSSProperties}
            >
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isActive}
                onPointerEnter={(event) => {
                  if (event.pointerType !== 'touch') setActive(index)
                }}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                onKeyDown={onKeyDown}
              >
                <span className={styles.frame}>
                  <span className={styles.mediaAnchor}>
                    <span className={styles.media}>
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={milestone.photo?.alt ?? `${milestone.year} · ${milestone.label}`}
                          fill
                          className={styles.image}
                          sizes="(max-width: 640px) 100vw, 46vw"
                        />
                      ) : (
                        <span className={styles.placeholder} aria-hidden="true">
                          <span className={styles.placeholderCode}>{code}</span>
                          <span className={styles.placeholderHint}>Slot liber</span>
                        </span>
                      )}
                    </span>
                  </span>
                  <span className={styles.scrim} aria-hidden="true" />
                  <span className={styles.ticks} aria-hidden="true" />
                </span>

                <span className={styles.caption}>
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.year}>{milestone.year}</span>
                  <span className={styles.label}>{milestone.label}</span>
                </span>

                <span className={styles.spine} aria-hidden="true">{milestone.year}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
