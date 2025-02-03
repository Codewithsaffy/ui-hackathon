import { client } from "@/sanity/lib/client";
import fetch from "node-fetch";

export const uploadImage = async (imageUrl: string) => {
  const res = await fetch(imageUrl);
  const bufferImage = await res.buffer();
  const image = await client.assets.upload("image", bufferImage);
  return image;
};
