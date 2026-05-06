import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '@/sanity/env'

const token = process.env.SANITY_API_READ_TOKEN

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: token ? false : true,
  token,
  perspective: 'published',
})
