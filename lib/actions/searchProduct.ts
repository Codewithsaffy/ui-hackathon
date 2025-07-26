"use server";
import { client } from "@/sanity/lib/client";

// export async function getAllProducts() {
//   try {
//     const query = `*[_type == "product"] | order(name asc) {
//       _id,
//       name,
//       description,
//       price,
//       rating,
//       prevPrice,
//       "image": image.asset->url
//     }`;

//     const products = await client.fetch(query);
//     console.log("Fetched products:", products);

//     return {
//       success: true,
//       message: "All products retrieved successfully.",
//       products,
//     };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return {
//       success: false,
//       message: "Failed to fetch products.",
//       error: error,
//     };
//   }
// }

export async function findProducts(
  searchTerm: string,
  minPrice?: number,
  maxPrice?: number,
  minRating?: number,
  sortBy: "price_asc" | "price_desc" | "rating_desc" | "name_asc" = "name_asc",
  limit?: number
) {
  try {
    // build filters
    const filters = [
      `_type == "product"`,
      `(name match $term + "*" || description match $term + "*")`,
      ...(minPrice !== undefined ? [`price >= ${minPrice}`] : []),
      ...(maxPrice !== undefined ? [`price <= ${maxPrice}`] : []),
      ...(minRating !== undefined ? [`rating >= ${minRating}`] : []),
    ].join(" && ");

    // determine ordering
    const orderClause = {
      price_asc: "price asc",
      price_desc: "price desc",
      rating_desc: "rating desc",
      name_asc: "name asc",
    }[sortBy];

    // assemble GROQ query
    let query = `
      *[ ${filters} ]
      | order(${orderClause})
    `;
    if (limit !== undefined) {
      query += ` [0...${limit}]`;
    }
    query += ` {
      _id,
      name,
      description,
      price,
      rating,
      prevPrice,
      "image": image.asset->url
    }`;

    // execute
    const params = { term: searchTerm };
    const products = await client.fetch(query, params);

    return {
      success: true,
      message: "Search completed successfully.",
      products
    };
  } catch (error) {
    console.error("Error searching products:", error);
    return {
      success: false,
      message: "Failed to search products.",
      error
    };
  }
}

