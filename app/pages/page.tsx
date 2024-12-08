import FilterSection from "@/components/small/FilterHeader";
import SubHero from "@/components/small/SubHero";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main >
      <SubHero title="Shop List" />
      <FilterSection />
      <section className="grid grid-cols-1 p-4 ms:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center container mt-16">
        {products.map((item, index) => (
          <Link href={`/pagesPage/${item.id}`} key={index} className="h-[400px]">
            <div className="bg-slate-100 w-[250px] h-[280px] flex justify-center items-center">
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className=""
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-lg text-center font-bold jon text-indigo-950 mt-4">
                {item.name}
              </h1>
              <Image
                src={"/pagesPage/pagination.png"}
                alt="pagination-img"
                width={42}
                height={10}
                className="mt-2"
              />
              <div className="flex justify-center gap-x-3 mt-3 jon text-sm">
                <p className="text-indigo-900">{item.price}</p>
                <p className="text-red-600 line-through">{item.prevPrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
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

export default page;
