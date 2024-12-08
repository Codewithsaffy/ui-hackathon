interface ProductData {
  product: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

export const cartData: ProductData[] = [
  {
    product: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    total: 219.00,
    image: "/cart/1.jpg"
  },
  {
    product: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: 219.00,
    quantity: 1,
    total: 219.00,
    image: "/cart/2.jpg"
  },
  {
    product: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    total: 219.00,
    image: "/cart/3.jpg"
  },
  {
    product: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    total: 219.00,
    image: "/cart/4.jpg"
  },
  {
    product: "Proin phareta elementum",
    color: "Brown",
    size: "XL",
    price: 32.00,
    quantity: 1,
    total: 219.00,
    image: "/cart/5.jpg"
  }
];