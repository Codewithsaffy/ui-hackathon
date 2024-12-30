import { Product } from "@/lib/helper/getProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestCard = ({ CardData, second }: { CardData: Product, second: boolean }) => {
  return (
    <Link href={`/product/${CardData._id}`} className="h-[306px] jon max-w-[350px] w-full flex flex-col gap-2">
      <div className={`h-[270px] flex items-center justify-center ${second ? "bg-white" : "bg-[#F7F7F7]"} p-1`}>
        <Image src={CardData.image} alt="" width={245} height={245} />
      </div>
      <div className="text-[#151875] flex items-center justify-between w-full">
        <p>{CardData.name}</p>
        <div className="flex items-center gap-2 px-2">
          <p className="text-[14px]">${CardData.price}</p>
          {
            CardData.prevPrice && <del className="text-[10px] text-[#FB2448]">${CardData.prevPrice}</del>
          }
          
        </div>
      </div>
    </Link>
  );
};

export default LatestCard;
