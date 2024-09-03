"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      console.log("Loaded cart from local storage:", storedCart); // Debug log
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        console.log('Parsed JSON:', parsedCart);
        setCart(parsedCart);
      }
    } catch (error) {
      console.error("Failed to load cart from local storage:", error);
    }
  }, []);

  const addToCart = (productDetails) => {
    console.log("Adding to cart:", productDetails); // Debug log
    setCart((prevCart) => {
      const updatedCart = [...prevCart, productDetails];
      console.log("Updated cart before save:", updatedCart); // Debug log
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    console.log("Removing from cart:", productId); // Debug log
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      console.log("Updated cart before save:", updatedCart); // Debug log
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
