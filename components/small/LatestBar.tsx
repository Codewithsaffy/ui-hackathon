import Link from "next/link";
import React from "react";
const data = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
const LatestBar = () => {
  return (
    <nav className="flex gap-6 items-center">
      {data.map((item, index) => (
        <Link
          href=""
          key={index}
          className={` text-[18px]  ${
            index === 0
              ? "text-[#FB2E86] underline"
              : "text-[#151875]"
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default LatestBar;
