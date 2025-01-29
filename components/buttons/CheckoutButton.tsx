import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutButton = () => {
  const [status, setStatus] = useState<string>("idle");
  const { cartCount, cartDetails, totalPrice } = useShoppingCart();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_KEY!
  );

  async function handleClick() {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe.js has not loaded properly.");
      return;
    }

    if ((cartCount as number) > 0) {
      setStatus("loading");
      try {
        const res = await fetch("api/session", {
          method: "POST",
          body: JSON.stringify({
            cartDetails: Object.values(cartDetails || {}),
            updatedTotal: totalPrice as number + 200,
          }),
        });
        if (!res.ok) {
          throw new Error("Failed to create checkout session");
        }
        console.log(res)

        const { sessionId } = await res.json();

        if (sessionId) {
          const { error } = await stripe.redirectToCheckout({ sessionId });
          if (error) {
            console.error("Error redirecting to checkout:", error);
          }
        } else {
          console.error("No session ID returned.");
        }
      } catch (error) {
        console.error("Checkout error:", error);
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className={`bg-[#19D16F] text-white rounded px-4 py-2 md:py-3 transition-all duration-300 ${
          status === "loading"
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#17b963]"
        }`}
        onClick={handleClick}
        disabled={status === "loading"}
      >
        place order
      </button>
    </div>
  );
};

export default CheckoutButton;
