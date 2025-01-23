"use client";
import RemoveWishList from "@/components/buttons/RemoveWishList";
import SubHero from "@/components/small/SubHero";
import wishListContext from "@/provider/wishlist";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export const dynamic = "force-dynamic";

const WishListPage = () => {
  const { products } = useContext(wishListContext);
  return (
    <main>
      <SubHero title="Wish List" />

      <section className="grid grid-cols-1 p-4 sm:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center container mt-16">
        {products.length === 0 ? (
          <p className="text-center">This product is not found</p>
        ) : (
          products.map((item, index) => (
            <div key={index} className="relative">
              <RemoveWishList productId={item._id as string} />
              <Link href={`/product/${item._id}`} className="h-[400px]  ">
                <div className="bg-slate-100  w-[250px] h-[280px] flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-lg text-center font-bold text-indigo-950 mt-4">
                    {item.name}
                  </h1>
                  <Image
                    src={"/pagesPage/pagination.png"}
                    alt="pagination-img"
                    width={42}
                    height={10}
                    className="mt-2"
                  />
                  <div className="flex justify-center gap-x-3 mt-3 text-sm">
                    <p className="text-indigo-900">${item.price}.00</p>
                    <p className="text-red-600 line-through">
                      ${item.prevPrice}.00
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </section>

      {/* Brands Section */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src={"/topProduct/brands.png"}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default WishListPage;
