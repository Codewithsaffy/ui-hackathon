import Image from "next/image";
import { Check } from "lucide-react";

const checktext = [
  {
    text: "Material expose like metals",
    icon: <Check />,
  },
  {
    text: "Clear lines and geomatric figures",
    icon: <Check />,
  },
  {
    text: "Simple neutral colours.",
    icon: <Check />,
  },
  {
    text: "Material expose like metals",
    icon: <Check />,
  },
];

const Discount = () => {
  return (
    <section className="mt-20 container">
      <h1 className="text-4xl text-center jon font-bold text-indigo-950">
        Discount Items
      </h1>
      <div className="mt-10 lato flex justify-center items-center gap-8 text-[18px] md:flex-row flex-col">
        <p className="hover:text-red-500 transition-all hover:underline">
          Wood Chair
        </p>
        <p className="hover:text-red-500 transition-all hover:underline">
          Plastic Chair
        </p>
        <p className="hover:text-red-500 transition-all hover:underline">
          Sofa Collection
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 gap-10 lg:flex-row flex-col text-center lg:text-start">
        <div>
          <h1 className="text-indigo-950 lg:text-4xl text-3xl font-bold jon">
            20% Discount Of All Products
          </h1>
          <h2 className="text-xl text-pink-400 jon mt-4">
            Eams Sofa Compact
          </h2>
          <p className="text-slate-300 lato text-[17px] mt-4 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 place-self-center lg:place-self-start gap-y-5 mt-4">
            {checktext.map((item, index) => (
              <div
                key={index}
                className="text-slate-300 flex gap-x-2 items-center text-xs lg:text-base"
              >
                <p className="text-gray-400 lg:w-auto w-6">{item.icon}</p>
                {item.text}
              </div>
            ))}
          </div>
          <p className="flex justify-center items-center bg-pink-500 w-[200px] h-[57px] text-white jon mt-8 mx-auto lg:mx-0">
            Shop Now
          </p>
        </div>
        <div>
          <Image
            src={"/discount/sofa.png"}
            alt="sofa-img"
            width={680}
            height={580}
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;
