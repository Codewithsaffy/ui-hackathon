"use client"
import { ProductData } from "@/type";
import { createContext, Dispatch, SetStateAction } from "react";

interface WishList {
    products:ProductData[] | [],
    setProducts:Dispatch<SetStateAction<ProductData[]>>
}

const wishListContext = createContext<WishList>({} as WishList)
export default wishListContext