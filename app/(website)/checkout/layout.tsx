import CartCard from "@/components/cards/CartComponent";
import BreadCrumbs from "@/components/small/BreadCrumbs";
import OrdetContextProvider from "@/provider/order/OrdetContextProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OrdetContextProvider>
      <main className="flex relative container">
        <section className="min-h-screen w-[58%] pt-6 border-r ">
          <BreadCrumbs />
          {children}
        </section>
        <section className="h-[calc(100vh-124px)] sticky top-0  w-[42%] ">
          <CartCard />
        </section>
      </main>
    </OrdetContextProvider>
  );
}
