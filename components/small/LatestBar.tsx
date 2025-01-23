import Link from "next/link";
import React from "react";

const data = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const LatestBar = () => {
  return (
    <nav className="flex gap-4 sm:gap-6 items-center justify-center w-full">
      {data.map((item, index) => (
        <Link
          href=""
          key={index}
          className={`text-sm sm:text-[16px] md:text-[18px] font-medium transition-colors duration-200 ${
            index === 0
              ? "text-[#FB2E86] underline"
              : "text-[#151875] hover:text-[#FB2E86] hover:underline"
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default LatestBar;
