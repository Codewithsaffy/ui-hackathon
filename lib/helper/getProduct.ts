import { client } from "@/sanity/lib/client";
export type Product = {
  _id: string;
  name: string;
  price: number;
  prevPrice: number;
  rating: number;
  image: string;
  badge: string | null;
  code: string | null;
  description: string;
  category: "featured" | "latest" | "trending" | "general" | "productPage";
};
export const getProduct = async (
  category: "featured" | "latest" | "trending" | "general" | "productPage"
): Promise<Product[]> => {
  const res = await client.fetch(
    `*[_type == "product" && category == "${category}"]`
  );
  return res;
};
