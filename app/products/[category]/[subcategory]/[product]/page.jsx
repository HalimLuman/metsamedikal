// pages/product/[product].js

"use client";
import { maske1, maske2, philipsProduct } from "@/public";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import useAddToCart from "@/hooks/useAddToCart";  // Import your custom hook

const Page = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1); // State for amount selector
  const [mainImage, setMainImage] = useState(philipsProduct); // State for the main product image
  const [prevImage, setPrevImage] = useState(philipsProduct); // State for the previous image

  const { handleAddToCart, isLoading } = useAddToCart(); // Use the custom hook

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
    setPrevImage(newImage);
  };

  const handleMouseEnter = (newImage) => {
    setPrevImage(mainImage);
    setMainImage(newImage);
  };

  const handleMouseLeave = () => {
    setMainImage(prevImage);
  };

  // Function to handle adding the product to the cart
  const handleSubmit = () => {
    const productDetails = {
      id: params.product,
      name: params.product, // Example of using params for product name, customize as needed
      quantity,
      price: "2000", // Example of price, customize as needed
      image: mainImage
    };

    handleAddToCart(productDetails); // Use hook to add product to the cart
  };

  return (
    <div className="w-full flex gap-10">
      {/* Left side: Images */}
      <div className="w-2/3 flex flex-col gap-5">
        {/* Main product image */}
        <div className="w-full flex justify-center border rounded-lg bg-white p-5 shadow-md h-[370px]">
          <Image src={mainImage} width={300} height={300} alt="Main product image" className="rounded-md" />
        </div>

        {/* Smaller product images */}
        <div className="flex gap-4">
          {[maske2, maske1, philipsProduct].map((image, index) => (
            <div
              key={index}
              className="flex justify-center border rounded-md bg-white p-2 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleImageClick(image)} 
              onMouseEnter={() => handleMouseEnter(image)}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={image} width={80} height={80} alt={`Additional product image ${index + 1}`} className="rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Product details */}
      <div className="flex flex-col w-1/3 p-5 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 break-words max-w-full mb-3">
            {params.product}
          </h1>
          <span className="text-gray-500 text-sm mb-1">Ref Number: 1231231231231323</span>
          <span className="text-2xl lg:text-3xl font-semibold my-3 text-gray-900">66.469,00 TL</span>
          
          {/* Quantity Selector */}
          <div className="flex items-center mb-6 border w-max rounded-lg overflow-hidden">
            <button onClick={handleDecrement} className="px-3 h-[40px] bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300">
              -
            </button>
            <input
              type="number"
              value={quantity}
              className="w-[60px] text-center h-[40px] border-t border-b appearance-none focus:outline-none"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={handleIncrement} className="h-[40px] px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-300">
              +
            </button>
          </div>

          {/* Add to Shopping Cart Button */}
          <button
            onClick={handleSubmit}
            className={`w-full px-5 py-3 bg-blue-600 text-white rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} transition duration-300 font-medium`}
            disabled={isLoading}
          >
            {isLoading ? 'Adding to Cart...' : 'Add to Shopping Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
