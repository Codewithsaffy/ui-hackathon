import { RofexData } from "@/data/Rofex";
import React from "react";
import RofexCard from "../../cards/Rofex";

const Rofex = () => {
  return (
    <section className="container py-10 flex flex-col gap-8 items-center">
      <h2 className="text-[#151875] jon text-[42px] font-bold">
      What Shopex Offer!
      </h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 w-full">
        {RofexData.map((product, index) => (
          <RofexCard key={index} CardData={product} />
        ))}
      </div>
    </section>
  );
};

export default Rofex;
