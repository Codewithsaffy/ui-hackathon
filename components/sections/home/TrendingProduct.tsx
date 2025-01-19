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
      <div className="flex justify-between items-center w-full h-[270px] gap-2 mt-6 lg:flex-row flex-col">
        {discountProducts.map((item, i) => (
          <div key={i} className={`${item.bg}  h-full w-[420px] relative p-4`}>
            <h3 className="text-[#151875] text-[26px] font-semibold">
              {item.text}
            </h3>
            <Link
              href={"/"}
              className="text-[#FB2E86] font-lato mt-2 underline font-semibold"
            >
              Shop Now
            </Link>
            <Image
              width={200}
              height={200}
              className="h-auto w-auto absolute bottom-0 right-0"
              alt="trending-product"
              src={item.img.url}
            />
          </div>
        ))}

        <div className=" flex flex-col h-[270px] justify-between ">
          {rightProduct.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 h-[74px]"
            >
              <div className="bg-[#F5F6F8] w-[105px]">
                <Image
                  src={item.img.url}
                  alt="product"
                  width={67}
                  height={67}
                  className="h-[67px] w-[67px]"
                />
              </div>
              <div className="text-[#151875]">
                <p>{item.text}</p>
                <del className="text-xs">${item.price}.00</del>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="bg-blue-500 h-full basis-1 grow"></div> */}
      </div>
    </section>
  );
};

export default TrendingProduct;
