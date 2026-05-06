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
  const words = text.split(' ')
  const animatedWords = words.reduce<Array<{ word: string; startIndex: number }>>((acc, word) => {
    const previous = acc[acc.length - 1]
    const startIndex = previous ? previous.startIndex + previous.word.length : 0

    acc.push({ word, startIndex })
    return acc
  }, [])

  return (
    <span className="kot-hero__rotate" key={idx} aria-label={text}>
      <span className="kot-kinetic">
        {animatedWords.map(({ word, startIndex }, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="kot-kinetic__word" aria-hidden="true">
            {word.split('').map((ch, charIndex) => {
              const currentIndex = startIndex + charIndex

              return (
                <span
                  key={`${word}-${wordIndex}-${currentIndex}`}
                  className="kot-kinetic__letter"
                  style={{ animationDelay: `${currentIndex * 30}ms` }}
                >
                  {ch}
                </span>
              )
            })}
            {wordIndex < words.length - 1 && <span className="kot-kinetic__space">&nbsp;</span>}
          </span>
        ))}
      </span>
    </span>
  )
}
