"use client";
import { ProductData } from "@/type";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCart = ({ product }: { product: ProductData }) => {
  const { addItem } = useShoppingCart();

  return (
    <button
      onClick={() => addItem({ ...product, sku: product._id as string, currency: "USD" })}
      className="text-[#151875] bg-gray-200 px-4 py-2 rounded-md text-sm lg:text-base"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
