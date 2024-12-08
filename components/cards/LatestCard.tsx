import { ILatestProduct } from "@/data/latestCard";
import Image from "next/image";
import React from "react";

const LatestCard = ({ CardData, second }: { CardData: ILatestProduct, second: boolean }) => {
  return (
    <div className="h-[306px] max-w-[350px] w-full flex flex-col gap-2">
      <div className={`h-[270px] flex items-center justify-center ${second ? "bg-white" : "bg-[#F7F7F7]"} p-1`}>
        <Image src={CardData.image} alt="" width={245} height={245} />
      </div>
      <div className="text-[#151875] flex items-center justify-between w-full">
        <p>{CardData.title}</p>
        <div className="flex items-center gap-2 px-2">
          <p className="text-[14px]">${CardData.price}</p>
          {
            CardData.acutalPrice && <del className="text-[10px] text-[#FB2448]">${CardData.acutalPrice}</del>
          }
          
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
