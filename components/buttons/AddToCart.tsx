"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "@/lib/helper/getProduct";

const AddToCart = ({ product }: { product: Product }) => {
  const { addItem } = useShoppingCart();

  return (
    <button
      onClick={() => addItem({ ...product, sku: product._id, currency: "USD" })}
      className="text-[#151875] bg-gray-200 px-4 py-2 rounded-md text-sm lg:text-base"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
