import Form from "next/form";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchButton = ({ mobile }: { mobile: boolean }) => {
  return (
    <Form
      action="/products"
      className={`${mobile ? "flex md:hidden w-full" : "hidden md:flex"} items-center`}
    >
      <input
        type="search"
        name="query"
        placeholder="Search"
        className="border rounded-l h-10 md:h-[42px] px-4 py-2 w-48 md:w-52 md:text-base text-xs"
      />
      <button className="rounded-l-none h-10  md:h-[42px] w-10 md:w-14 flex items-center justify-center bg-pink-600 text-white hover:bg-pink-700">
        <FiSearch />
      </button>
    </Form>
  );
};

export default SearchButton;
