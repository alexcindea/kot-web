const fallbackSiteUrl = 'http://localhost:3000'

function normalizeSiteUrl(value: string) {
  if (!value) {
    return fallbackSiteUrl
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }

  return `https://${value}`
}

export const siteName = 'Knights Of Transylvania'
export const siteShortName = 'KOT'
export const siteLocale = 'ro_RO'
export const siteDescription =
  'Performanță și spectacol în inima Transilvaniei. Peste 130 de sportivi, titluri naționale și participare la ICU Cheerleading Worlds din partea Knights Of Transylvania.'

export const organizationAddress = {
  streetAddress: 'Str. Fabricii de Zahăr 109',
  postalCode: '400631',
  addressLocality: 'Cluj-Napoca',
  addressCountry: 'RO',
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    fallbackSiteUrl

  return normalizeSiteUrl(configuredUrl)
}

export function getAbsoluteUrl(path = '/') {
  return new URL(path, getSiteUrl()).toString()
}