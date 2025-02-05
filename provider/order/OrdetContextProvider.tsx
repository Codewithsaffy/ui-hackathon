"use client";
import { useState, ReactNode, useEffect } from "react";
import OrderContext from "./OrderContext";
import { IOrder } from "@/type";
import { useShoppingCart } from "use-shopping-cart";
import { useUser } from "@clerk/nextjs";

const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const { cartDetails } = useShoppingCart();
  const { user } = useUser();
  const [order, setOrder] = useState<IOrder>(() => {
    if (typeof window !== "undefined") {
      const savedOrder = localStorage.getItem("order");
      return savedOrder ? JSON.parse(savedOrder) : { products: [], userId: "" };
    }
    return { products: [], userId: "" };
  });

  useEffect(() => {
    if (cartDetails || user?.id) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        products: Object.values(cartDetails || {}),
        userId: user?.id || "",
      }));
    }
  }, [cartDetails, user?.id]);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
