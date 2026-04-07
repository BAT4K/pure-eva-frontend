"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"

interface CartItem {
  title: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  variantId: string;
  quantity: number;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;
  cartItem: CartItem | null;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (quantity: number) => void;
  isCheckingOut: boolean;
  handleCheckout: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItem((prev) => {
      if (prev && prev.variantId === item.variantId) {
        return { ...prev, quantity: prev.quantity + 1 };
      }
      return { ...item, quantity: 1 };
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (quantity: number) => {
    if (quantity <= 0) {
      setCartItem(null);
    } else {
      setCartItem((prev) => prev ? { ...prev, quantity } : null);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const router = useRouter();

  const handleCheckout = async () => {
    if (!cartItem) return;
    setIsCheckingOut(true);
    setIsCartOpen(false);
    router.push("/checkout");
    setIsCheckingOut(false);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItem,
        addToCart,
        updateQuantity,
        isCheckingOut,
        handleCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
