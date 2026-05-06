import { createImageUrlBuilder } from '@sanity/image-url'

import { dataset, projectId } from '@/sanity/env'
import type { SanityImageAsset } from '@/sanity/lib/types'

const builder = createImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: SanityImageAsset) {
  return builder.image(source)
}
