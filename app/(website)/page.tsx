import Discount from "@/components/sections/home/Discount";
import Feature from "@/components/sections/home/Feature";
import Hero from "@/components/sections/home/Hero";
import Leatest from "@/components/sections/home/Latest";
import Rofex from "@/components/sections/home/Rofex";
import TopCategories from "@/components/sections/home/TopCategories";
import TrendingProduct from "@/components/sections/home/TrendingProduct";
import Unique from "@/components/sections/home/Unique";
import { getProduct } from "@/lib/helper/getProduct";

export default async function Home() {
  const featured = await getProduct("featured");
  const latest = await getProduct("latest");
  const trending = await getProduct("trending");
  console.log(featured, latest, trending);
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Feature cardData={featured}/>
      <Leatest cardData={latest} />
      <Rofex />
      <Unique />
      <TrendingProduct cardData={trending} />
      <Discount />
      <TopCategories />
    </main>
  );
}
