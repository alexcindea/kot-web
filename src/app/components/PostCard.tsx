import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { formatSanityDate, getPostCategoryLabel } from '@/sanity/lib/content'
import { urlForImage } from '@/sanity/lib/image'
import type { SanityPostPreview } from '@/sanity/lib/types'

type PostCardProps = {
  post: SanityPostPreview
  tone?: 'flame' | 'ember'
}

export default function PostCard({ post, tone = 'flame' }: PostCardProps) {
  const imageUrl = post.coverImage?.asset
    ? urlForImage(post.coverImage).width(1600).height(900).fit('crop').auto('format').url()
    : null

  return (
    <article className={`kot-project kot-project--${tone}`}>
      <div className={`kot-photo kot-photo--${tone}`} style={{ aspectRatio: '16/9', borderRadius: 0 }}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.coverImage?.alt ?? post.title}
            fill
            className="kot-photo__img"
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          />
        )}
        {post.coverImage?.caption && <div className="kot-photo__caption">{post.coverImage.caption}</div>}
      </div>
      <div className="kot-project__body">
        <div className="kot-post-card__meta">
          <span className={`kot-pill kot-pill--${tone} kot-pill--soft`}>
            {getPostCategoryLabel(post.category)}
          </span>
          <span className="kot-post-card__date">{formatSanityDate(post.publishedAt)}</span>
        </div>
        <h3 className="kot-project__title">{post.title}</h3>
        <p className="kot-project__desc">{post.excerpt}</p>
        <Link href={`/noutati/${post.slug}`} className="kot-project__link">
          <span>Citește articolul</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}