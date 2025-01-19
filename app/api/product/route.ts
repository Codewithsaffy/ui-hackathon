import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest) => {
  try {
    const category = req.nextUrl.searchParams.get("category");
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category parameter is required." },
        { status: 400 }
      );
    }

    const products = await client.fetch(
      `*[_type == "product" && category == "${category}"]{
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
      }`
    );

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
};



export const DELETE = async () => {
  try {
    // Fetch all products of type "product"
    const products = await client.fetch(`*[_type == "product"]`);
    const allIds = products.map((product: { _id: string }) => product._id);

    // Delete all products
    for (const id of allIds) {
      await client.delete(id);
    }

    return NextResponse.json({ success: true, deletedIds: allIds });
  } catch (error) {
    console.error("Error deleting products:", error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
};
