import FilterSection from "@/components/small/FilterHeader";
import SubHero from "@/components/small/SubHero";
import { filterProduct } from "@/lib/helper/getProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{
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
      <section className="grid grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:grid-cols-3 place-items-center container mt-8">
        {data && data.length === 0 ? (
          <p className="text-center text-sm font-medium text-gray-500 col-span-2">
            No products found.
          </p>
        ) : (
          data.map((item, index) => (
            <Link
              href={`/product/${item._id}`}
              key={index}
              className="w-full max-w-[160px] sm:max-w-full"
              replace
            >
              {/* Product Card */}
              <div className="bg-slate-100 w-full h-[220px] flex justify-center items-center rounded-md shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col items-center mt-2">
                <h1 className="text-sm font-semibold text-indigo-950 text-center">
                  {item.name}
                </h1>
                <Image
                  src={"/pagesPage/pagination.png"}
                  alt="pagination-img"
                  width={36}
                  height={8}
                  className="mt-1"
                />
                <div className="flex justify-center gap-x-2 mt-2 text-xs">
                  <p className="text-indigo-900 font-bold">${item.price}.00</p>
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
      <div className="flex justify-center items-center mt-10">
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
