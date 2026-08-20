'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import ScrollProgress from './ScrollProgress'

/**
 * Shared Motion context: honours the user's reduced-motion setting and
 * keeps a single default easing so every animated component feels related.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
        <ScrollProgress />
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
