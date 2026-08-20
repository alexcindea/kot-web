'use client'

import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'

type ParallaxProps = {
  children: React.ReactNode
  /** Vertical travel in px while the element crosses the viewport. */
  from?: number
  to?: number
  className?: string
}

/** Drifts its content vertically as the page scrolls past it. */
export default function Parallax({ children, from = -40, to = 80, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [from, to])

  return (
    <m.div ref={ref} className={className} style={{ y }}>
      {children}
    </m.div>
  )
}
