/** Where the club trains — used by the contact map and the structured data. */

const contactMapQuery = encodeURIComponent('Str. Fabricii de Zahăr 109, 400631 Cluj-Napoca, Romania')

export const contactMapLat = 46.786109
export const contactMapLon = 23.6263783
export const contactMapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${contactMapQuery}`
