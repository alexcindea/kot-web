'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'

const phrases = ['ÎN INIMA TRANSILVANIEI', 'MOMENTUL TĂU WOOW', 'PERFORMANȚĂ ȘI SPECTACOL']

const phraseVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
  exit: { transition: { staggerChildren: 0.012, staggerDirection: -1 } },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: '0.75em', rotate: 4 },
  show: {
    opacity: 1,
    y: '0em',
    rotate: 0,
    transition: { type: 'spring', stiffness: 480, damping: 32 },
  },
  exit: {
    opacity: 0,
    y: '-0.55em',
    rotate: -3,
    transition: { duration: 0.16, ease: 'easeIn' },
  },
}

export default function HeroRotate() {
  const [idx, setIdx] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 3800)
    return () => clearInterval(t)
  }, [])

  const text = phrases[idx]

  if (reduceMotion) {
    return <span className="kot-hero__rotate">{text}</span>
  }

  const words = text.split(' ')

  return (
    <span className="kot-hero__rotate" aria-label={text}>
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={idx}
          className="kot-kinetic"
          variants={phraseVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          aria-hidden="true"
        >
          {words.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="kot-kinetic__word">
              {word.split('').map((ch, charIndex) => (
                <m.span
                  key={`${wordIndex}-${charIndex}`}
                  className="kot-kinetic__letter"
                  variants={letterVariants}
                >
                  {ch}
                </m.span>
              ))}
              {wordIndex < words.length - 1 && <span className="kot-kinetic__space">&nbsp;</span>}
            </span>
          ))}
        </m.span>
      </AnimatePresence>
    </span>
  )
}
