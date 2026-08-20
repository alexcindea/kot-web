import { CalendarIcon, ImageIcon, ImagesIcon, ProjectsIcon, StarIcon, UsersIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

import {
  eventPhotoSlots,
  groupPhotoSlots,
  projectPhotoSlots,
  staffPhotoSlots,
  type PhotoSlotSpec,
} from '@/sanity/photoSlots'

/**
 * Builds a photo slot from the shared registry so the Studio label and the
 * code the site prints in an empty slot can never drift apart.
 */
const slotField = (name: string, spec: PhotoSlotSpec) =>
  defineField({
    name,
    title: `${spec.code} · ${spec.title}`,
    type: 'sitePhotoAsset',
    description: `Apare la: ${spec.where}. Format recomandat: ${spec.ratio}. Cât timp slotul e gol, pe site apare eticheta „${spec.code}” în locul pozei.`,
  })

const slotFieldsFrom = (slots: Record<string, PhotoSlotSpec>) =>
  Object.entries(slots).map(([name, spec]) => slotField(name, spec))

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
      description: 'Text opțional, afișat mic în colțul din dreapta-jos al pozei pe site.',
    }),
  ],
})

export const aboutMilestoneType = defineType({
  name: 'aboutMilestone',
  title: 'Moment cheie',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'year',
      title: 'Anul',
      type: 'string',
      description: 'Apare mare peste poză, ex. „2014”.',
      validation: (Rule) => Rule.required().max(9),
    }),
    defineField({
      name: 'label',
      title: 'Titlu scurt',
      type: 'string',
      description: 'Apare sub an, ex. „Prima medalie”.',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'photo',
      title: 'Poză',
      type: 'sitePhotoAsset',
      description: 'Apare în panoul acestui moment din galeria „Despre noi”. Format recomandat: portret 4:5. Cât timp e goală, pe site apare eticheta poziției („A1”, „A2”, …) în locul pozei.',
    }),
  ],
  preview: {
    select: {
      year: 'year',
      label: 'label',
      media: 'photo',
    },
    prepare: ({ year, label, media }) => ({
      title: [year, label].filter(Boolean).join(' · ') || 'Moment cheie',
      subtitle: media ? 'Poză adăugată' : 'Fără poză încă',
      media: media ?? StarIcon,
    }),
  },
})

export const groupPhotosType = defineType({
  name: 'groupPhotos',
  title: 'Grupele noastre',
  type: 'object',
  icon: UsersIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: slotFieldsFrom(groupPhotoSlots),
})

export const staffPhotosType = defineType({
  name: 'staffPhotos',
  title: 'Echipa din spatele rezultatelor',
  type: 'object',
  icon: UsersIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: slotFieldsFrom(staffPhotoSlots),
})

export const projectPhotosType = defineType({
  name: 'projectPhotos',
  title: 'Proiecte',
  type: 'object',
  icon: ProjectsIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: slotFieldsFrom(projectPhotoSlots),
})

export const eventPhotosType = defineType({
  name: 'eventPhotos',
  title: 'Evenimente',
  type: 'object',
  icon: CalendarIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: slotFieldsFrom(eventPhotoSlots),
})

export const sitePhotosType = defineType({
  name: 'sitePhotos',
  title: 'Poze site',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'aboutTimeline',
      title: 'Despre noi · Momente cheie',
      type: 'array',
      icon: ImageIcon,
      description:
        'Galeria acordeon din secțiunea „Despre noi”. Ordinea de aici este ordinea de pe site, de la stânga la dreapta: primul moment din listă este panoul A1, al doilea A2 și așa mai departe — trage de ele ca să le rearanjezi. Poți adăuga oricâte momente vrei; panourile se împart automat.',
      of: [defineArrayMember({ type: 'aboutMilestone' })],
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
      subtitle: 'Momente cheie + sloturi foto pentru homepage',
    }),
  },
})
