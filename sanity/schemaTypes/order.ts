import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    // Products
    defineField({
      name: "products",
      type: "array",
      title: "Products",
      validation: (Rule) =>
        Rule.required().min(1).error("At least one product is required"),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "product",
              type: "reference",
              title: "Product",
              to: [{ type: "product" }], // Reference to the product schema
              validation: (Rule) =>
                Rule.required().error("Product reference is required"),
            }),
            defineField({
              name: "quantity",
              type: "number",
              title: "Quantity",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .error("Quantity must be at least 1"),
            }),
          ],
        },
      ],
    }),

    // Address
    defineField({
      name: "address",
      type: "object",
      title: "Shipping Address",
      validation: (Rule) =>
        Rule.required().error("Shipping address is required"),
      fields: [
        defineField({
          name: "email",
          type: "string",
          title: "Email",
          validation: (Rule) =>
            Rule.required().email().error("Valid email is required"),
        }),
        defineField({
          name: "country",
          type: "string",
          title: "Country",
          validation: (Rule) =>
            Rule.required().error("Country is required"),
        }),
        defineField({
          name: "phone",
          type: "string",
          title: "Phone Number",
          validation: (Rule) =>
            Rule.required()
              .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/)
              .error("Valid phone number is required"),
        }),
        defineField({
          name: "name",
          type: "string",
          title: "Full Name",
          validation: (Rule) =>
            Rule.required().error("Full name is required"),
        }),
        defineField({
          name: "postalCode",
          type: "string",
          title: "Postal Code",
          validation: (Rule) =>
            Rule.required().error("Postal code is required"),
        }),
        defineField({
          name: "state",
          type: "string",
          title: "State/Province",
          validation: (Rule) =>
            Rule.required().error("State/Province is required"),
        }),
        defineField({
          name: "city",
          type: "string",
          title: "City",
          validation: (Rule) => Rule.required().error("City is required"),
        }),
        defineField({
          name: "street",
          type: "string",
          title: "Street Address",
          validation: (Rule) =>
            Rule.required().error("Street address is required"),
        }),
      ],
    }),

    // Payment
    defineField({
      name: "payment",
      type: "object",
      title: "Payment Details",
      validation: (Rule) =>
        Rule.required().error("Payment details are required"),
      fields: [
        defineField({
          name: "totalAmount",
          type: "number",
          title: "Total Amount",
          validation: (Rule) =>
            Rule.required()
              .min(0)
              .error("Total amount must be a positive number"),
        }),
        defineField({
          name: "method",
          type: "string",
          title: "Payment Method",
          options: {
            list: [
              { title: "Stripe", value: "stripe" },
              { title: "Cash on Delivery", value: "cash_on_delivery" },
            ],
            layout: "dropdown",
          },
          validation: (Rule) =>
            Rule.required().error("Payment method is required"),
        }),
        defineField({
          name: "status",
          type: "string",
          title: "Payment Status",
          options: {
            list: [
              { title: "Pending", value: "pending" },
              { title: "Success", value: "success" },
            ],
            layout: "dropdown",
            },
            validation: (Rule) =>
              Rule.required().error("Payment status is required"),
        })
      ],
    }),

    // User ID
    defineField({
      name: "userId",
      type: "string",
      title: "User ID",
      validation: (Rule) => Rule.required().error("User ID is required"),
    }),

    // Shipment
    defineField({
      name: "shipment",
      type: "object",
      title: "Shipment Details",
      validation: (Rule) =>
        Rule.required().error("Shipment details are required"),
      fields: [
        defineField({
          name: "carrierName",
          type: "string",
          title: "Carrier Name",
          validation: (Rule) =>
            Rule.required().error("Carrier name is required"),
        }),
        defineField({
          name: "labelPdf",
          type: "string",
          title: "Shipping Label PDF",
          validation: (Rule) =>
            Rule.required().error("Shipping label is required"),
        }),
        defineField({
          name: "trackingId",
          type: "string",
          title: "Tracking ID",
          validation: (Rule) =>
            Rule.required().error("Tracking ID is required"),
        }),
        defineField({
          name: "shipmentRate",
          type: "number",
          title: "Shipment Rate",
          validation: (Rule) =>
            Rule.required()
              .min(0)
              .error("Shipment rate must be a positive number"),
        }),
        defineField({
          name: "status",
          type: "string",
          title: "Shipment Status",
          options: {
            list: [
              { title: "Pending", value: "pending" },
              { title: "Shipped", value: "shipped" },
              { title: "In Transit", value: "in_transit" },
              { title: "Delivered", value: "delivered" },
              { title: "Returned", value: "returned" },
            ],
            layout: "dropdown",
          },
          validation: (Rule) =>
            Rule.required().error("Shipment status is required"),
        }),
      ],
    }),
  ],

 
});