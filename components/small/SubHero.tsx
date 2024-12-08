import Link from "next/link";
import React from "react";

const SubHero = ({ title }: { title: string }) => {
  return (
    <section className="bg-[#F6F5FF] h-[200px] md:h-[286px]">
      <div className="container h-full items-center md:items-start flex justify-center gap-4 flex-col">
        <h1 className="text-[#101750] text-4xl font-bold">{title}</h1>
        <div className="flex items-center gap-1 font-medium">
          <Link href="/">Home</Link>
          <p>.</p>
          <p>Pages</p>
          <p>.</p>
          <p className="text-[#FB2E86]">{title}</p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
