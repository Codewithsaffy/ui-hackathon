import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const order = await req.json();

    // Validate order structure
    if (
      !order.products ||
      !order.address ||
      !order.payment ||
      !order.userId ||
      !order.shipment
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required order fields" },
        { status: 400 }
      );
    }

    // Create order in Sanity
    const createdOrder = await client.create({
      _type: "order",
      ...order,
    });

    return NextResponse.json({ success: true, order: createdOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
