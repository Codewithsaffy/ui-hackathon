import wishListContext from '@/provider/wishlist';
import { X } from 'lucide-react';
import React, { useContext } from 'react';

const RemoveWishList = ({ productId }: { productId: string }) => {
  const { products, setProducts } = useContext(wishListContext);

  const handleRemove = () => {
    const filterProduct = products.filter((pro) => pro._id !== productId);
    localStorage.setItem('wishList', JSON.stringify(filterProduct));
    setProducts(filterProduct);
  };

  return (
    <div 
      onClick={() => handleRemove()} 
      className="absolute top-2 right-2 z-20 cursor-pointer p-2 rounded-full bg-red-500 hover:bg-red-600 transition duration-300"
    >
      <X className="text-white w-5 h-5" />
    </div>
  );
};

export default RemoveWishList;
