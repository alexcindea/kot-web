import type { MetadataRoute } from 'next'

import { getAbsoluteUrl } from './seo'
import { getPosts } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const now = new Date()

  return [
    {
      url: getAbsoluteUrl('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: getAbsoluteUrl('/noutati'),
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: getAbsoluteUrl(`/noutati/${post.slug}`),
      lastModified: post.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.8 : 0.7,
    })),
  ]
}