import { uploadImage } from "@/lib/helper/uploadImage";
import { IOrder } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { order }: { order: IOrder } = await req.json();
  if (!order) {
    return NextResponse.json(
      { message: " Order is required" },
      { status: 400 }
    );
  }
  const labelImage = await uploadImage(order.LabelPDF)
  return NextResponse.json({ labelImage });
//   const createOrder = client.create(order);
}
