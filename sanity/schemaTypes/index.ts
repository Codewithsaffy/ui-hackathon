import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import mockApiProducts from './mock-api-products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, mockApiProducts],
}
