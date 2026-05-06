import { defineField, defineType } from 'sanity'

export const sponsorLogoType = defineType({
  name: 'sponsorLogo',
  title: 'Sponsor logo',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the logo for screen readers.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const sponsorType = defineType({
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: 'supportType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sponsor', value: 'sponsor' },
          { title: 'Partener', value: 'partener' },
          { title: 'Susținător', value: 'sustinator' },
        ],
        layout: 'radio',
      },
      initialValue: 'sponsor',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'sponsorLogo',
    }),
    defineField({
      name: 'displayOnHomepage',
      title: 'Display on homepage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      initialValue: 10,
      validation: (Rule) => Rule.required().min(1).max(999),
    }),
  ],
  orderings: [
    {
      title: 'Homepage order',
      name: 'sortOrderAsc',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'supportType',
      media: 'logo',
    },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle,
      media,
    }),
  },
})