import FilterSection from "@/components/small/FilterHeader";
import SubHero from "@/components/small/SubHero";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

const products = [
  {
    img: "/productPage/img-1.png",
    name: "Accumsan tincidunt",
    price: "$26.00",
    prevPrice: "$52.00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [
      <ShoppingCart key={1} size={20} />,
      <Heart key={2} size={20} />,
      <ZoomIn key={3} size={20} />,
    ],
  },
  {
    img: "/productPage/img-2.png",
    name: "In nulla",
    price: "$26.00",
    prevPrice: "$52.00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [
      <ShoppingCart key={1} size={20} />,
      <Heart key={2} size={20} />,
      <ZoomIn key={3} size={20} />,
    ],
  },
  {
    img: "/productPage/img-3.png",
    name: "Vel sem",
    price: "$26.00",
    prevPrice: "$52.00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [
      <ShoppingCart key={1} size={20} />,
      <Heart key={2} size={20} />,
      <ZoomIn key={3} size={20} />,
    ],
  },
  {
    img: "/productPage/img-4.png",
    name: "Portitor cum",
    price: "$26.00",
    prevPrice: "$52.00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [
      <ShoppingCart key={1} size={20} />,
      <Heart key={2} size={20} />,
      <ZoomIn key={3} size={20} />,
    ],
  },
];

const Page = () => {
  return (
    <main>
      <SubHero title="Shop List" />
      <FilterSection />
      <div className="space-y-10 mt-20 container">
        {products.map((item, index) => (
          <Link href={"/product/1"}
            className="flex justify-start gap-y-14 p-4 gap-x-8 shadow-lg items-center"
            key={index}
          >
            <div>
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={300}
                className=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-x-4">
                <h1 className="jon font-bold text-lg text-indigo-900">
                  {item.name}
                </h1>
                <div>
                  <Image
                    src={"/pagesPage/pagination.png"}
                    alt="pagination"
                    width={42}
                    height={10}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] text-[#151875]">{item.price}</p>
                <del className="text-[12px] text-[#FB2448]">
                  {item.prevPrice}
                </del>
                <div className="flex items-center">
                  <IoMdStar className="text-[#FFC416]" />
                  <IoMdStar className="text-[#FFC416]" />
                  <IoMdStar className="text-[#FFC416]" />
                  <IoMdStar className="text-[#FFC416]" />
                  <IoMdStar className="text-[#B2B2B2]" />
                </div>
              </div>
              <p className="text-[#9295AA] max-w-xl">{item.text}</p>
              <div className="flex gap-4 mt-3">
                {item.icons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="p-2  rounded-full cursor-pointer shadow-lg w-[34px] h-[34px] flex justify-center items-center"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <Image
          src={"/topProduct/brands.png"}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default Page;
