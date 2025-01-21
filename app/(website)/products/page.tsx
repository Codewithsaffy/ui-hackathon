import FilterSection from "@/components/small/FilterHeader";
import SubHero from "@/components/small/SubHero";
import { filterProduct } from "@/lib/helper/getProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Dynamic rendering ensures we handle dynamic data
export const dynamic = "force-dynamic";

const Products = async ({
  searchParams,
}: {
  searchParams:Promise< {
    query?: string;
    sort?: "low-to-high" | "high-to-low" | "normal";
  }>;
}) => {
  const query = (await searchParams).query || ""; 
  const sort = (await searchParams).sort || "normal"; 

  // Fetch filtered product data
  const data = await filterProduct({ query, sort });
  

  return (
    <main>
      <SubHero title="Shop List" />
      {/* Filter Component */}
      <FilterSection currentQuery={query} currentSort={sort} />

      {/* Product Listing */}
      <section className="grid grid-cols-1 p-4 sm:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center container mt-16">
        {data && data.length === 0 ? (
          <p className="text-center">This product is not found</p>
        ) : (
          data.map((item, index) => (
            <Link
              href={`/product/${item._id}`}
              key={index}
              className="h-[400px]"
            >
              <div className="bg-slate-100 w-[250px] h-[280px] flex justify-center items-center">
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

export default Products;
