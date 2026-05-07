import { defineField, defineType } from 'sanity'

const slotField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'sitePhotoAsset',
  })

export const sitePhotoAssetType = defineType({
  name: 'sitePhotoAsset',
  title: 'Website Photo',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the photo for screen readers.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional label shown on top of the image card.',
    }),
  ],
})

export const aboutMilestonePhotosType = defineType({
  name: 'aboutMilestonePhotos',
  title: 'About Milestones',
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
    slotField('milestone2019', 'Legacy milestone (unused)'),
  ],
})

export const groupPhotosType = defineType({
  name: 'groupPhotos',
  title: 'Groups Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    slotField('mini', 'Mini group'),
    slotField('u13Mixt', 'U13 Mixt group'),
    slotField('u13FeteHu', 'U13 Fete HU group'),
    slotField('primaryLevel1', 'Primary Level 1 group'),
    slotField('primaryLevel2', 'Primary Level 2 group'),
    slotField('u19', 'U19 group'),
    slotField('seniori', 'Seniori group'),
  ],
})

export const staffPhotosType = defineType({
  name: 'staffPhotos',
  title: 'Staff Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    slotField('coach1', 'Coach card 1'),
    slotField('coach2', 'Coach card 2'),
    slotField('coach3', 'Coach card 3'),
    slotField('coach4', 'Coach card 4'),
  ],
})

export const projectPhotosType = defineType({
  name: 'projectPhotos',
  title: 'Projects Section',
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
  title: 'Events Section',
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
    slotField('seasonOpeningShow', 'Season Opening Show'),
  ],
})

export const sitePhotosType = defineType({
  name: 'sitePhotos',
  title: 'Website Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutMilestones',
      title: 'About section',
      type: 'aboutMilestonePhotos',
    }),
    defineField({
      name: 'groups',
      title: 'Groups section',
      type: 'groupPhotos',
    }),
    defineField({
      name: 'staff',
      title: 'Staff section',
      type: 'staffPhotos',
    }),
    defineField({
      name: 'projects',
      title: 'Projects section',
      type: 'projectPhotos',
    }),
    defineField({
      name: 'events',
      title: 'Events section',
      type: 'eventPhotos',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Website Photos',
      subtitle: 'Homepage image slots',
    }),
  },
})
