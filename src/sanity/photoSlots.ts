/**
 * Single source of truth for "where does this photo end up on the site".
 *
 * The Studio builds each field's title and description from this registry,
 * and the site prints the same code inside any slot that is still empty.
 * An editor who sees `G3` on the page therefore knows exactly which field
 * to fill in Sanity — the code is the link between the two.
 */

export type PhotoSlotSpec = {
  /** Notation shown in the Studio and inside empty slots on the site. */
  code: string
  /** Human name of the slot. */
  title: string
  /** Where it shows up, in the editor's own words. */
  where: string
  /** Recommended crop, in the editor's own words. */
  ratio: string
}

export const groupPhotoSlots = {
  mini: {
    code: 'G1',
    title: 'Mini · 5–7 ani',
    where: 'Grupele noastre → grupa „Mini”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
  u13Mixt: {
    code: 'G2',
    title: 'U13 Mixt · Sub 13 ani',
    where: 'Grupele noastre → grupa „U13 Mixt”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
  u13FeteHu: {
    code: 'G3',
    title: 'U13 Fete · Predare în limba maghiară',
    where: 'Grupele noastre → grupa „U13 Fete”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
  primaryLevel1: {
    code: 'G4',
    title: 'Primary Level 1 · 8–13 ani',
    where: 'Grupele noastre → grupa „Primary Level 1”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
  primaryLevel2: {
    code: 'G5',
    title: 'Primary Level 2 · 8–13 ani',
    where: 'Grupele noastre → grupa „Primary Level 2”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
  u19: {
    code: 'G6',
    title: 'U19 · Sub 19 ani',
    where: 'Grupele noastre → grupa „U19”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
  seniori: {
    code: 'G7',
    title: 'Seniori · 16+ ani',
    where: 'Grupele noastre → grupa „Seniori”, poza din dreapta acordeonului deschis',
    ratio: 'peisaj 3:2',
  },
} satisfies Record<string, PhotoSlotSpec>

export const staffPhotoSlots = {
  coach1: {
    code: 'S1',
    title: 'Antrenor 1 · Head Coach Seniori',
    where: 'Staff KOT → primul portret din stânga',
    ratio: 'portret 4:5',
  },
  coach2: {
    code: 'S2',
    title: 'Antrenor 2 · Coach Juniori',
    where: 'Staff KOT → al 2-lea portret',
    ratio: 'portret 4:5',
  },
  coach3: {
    code: 'S3',
    title: 'Antrenor 3 · Coach Mini',
    where: 'Staff KOT → al 3-lea portret',
    ratio: 'portret 4:5',
  },
  coach4: {
    code: 'S4',
    title: 'Antrenor 4 · Coregraf',
    where: 'Staff KOT → al 4-lea portret, ultimul din dreapta',
    ratio: 'portret 4:5',
  },
} satisfies Record<string, PhotoSlotSpec>

export const projectPhotoSlots = {
  mondialTeamRo: {
    code: 'P1',
    title: 'Mondial / Team RO',
    where: 'Proiecte → poza din acordeonul „Mondial / Team RO”',
    ratio: 'peisaj 16:9',
  },
  erasmus: {
    code: 'P2',
    title: 'Erasmus',
    where: 'Proiecte → poza din acordeonul „Erasmus”',
    ratio: 'peisaj 16:9',
  },
  tabaraNationala: {
    code: 'P3',
    title: 'Tabăra Națională',
    where: 'Proiecte → poza din acordeonul „Tabăra Națională”',
    ratio: 'peisaj 16:9',
  },
  frumuseteFaraFiltru: {
    code: 'P4',
    title: 'Frumusețe fără filtru',
    where: 'Proiecte → poza din acordeonul „Frumusețe fără filtru”',
    ratio: 'peisaj 16:9',
  },
  nicioZiFaraSport: {
    code: 'P5',
    title: 'Nicio zi fără spor(t)',
    where: 'Proiecte → poza din acordeonul „Nicio zi fără spor(t)”',
    ratio: 'peisaj 16:9',
  },
} satisfies Record<string, PhotoSlotSpec>

export const eventPhotoSlots = {
  untold: {
    code: 'E1',
    title: 'UNTOLD',
    where: 'Evenimente → cardul „UNTOLD”',
    ratio: 'peisaj 3:2',
  },
  zileleClujului: {
    code: 'E2',
    title: 'Zilele Clujului',
    where: 'Evenimente → cardul „Zilele Clujului”',
    ratio: 'peisaj 3:2',
  },
  sportsFestival: {
    code: 'E3',
    title: 'Sports Festival',
    where: 'Evenimente → cardul „Sports Festival”',
    ratio: 'peisaj 3:2',
  },
  meciuriUbt: {
    code: 'E4',
    title: 'Meciuri UBT',
    where: 'Evenimente → cardul „Meciuri UBT”',
    ratio: 'peisaj 3:2',
  },
  wonderFamilyFest: {
    code: 'E5',
    title: 'Wonder Family Fest',
    where: 'Evenimente → cardul „Wonder Family Fest”',
    ratio: 'peisaj 3:2',
  },
  seasonOpeningShow: {
    code: 'E6',
    title: 'Season Opening Show · CCS de iarnă',
    where: 'Evenimente → cardul „Season Opening Show”',
    ratio: 'peisaj 3:2',
  },
} satisfies Record<string, PhotoSlotSpec>

/**
 * The About timeline is a list, not fixed slots — its codes are positional,
 * so panel 1 is `A1`, panel 2 is `A2`, and adding a milestone just extends
 * the run. Ordering in Sanity is the ordering on the page, left to right.
 */
export const aboutSlotCode = (index: number) => `A${index + 1}`

export type GroupPhotoSlotKey = keyof typeof groupPhotoSlots
export type StaffPhotoSlotKey = keyof typeof staffPhotoSlots
export type ProjectPhotoSlotKey = keyof typeof projectPhotoSlots
export type EventPhotoSlotKey = keyof typeof eventPhotoSlots
