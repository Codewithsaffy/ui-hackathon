import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
}
