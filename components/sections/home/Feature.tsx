import React from "react";
import FeatureCard from "../../cards/FeatureCard";
import { Product } from "@/lib/helper/getProduct";

const Feature =  ({ cardData }: { cardData: Product[] }) => {

  return (
    <section className="container py-10 flex flex-col gap-8 items-center">
      <h2 className="text-[#151875] jon text-[42px] font-bold">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center w-full  ">
        {cardData.map((product, index) => (
          <FeatureCard key={index} cardData={product} />
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <button className="w-[24px] h-[4px] rounded-[10px] bg-[#F701A8]"></button>
        <button className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7]"></button>
        <button className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7]"></button>
        <button className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7]"></button>
      </div>
    </section>
  );
};

export default Feature;
