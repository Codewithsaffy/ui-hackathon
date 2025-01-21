"use client";
import React, { ReactNode, useEffect, useState } from "react";
import WichListContext from "@/provider/wishlist";
import { ProductData } from "@/type";

const WishlistContextProvider = ({children}:{children:ReactNode}) => {

  const [products, setProducts] = useState<ProductData[]>([]);
  useEffect(()=>{
   const wishList = localStorage.getItem("wishList")
   if (wishList) {
     setProducts(JSON.parse(wishList))
   }
  }, [])
  return (
    <WichListContext value={{ products, setProducts }}>
      {children}
    </WichListContext>
  );
};

export default WishlistContextProvider;
