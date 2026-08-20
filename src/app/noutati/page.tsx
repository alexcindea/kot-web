import Link from 'next/link'
import type { Metadata } from 'next'

import { siteDescription, siteName } from '@/app/seo'
import Nav from '@/app/components/Nav'
import PostCard from '@/app/components/PostCard'
import SiteFooter from '@/app/components/SiteFooter'
import { getPosts } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Noutăți KOT',
  description: 'Articole, rezultate, proiecte și anunțuri publicate de Knights Of Transylvania.',
  alternates: {
    canonical: '/noutati',
  },
  openGraph: {
    type: 'website',
    url: '/noutati',
    title: `Noutăți KOT | ${siteName}`,
    description: 'Articole, rezultate, proiecte și anunțuri publicate de Knights Of Transylvania.',
  },
  twitter: {
    card: 'summary',
    title: `Noutăți KOT | ${siteName}`,
    description: siteDescription,
  },
}

export const revalidate = 60

export default async function NewsIndexPage() {
  const posts = await getPosts()

  return (
    <>
      <Nav />

      <main>
        <section className="kot-page-hero kot-page-hero--ink">
          <div className="kot-container">
            <div className="kot-eyebrow-row">
              <span className="kot-eyebrow-dot dot-flame" />
              <span className="kot-eyebrow-text kot-page-hero__eyebrow">Noutăți KOT</span>
            </div>
            <h1 className="kot-page-hero__title">Rezultate, povești și proiecte noi.</h1>
            <p className="kot-page-hero__lede">
              Aici apar articolele publicate din Sanity Studio. Ownerul poate adăuga postări noi, le poate publica,
              iar site-ul le afișează automat.
            </p>
            <Link href="/#contact" className="kot-btn kot-btn--primary kot-btn--lg">
              Încearcă și tu
            </Link>
          </div>
        </section>

        <section className="kot-section kot-section--paper">
          <div className="kot-container">
            {posts.length > 0 ? (
              <div className="kot-projects__grid">
                {posts.map((post, index) => (
                  <PostCard key={post._id} post={post} tone={index % 2 === 0 ? 'flame' : 'ember'} />
                ))}
              </div>
            ) : (
              <div className="kot-empty-state">
                <h2>Primele articole apar curând.</h2>
                <p>
                  După ce ownerul publică postări în Studio, lista aceasta se umple automat.
                </p>
                <Link href="/" className="kot-project__link kot-project__link--dark">
                  Înapoi la homepage
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}