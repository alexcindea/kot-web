'use client'

import { m, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

type MagneticProps = {
  children: React.ReactNode
  /** How strongly the content leans toward the cursor (0–1). */
  strength?: number
  className?: string
}

/** Wrapper that makes its child lean toward the cursor with a springy pull. */
export default function Magnetic({ children, strength = 0.28, className }: MagneticProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 })
  const reduceMotion = useReducedMotion()

  return (
    <m.div
      className={className}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onPointerMove={(e) => {
        if (reduceMotion) return
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </m.div>
  )
}
