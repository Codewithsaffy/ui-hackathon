import { ProductData } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ cardData }: { cardData: ProductData }) => {
  return (
    <Link
      href={`/product/${cardData._id}`}
      className="h-[320px] sm:h-[360px] shadow-md w-full max-w-[280px] sm:max-w-[300px] flex flex-col gap-4 items-center bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image Section */}
      <div className="bg-[#F6F7FB] flex items-center justify-center h-[200px] sm:h-[236px] w-full">
        <Image
          src={cardData.image}
          width={180}
          height={180}
          alt={cardData.name}
          loading="lazy"
          className="object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 items-center px-4 text-center">
        {/* Product Name */}
        <p className="text-[#FB2E86] text-[16px] sm:text-[18px] font-bold truncate w-full">
          {cardData.name}
        </p>

        {/* Color Indicators */}
        <div className="flex gap-2 items-center">
          <button className="w-[12px] sm:w-[14px] h-[4px] rounded-[10px] bg-[#05E6B7]"></button>
          <button className="w-[12px] sm:w-[14px] h-[4px] rounded-[10px] bg-[#F701A8]"></button>
          <button className="w-[12px] sm:w-[14px] h-[4px] rounded-[10px] bg-[#00009D]"></button>
        </div>

        {/* Product Code */}
        <p className="text-[#151875] text-[12px] sm:text-[14px]">
          Code: {cardData.code}
        </p>

        {/* Price */}
        <p className="text-[#151875] text-[14px] sm:text-[16px] font-semibold">
          ${cardData.price}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
