"use client";

import Link from "next/link";
import { Heart, Menu, PhoneCall, ShoppingCart } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import Form from "next/form";

import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import AuthenticationButton from "../buttons/AuthenticationButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b relative">
      {/* Topbar */}
      <div className="bg-violet-600 text-white py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4 lg:px-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CiMail />
              <p className="hidden sm:block">mkhammad@gmail.com</p>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <PhoneCall size={16} />
              <p>(1234) 567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-transparent hidden sm:block">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select className="bg-transparent hidden sm:block">
              <option>USD</option>
              <option>EUR</option>
            </select>

            {/* Authentication Button */}
            <AuthenticationButton />

            <Link
              href="/wishlist"
              className="hidden sm:flex items-center gap-1"
            >
              <p>Wishlist</p>
              <Heart size={16} />
            </Link>

            <Link href="/cart" className="hidden sm:block">
              <ShoppingCart size={18} />
            </Link>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4 sm:hidden">
              <Link href="/cart">
                <ShoppingCart size={18} />
              </Link>
              <Link href="/wishlist">
                <AiOutlineHeart size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 lg:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-violet-600">
            Hekto
          </Link>

          {/* Navigation */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 md:flex items-center gap-6 flex-col md:flex-row md:items-center`}
          >
            <Link href="/" className="font-medium py-2 md:py-0 px-4 md:px-0">
              Home
            </Link>
            <Link
              href="/products"
              className="font-medium py-2 md:py-0 px-4 md:px-0"
            >
              Products
            </Link>
            <Link
              href="/products"
              className="font-medium py-2 md:py-0 px-4 md:px-0"
            >
              About
            </Link>
            <Link
              href="/products"
              className="font-medium py-2 md:py-0 px-4 md:px-0"
            >
              Contact
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Form action="/products" className="hidden md:flex items-center">
              <input
                type="search"
                name="query"
                placeholder="Search"
                className="border rounded-l px-4 py-2"
              />
              <button className="rounded-l-none py-[13px] px-4 bg-pink-600 text-white hover:bg-pink-700">
                <FiSearch />
              </button>
            </Form>
            <Menu
              className="block md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div
        className={`md:hidden bg-white shadow px-4 py-2 ${menuOpen ? "block" : "hidden"}`}
      >
        <Form action="/products" className="flex items-center">
          <input
            type="search"
            name="query"
            placeholder="Search"
            className="flex-1 border rounded-l px-4 py-2"
          />
          <button
            type="submit"
            className="rounded-l-none py-[13px] px-4 bg-pink-600 text-white hover:bg-pink-700"
          >
            <FiSearch />
          </button>
        </Form>
      </div>
    </header>
  );
}
