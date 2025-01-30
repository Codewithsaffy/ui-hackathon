"use client";
import { IOrder } from "@/type";
import { createContext, Dispatch, SetStateAction } from "react";
interface IOrderContext {
  order: IOrder;
  setOrder: Dispatch<SetStateAction<IOrder>>;
}

const OrderContext = createContext<IOrderContext>({
  order: {} as IOrder,
  setOrder: () => {},
});

export default OrderContext;
