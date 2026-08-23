import { getAbsoluteUrl, organizationAddress, siteDescription, siteName, siteShortName } from '@/app/seo'
import { contactMapLat, contactMapLon } from './site'

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  '@id': getAbsoluteUrl('/#organization'),
  name: siteName,
  alternateName: siteShortName,
  url: getAbsoluteUrl('/'),
  logo: getAbsoluteUrl('/logo-kot-shield.svg'),
  description: siteDescription,
  sport: 'Cheerleading',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    ...organizationAddress,
  },
  location: {
    '@type': 'Place',
    name: 'Sala KOT',
    address: {
      '@type': 'PostalAddress',
      ...organizationAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactMapLat,
      longitude: contactMapLon,
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Cluj-Napoca',
  },
  // Local search leans on a reachable phone number for the entity.
  telephone: '+40799822100',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+40799822100',
    areaServed: 'RO',
    availableLanguage: ['ro', 'en'],
  },
}

/**
 * The national championship the club hosts. Events are one of the few schema
 * types that can earn a rich result on their own, and this one is already
 * announced on the contact card — this just states it in a form search
 * engines read.
 */
export const championshipStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  '@id': getAbsoluteUrl('/#campionat-national-2026'),
  name: 'Campionatul Național de Cheerleading 2026',
  startDate: '2026-05-30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  sport: 'Cheerleading',
  location: {
    '@type': 'Place',
    name: 'Nova PG Arena',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turda',
      addressCountry: 'RO',
    },
  },
  organizer: { '@id': getAbsoluteUrl('/#organization') },
  url: getAbsoluteUrl('/'),
}
