"use client";
import wishListContext from '@/provider/wishlist';
import { ProductData } from '@/type';
import { Heart } from 'lucide-react';
import React, { useContext } from 'react';
import { useToast } from "@/hooks/use-toast";

const AddWishListButton = ({ product }: { product: ProductData }) => {
  const { toast } = useToast();
  const { setProducts, products } = useContext(wishListContext);

  const handleClick = () => {
    const isAlreadyInWishlist = products.some((pro) => pro._id === product._id);

    if (isAlreadyInWishlist) {
      toast({
        description: "This product is already in your wishlist",
      });
      return;
    }

    const updatedWishlist = [...products, product];
    setProducts(updatedWishlist);
    localStorage.setItem("wishList", JSON.stringify(updatedWishlist));

    toast({
      description: "Product added to your wishlist!",
    });
  };

  return (
    <Heart
      className="cursor-pointer text-gray-500 hover:text-red-500 transition duration-300"
      onClick={handleClick}
      size={20}
    />
  );
};

export default AddWishListButton;
