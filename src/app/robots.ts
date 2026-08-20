import type { MetadataRoute } from 'next'

import { getAbsoluteUrl } from './seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio'],
    },
    sitemap: getAbsoluteUrl('/sitemap.xml'),
  }
}