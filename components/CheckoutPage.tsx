"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/helper/convertToSubcurrency";
import OrderContext from "@/provider/order/OrderContext";
import { ISanityOrder } from "@/type";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const { toast } = useToast();

  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const { order } = useContext(OrderContext);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    const newOrder: ISanityOrder = {
      products: order.products.map((item) => ({
        _key: item.id,
        product: { _type: "reference", _ref: item._id },
        quantity: 1, // Adjust as needed
      })),
      address: {
        email: order.address.email,
        country: order.address.country,
        phone: order.address.phoneNumber,
        name: `${order.address.firstName} ${order.address.lastName}`,
        postalCode: order.address.postalCode,
        state: order.address.state,
        city: order.address.city,
        street: order.address.address,
      },
      payment: {
        totalAmount: order.shippingAmount + order.subTotal,
        method: "stripe",
        status: "pending",
      },
      userId: order.userId,
      shipment: {
        carrierName: order.carrierName,
        labelPdf: order.LabelPDF,
        trackingId: order.trackingId,
        shipmentRate: order.shippingAmount,
        status: "pending",
      },
    };

    // Send the request to create an order
    const createOrder = await axios.post("/api/create-order", newOrder);

    if (createOrder.status !== 200) {
      toast({
        description: "Failed to create order",
        color: "red",
      });
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_URL as string}/checkout/success?amount=${amount}`,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
