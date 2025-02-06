"use client";
import React from "react";
import FeatureCard from "../../cards/FeatureCard";
import { ProductData } from "@/type";

const Feature = ({ cardData }: { cardData: ProductData[] }) => {
  console.log(cardData)
  return (
    <section className="container py-10  jon flex flex-col gap-8 items-center">
      {/* Heading */}
      <h2 className="text-[#151875] text-[28px] sm:text-[32px] lg:text-[42px] font-bold text-center">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 place-items-center  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {cardData.map((product, index) => (
          <FeatureCard key={index} cardData={product} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-2 items-center">
        <button className="w-[16px] h-[4px] sm:w-[24px] sm:h-[6px] rounded-[10px] bg-[#F701A8]"></button>
        <button className="w-[12px] h-[4px] sm:w-[16px] sm:h-[6px] rounded-[10px] bg-[#FEBAD7]"></button>
        <button className="w-[12px] h-[4px] sm:w-[16px] sm:h-[6px] rounded-[10px] bg-[#FEBAD7]"></button>
        <button className="w-[12px] h-[4px] sm:w-[16px] sm:h-[6px] rounded-[10px] bg-[#FEBAD7]"></button>
      </div>
    </section>
  );
};

export default Feature;
