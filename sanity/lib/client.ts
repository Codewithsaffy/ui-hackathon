import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set to true to fetch from edge cache
  token: process.env.SANITY_API_TOKEN,
})
