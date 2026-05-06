import { defineQuery } from 'next-sanity'

import { sanityClient } from '@/sanity/lib/client'
import type {
  HomepageContentDocument,
  SanityPost,
  SanityPostPreview,
  SanitySponsor,
  SitePhotosDocument,
} from '@/sanity/lib/types'

export const sitePhotosQuery = defineQuery(`*[_type == "sitePhotos" && _id == "sitePhotos"][0]`)

export const homepageContentQuery = defineQuery(`*[_type == "homepageContent" && _id == "homepageContent"][0]{
  projects[]{
    _key,
    title,
    label,
    tone,
    slot,
    story
  },
  events[]{
    _key,
    title,
    tone,
    slot
  }
}`)

const postPreviewProjection = `{
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt,
  featured,
  coverImage
}`

export const postsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current) && dateTime(publishedAt) <= dateTime(now())] | order(featured desc, publishedAt desc) ${postPreviewProjection}`,
)

export const latestPostsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current) && dateTime(publishedAt) <= dateTime(now())] | order(featured desc, publishedAt desc)[0...$limit] ${postPreviewProjection}`,
)

export const postBySlugQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug && dateTime(publishedAt) <= dateTime(now())][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    featured,
    coverImage,
    body
  }`,
)

export const postSlugsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current) && dateTime(publishedAt) <= dateTime(now())]{"slug": slug.current}`,
)

export const sponsorsQuery = defineQuery(
  `*[_type == "sponsor" && coalesce(displayOnHomepage, true)] | order(sortOrder asc, name asc) {
    _id,
    name,
    supportType,
    websiteUrl,
    displayOnHomepage,
    sortOrder,
    logo
  }`,
)

export async function getSitePhotos() {
  return sanityClient.fetch<SitePhotosDocument | null>(sitePhotosQuery)
}

export async function getHomepageContent() {
  return sanityClient.fetch<HomepageContentDocument | null>(homepageContentQuery)
}

export async function getPosts() {
  return sanityClient.fetch<SanityPostPreview[]>(postsQuery)
}

export async function getLatestPosts(limit = 3) {
  return sanityClient.fetch<SanityPostPreview[]>(latestPostsQuery, { limit })
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch<SanityPost | null>(postBySlugQuery, { slug })
}

export async function getPostSlugs() {
  const slugs = await sanityClient.fetch<Array<{ slug?: string }>>(postSlugsQuery)

  return slugs.map(({ slug }) => slug).filter((slug): slug is string => Boolean(slug))
}

export async function getSponsors() {
  return sanityClient.fetch<SanitySponsor[]>(sponsorsQuery)
}
