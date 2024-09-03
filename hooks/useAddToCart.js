// hooks/useAddToCart.js
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext'; // Import useCart
import { useState } from 'react';

const useAddToCart = () => {
  const router = useRouter();
  const { addToCart } = useCart(); // Use the cart context

  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (productDetails) => {
    setIsLoading(true);

    // Simulate adding product details to the cart
    setTimeout(() => {
      addToCart(productDetails); // Use context function
      setIsLoading(false);

      // Navigate to the /cart page
      router.push('/products/cart');
    }, 1000); // Simulating a network request
  };

  return { handleAddToCart, isLoading };
};

export default useAddToCart;
