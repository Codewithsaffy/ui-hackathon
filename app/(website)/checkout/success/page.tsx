"use client";

import { Suspense, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { verifyPaymentIntent } from "@/lib/actions/verfiyPayment";
import { Loader2 } from "lucide-react";
import OrderContext from "@/provider/order/OrderContext";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [amount, setAmount] = useState<number | null>(null);
  const { order } = useContext(OrderContext);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!paymentIntentId) {
        setStatus("error");
        return;
      }

      try {
        console.log("order", order);
        const { amount, status } = await verifyPaymentIntent(paymentIntentId);

        if (status !== "succeeded") throw new Error("Payment not completed");

        setAmount(amount);
        setStatus("success");
      } catch (error) {
        console.error("Payment verification failed:", error);
        setStatus("error");
      }
    };

    verifyPayment();
  }, [paymentIntentId, order]);

  if (status === "error") {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Payment verification failed. Please contact support.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Payment Successful! 🎉</h1>
      {amount && (
        <p className="text-xl text-muted-foreground">
          Amount: ${(amount / 100).toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <Loader2 className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}