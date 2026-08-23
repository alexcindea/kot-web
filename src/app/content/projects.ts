import type { HomepageProject } from '@/sanity/lib/types'

/** Used when Sanity has no homepageContent document yet. */
export const projectFallback: HomepageProject[] = [
  {
    title: 'Mondial / Team RO',
    label: 'Mondial',
    tone: 'flame',
    slot: 'mondialTeamRo',
    story: 'Drumul spre Team Romania a adunat antrenamente, selecții și responsabilitatea de a reprezenta mai mult decât o echipă: o direcție întreagă de creștere pentru cheer sportul românesc.',
  },
  {
    title: 'Erasmus',
    label: 'Dezvoltare',
    tone: 'ember',
    slot: 'erasmus',
    story: 'Proiectul aduce schimb de experiență, idei noi și contexte internaționale care se întorc apoi în sala KOT prin metode, ritm și încredere.',
  },
  {
    title: 'Tabăra Națională',
    label: 'Comunitate',
    tone: 'flame',
    slot: 'tabaraNationala',
    story: 'Aici se leagă mai repede grupurile, se lucrează concentrat și se creează acel timp comun în care progresul tehnic merge mână în mână cu energia de echipă.',
  },
  {
    title: 'Frumusețe fără filtru',
    label: 'Identitate',
    tone: 'ember',
    slot: 'frumuseteFaraFiltru',
    story: 'Este un proiect construit în jurul autenticității, expresiei și felului în care sportul poate da curaj, prezență și voce.',
  },
  {
    title: 'Nicio zi fără spor(t)',
    label: 'Mișcare',
    tone: 'flame',
    slot: 'nicioZiFaraSport',
    story: 'Inițiativa pune accent pe consecvență, obiceiuri sănătoase și ideea că sportul se construiește zi de zi, nu doar la evenimente mari.',
  },
]
