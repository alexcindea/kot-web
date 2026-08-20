'use client'

import { Star, Trophy } from 'lucide-react'
import VelocityMarquee from './fx/VelocityMarquee'

const icons = {
  star: Star,
  trophy: Trophy,
} as const

type MarqueeStripProps = {
  items: string[]
  tone?: 'flame' | 'ember' | 'ink'
  icon?: keyof typeof icons
  /** 1 drifts left, -1 drifts right. */
  direction?: 1 | -1
}

export default function MarqueeStrip({ items, tone = 'flame', icon = 'star', direction = 1 }: MarqueeStripProps) {
  const Icon = icons[icon]

  return (
    <div className={`kot-marquee kot-marquee--${tone}`} aria-hidden="true">
      <VelocityMarquee className="kot-marquee__track" baseVelocity={0.9 * direction} gap="40px">
        {items.map((it, i) => (
          <span key={i} className="kot-marquee__item">
            <span>{it}</span>
            <Icon size={22} />
          </span>
        ))}
      </VelocityMarquee>
    </div>
  )
}
