import { getProduct } from "@/lib/helper/getProduct";
import Image from "next/image";

const rightImg = [
  {
    url: "/trendingProducts/img-right-1.png",
  },
  {
    url: "/trendingProducts/img-right-2.png",
  },
  {
    url: "/trendingProducts/img-right-3.png",
  },
];

const TrendingProduct = async () => {
  const cardData = await getProduct("trending");
  return (
    <section className="mt-20 container">
      <h1 className="text-4xl text-center jon font-bold text-indigo-950">
        Trending Products
      </h1>
      <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="shadow w-[270px] h-[350px] flex justify-center items-center flex-col mt-10 cursor-pointer hover:scale-110 transition-all"
          >
            <Image src={item.image} alt={item.name} width={247} height={244} />
            <p className="lato font-bold text-indigo-950 my-4">{item.name}</p>
            <div className="flex justify-center items-center gap-x-2 jon">
              <p className="text-indigo-950 text-sm">{item.price}</p>
              <p className="text-slate-300 text-[12px] line-through">
                {item.prevPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center gap-2 mt-6 lg:flex-row flex-col">
        <Image
          src={"/trendingProducts/img-bottom-1.png"}
          alt="bottom-img"
          width={420}
          height={280}
          className=" h-[250px] w-[360px] cursor-pointer hover:scale-110 transition-all"
        />
        <Image
          src={"/trendingProducts/img-bottom-2.png"}
          alt="bottom-img"
          width={420}
          height={280}
          className=" h-[250px] w-[360px] cursor-pointer hover:scale-110 transition-all"
        />
        <div className="flex items-center justify-center flex-col gap-y-3">
          {rightImg.map((item, index) => (
            <Image
              src={item.url}
              key={index}
              alt="right-img"
              width={267}
              height={74}
              className="cursor-pointer hover:scale-110 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
