import Image from 'next/image'
import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { TypedObject } from '@portabletext/types'

import { urlForImage } from '@/sanity/lib/image'
import type { SanityPostBodyBlock } from '@/sanity/lib/types'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="kot-article__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="kot-article__h3">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="kot-article__quote">{children}</blockquote>,
    normal: ({ children }) => <p className="kot-article__p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="kot-article__list">{children}</ul>,
    number: ({ children }) => <ol className="kot-article__list kot-article__list--numbered">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '#'
      const isExternal = href.startsWith('http')

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      }

      return <Link href={href}>{children}</Link>
    },
  },
  types: {
    postImage: ({ value }) => {
      const imageUrl = value?.asset
        ? urlForImage(value).width(1600).height(1067).fit('crop').auto('format').url()
        : null

      if (!imageUrl) {
        return null
      }

      return (
        <figure className="kot-article__figure">
          <Image
            src={imageUrl}
            alt={value.alt ?? 'Knights Of Transylvania article image'}
            width={1600}
            height={1067}
            className="kot-article__figure-image"
          />
          {value.caption && <figcaption className="kot-article__figure-caption">{value.caption}</figcaption>}
        </figure>
      )
    },
  },
}

type RichTextProps = {
  value: SanityPostBodyBlock[]
}

export default function RichText({ value }: RichTextProps) {
  return <PortableText value={value as TypedObject[]} components={components} />
}