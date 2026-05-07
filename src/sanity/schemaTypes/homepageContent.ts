import { defineArrayMember, defineField, defineType } from 'sanity'

const projectSlotTitleByValue = {
  mondialTeamRo: 'Mondial / Team RO',
  erasmus: 'Erasmus',
  tabaraNationala: 'Tabăra Națională',
  frumuseteFaraFiltru: 'Frumusețe fără filtru',
  nicioZiFaraSport: 'Nicio zi fără spor(t)',
} as const

const eventSlotTitleByValue = {
  untold: 'UNTOLD',
  zileleClujului: 'Zilele Clujului',
  sportsFestival: 'Sports Festival',
  meciuriUbt: 'Meciuri UBT',
  wonderFamilyFest: 'Wonder Family Fest',
  seasonOpeningShow: 'Season Opening Show · CCS de iarnă',
} as const

const defaultProjects = [
  {
    title: 'Mondial / Team RO',
    label: 'Mondial',
    tone: 'cyan',
    slot: 'mondialTeamRo',
    story:
      'Drumul spre Team Romania a adunat antrenamente, selecții și responsabilitatea de a reprezenta mai mult decât o echipă: o direcție întreagă de creștere pentru cheer sportul românesc.',
  },
  {
    title: 'Erasmus',
    label: 'Dezvoltare',
    tone: 'orange',
    slot: 'erasmus',
    story:
      'Proiectul aduce schimb de experiență, idei noi și contexte internaționale care se întorc apoi în sala KOT prin metode, ritm și încredere.',
  },
  {
    title: 'Tabăra Națională',
    label: 'Comunitate',
    tone: 'cyan',
    slot: 'tabaraNationala',
    story:
      'Aici se leagă mai repede grupurile, se lucrează concentrat și se creează acel timp comun în care progresul tehnic merge mână în mână cu energia de echipă.',
  },
  {
    title: 'Frumusețe fără filtru',
    label: 'Identitate',
    tone: 'orange',
    slot: 'frumuseteFaraFiltru',
    story:
      'Este un proiect construit în jurul autenticității, expresiei și felului în care sportul poate da curaj, prezență și voce.',
  },
  {
    title: 'Nicio zi fără spor(t)',
    label: 'Mișcare',
    tone: 'cyan',
    slot: 'nicioZiFaraSport',
    story:
      'Inițiativa pune accent pe consecvență, obiceiuri sănătoase și ideea că sportul se construiește zi de zi, nu doar la evenimente mari.',
  },
]

const defaultEvents = [
  { title: 'UNTOLD', tone: 'cyan', slot: 'untold' },
  { title: 'Zilele Clujului', tone: 'orange', slot: 'zileleClujului' },
  { title: 'Sports Festival', tone: 'cyan', slot: 'sportsFestival' },
  { title: 'Meciuri UBT', tone: 'orange', slot: 'meciuriUbt' },
  { title: 'Wonder Family Fest', tone: 'cyan', slot: 'wonderFamilyFest' },
  { title: 'Season Opening Show', tone: 'orange', slot: 'seasonOpeningShow' },
]

const toneOptions = [
  { title: 'Albastru', value: 'cyan' },
  { title: 'Portocaliu', value: 'orange' },
]

const projectSlotOptions = [
  { title: 'Mondial / Team RO', value: 'mondialTeamRo' },
  { title: 'Erasmus', value: 'erasmus' },
  { title: 'Tabăra Națională', value: 'tabaraNationala' },
  { title: 'Frumusețe fără filtru', value: 'frumuseteFaraFiltru' },
  { title: 'Nicio zi fără spor(t)', value: 'nicioZiFaraSport' },
]

const eventSlotOptions = [
  { title: 'UNTOLD', value: 'untold' },
  { title: 'Zilele Clujului', value: 'zileleClujului' },
  { title: 'Sports Festival', value: 'sportsFestival' },
  { title: 'Meciuri UBT', value: 'meciuriUbt' },
  { title: 'Wonder Family Fest', value: 'wonderFamilyFest' },
  { title: 'Season Opening Show · CCS de iarnă', value: 'seasonOpeningShow' },
]

export const homepageProjectType = defineType({
  name: 'homepageProject',
  title: 'Proiect homepage',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titlu',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),
    defineField({
      name: 'label',
      title: 'Etichetă',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(30),
    }),
    defineField({
      name: 'tone',
      title: 'Culoare',
      type: 'string',
      options: {
        list: toneOptions,
        layout: 'radio',
      },
      initialValue: 'cyan',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slot',
      title: 'Slot foto',
      type: 'string',
      description: 'Alege slotul foto corespunzător din Poze site → Proiecte.',
      options: {
        list: projectSlotOptions,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Poveste',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(30).max(500),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slot',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `Poză: ${projectSlotTitleByValue[subtitle as keyof typeof projectSlotTitleByValue] ?? subtitle}` : undefined,
    }),
  },
})

export const homepageEventType = defineType({
  name: 'homepageEvent',
  title: 'Eveniment homepage',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titlu',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),
    defineField({
      name: 'tone',
      title: 'Culoare',
      type: 'string',
      options: {
        list: toneOptions,
        layout: 'radio',
      },
      initialValue: 'cyan',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slot',
      title: 'Slot foto',
      type: 'string',
      description: 'Alege slotul foto corespunzător din Poze site → Evenimente.',
      options: {
        list: eventSlotOptions,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slot',
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `Poză: ${eventSlotTitleByValue[subtitle as keyof typeof eventSlotTitleByValue] ?? subtitle}` : undefined,
    }),
  },
})

export const homepageContentType = defineType({
  name: 'homepageContent',
  title: 'Conținut homepage',
  type: 'document',
  initialValue: {
    projects: defaultProjects,
    events: defaultEvents,
  },
  fields: [
    defineField({
      name: 'projects',
      title: 'Proiecte',
      type: 'array',
      description: 'Conținutul editabil pentru accordionul de proiecte de pe homepage.',
      of: [defineArrayMember({ type: 'homepageProject' })],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'events',
      title: 'Evenimente',
      type: 'array',
      description: 'Titlurile editabile pentru cardurile de evenimente de pe homepage.',
      of: [defineArrayMember({ type: 'homepageEvent' })],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Conținut homepage',
      subtitle: 'Listele de proiecte și evenimente',
    }),
  },
})