import { ProductData } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ cardData }: { cardData:ProductData  }) => {
  return (
    <Link href={`/product/${cardData._id}`} className="h-[360px] jon shadow-md w-full max-w-[300px]  flex-col gap-2">
      <div className="bg-[#F6F7FB] flex  items-center justify-center h-[236px]">
        <Image
          src={cardData.image}
          width={180}
          height={180}
          alt={cardData.name}
        />
      </div>
      <div className="flex flex-col gap-2 items-center ">
        <p className="text-[#FB2E86] text-[18px] font-bold">{cardData.name}</p>
        <div className="flex gap-2 items-center">
          <button className="w-[14px] h-[4px] rounded-[10px] bg-[#05E6B7]"></button>
          <button className="w-[14px] h-[4px] rounded-[10px] bg-[#F701A8]"></button>
          <button className="w-[14px] h-[4px] rounded-[10px] bg-[#00009D]"></button>
        </div>

        <p className="text-[#151875] text-[14px]">Code . {cardData.code}</p>

        <p className="text-[#151875] text-[14px]">${cardData.price}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
