"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const activeLink = pathname.split("/")[2]; // Extract the active link from the URL

  // Define the breadcrumb links
  const links = [
    {
      link: "information",
      name: "Address",
    },
    {
      link: "shippment",
      name: "Shipping",
    },
    {
      link: "payment",
      name: "Payment",
    },
  ];

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
      {links.map((item, index) => (
        <div key={item.link} className="flex items-center">
          {/* Render the breadcrumb link or active page */}
          {item.link === activeLink ? (
            <span className="font-semibold text-violet-600">{item.name}</span>
          ) : (
            <Link
              href={`/checkout/${item.link}`}
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              {item.name}
            </Link>
          )}

          {/* Render the separator (/) except for the last item */}
          {index < links.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};

const Checkout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <section
      className={`min-h-[calc(100vh-124px)] ${pathname === "/checkout/success" ? "w-full" : "w-[58%] border-r"} pt-6 `}
    >
     {pathname !== "/checkout/success" && <BreadCrumbs />}
      {children}
    </section>
  );
};

export default Checkout;
