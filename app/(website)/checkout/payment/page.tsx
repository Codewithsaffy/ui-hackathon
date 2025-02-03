"use client";

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/helper/convertToSubcurrency";
import OrderContext from "@/provider/order/OrderContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const router = useRouter();
  const { order } = useContext(OrderContext);
  const [validOrder, setValidOrder] = useState(false);
  console.log(order);
  useEffect(() => {
    if (order?.shippingAmount === undefined) {
      router.push("/checkout/shippment");
    } else {
      setValidOrder(true);
    }
  }, [order, router]);

  if (!validOrder) return <LoaderCircle className="animate-spin" />; // Prevent rendering until the order is valid

  const amount = order.subTotal + order.shippingAmount;
  console.log(order.shippingAmount, order.subTotal);
  console.log(amount);

  return (
    <main className="py-6 pr-10">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
