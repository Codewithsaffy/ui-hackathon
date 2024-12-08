import { IRofex } from "@/data/Rofex";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RofexCard = ({ CardData }: { CardData: IRofex }) => {
  return (
    <Link href={"/product/1"} className="h-[270px] max-w-[350px] w-full text-center justify-center flex flex-col shadow-lg shadow-[#1A0B5B4D] bg-white gap-4 items-center jus px-4">
      <Image height={60} width={60} src={CardData.icon} alt="" />
      <h4 className="text-[#151875] text-xl jon font-semibold">{CardData.title}</h4>
      <p className="text-[#1A0B5B4D]">{CardData.description}</p>
    </Link>
  );
};

export default RofexCard;
