"use client";
import { useState, ReactNode, useEffect } from "react";
import OrderContext from "./OrderContext";
import { IOrder } from "@/type";
import { useShoppingCart } from "use-shopping-cart";
import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const OrdetContextProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const { cartDetails } = useShoppingCart();
  const { user } = useUser();

  console.log(order);
  useEffect(() => {
    setOrder({
      ...order,
      products: Object.values(cartDetails || {}),
      userId: user?.id as string,
    });
  }, [cartDetails, user?.id]);

  useEffect(() => {
    const order = localStorage.getItem("order");
    setOrder(JSON.parse(order || "{}"));
  }, []);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrdetContextProvider;
