import React from "react";
import LatestCard from "../../cards/LatestCard";
import LatestBar from "../../small/LatestBar";
import { ProductData } from "@/type";

const Leatest = ({ cardData }: { cardData: ProductData[] }) => {
  return (
    <section className="container py-8 sm:py-10 flex flex-col gap-6 sm:gap-8 items-center">
      {/* Title */}
      <h2 className="text-[#151875] jon text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-center">
        Latest Offer!
      </h2>

      {/* Decorative Bar */}
      <LatestBar />

      {/* Product Grid */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {cardData.map((product, index) => (
          <LatestCard fourth={index === 4} key={index} CardData={product} />
        ))}
      </div>
    </section>
  );
};

export default Leatest;
