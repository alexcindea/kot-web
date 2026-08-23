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
}
