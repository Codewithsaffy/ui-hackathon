import Image from "next/image";
import React from "react";

const RofexCard = ({
  CardData,
}: {
  CardData: { icon: string; title: string; description: string };
}) => {
  return (
    <div className="h-[270px] max-w-[350px] w-full text-center justify-center flex flex-col shadow-lg shadow-[#1A0B5B4D] bg-white gap-4 items-center jus px-4">
      <Image height={60} width={60} src={CardData.icon} alt="" loading="lazy" />
      <h4 className="text-[#151875] text-xl jon font-semibold">
        {CardData.title}
      </h4>
      <p className="text-[#1A0B5B4D]">{CardData.description}</p>
    </div>
  );
};

export default RofexCard;
