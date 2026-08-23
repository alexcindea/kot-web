import type { Metadata } from 'next'

import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'
import MarqueeStrip from './components/ui/MarqueeStrip'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import GroupsSection from './components/sections/GroupsSection'
import StaffSection from './components/sections/StaffSection'
import ProjectsSection from './components/sections/ProjectsSection'
import EventsSection from './components/sections/EventsSection'
import SponsorsSection from './components/sections/SponsorsSection'
import ContactSection from './components/sections/ContactSection'
import { projectFallback } from './content/projects'
import { sponsorFallbackNames } from './content/sponsors'
import { championshipStructuredData, organizationStructuredData } from './content/structuredData'
import { siteDescription, siteLocale, siteName } from './seo'
import { getHomepageContent, getSitePhotos, getSponsors } from '@/sanity/lib/queries'
import type { SanitySponsor } from '@/sanity/lib/types'

export const metadata: Metadata = {
  title: 'Cheerleading în Cluj-Napoca',
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    // Repeated here because a page-level openGraph replaces the layout's
    // wholesale — without these the homepage loses site name and locale.
    siteName,
    locale: siteLocale,
    title: `${siteName} · Cheerleading în Cluj-Napoca`,
    description: siteDescription,
  },
  twitter: {
    // summary_large_image so the generated card shows full-width, not as a
    // thumbnail beside the text.
    card: 'summary_large_image',
    title: `${siteName} · Cheerleading în Cluj-Napoca`,
    description: siteDescription,
  },
}

export const revalidate = 60

/**
 * Composition only — every section owns its own markup, and the static copy
 * lives in `content/`. Sanity supplies the photos, projects and sponsors,
 * with the fallbacks covering a dataset that has not been filled in yet.
 */
export default async function Home() {
  const homepageContent = await getHomepageContent()
  const sitePhotos = await getSitePhotos()
  const sanitySponsors = await getSponsors()

  const projects = homepageContent?.projects?.length ? homepageContent.projects : projectFallback
  const sponsors: SanitySponsor[] = sanitySponsors.length > 0
    ? sanitySponsors
    : sponsorFallbackNames.map((name) => ({ _id: name, name }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(championshipStructuredData) }}
      />
      <Nav />

      <main>
        <HeroSection />

        <MarqueeStrip
          tone="flame"
          items={['MOMENTUL TĂU WOOW', 'KNIGHTS OF TRANSYLVANIA', 'KOT', 'CLUJ-NAPOCA', 'CHEERLEADING']}
        />

        <AboutSection milestones={sitePhotos?.aboutTimeline ?? []} />

        <GroupsSection images={sitePhotos?.groups} />

        <MarqueeStrip
          tone="ember"
          icon="trophy"
          direction={-1}
          items={['ICU WORLDS 2025', 'TEAM ROMANIA', '20+ TITLURI NAȚIONALE', 'CAMPIONAT NAȚIONAL TURDA 2026']}
        />

        <StaffSection images={sitePhotos?.staff} />

        <ProjectsSection projects={projects} images={sitePhotos?.projects} />

        <EventsSection photos={sitePhotos?.events} events={homepageContent?.events} />

        <SponsorsSection sponsors={sponsors} />

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  )
}
