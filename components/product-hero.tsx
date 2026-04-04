"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link" // Added Link for navigation
import { ShoppingBag, Leaf, Sparkles, Droplets, X, Plus, Minus, Trash2, Loader2 } from "lucide-react"
import { createCheckout } from "@/app/actions"

interface ProductHeroProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  variantId: string;
}

export default function ProductHero({ title, description, price, imageUrl, imageAlt, variantId }: ProductHeroProps) {
  // Cart State Management
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Handlers
  const handleAddToCart = () => {
    setCartQuantity((prev) => prev + 1);
    setIsCartOpen(true); 
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    const checkoutUrl = await createCheckout(variantId, cartQuantity);
    
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      alert("Something went wrong. Please try again.");
      setIsCheckingOut(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F7F4F0] px-6 py-12 md:px-12 lg:px-20 relative overflow-hidden">
      
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wide text-[#2C2C2C] hover:opacity-80 transition-opacity">
            Pure Eva
          </Link>
          <nav className="hidden items-center gap-8 text-sm tracking-wide text-[#2C2C2C]/80 md:flex">
            {/* Updated with Next.js Links */}
            <Link href="/" className="transition-colors hover:text-[#B87A7A]">Shop</Link>
            <Link href="/about" className="transition-colors hover:text-[#B87A7A]">About</Link>
            <Link href="/ingredients" className="transition-colors hover:text-[#B87A7A]">Ingredients</Link>
          </nav>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-[#2C2C2C] hover:text-[#B87A7A] transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartQuantity > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B87A7A] text-[10px] text-white">
                {cartQuantity}
              </span>
            )}
          </button>
        </header>

        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDE9E4] to-[#E5E0DA] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#B87A7A]/10 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#A88B67]/10 blur-2xl" />
              
              {imageUrl ? (
                <Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="mb-4 rounded-full bg-white/60 p-6 shadow-lg backdrop-blur-sm">
                    <Droplets className="h-12 w-12 text-[#B87A7A]" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-4 w-4 text-[#A88B67]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">100% Natural</span>
            </div>

            <h1 className="mb-4 font-serif text-4xl leading-tight text-[#2C2C2C] md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-[#2C2C2C]">₹{price}</span>
            </div>

            <p className="mb-8 max-w-md leading-relaxed text-[#2C2C2C]/70 line-clamp-4">
              {description}
            </p>

            <button 
              onClick={handleAddToCart}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#B87A7A] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg shadow-[#B87A7A]/25 transition-all hover:bg-[#A66B6B] hover:shadow-xl hover:shadow-[#B87A7A]/30 md:w-auto"
            >
              <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* --- CART DRAWER OVERLAY --- */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* --- CART DRAWER UI --- */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#E5E0DA] p-6">
            <h2 className="font-serif text-2xl text-[#2C2C2C]">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 text-[#2C2C2C]/60 hover:bg-[#F7F4F0] hover:text-[#2C2C2C] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cartQuantity === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="mb-4 h-12 w-12 text-[#E5E0DA]" />
                <p className="text-[#2C2C2C]/60">Your cart is beautifully empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-sm font-medium uppercase tracking-wide text-[#B87A7A] hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-[#F7F4F0]">
                  {imageUrl && <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />}
                </div>
                
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#2C2C2C] line-clamp-1">{title}</h3>
                    <p className="text-sm text-[#2C2C2C]/60">₹{price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-[#E5E0DA] bg-white px-2 py-1">
                      <button 
                        onClick={() => setCartQuantity(prev => Math.max(1, prev - 1))}
                        className="p-1 text-[#2C2C2C]/60 hover:text-[#2C2C2C]"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-[#2C2C2C]">
                        {cartQuantity}
                      </span>
                      <button 
                        onClick={() => setCartQuantity(prev => prev + 1)}
                        className="p-1 text-[#2C2C2C]/60 hover:text-[#2C2C2C]"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => setCartQuantity(0)}
                      className="p-2 text-[#2C2C2C]/40 hover:text-[#B87A7A] transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {cartQuantity > 0 && (
            <div className="border-t border-[#E5E0DA] bg-[#F7F4F0]/50 p-6">
              <div className="mb-4 flex items-center justify-between font-serif text-lg text-[#2C2C2C]">
                <span>Subtotal</span>
                <span>₹{(parseFloat(price) * cartQuantity).toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2C2C2C] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-black disabled:opacity-70"
              >
                {isCheckingOut ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Proceed to Checkout"
                )}
              </button>
              <p className="mt-4 text-center text-xs text-[#2C2C2C]/50">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}