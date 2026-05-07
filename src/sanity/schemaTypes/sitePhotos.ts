import { defineField, defineType } from 'sanity'

const slotField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'sitePhotoAsset',
  })

export const sitePhotoAssetType = defineType({
  name: 'sitePhotoAsset',
  title: 'Poză site',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Text alternativ',
      type: 'string',
      description: 'Descriere pentru screen readers.',
    }),
    defineField({
      name: 'caption',
      title: 'Legendă',
      type: 'string',
      description: 'Text opțional afișat peste cardul cu imagine.',
    }),
  ],
})

export const aboutMilestonePhotosType = defineType({
  name: 'aboutMilestonePhotos',
  title: 'Despre noi · Momente cheie',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    slotField('milestone2012', '2014 · Începutul'),
    slotField('milestone2016', '2015 · Prima medalie'),
    slotField('varsity2023', '2023 · Începutul varsity'),
    slotField('salaKot2023', '2023 · Sala KOT'),
    slotField('milestone2024', '2025 · Campionatul mondial'),
    slotField('milestone2019', 'Slot vechi (nefolosit)'),
  ],
})

export const groupPhotosType = defineType({
  name: 'groupPhotos',
  title: 'Grupele noastre',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    slotField('mini', 'Mini · 5–7 ani'),
    slotField('u13Mixt', 'U13 Mixt · Sub 13 ani'),
    slotField('u13FeteHu', 'U13 Fete · Predare în limba maghiară'),
    slotField('primaryLevel1', 'Primary Level 1 · 8–13 ani'),
    slotField('primaryLevel2', 'Primary Level 2 · 8–13 ani'),
    slotField('u19', 'U19 · Sub 19 ani'),
    slotField('seniori', 'Seniori · 16+ ani'),
  ],
})

export const staffPhotosType = defineType({
  name: 'staffPhotos',
  title: 'Echipa din spatele rezultatelor',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    slotField('coach1', 'Antrenor 1 · Seniori'),
    slotField('coach2', 'Antrenor 2 · Juniori'),
    slotField('coach3', 'Antrenor 3 · Mini'),
    slotField('coach4', 'Antrenor 4 · Coregraf'),
  ],
})

export const projectPhotosType = defineType({
  name: 'projectPhotos',
  title: 'Proiecte',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    slotField('mondialTeamRo', 'Mondial / Team RO'),
    slotField('erasmus', 'Erasmus'),
    slotField('tabaraNationala', 'Tabăra Națională'),
    slotField('frumuseteFaraFiltru', 'Frumusețe fără filtru'),
    slotField('nicioZiFaraSport', 'Nicio zi fără spor(t)'),
  ],
})

export const eventPhotosType = defineType({
  name: 'eventPhotos',
  title: 'Evenimente',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    slotField('untold', 'UNTOLD'),
    slotField('zileleClujului', 'Zilele Clujului'),
    slotField('sportsFestival', 'Sports Festival'),
    slotField('meciuriUbt', 'Meciuri UBT'),
    slotField('wonderFamilyFest', 'Wonder Family Fest'),
    slotField('seasonOpeningShow', 'Season Opening Show · CCS de iarnă'),
  ],
})

export const sitePhotosType = defineType({
  name: 'sitePhotos',
  title: 'Poze site',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutMilestones',
      title: 'Despre noi',
      type: 'aboutMilestonePhotos',
    }),
    defineField({
      name: 'groups',
      title: 'Grupele noastre',
      type: 'groupPhotos',
    }),
    defineField({
      name: 'staff',
      title: 'Echipa din spatele rezultatelor',
      type: 'staffPhotos',
    }),
    defineField({
      name: 'projects',
      title: 'Proiecte',
      type: 'projectPhotos',
    }),
    defineField({
      name: 'events',
      title: 'Evenimente',
      type: 'eventPhotos',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Poze site',
      subtitle: 'Sloturi foto pentru homepage',
    }),
  },
})
