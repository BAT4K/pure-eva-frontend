"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { createCheckout, fetchShopifyCart, updateCartLine } from "@/app/actions"

interface CartItem {
  title: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  variantId: string;
  quantity: number;
  lineId?: string;
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
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  useEffect(() => {
    const initCart = async () => {
      const savedCartId = localStorage.getItem('shopify_cart_id');
      if (savedCartId) {
        const cart = await fetchShopifyCart(savedCartId);
        if (cart && cart.lines.edges.length > 0) {
          const lineNode = cart.lines.edges[0].node;
          setCartId(cart.id);
          setCheckoutUrl(cart.checkoutUrl);
          setCartItem({
            title: lineNode.merchandise.product.title,
            price: lineNode.merchandise.price.amount,
            imageUrl: lineNode.merchandise.product.images?.edges[0]?.node?.url || '',
            imageAlt: lineNode.merchandise.product.images?.edges[0]?.node?.altText || lineNode.merchandise.product.title,
            variantId: lineNode.merchandise.id,
            quantity: lineNode.quantity,
            lineId: lineNode.id
          });
        } else {
          localStorage.removeItem('shopify_cart_id');
        }
      }
    };
    initCart();
  }, []);

  const addToCart = async (item: Omit<CartItem, "quantity">) => {
    let newQuantity = 1;
    setCartItem((prev) => {
      if (prev && prev.variantId === item.variantId) {
        newQuantity = prev.quantity + 1;
        return { ...prev, quantity: newQuantity };
      }
      return { ...item, quantity: 1 };
    });
    setIsCartOpen(true);

    if (cartId && cartItem?.lineId && cartItem.variantId === item.variantId) {
      await updateCartLine(cartId, cartItem.lineId, newQuantity);
    } else {
      const cart = await createCheckout(item.variantId, newQuantity);
      if (cart) {
        setCartId(cart.id);
        setCheckoutUrl(cart.checkoutUrl);
        localStorage.setItem('shopify_cart_id', cart.id);
        
        const lineNode = cart.lines.edges[0]?.node;
        if (lineNode) {
          setCartItem((prev) => prev ? { ...prev, lineId: lineNode.id } : prev);
        }
      }
    }
  };

  const updateQuantity = async (quantity: number) => {
    if (quantity <= 0) {
      setCartItem(null);
    } else {
      setCartItem((prev) => prev ? { ...prev, quantity } : null);
    }

    if (cartId && cartItem?.lineId) {
      await updateCartLine(cartId, cartItem.lineId, quantity);
    } else if (cartItem) {
      // Fallback if lineId somehow missing but user is pressing + button rapidly
      const cart = await createCheckout(cartItem.variantId, quantity);
      if (cart) {
        setCartId(cart.id);
        setCheckoutUrl(cart.checkoutUrl);
        localStorage.setItem('shopify_cart_id', cart.id);
        const lineNode = cart.lines.edges[0]?.node;
        if (lineNode) {
          setCartItem((prev) => prev ? { ...prev, lineId: lineNode.id } : prev);
        }
      }
    }
  };

  const handleCheckout = async () => {
    if (!cartItem) return;
    setIsCheckingOut(true);
    
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      const cart = await createCheckout(cartItem.variantId, cartItem.quantity);
      if (cart) {
        window.location.href = cart.checkoutUrl;
      } else {
        alert("Something went wrong. Please try again.");
        setIsCheckingOut(false);
      }
    }
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
