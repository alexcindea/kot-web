import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Nav from '@/app/components/Nav'
import RichText from '@/app/components/RichText'
import SiteFooter from '@/app/components/SiteFooter'
import { formatSanityDate, getPostCategoryLabel } from '@/sanity/lib/content'
import { urlForImage } from '@/sanity/lib/image'
import { getPostBySlug, getPostSlugs } from '@/sanity/lib/queries'

type PostPageProps = {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getPostSlugs()

  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Articol negăsit · Knights Of Transylvania',
    }
  }

  const ogImage = post.coverImage?.asset
    ? urlForImage(post.coverImage).width(1200).height(630).fit('crop').auto('format').url()
    : undefined

  return {
    title: `${post.title} · Knights Of Transylvania`,
    description: post.excerpt,
    openGraph: ogImage
      ? {
          images: [ogImage],
        }
      : undefined,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const coverImageUrl = post.coverImage?.asset
    ? urlForImage(post.coverImage).width(1600).height(900).fit('crop').auto('format').url()
    : null

  return (
    <>
      <Nav />

      <main>
        <article className="kot-article-shell">
          <header className="kot-article-hero">
            <div className="kot-container kot-article-hero__inner">
              <Link href="/noutati" className="kot-article__backlink">Toate articolele</Link>
              <div className="kot-post-card__meta kot-post-card__meta--article">
                <span className="kot-pill kot-pill--orange kot-pill--soft">{getPostCategoryLabel(post.category)}</span>
                <span className="kot-post-card__date">{formatSanityDate(post.publishedAt)}</span>
              </div>
              <h1 className="kot-article__title">{post.title}</h1>
              <p className="kot-article__excerpt">{post.excerpt}</p>
            </div>
          </header>

          {coverImageUrl && (
            <div className="kot-container">
              <figure className="kot-article__cover">
                <Image
                  src={coverImageUrl}
                  alt={post.coverImage?.alt ?? post.title}
                  width={1600}
                  height={900}
                  className="kot-article__cover-image"
                  priority
                />
                {post.coverImage?.caption && <figcaption className="kot-article__figure-caption">{post.coverImage.caption}</figcaption>}
              </figure>
            </div>
          )}

          <div className="kot-container">
            <div className="kot-article__body">
              <RichText value={post.body} />
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}