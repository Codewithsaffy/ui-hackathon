import { defineType } from "sanity"

export default defineType({
  name: 'mockApiProducts',
  title: 'Mock API Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true, // Enables image cropping and hotspot selection
      },
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'object',
      fields: [
        {
          name: 'value',
          title: 'Value',
          type: 'number',
          validation: (Rule) => Rule.required().positive(),
        },
        {
          name: 'unit',
          title: 'Unit',
          type: 'string',
          options: {
            list: ['ounce', 'pound', 'gram', 'kilogram'],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'height',
          title: 'Height',
          type: 'number',
          validation: (Rule) => Rule.required().positive(),
        },
        {
          name: 'width',
          title: 'Width',
          type: 'number',
          validation: (Rule) => Rule.required().positive(),
        },
        {
          name: 'length',
          title: 'Length',
          type: 'number',
          validation: (Rule) => Rule.required().positive(),
        },
        {
          name: 'unit',
          title: 'Unit',
          type: 'string',
          options: {
            list: ['inch', 'cm', 'meter'],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
});