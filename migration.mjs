import fetch from "node-fetch";
import sanityClient from "@sanity/client"
const allProducts = [
  // Featured Products
  {
    _type: "product",
    name: "Cantilever Chair - Classic",
    price: 42.0,
    prevPrice: null,
    rating: 4,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182480/1_fjiysy.png",
    badge: null,
    code: "YS2301",
    description:
      "A sleek and modern cantilever chair designed for comfort and style.",
    category: "featured",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Cantilever Chair - Ergonomic",
    price: 42.0,
    prevPrice: null,
    rating: 5,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182556/2_lkf6r8.png",
    badge: null,
    code: "YS2301",
    description:
      "An ergonomic cantilever chair with a minimalist design, perfect for any space.",
    category: "featured",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Cantilever Chair - Stylish",
    price: 42.0,
    prevPrice: null,
    rating: 3,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182576/3_atlvhd.png",
    badge: null,
    code: "YS2301",
    description:
      "A stylish cantilever chair with a sturdy frame and comfortable seating.",
    category: "featured",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Cantilever Chair - Durable",
    price: 42.0,
    prevPrice: null,
    rating: 2,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182599/4_cfxm2i.png",
    badge: null,
    code: "YS2301",
    description:
      "A durable cantilever chair with a classic design, ideal for home or office use.",
    category: "featured",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },

  // Latest Products
  {
    _type: "product",
    name: "Modern Accent Chair",
    price: 149.99,
    prevPrice: 299.99,
    rating: 1,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182628/1_tk5dgw.png",
    badge: "New Arrival",
    code: null,
    description:
      "A contemporary accent chair that adds a touch of elegance to any room.",
    category: "latest",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Wooden Lounge Chair",
    price: 249.99,
    prevPrice: 399.99,
    rating: 4,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182710/2_mhg1yo.png",
    badge: "Best Seller",
    code: null,
    description:
      "A luxurious wooden lounge chair crafted for ultimate relaxation.",
    category: "latest",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Minimalist Dining Chair",
    price: 199.99,
    prevPrice: null,
    rating: 5,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182731/3_bwstew.png",
    badge: null,
    code: null,
    description:
      "A simple yet elegant dining chair designed for modern interiors.",
    category: "latest",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Velvet Armchair",
    price: 349.99,
    prevPrice: 399.99,
    rating: 3,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182755/4_dk6tkd.png",
    badge: null,
    code: null,
    description:
      "A plush velvet armchair that combines comfort and sophistication.",
    category: "latest",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Designer Lounge Chair",
    price: 549.99,
    prevPrice: null,
    rating: 2,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182808/5_cetdvy.png",
    badge: "Featured",
    code: null,
    description:
      "A high-end designer lounge chair for those who appreciate luxury.",
    category: "latest",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Scandinavian Chair",
    price: 249.99,
    prevPrice: 299.99,
    rating: 1,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182825/6_yufjl4.png",
    badge: "Special Offer",
    code: null,
    description:
      "A Scandinavian-inspired chair with a clean and timeless design.",
    category: "latest",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },

  // General Products
  {
    _type: "product",
    name: "Velvet Elegance Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 4,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737182825/6_yufjl4.png",
    badge: null,
    code: null,
    description:
      "A versatile chair with a modern design, suitable for any setting.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Urban Comfort Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183007/img-2_f1fqix.png",
    badge: null,
    code: null,
    description: "A durable and stylish chair designed for everyday use.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Modern Simplicity Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 3,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183050/img-3_glygyh.png",
    badge: null,
    code: null,
    description:
      "A comfortable chair with a sleek design, perfect for modern homes.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Classic Sturdy Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 2,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183068/img-4_vwz64m.png",
    badge: null,
    code: null,
    description: "A sturdy and reliable chair designed for long-lasting use.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Casual Comfort Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 1,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183086/img-5_aumu5i.png",
    badge: null,
    code: null,
    description: "A simple yet functional chair, ideal for casual settings.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Timeless Design Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 4,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183113/img-6_bchvtu.png",
    badge: null,
    code: null,
    description:
      "A classic chair with a timeless design, suitable for any decor.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Relaxing Lounge Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183133/img-7_mkcvkj.png",
    badge: null,
    code: null,
    description:
      "A comfortable and stylish chair, perfect for relaxing after a long day.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Functional Comfort Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 3,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183154/img-8_ttrihq.png",
    badge: null,
    code: null,
    description:
      "A versatile chair designed for both comfort and functionality.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Modern Durable Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 2,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183183/img-9_ya8rqh.png",
    badge: null,
    code: null,
    description: "A durable chair with a modern design, perfect for any space.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Elegant Simplicity Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 1,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183222/img-10_arpos4.png",
    badge: null,
    code: null,
    description: "A simple and elegant chair designed for everyday use.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Sleek Modern Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 4,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183248/img-11_tciix6.png",
    badge: null,
    code: null,
    description: "A comfortable chair with a sleek and modern design.",
    category: "general",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },

  // Trending Products
  {
    _type: "product",
    name: "Trendy Cantilever Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183295/img-1_chvpam.png",
    badge: null,
    code: null,
    description: "A trendy cantilever chair with a modern and stylish design.",
    category: "trending",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Comfortable Cantilever Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 3,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183353/img-2_hhaexm.png",
    badge: null,
    code: null,
    description:
      "A comfortable and stylish cantilever chair, perfect for modern interiors.",
    category: "trending",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Durable Cantilever Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 2,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183371/img-3_bzx54h.png",
    badge: null,
    code: null,
    description:
      "A durable cantilever chair with a sleek and minimalist design.",
    category: "trending",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "Elegant Cantilever Chair",
    price: 26.0,
    prevPrice: 42.0,
    rating: 1,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183394/img-4_sinqlb.png",
    badge: null,
    code: null,
    description: "A simple yet elegant cantilever chair, ideal for any space.",
    category: "trending",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },

  // Product Page Products
  {
    _type: "product",
    name: "Accumsan Tincidunt Chair",
    price: 26.0,
    prevPrice: 52.0,
    rating: 4,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183446/img-1_c7n1tw.png",
    badge: null,
    code: null,
    description:
      "A versatile chair with a modern design, suitable for any setting.",
    category: "productPage",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
  {
    _type: "product",
    name: "In Nulla Chair",
    price: 26.0,
    prevPrice: 52.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/ddlhrx9xn/image/upload/v1737183476/img-2_zcxj1m.png",
    badge: null,
    code: null,
    description:
      "A comfortable and stylish chair, perfect for relaxing after a long day.",
    category: "productPage",
    shipment: {
      weight: { value: 0.5, unit: "ounce" },
      dimensions: { height: 0.5, width: 3, length: 6, unit: "inch" },
    },
  },
];

const client = sanityClient({
  projectId: "your project id",
  dataset: "your dataset",
  token:
    "your tocken",
  useCdn: false, // Set to false for mutations
});


const uploadImage = async (imageUrl) => {
  const res = await fetch(imageUrl);
  const bufferImage = await res.buffer();
  const image = await client.assets.upload("image", bufferImage);
  return image;
};

// Function to upload a single product to Sanity
const uploadProduct = async (productData) => {
  // Upload the product image
  const image = await uploadImage(productData.image);

  // Create the product document
  const product = {
    _type: "product",
    name: productData.name,
    description: productData.description,
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: image._id,
      },
    },
    price: productData.price,
    badge: productData.badge,
    code: productData.code,
    category: productData.category,
    rating: productData.rating,
    prevPrice: productData.prevPrice,
    shipment: productData.shipment,
  };

  // Upload the product to Sanity
  const newProduct = await client.create(product);
  console.log("Uploaded Product:", newProduct);
  return newProduct;
};

// Function to upload all products
const uploadAllProducts = async () => {
  for (const product of allProducts) {
    const uploadedProduct = await uploadProduct(product);
    console.log(uploadedProduct);
  }
};

await uploadAllProducts();
