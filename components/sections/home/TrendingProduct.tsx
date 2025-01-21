import { ProductData } from "@/type";
import Image from "next/image";
import Link from "next/link";

const discountProducts = [
  {
    text: "23% off in all products",
    button: {
      text: "Shop Now",
      url: "/",
    },
    img: {
      url: "/trendingProducts/img-bottom-1.png",
      alt: "23%-off-in-all-products",
    },
    bg: "bg-[#FFF6FB]",
  },
  {
    text: "23% off in all products",
    button: {
      text: "View Collection",
      url: "/",
    },
    img: {
      url: "/trendingProducts/img-bottom-2.png",
      alt: "23%-off-in-all-products",
    },
    bg: "bg-[#EEEFFB]",
  },
];
const rightProduct = [
  {
    text: "Executive Seat chair",
    price: "32",
    img: {
      url: "/trendingProducts/img-right-1.png",
      alt: "",
    },
  },
  {
    text: "Executive Seat chair",
    price: "32",
    img: {
      url: "/trendingProducts/img-right-2.png",
      alt: "",
    },
  },
  {
    text: "Executive Seat chair",
    price: "32",
    img: {
      url: "/trendingProducts/img-right-3.png",
      alt: "",
    },
  },
];

const TrendingProduct = ({ cardData }: { cardData: ProductData[] }) => {
  return (
    <section className="mt-20 px-4 md:px-0 mx-auto max-w-screen-xl">
      <h1 className="text-2xl md:text-4xl text-center jon font-bold text-indigo-950">
        Trending Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 mt-10">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="shadow w-full max-w-[270px] h-[350px] flex justify-center items-center flex-col cursor-pointer hover:scale-105 transition-all"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={247}
              height={244}
              className="w-[90%] h-auto"
            />
            <p className="lato font-bold text-indigo-950 my-4 text-center px-2">
              {item.name}
            </p>
            <div className="flex justify-center items-center gap-x-2 jon">
              <p className="text-indigo-950 text-sm">{item.price}</p>
              <p className="text-slate-300 text-[12px] line-through">
                {item.prevPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
          {discountProducts.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} h-[270px] md:h-[270px] w-full relative p-4`}
            >
              <h3 className="text-[#151875] text-lg md:text-[26px] font-semibold max-w-[200px]">
                {item.text}
              </h3>
              <Link
                href={"/"}
                className="text-[#FB2E86] font-lato mt-2 underline font-semibold text-sm md:text-base"
              >
                Shop Now
              </Link>
              <Image
                width={200}
                height={200}
                className="h-auto w-[40%] md:w-auto absolute bottom-0 right-0"
                alt="trending-product"
                src={item.img.url}
              />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {rightProduct.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 h-[74px] w-full bg-[#F5F6F8] p-2"
            >
              <div className="min-w-[105px]">
                <Image
                  src={item.img.url}
                  alt="product"
                  width={67}
                  height={67}
                  className="h-[67px] w-[67px] object-contain"
                />
              </div>
              <div className="text-[#151875] text-sm md:text-base">
                <p>{item.text}</p>
                <del className="text-xs">${item.price}.00</del>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrendingProduct;
