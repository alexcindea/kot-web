'use client'

import { m, useScroll, useSpring } from 'motion/react'

/** Thin orange→cyan voltage line across the top that tracks scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 })

  return <m.div className="kot-progress" style={{ scaleX }} aria-hidden="true" />
}
