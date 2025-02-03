import Link from "next/link";
import React from "react";

const CheckoutButton = () => {
  return (
    <Link href="/checkout/information" className="flex flex-col items-center">
      <button
        className={`bg-[#19D16F] text-white rounded px-4 py-2 md:py-3 transition-all duration-300 
             "hover:bg-[#17b963]"
        `}
      >
        place order
      </button>
    </Link>
  );
};

export default CheckoutButton;
