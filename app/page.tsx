import Discount from "@/components/sections/home/Discount";
import Feature from "@/components/sections/home/Feature";
import Hero from "@/components/sections/home/Hero";
import Leatest from "@/components/sections/home/Latest";
import LatestBlog from "@/components/sections/home/LatestBlog";
import Rofex from "@/components/sections/home/Rofex";
import TopCategories from "@/components/sections/home/TopCategories";
import TrendingProduct from "@/components/sections/home/TrendingProduct";
import Unique from "@/components/sections/home/Unique";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Feature />
      <Leatest />
      <Rofex/>
      <Unique/>
      <TrendingProduct/>
      <Discount/>
      <TopCategories/>
      <LatestBlog/>
    </main>
  );
}
