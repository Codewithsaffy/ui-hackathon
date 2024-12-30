import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      badge,
      code,
      rating,
      prevPrice,
    } = await req.json();
    if (
      !name &&
      !description &&
      !price &&
      !image &&
      !category &&
      !rating
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const product = {
    _type: "product",
      name,
      description,
      price,
      image,
      category,
      badge,
      code,
      rating,
      prevPrice,
    }

    const response = await client.create(product)
    return NextResponse.json(response)
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
