'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

type CountUpProps = {
  value: number
  suffix?: string
  duration?: number
}

/**
 * Scoreboard number that counts up when it scrolls into view.
 * Server-renders the final value, so without JS nothing is lost.
 */
export default function CountUp({ value, suffix = '', duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView || reduceMotion) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { el.textContent = `${Math.round(v)}${suffix}` },
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value, suffix, duration])

  return <strong ref={ref}>{value}{suffix}</strong>
}
