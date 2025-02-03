import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { orderType } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, orderType],
}
