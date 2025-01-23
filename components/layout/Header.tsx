"use client";

import Link from "next/link";
import { Heart, Menu, PhoneCall, ShoppingCart } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { useShoppingCart } from "use-shopping-cart";
import AuthenticationButton from "../buttons/AuthenticationButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchButton from "../buttons/SearchButton";
import { usePathname } from "next/navigation";

export function Header() {
  const { cartCount } = useShoppingCart();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    pathname === href ? "text-pink-500" : "text-black";

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
            <div className="flex items-center gap-1">
              <PhoneCall size={16} />
              <p className="hidden sm:block">(1234) 567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-transparent">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select className="bg-transparent">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <AuthenticationButton />
            <Link href="/wishlist" className="flex items-center gap-1">
              <p className="hidden sm:block">Wishlist</p>
              <Heart size={16} />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart size={18} />
              <p className="absolute bg-blue-950 -top-3 -right-2 text-xs font-bold text-white w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </p>
            </Link>
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
          <nav className="hidden md:flex gap-5 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium py-2 px-4 ${isActive(item.href)}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <SearchButton mobile={false} />

          {/* Mobile Menu */}
          <div className="md:hidden flex">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent className="px-4 py-10">
                <SheetHeader>
                  <SheetTitle>
                    <SearchButton mobile={true} />
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <nav className="flex flex-col gap-4 mt-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`font-medium py-2 px-4 rounded-md ${isActive(
                          item.href
                        )} hover:text-pink-500`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
