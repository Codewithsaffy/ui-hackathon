"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const activeLink = pathname.split("/")[2];


  const links = [
    {
      link: "information",
      name: "Address",
    },
    {
      link: "shippment",
      name: "Shippment",
    },
    {
      link: "payment",
      name: "Payment",
    },
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((item) => {
          return (
            <Fragment key={item.link}>
              <BreadcrumbItem key={item.link}>
                {item.link === activeLink ? (
                  <BreadcrumbPage className="font-semibold text-violet-600">{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={`/checkout/${item.link}`}>
                    {item.name}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
             {item.link !== "payment" && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            </Fragment>
           
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
