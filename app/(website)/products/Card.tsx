import { Product } from "@/lib/helper/getProduct";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdStar } from "react-icons/io";
const icons = [
  <ShoppingCart key={1} size={20} />,
  <Heart key={2} size={20} />,
  <ZoomIn key={3} size={20} />,
];

const Card = ({ item }: { item: Product }) => {
  return (
    <Link
      href={`/product/${item._id}`}
      className="flex justify-start gap-y-14 p-4 gap-x-8 shadow-lg items-center"
    >
      <div>
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          className=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-x-4">
          <h1 className="jon font-bold text-lg text-indigo-900">{item.name}</h1>
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
          <p className="text-[14px] text-[#151875]">${item.price}.00</p>
          <del className="text-[12px] text-[#FB2448]">${item.prevPrice}.00</del>
          <div className="flex items-center">
            <IoMdStar className="text-[#FFC416]" />
            <IoMdStar className="text-[#FFC416]" />
            <IoMdStar className="text-[#FFC416]" />
            <IoMdStar className="text-[#FFC416]" />
            <IoMdStar className="text-[#B2B2B2]" />
          </div>
        </div>
        <p className="text-[#9295AA] max-w-xl">{item.description}</p>
        <div className="flex gap-4 mt-3">
          {icons.map((icon, idx) => (
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
  );
};

export default Card;
