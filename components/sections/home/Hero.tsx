"use client";

import Image from "next/image";
import PinkButton from "../../buttons/PinkButton";

const slides = {
  absolutImage: "/hero/light.png",
  sliders: [
    {
      title: "New Furniture Collection Trends in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      subtitle: "Best Furniture For Your Castle....",
      image: "/hero/chair.png",
      discount: "50%",
      button: "Shop Now",
    },
  ],
};

export default function Hero() {
  return (
    <section className="lg:h-[calc(100vh-111px)] bg-[#F2F0FF] p-10 md:p-0">
        
      <div className="container relative   h-full lg:flex-row flex items-center flex-col  justify-between">
      <Image
          className="absolute hidden md:block top-0 object-contain -left-52 h-[250px]"
          src={slides.absolutImage}
          alt="light"
          height={250}
          width={250}
        />

        <div className="flex flex-col gap-4 lg:text-start text-center">
          <p className=" text-pink font-bold text-[#FB2E86]">
            {slides.sliders[0].subtitle}
          </p>

          <h1 className=" text-3xl font-bold sm:text-5xl jon sm:font-extrabold">
            {slides.sliders[0].title}
          </h1>
          <p className="text-[#8A8FB9]">{slides.sliders[0].description}</p>
          <div>
           <PinkButton>{slides.sliders[0].button}</PinkButton>
          </div>
        </div>

        <div className="md:w-[400px] w-[300px] md:h-[400px] h-[300px]  translate-x-[10px] md:translate-x-20 relative  rounded-full bg-[#ECD2FA59]">
          <div className="bg-[url(/hero/discount.svg)] w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full absolute -top-5 right-0 flex items-center justify-center font-bold text-white text-center text-xl md:text-4xl flex-col">
            {/* {" "}
            <p>{slides.sliders[0].discount}</p>
            <p>off</p> */}
          </div>
          <div className="w-[300px] md:w-[400px]  md:h-[400px]  translate-y-6 -translate-x-10 rounded-full h-[300px] bg-[#ECD2FA59] ">
            <Image height={400} width={400} src={slides.sliders[0].image} className="z-20 " alt="hello" />
          </div>
        </div>
        <div className="flex items-center absolute bottom-10 w-full justify-center gap-4">
          <button className="w-[10px] rotate-45 h-[10px] bg-[#FB2E86]"></button>
          <button className="w-[10px] rotate-45 h-[10px] border border-[#FB2E86]"></button>
          <button className="w-[10px] rotate-45 h-[10px] border border-[#FB2E86]"></button>
        </div>
      </div>
    </section>
  );
}
