'use client'

import { useRef } from 'react'
import {
  m,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'

const wrap = (min: number, max: number, v: number) => {
  const range = max - min
  return min + (((v - min) % range) + range) % range
}

type VelocityMarqueeProps = {
  children: React.ReactNode
  /** Idle drift in % of track width per second. Negative reverses. */
  baseVelocity?: number
  copies?: number
  className?: string
  /** Gap between items — applied inside each copy so the wrap stays seamless. */
  gap?: string
}

/**
 * Infinite tape that drifts on its own and surges with scroll velocity —
 * scrolling down speeds it up, scrolling up reverses it. Hover eases it
 * almost to a stop so the words can be read.
 */
export default function VelocityMarquee({
  children,
  baseVelocity = 0.8,
  copies = 4,
  className,
  gap = '40px',
}: VelocityMarqueeProps) {
  const reduceMotion = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4.5], { clamp: false })
  const directionFactor = useRef(1)
  const hovering = useRef(false)

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    const vf = velocityFactor.get()
    if (vf < 0) directionFactor.current = -1
    else if (vf > 0) directionFactor.current = 1

    moveBy += directionFactor.current * moveBy * Math.abs(vf)
    if (hovering.current) moveBy *= 0.15

    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${wrap(-100 / copies, 0, v)}%`)

  return (
    <m.div
      className={className}
      style={{ x, gap: 0 }}
      onPointerEnter={() => { hovering.current = true }}
      onPointerLeave={() => { hovering.current = false }}
    >
      {Array.from({ length: copies }).map((_, i) => (
        <span
          key={i}
          className="kot-vmq__copy"
          style={{ gap, paddingRight: gap }}
          aria-hidden={i > 0 || undefined}
        >
          {children}
        </span>
      ))}
    </m.div>
  )
}
