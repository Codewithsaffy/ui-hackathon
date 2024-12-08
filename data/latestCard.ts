export interface ILatestProduct {
  title: string;
  price: number;
  acutalPrice?: number;
  image: string;
  badge?: string;
}
export const latestProducts:ILatestProduct[] = [
  {
    title: "Modern Accent Chair",
    price: 149.99,
    acutalPrice: 299.99,
    image:
      "/latest/1.png",
    badge: "New Arrival",
  },
  {
    title: "Wooden Lounge Chair",
    price: 249.99,
    acutalPrice: 399.99,
    image:
      "/latest/2.png",
    badge: "Best Seller",
  },
  {
    title: "Minimalist Dining Chair",
    price: 199.99,
    image:
      "/latest/3.png",
  },
  {
    title: "Velvet Armchair",
    price: 349.99,
    acutalPrice: 399.99,
    image:
      "/latest/4.png",
  },
  {
    title: "Designer Lounge Chair",
    price: 549.99,
    image:
      "/latest/5.png",
    badge: "Featured",
  },
  {
    title: "Scandinavian Chair",
    price: 249.99,
    acutalPrice: 299.99,
    image:
      "/latest/6.png",
    badge: "Special Offer",
  },
];
