'use client'

import { useState, useEffect } from 'react'

const phrases = ['ÎN INIMA TRANSILVANIEI', 'MOMENTUL TĂU WOOW', 'PERFORMANȚĂ ȘI SPECTACOL']

export default function HeroRotate() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % phrases.length), 3800)
    return () => clearInterval(t)
  }, [])

  const text = phrases[idx]

  return (
    <span className="kot-hero__rotate" key={idx} aria-label={text}>
      <span className="kot-kinetic">
        {text.split('').map((ch, i) => (
          <span
            key={i}
            className="kot-kinetic__letter"
            style={{ animationDelay: `${i * 30}ms` }}
            aria-hidden="true"
          >
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </span>
    </span>
  )
}
