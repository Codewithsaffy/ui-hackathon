import React from "react";
import { latestProducts } from "@/data/latestCard";
import LatestCard from "../../cards/LatestCard";
import LatestBar from "../../small/LatestBar";

const Leatest = () => {
  return (
    <section className="container py-10 flex flex-col gap-8 items-center">
      <h2 className="text-[#151875] jon text-[42px] font-bold">Leatest Offer!</h2>
      <LatestBar/>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {latestProducts.map((product, index) => (
          <LatestCard second={index === 1} key={index} CardData={product} />
        ))}
      </div>
    </section>
  );
};

export default Leatest;
