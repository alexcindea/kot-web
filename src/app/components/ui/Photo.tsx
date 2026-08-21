import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { SanityPhotoAsset } from '@/sanity/lib/types'

const photoDimensionsByRatio: Record<string, { width: number; height: number }> = {
  '16/9': { width: 1600, height: 900 },
  '4/5': { width: 960, height: 1200 },
  '2/3': { width: 800, height: 1200 },
  '1/1': { width: 1200, height: 1200 },
}

/** Framed photo with the trading-card corner ticks used across the site. */
export default function Photo({
  caption, ratio = '16/9', tone = 'flame', image, children,
}: {
  caption?: string
  ratio?: string
  tone?: 'flame' | 'ember' | 'ink'
  image?: SanityPhotoAsset
  children?: React.ReactNode
}) {
  const resolvedCaption = image?.caption ?? caption
  const dimensions = photoDimensionsByRatio[ratio] ?? photoDimensionsByRatio['16/9']
  const imageUrl = image?.asset
    ? urlForImage(image).width(dimensions.width).height(dimensions.height).fit('crop').auto('format').url()
    : null

  return (
    <div className={`kot-photo kot-photo--${tone}`} style={{ aspectRatio: ratio }}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={image?.alt ?? resolvedCaption ?? 'Knights Of Transylvania photo'}
          fill
          className="kot-photo__img"
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
        />
      )}
      <div className="kot-photo__inner">{children}</div>
      {resolvedCaption && <div className="kot-photo__caption">{resolvedCaption}</div>}
    </div>
  )
}
