import AddToCart from "@/components/buttons/AddToCart";
import AddWishListButton from "@/components/buttons/AddWishListButton";
import SubHero from "@/components/small/SubHero";
import { client } from "@/sanity/lib/client";
import { ProductData } from "@/type";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";

const relatedProducts = [
  {
    name: "Mens Fashion Wear",
    stars: 4,
    emptyStar: 1,
    price: "$43.00",
    img: "/dynamic/img-2.png",
  },
  {
    name: "Womens Fashion",
    stars: 5,
    emptyStar: 0,
    price: "$67.00",
    img: "/dynamic/img-3.png",
  },
  {
    name: "Wolx dummy Fashion",
    stars: 4,
    emptyStar: 1,
    price: "$67.00",
    img: "/dynamic/img-4.png",
  },
  {
    name: "Top Wall Digital Clock",
    stars: 3,
    emptyStar: 2,
    price: "$51.00",
    img: "/dynamic/img-5.png",
  },
];

const page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id
  const res:ProductData[] = await client.fetch(`*[_type == "product" && _id == "${id}"]{
    _id,
    name,
    description,
    price,
    rating,
    prevPrice,
    badge,
    code,
    category,
    "image": image.asset->url, 
    shipment {
      weight {
        value,
        unit
      },
      dimensions {
        height,
        width,
        length,
        unit
      }
  }}`);
  const product = res[0];

  return (
    <main>
      <SubHero title="Product Details" />
      <section className="container mt-20 p-4 shadow-md flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="flex flex-col-reverse lg:flex-row lg:gap-4 w-full lg:w-1/2">
          <div className="flex flex-row justify-center lg:flex-col gap-2">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#F6F7FB] h-[100px] w-[100px] lg:h-[155px] lg:w-[150px] rounded-md flex justify-center items-center"
                >
                  <Image
                    height={155}
                    width={155}
                    className="rounded-md object-cover"
                    src={product.image}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          <div className="bg-[#F6F7FB] h-[250px] lg:h-[481px] w-full lg:w-[375px] rounded-md flex justify-center items-center">
            <Image
              className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
              height={500}
              width={500}
              src={product.image}
              alt="Main Product Image"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <h1 className="text-[#0D134E] text-2xl lg:text-4xl font-bold">
            {product?.name}
          </h1>
          <div className="flex items-center">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <IoMdStar
                  key={index}
                  className={`${
                    index < 4 ? "text-[#FFC416]" : "text-gray-300"
                  }`}
                />
              ))}
            <p className="ml-2 text-sm lg:text-base">{"(5)"}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[14px] lg:text-base text-[#151875]">${product.price}</p>
            {
              product.prevPrice && (
                <del className="text-[12px] lg:text-sm text-[#FB2448]">${product.prevPrice}</del>
              )
            }
            
          </div>
          <p className="text-[#0D134E] font-semibold text-sm lg:text-base">
            Colors
          </p>
          <p className="text-[#9295AA] text-sm lg:text-base">
           {
            product.description ? product.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum."
           }
          </p>
          <div className="flex items-center gap-4">
            <AddToCart product={product} />
            <AddWishListButton product={product}/>
            
          </div>
          <p className="text-[#0D134E] font-semibold text-sm lg:text-base">
            Categories
          </p>
          <p className="text-[#0D134E] font-semibold text-sm lg:text-base">
            Tags
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#0D134E] font-semibold text-sm lg:text-base">
              Share
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/facebook.svg"}
                width={20}
                height={20}
                alt="Facebook"
              />
              <Image
                src={"/icons/instagram.svg"}
                width={20}
                height={20}
                alt="Instagram"
              />
              <Image
                src={"/icons/twiter.svg"}
                width={20}
                height={20}
                alt="Twitter"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20 bg-slate-100 w-full lg:px-20 px-4 jon py-20 ">
        <div className="font-bold text-2xl flex justify-start items-center text-indigo-900 gap-x-20 lg:flex-row flex-col gap-y-8">
          <h1 className="underline cursor-pointer">Description</h1>
          <h1 className="cursor-pointer">Additional Info</h1>
          <h1 className="cursor-pointer">Reviews</h1>
          <h1 className="cursor-pointer">Video</h1>
        </div>
        <h1 className="font-bold text-2xl text-indigo-900 lg:mt-10 mt-20 text-center lg:text-start">
          Various Temper.
        </h1>
        <p className="text-gray-400 font-semibold mt-5 leading-loose text-center lg:text-start">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </p>
        <h1 className="font-bold text-2xl text-indigo-900 mt-10 text-center lg:text-start">
          More Details
        </h1>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-4xl text-center jon font-bold text-indigo-950">
          Related Products
        </h1>
        <div className="flex justify-center items-center gap-7 mt-10 lg:flex-row flex-col">
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="hover:scale-90 transition-all cusror-pointer"
            >
              <Image src={item.img} alt={item.name} width={270} height={340} />
              <div className="flex justify-between items-center">
                <h1 className="jon font-semibold text-indigo-900 my-4">
                  {item.name}
                </h1>
                <div className="flex gap-x-1">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star
                      key={`star-${i}`}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {Array.from({ length: item.emptyStar }).map((_, i) => (
                    <Star
                      key={`star-${i}`}
                      size={12}
                      className="text-gray-400 fill-gray-400"
                    />
                  ))}
                </div>
              </div>
              <p className="jon text-indigo-900">{item.price}</p>
            </div>
          ))}
        </div>
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

export default page;
