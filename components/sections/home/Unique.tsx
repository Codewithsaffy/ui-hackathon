import Image from "next/image";
import React from "react";
import PinkButton from "../../buttons/PinkButton";

const data = [
  "All frames constructed with hardwood solids and laminates",
  "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
  "Arms, backs and seats are structurally reinforced",
];

const Unique = () => {
  return (
    <section className="bg-[#F1F0FF] px-4 py-12 md:py-16">
      <div className="container flex  flex-col md:flex-row items-center justify-center gap-12 ">
        {/* Left Section: Images */}
        <div className="relative">
          <Image
            src={"/unique/bg.svg"}
            width={500}
            height={500}
            alt="Background"
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
          />
          <Image
            className="absolute top-0 left-0 w-[240px] md:w-[300px] lg:w-[400px] h-auto"
            src={"/unique/sofa.png"}
            width={500}
            height={500}
            alt="Sofa"
          />
        </div>
        {/* Right Section: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-[#151875] jon text-[24px] md:text-[28px] lg:text-[35px] font-extrabold leading-tight">
            Unique Features Of Latest & Trending Products
          </h2>
          <div className="mt-6 space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    index === 0
                      ? "bg-[#FB2E86]"
                      : index === 1
                      ? "bg-[#2B2BF5]"
                      : "bg-[#2BF5CC]"
                  }`}
                ></div>
                <p className="text-[#ACABC3] text-sm md:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center mt-6 gap-4">
            <PinkButton>Add to Cart</PinkButton>
            <div className="flex flex-col items-center md:items-start text-[#151875] text-[14px]">
              <p className="font-bold">B&B Italian Sofa</p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
