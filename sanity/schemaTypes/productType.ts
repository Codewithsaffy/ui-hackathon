import { defineField } from "sanity";

export const productType = defineField({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule) =>
        Rule.required().min(2).error("Product name is required"),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) =>
        Rule.required().min(0).error("Price must be a positive number"),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) =>
        Rule.required().min(0).max(5).error("Rating must be between 0 and 5"),
    },
    {
      name: "prevPrice",
      type: "number",
      title: "Previous Price",
      description: "Optional field for previous price",
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error("Previous price must be a positive number"),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"),
    },
    {
      name: "badge",
      type: "string",
      title: "Badge",
      description:
        'Optional field for badges like "New Arrival" or "Best Seller"',
    },
    {
      name: "code",
      type: "string",
      title: "Product Code",
      description: "Optional product code",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Optional product description for detailed pages",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Featured", value: "featured" },
          { title: "Latest", value: "latest" },
          { title: "General", value: "general" },
          { title: "Trending", value: "trending" },
          { title: "Product Page", value: "productPage" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) =>
        Rule.required().error(
          "Category is required and must match one of the predefined values"
        ),
    },
    {
      name: "shipment",
      type: "object",
      title: "Shipment",
      validation: (Rule) => Rule.required().error("Shipment is required"),
      fields: [
        {
          name: "weight",
          title: "Weight",
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["ounce", "pound", "gram", "kilogram"],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "dimensions",
          title: "Dimensions",
          type: "object",
          fields: [
            {
              name: "height",
              title: "Height",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            },
            {
              name: "width",
              title: "Width",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            },
            {
              name: "length",
              title: "Length",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["inch", "cm", "meter"],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
});
