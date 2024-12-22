"use client";

import { StaticImageData } from "next/image";
import { useContext, createContext, useState, ReactNode } from "react";

type BuyItem = {
  img: string | StaticImageData;
  name: string;
  price: number | string;
  quantity: number;
  description:string;
};

type BuyType = {
  cartItems: BuyItem[];
  addToCart: (item: BuyItem) => void;
  getSubTotal: () => number;
};

const BuyContext = createContext<BuyType | undefined>(undefined);

export const BuyProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<BuyItem[]>([]);

  // addede product function
  const addToCart = (item: BuyItem) => {
    console.log("Cart Items:", cartItems);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);

      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prevItems, item];
    });
  };

  // Sub total function
  const getSubTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      // Extract the numeric part of the price string (e.g., "£250" becomes 250)
      const price =
        parseFloat(item.price.toString().replace(/[^\d.-]/g, "")) || 0;
      const quantity = parseInt(item.quantity.toString(), 10) || 1;

      return acc + price * quantity; // Calculate total
    }, 0);

    return isNaN(total) ? 0 : total;
  };

  return (
    <BuyContext.Provider value={{ cartItems, addToCart, getSubTotal }}>
      {children}
    </BuyContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(BuyContext);
  if (!context) {
    throw new Error("useCart must be used within a BuyProvider");
  }
  return context;
};

export default BuyContext;
