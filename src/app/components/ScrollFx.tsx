'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Progressive scroll reveals: without JS every element stays visible —
 * the `kot-js` class is what arms the hidden initial state in CSS.
 */
export default function ScrollFx() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'))

    // Anything already on screen is marked revealed in the same frame the
    // hidden state is armed, so above-the-fold content never blinks.
    const viewportLimit = window.innerHeight * 0.95
    for (const el of targets) {
      if (el.getBoundingClientRect().top < viewportLimit) el.classList.add('is-in')
    }
    document.documentElement.classList.add('kot-js')

    const remaining = targets.filter((el) => !el.classList.contains('is-in'))
    if (remaining.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    remaining.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
