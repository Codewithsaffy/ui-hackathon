import SubHero from "@/components/small/SubHero";
import Image from "next/image";
import React from "react";
import { cartData } from "@/data/cartData";

const page = () => {
  return (
    <main>
      <SubHero title="Shopping Cart" />
      <section className="container  mt-20 mx-auto md:p-0 px-4 py-8 gap-8 flex flex-col lg:flex-row justify-between">
        {/* Cart Table Section */}
        <div className="w-full ">
          {/* Table Header */}
          <div className="grid grid-cols-12 items-center border-b pb-4">
            <p className="col-span-6 font-bold text-[#1D3178] text-sm md:text-base">
              Product
            </p>
            <p className="col-span-2 font-bold text-center text-[#1D3178] text-sm md:text-base">
              Price
            </p>
            <p className="col-span-2 font-bold text-center text-[#1D3178] text-sm md:text-base">
              Quantity
            </p>
            <p className="col-span-2 font-bold text-center text-[#1D3178] text-sm md:text-base">
              Total
            </p>
          </div>

          {/* Table Rows */}
          <div className="mt-6 space-y-4">
            {cartData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center gap-4 border-b pb-4"
              >
                {/* Product Details */}
                <div className="col-span-6 flex gap-4 items-center">
                  <Image
                    className="h-[60px] w-[60px] md:h-[87px] md:w-[83px] rounded-md"
                    src={item.image}
                    alt={item.product}
                    width={85}
                    height={85}
                  />
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-[#000000]">
                      {item.product}
                    </h4>
                    <p className="text-xs md:text-sm text-[#A1A8C1]">
                      Color: {item.color}
                    </p>
                    <p className="text-xs md:text-sm text-[#A1A8C1]">
                      Size: {item.size}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <p className="col-span-2 text-center text-xs md:text-sm text-[#000000]">
                  ${item.price}
                </p>

                {/* Quantity */}
                <div className="col-span-2 flex justify-center items-center gap-2">
                  <button className="w-6 h-6 md:w-[24px] md:h-[24px] bg-[#E7E7EF] flex justify-center items-center text-[#1D3178] font-bold rounded">
                    +
                  </button>
                  <p className="text-sm md:text-base text-[#000000]">
                    {item.quantity}
                  </p>
                  <button className="w-6 h-6 md:w-[24px] md:h-[24px] bg-[#E7E7EF] flex justify-center items-center text-[#1D3178] font-bold rounded">
                    -
                  </button>
                </div>

                {/* Total */}
                <p className="col-span-2 text-center text-xs md:text-sm text-[#000000]">
                  ${item.total}
                </p>
              </div>
            ))}
          </div>

          {/* Update and Clear Cart Buttons */}
          <div className="flex flex-wrap justify-between gap-4 mt-6">
            <button className="text-white font-bold w-full md:w-[179px] h-[41px] bg-pink-500 rounded">
              Update Cart
            </button>
            <button className="text-white font-bold w-full md:w-[179px] h-[41px] bg-pink-500 rounded">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          {/* Cart Totals */}
          <div className="flex flex-col items-center">
            <h3 className="text-[#1D3178] text-lg md:text-xl font-semibold">
              Cart Totals
            </h3>
            <div className="bg-[#F4F4FC] p-4 md:p-8 rounded-md flex flex-col gap-4 w-[371px]">
              <div className="flex justify-between border-b pb-2 border-gray-300">
                <h4 className="text-[#1D3178] text-sm md:text-base font-semibold">
                  Subtotals:
                </h4>
                <p className="text-[#15245E]">£219.00</p>
              </div>
              <div className="flex justify-between border-b pb-2 border-gray-300">
                <h4 className="text-[#1D3178] text-sm md:text-base font-semibold">
                  Totals:
                </h4>
                <p className="text-[#15245E]">£325.00</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-[#19D16F] rounded-full"></div>
                <p className="text-[#8A91AB] text-xs md:text-sm">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              <button className="bg-[#19D16F] text-white rounded px-4 py-2 md:py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>

          {/* Calculate Shopping */}
          <div className="flex flex-col items-center">
            <h3 className="text-[#1D3178] text-lg md:text-xl font-semibold">
              Calculate Shopping
            </h3>
            <div className="bg-slate-100 p-4 md:p-8 rounded-md w-[371px]">
              <input
                type="text"
                placeholder="Bangladesh"
                className="border-b border-slate-400 outline-none bg-transparent w-full h-10 text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="Mirpur - Dhaka"
                className="border-b border-slate-400 outline-none bg-transparent w-full h-10 text-sm md:text-base mt-4"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border-b border-slate-400 outline-none bg-transparent w-full h-10 text-sm md:text-base mt-4"
              />
              <button className="text-white font-bold w-full h-[41px] bg-pink-500 rounded mt-6">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
