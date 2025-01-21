"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface FilterSectionProps {
  currentQuery: string;
  currentSort: "low-to-high" | "high-to-low" | "normal";
}

const FilterSection: React.FC<FilterSectionProps> = ({ currentSort }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (sortValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex justify-between flex-col md:flex-row  items-center container mt-8">
      {/* Beautiful Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-800">
        Explore Our Products
      </h1>

      {/* Sort Dropdown */}
      <select
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="p-2 border border-gray-300 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        <option value="normal">Sort by: Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSection;
