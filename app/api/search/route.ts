import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchQuery = req.nextUrl.searchParams.get("query") || "";
    const sortOrder = req.nextUrl.searchParams.get("sort") || "low-to-high"; 
    const category = req.nextUrl.searchParams.get("category") || ""; 

    if (!["low-to-high", "high-to-low"].includes(sortOrder)) {
      return NextResponse.json(
        { success: false, message: "Invalid 'sort' parameter. Use 'low-to-high' or 'high-to-low'." },
        { status: 400 } // Bad Request
      );
    }

    const queryString = `
      *[
        _type == "product" && 
        (name match $searchQuery || description match $searchQuery) &&
        category match $category
      ] | 
      order(price ${sortOrder === "low-to-high" ? "asc" : "desc"}) {
        _id,
        name,
        description,
        price,
        rating,
        prevPrice,
        badge,
        code,
        category,
        "image": image.asset->url,
        shipment {
          weight { value, unit },
          dimensions { height, width, length, unit }
        }
      }
    `;

    // Add a wildcard for partial matching and include the category parameter
    const params = {
      searchQuery: `${searchQuery}*`,
      category: `${category}*` , // Pass undefined if category is not provided
    };

    // Fetch matching products from Sanity
    const products = await client.fetch(queryString, params);

    // Handle case where no products are found
    if (!products.length) {
      return NextResponse.json(
        { success: true, message: "No products found matching the query and category.", products: [] },
        { status: 200 } // OK
      );
    }

    // Return the products if found
    return NextResponse.json(
      { success: true, message: "Products retrieved successfully.", products },
      { status: 200 } // OK
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    // Return a generic error response
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching products. Please try again later." },
      { status: 500 } // Internal Server Error
    );
  }
}