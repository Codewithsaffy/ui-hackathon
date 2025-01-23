import React from "react";
import RofexCard from "../../cards/Rofex";
const rofexData = [
  {
    icon: "/rofex/1.svg",
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
    icon:"/rofex/2.svg",
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
    icon:"/rofex/3.svg",
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
    icon:"/rofex/4.svg" ,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    }
]

const Rofex = () => {
  return (
    <section className="container py-10 flex flex-col gap-8 items-center">
      <h2 className="text-[#151875] text-[28px] sm:text-[32px] lg:text-[42px] font-bold text-center">
      What Shopex Offer!
      </h2>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 w-full">
        {rofexData.map((product, index) => (
          <RofexCard key={index} CardData={product} />
        ))}
      </div>
    </section>
  );
};

export default Rofex;
