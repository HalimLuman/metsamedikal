"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Link from "next/link";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const totalPrice = cart
    .reduce((acc, item) => {
      const priceString = item.price ? item.price.toString() : "0";
      const priceValue = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      return acc + priceValue * (item.quantity || 1);
    }, 0)
    .toFixed(2);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity less than 1
    const updatedItem = cart.find((item) => item.id === itemId);
    if (updatedItem) {
      const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      addToCart(updatedCart);
    }
  };

  return (
    <div className="py-4 w-full min-h-screen">
      <div className="">
        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-700">Loading cart...</p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-700">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4 md:gap-10">
            {/* Product List */}
            <div className="flex flex-col gap-6 mb-6 w-full lg:w-2/3">
              <h1 className="text-2xl md:text-3xl font-medium text-left text-gray-800">
                Your Product List
              </h1>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Product</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Details</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Quantity</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Price</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 border-t">
                      <td className="p-3 flex items-center gap-4 border-r border-gray-300">
                        <Image
                          src={item.image}
                          width={60}
                          height={60}
                          alt={item.name}
                          className="rounded-md bg-gray-200"
                        />
                        <Link href="/" className="text-xl text-gray-900">
                          {item.name}
                        </Link>
                      </td>
                      <td className="p-3 text-sm text-gray-400 border-r border-gray-300">
                        Respiratory Equipment
                      </td>
                      <td className="p-3 border-r border-gray-300">
                        <div className="flex items-center">
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="bg-primary-blue text-white font-medium rounded-md hover:bg-blue-500 h-8 p-2"
                          >
                            <FaMinus />
                          </Button>
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            readOnly
                            className="w-16 h-full text-center outline-none border border-gray-300 rounded"
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                          />
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="bg-primary-blue text-white font-medium rounded-md hover:bg-blue-500 h-8 p-2"
                          >
                            <FaPlus />
                          </Button>
                        </div>
                      </td>
                      <td className="p-3 border-r border-gray-300">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium">
                            {item.price} MKD
                          </span>
                        </div>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-gray-600/30 text-white font-medium rounded-full hover:bg-red-700 p-2 flex items-center justify-center"
                        >
                          <IoTrashOutline className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Summary */}
            <div className="px-4 mb-6 w-full lg:w-1/3">
              <h1 className="text-2xl md:text-3xl font-medium mb-10 text-left text-gray-800">
                Detail Summary
              </h1>
              <div className="flex justify-between mb-2 text-lg">
                <span className="font-medium">Product Quantity:</span>
                <span>
                  {cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}
                </span>
              </div>
              <div className="flex text-lg justify-between mb-2">
                <span className="font-medium">Delivery Price:</span>
                <span>0 MKD</span>
              </div>
              <div className="h-[1px] bg-gray-200 my-5" />
              <div className="flex justify-between mb-4 text-lg">
                <span className="font-medium">Total Price:</span>
                <span className="text-lg font-semibold">{totalPrice} TL</span>
              </div>
              <button
                onClick={() => alert("Proceed to Payment")}
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 font-medium"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
