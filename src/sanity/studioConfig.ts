import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/env'
import { schemaTypes } from '@/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Knights Of Transylvania Studio',
  projectId,
  dataset,
  basePath: studioUrl,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage Content')
              .id('homepageContent')
              .child(S.document().schemaType('homepageContent').documentId('homepageContent')),
            S.listItem()
              .title('Website Photos')
              .id('sitePhotos')
              .child(S.document().schemaType('sitePhotos').documentId('sitePhotos')),
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('sponsor').title('Sponsors'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !['sitePhotos', 'homepageContent'].includes(schemaType)),
  },
})
