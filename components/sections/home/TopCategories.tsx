"use client";
import Image from "next/image";
import { useState } from "react";

const topProducts = [
  {
    text: "Mini LWC Chair",
    price: "56",
    imageUrl: "/topProduct/img-1.png",
  },
  {
    text: "Mini LWC Chair",
    price: "56",
    imageUrl: "/topProduct/img-2.png",
  },
  {
    text: "Mini LWC Chair",
    price: "56",
    imageUrl: "/topProduct/img-3.png",
  },
  {
    text: "Mini LWC Chair",
    price: "56",
    imageUrl: "/topProduct/img-4.png",
  },
];

const TopCategories = () => {
  const buttons = [1, 2, 3];
  const [activeNo, setActiveNo] = useState(1);
  return (
    <section className="mt-20 jon ">
      <h1 className="text-4xl text-center jon font-bold text-indigo-950">
        Top Categories
      </h1>
      <div className="flex flex-col container lg:flex-row  justify-between  items-center mt-10">
        {topProducts.map((item, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="rounded-full  flex-center group relative  h-60 w-60 bg-[#F6F7FB] hover:shadow-curve-violet">
              <Image
                height={160}
                width={160}
                src={item.imageUrl}
                alt="product-image"
              />
              <button className="group-hover:flex absolute bottom-5 hidden  text-white rounded-[2px] bg-[#08D15F] px-4 py-2 text-xs">
                Shop Now
              </button>
            </div>
            <div className="text-[#151875]">
              <p className="text-xl">{item.text}</p>
              <p>${item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center mt-6 gap-2">
        {buttons.map((no) => (
          <button
            onClick={() => setActiveNo(no)}
            key={no}
            className={`h-[10px] w-[10px] bg-[#FB2E86] border ${activeNo === no ? "border-[#FB2E86]" : "bg-transparent"} rounded-full`}
          ></button>
        ))}
      </div>
      {/* Get latest update */}
      <div className="bg-[url('/topProduct/subscribe.jpeg')] mt-10 flex-center flex-col  gap-5 w-screen h-[450px] bg-cover bg-center">
        <h2 className="text-4xl max-w-[600px] font-semibold text-center text-[#151875]">Get Leatest Update By Subscribe 0ur Newslater</h2>
        <button className="bg-[#FB2E86] px-4 py-2 rounded-[2px] text-white">Shop Now</button>
      </div>
      <Image src={"/topProduct/brands.png"} alt="brands-logo" width={2000} height={200} className="container h-auto mt-5" />
    </section>
  );
};

export default TopCategories;
