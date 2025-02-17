"use client";
import { Button } from "@/components/ui/button";
import { useFormatPrice } from "@/hooks/use-format-price";
import { useToast } from "@/hooks/use-toast";
import { getDayDiff } from "@/lib/helper/getDayDiff";
import OrderContext from "@/provider/order/OrderContext";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Shipment = () => {
  const router = useRouter();
  const [rateId, setRateId] = useState<string | null>(null);
  const { toast } = useToast();

  const { order, setOrder } = useContext(OrderContext);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const formatPrice = useFormatPrice;
  useEffect(() => {
    if (!order.address) {
      router.push("/checkout/information");
    } else {
      setPageLoading(false);
    }
  }, [order, router]);
  const filterByPrice =
    order.rates &&
    order.rates.sort(
      (a, b) => a.shippingAmount.amount - b.shippingAmount.amount
    );

  // generate label for the selected rate
  const handelRateSubmition = async () => {
    setLoading(true);

    try {
      if (!rateId) {
        toast({
          description: "Please select a shipping option",
        });
      }
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      if (!response.data) {
        toast({
          description: "Something went wrong",
        });
      }
      const newOrder = {
        ...order,
        trackingId: response.data.labelId,
        shippingAmount: response.data.shipmentCost?.amount,
        LabelPDF: response.data.labelDownload?.href,
        carrierName: response.data.carrierCode,
      };
      setOrder(newOrder);
      localStorage.setItem("order", JSON.stringify(newOrder));
      router.push("/checkout/payment");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return pageLoading ? (
    <LoaderCircle className="animate-spin" />
  ) : (
    <main className="py-6">
      <h1 className="text-xl font-bold mb-4">Shippment Opitons</h1>
      {order.rates ? (
        filterByPrice.map((rate) => {
          return (
            <div
              key={rate.rateId}
              className={`flex items-center max-w-lg mb-4 p-2 border gap-3 shadow-sm rounded-md ${rateId === rate.rateId ? "border-violet-600 border-2" : "border-black"}`}
            >
              <input
                type="radio"
                name={rate.rateId}
                id={rate.rateId}
                value={rate.rateId}
                onChange={(e) => setRateId(e.target.value)}
                checked={rateId === rate.rateId}
              />
              <label
                htmlFor={rate.rateId}
                className="flex justify-between w-full "
              >
                <div>
                  <h2 className="font-bold">{rate.carrierFriendlyName}</h2>
                  <p className="text-gray-600 text-sm font-semibold">
                    {getDayDiff(rate.shipDate, rate.estimatedDeliveryDate)} to{" "}
                    {getDayDiff(rate.shipDate, rate.estimatedDeliveryDate) + 1}{" "}
                    days delivery
                  </p>
                </div>
                <p className="font-bold">
                  {formatPrice(rate.shippingAmount.amount)}
                </p>
              </label>
            </div>
          );
        })
      ) : (
        <p>No Shippment Options Available</p>
      )}
      <Button onClick={() => handelRateSubmition()} className="font-bold py-6">
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          "Continue to Payment"
        )}
      </Button>
    </main>
  );
};

export default Shipment;
