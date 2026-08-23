import { ImageResponse } from 'next/og'

import { siteName } from './seo'

/**
 * The card that shows when the site is shared on WhatsApp, Facebook or
 * LinkedIn. Without this a share is a bare grey rectangle, which for a club
 * that spreads by word of mouth is the most expensive thing missing.
 *
 * Rendered by Satori, which supports a subset of CSS — flexbox only, no grid,
 * and every element with more than one child needs an explicit display.
 */

export const alt = `${siteName} — Cheerleading în Cluj-Napoca`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const FLAME = '#f79335'
const AMBER = '#ffbe6d'
const NIGHT = '#12100e'
const CHALK = '#f5f2e9'

const facts = [
  ['130+', 'sportivi'],
  ['20+', 'titluri naționale'],
  ['12+', 'țări'],
]

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: NIGHT,
          padding: 72,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Floodlight wash, echoing the hero */}
        <div
          style={{
            position: 'absolute',
            top: -260,
            right: -160,
            width: 900,
            height: 900,
            borderRadius: 900,
            background: 'radial-gradient(circle, rgba(247,147,53,0.28) 0%, rgba(18,16,14,0) 70%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 18, height: 18, background: FLAME, transform: 'rotate(45deg)' }} />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              color: 'rgba(243,237,228,0.72)',
              textTransform: 'uppercase',
            }}
          >
            Cluj-Napoca · est. 2014
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1,
              fontWeight: 800,
              color: CHALK,
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            Knights of
          </div>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1.05,
              fontWeight: 800,
              color: FLAME,
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            Transylvania
          </div>
          <div style={{ fontSize: 34, color: 'rgba(243,237,228,0.82)', marginTop: 18 }}>
            Cheerleading în inima Transilvaniei
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 56 }}>
          {facts.map(([value, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 58, fontWeight: 800, color: AMBER, lineHeight: 1 }}>{value}</div>
              <div
                style={{
                  fontSize: 22,
                  letterSpacing: 3,
                  color: 'rgba(243,237,228,0.6)',
                  textTransform: 'uppercase',
                  marginTop: 8,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 14, background: FLAME }} />
      </div>
    ),
    size,
  )
}
