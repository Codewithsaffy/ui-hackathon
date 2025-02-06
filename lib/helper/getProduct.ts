import { ProductData } from "@/type";

export const getProduct = async (
  category: "featured" | "latest" | "trending" | "general" | "productPage"
): Promise<ProductData[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/product?category=${category}`,
      {
        next: { revalidate: 10 }, // Optional caching strategy
      }
    );
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

export const filterProduct = async (parameter: {
  query?: string;
  sort?: "low-to-high" | "high-to-low" | "normal";
  category?: string;
}): Promise<ProductData[]> => {
  try {
    // Construct the base URL
    let url = `${process.env.NEXT_PUBLIC_URL}/api/search`;

    // Add query parameters only if they are provided
    const queryParams = new URLSearchParams();

    if (parameter.query) {
      queryParams.append("query", parameter.query);
    }

    if (parameter.sort && parameter.sort !== "normal") {
      queryParams.append("sort", parameter.sort);
    }

    if (parameter.category) {
      queryParams.append("category", parameter.category);
    }

    // Append query parameters to the URL if any exist
    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`;
    }

    // Fetch data from the API
    const res = await fetch(url, {
      next: { revalidate: 10 }, // Optional caching strategy
    });

    // Handle response errors
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    // Parse and return the data
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};
