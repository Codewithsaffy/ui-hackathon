import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
// import { validateCartItems } from "use-shopping-cart/utilities";
import { NextRequest } from "next/server";
// import { client } from "@/sanity/lib/client";


interface cartDetails {
  name: string;
  price: number;
  quantity: number;
}

export async function POST(request: NextRequest) {
  const {cartDetails} = await request.json();
  console.log(cartDetails)
  // const inventory = await client.fetch(`*[_type == "product"]`);
  // const line_items = validateCartItems(inventory, cartDetails);
  // console.log("line_items", line_items);
  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: cartDetails.map((item: cartDetails) => ({
      price_data: {
          currency: "usd",
          product_data: {
              name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
  })),
    success_url: `${headers().get("origin")}/success`,
    cancel_url: `${headers().get("origin")}/cancel`,
  });
  return Response.json({ sessionId: checkoutSession.id });
}
