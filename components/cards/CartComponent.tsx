"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormatPrice } from "../../hooks/use-format-price";
import OrderContext from "@/provider/order/OrderContext";
import { usePathname } from "next/navigation";

const CartCard = () => {
  const { totalPrice, cartCount } = useShoppingCart();
  const { order } = useContext(OrderContext);
  const formatPrice = useFormatPrice;
  return (
    <div className="space-y-4 m-8 mr-0">
      {order.products &&
        order.products.map((item: Product) => {
          return (
            <div key={item._id} className="flex  justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={item.image as string}
                    className="bg-[#F2F0FF] w-16 h-16 rounded"
                    width={100}
                    height={100}
                    alt={item.name}
                  />
                  <p className="bg-violet-600 w-5 h-5 rounded-full flex items-center justify-center text-white absolute -top-2 -right-2 text-[10px] font-bold">
                    {item.quantity}
                  </p>
                </div>
                <h2 className=" jon">{item.name}</h2>
              </div>
              <div>
                <p className="jon">${item.price}.00</p>
              </div>
            </div>
          );
        })}
      <div className="flex py-4 justify-center items-center gap-4">
        <Input placeholder="Discount Code" className="py-6" />
        <Button className="py-6 px-8 font-bold">Apply</Button>
      </div>
      <div className="flex justify-between text-gray-700 items-center">
        <h2>
          Subtotal <span className="font-bold text-2xl text-black">.</span>{" "}
          {cartCount} items
        </h2>
        <p>{useFormatPrice(totalPrice || 0)}</p>
      </div>
      <div className="flex justify-between text-gray-700 items-center">
        <h2>Shipping</h2>
        <p>
          {order.shippingAmount
            ? formatPrice(order.shippingAmount)
            : "calculating..."}{" "}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Total</h2>
        <p>
          {useFormatPrice((totalPrice as number) + (order.shippingAmount || 0))}
        </p>
      </div>
    </div>
  );
};

const Cart = () => {
  const pathname = usePathname();
  return pathname === "/checkout/success" ? null : (
    <section className="h-[calc(100vh-124px)] sticky top-0  w-[42%] ">
      <CartCard />
    </section>
  );
};

export default Cart;
