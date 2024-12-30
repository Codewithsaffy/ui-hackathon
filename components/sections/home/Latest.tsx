import React from "react";
import LatestCard from "../../cards/LatestCard";
import LatestBar from "../../small/LatestBar";
import {  Product } from "@/lib/helper/getProduct";

const Leatest =  ({ cardData }: { cardData: Product[]}) => {
  
  return (
    <section className="container py-10 flex flex-col gap-8 items-center">
      <h2 className="text-[#151875] jon text-[42px] font-bold">Leatest Offer!</h2>
      <LatestBar/>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {cardData.map((product, index) => (
          <LatestCard second={index === 1} key={index} CardData={product} />
        ))}
      </div>
    </section>
  );
};

export default Leatest;
