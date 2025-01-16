import { client } from "@/sanity/lib/client";
import { ProductData } from "@/type";
import { SanityImageAssetDocument } from "next-sanity";
import {  NextResponse } from "next/server";
import fetch from "node-fetch";
import { v4 as uuid } from "uuid";
// import {allProducts} from "@/data"

export const POST = async () => {
  const uploadImage = async (
    imageUrl: string
  ): Promise<SanityImageAssetDocument> => {
    const res = await fetch(imageUrl);
    const bufferImage = await res.buffer();
    const image = await client.assets.upload("image", bufferImage);
    return image;
  };

  const uploadProduct = async (productData: ProductData) => {
    const imagePromises = productData.images.map((imageUrl) =>
      uploadImage(imageUrl)
    );
    const uploadedImages = await Promise.all(imagePromises);

    const product = {
      _type: "mockApiProducts",
      name: productData.name,
      slug: { _type: "slug", current: productData.slug },
      description: productData.description,
      price: productData.price,
      images: uploadedImages.map((image) => ({
        _type: "image",
        _key: uuid(),
        asset: {
          _type: "reference",
          _ref: image._id,
        },
      })),
      stock: productData.stock,
      sku: productData.sku,
      weight: {
        _type: "weight",
        value: productData.weight.value,
        unit: productData.weight.unit,
      },
      dimensions: {
        _type: "dimensions",
        height: productData.dimensions.height,
        width: productData.dimensions.width,
        length: productData.dimensions.length,
        unit: productData.dimensions.unit,
      },
    };

    const newProduct = await client.create(product);
    console.log("newProduct", newProduct);
    return newProduct;
  };

  // const uploadAllProducts = async () => {
  //   for (const product of allProducts) {
  //     const uploadedProduct = await client.create(product);
  //     console.log("uploadedProduct", uploadedProduct);
  //           // uploadedProducts.push(uploadedProduct);
  //   }
  // };

  // const allProductsRes = await uploadAllProducts();

  return NextResponse.json({ products: 
    uploadProduct
   });
};

export const DELETE = async () => {
  const products = await client.fetch(`*[_type == "product"]`);
  const allIds = products.map((product : { _id: string }) => product._id);
  for (const id of allIds) {
   await client.delete(id);
  }
  
  return NextResponse.json({ products: allIds });
};
