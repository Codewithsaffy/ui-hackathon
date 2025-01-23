"use client";
import { useToast } from "@/hooks/use-toast";
import { ProductData } from "@/type";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCart = ({ product }: { product: ProductData }) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();
   const handleClick = async ()=>{
    addItem({ ...product, sku: product._id as string, currency: "USD" })
    toast({
      description:"Product added to your cart!"
    })
   }



  return (
    <button
      onClick={() => handleClick()}
      className="text-[#151875] bg-gray-200 px-4 py-2 rounded-md text-sm lg:text-base"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
