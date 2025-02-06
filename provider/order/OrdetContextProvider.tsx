"use client";
import { useState, ReactNode, useEffect } from "react";
import OrderContext from "./OrderContext";
import { IOrder } from "@/type";

const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<IOrder>(() => {
    if (typeof window !== "undefined") {
      const savedOrder = localStorage.getItem("order");
      return savedOrder ? JSON.parse(savedOrder) : {};
    }
    return {};
  });

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
