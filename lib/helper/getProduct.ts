import { ProductData } from "@/type";

export const getProduct = async (
  category: "featured" | "latest" | "trending" | "general" | "productPage"
): Promise<ProductData[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product?category=${category}`, {
      next: { revalidate: 10 }, // Optional caching strategy
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};
