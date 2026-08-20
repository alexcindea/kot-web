import { defineArrayMember, defineField, defineType } from 'sanity'

export const postImageType = defineType({
  name: 'postImage',
  title: 'Post image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the image for screen readers.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption shown under the image in the article.',
    }),
  ],
})

export const postType = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(8).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Noutăți', value: 'noutati' },
          { title: 'Competiții', value: 'competitii' },
          { title: 'Proiecte', value: 'proiecte' },
          { title: 'Anunțuri', value: 'anunturi' },
        ],
        layout: 'radio',
      },
      initialValue: 'noutati',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short summary used in cards and previews.',
      validation: (Rule) => Rule.required().min(40).max(220),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'postImage',
      description:
        'Apare în trei locuri: cardul articolului din lista „Noutăți”, imaginea mare din capul articolului și previzualizarea la distribuire pe rețele sociale. Format recomandat: peisaj 16:9.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description:
        'Textul articolului. Pozele adăugate aici apar în corpul articolului, pe toată lățimea coloanei de text, în ordinea în care le pui.',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bulleted', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) => Rule.required().uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'postImage',
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'coverImage',
    },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle,
      media,
    }),
  },
})