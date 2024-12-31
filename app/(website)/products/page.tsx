import FilterSection from "@/components/small/FilterHeader";
import SubHero from "@/components/small/SubHero";
import { getProduct } from "@/lib/helper/getProduct";
import Image from "next/image";
import Card from "./Card";



const Page = async() => {
  const cardData = await getProduct("productPage")
  return (
    <main>
      <SubHero title="Shop List" />
      <FilterSection />
      <div className="space-y-10 mt-20 container">
        {cardData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <Image
          src={"/topProduct/brands.png"}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </main>
  );
};

export default Page;
