"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ShoppingBag, Leaf, Droplets, Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { useCart } from "./cart-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface ProductHeroProps {
  title: string;
  description: string;
  descriptionHtml: string;
  price: string;
  compareAtPrice?: string | null;
  imageUrl: string;
  imageAlt: string;
  variantId: string;
}

export default function ProductHero({ title, description, descriptionHtml, price, compareAtPrice, imageUrl, imageAlt, variantId }: ProductHeroProps) {
  const { addToCart } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ title, price, imageUrl, imageAlt, variantId });
  };

  return (
    <section className="min-h-screen bg-[#F7F4F0] px-6 py-12 md:px-12 lg:px-20 relative overflow-hidden">
      
      {/* Added pt-24 to account for the new global fixed header */}
      <div className="mx-auto max-w-7xl pt-24">

        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Product Image */}
          <ScrollReveal delay={0.2} className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDE9E4] to-[#E5E0DA] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] group">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#B87A7A]/10 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#A88B67]/10 blur-2xl" />
              
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
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
          </ScrollReveal>

          {/* Right - Product Info */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.1}>
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[#A88B67]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">100% Natural</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="mb-4 font-serif text-4xl leading-tight text-[#2C2C2C] md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-serif text-3xl text-[#2C2C2C]">₹{price}</span>
                {compareAtPrice && (
                  <>
                    <span className="text-xl text-[#2C2C2C]/50 line-through">₹{compareAtPrice}</span>
                    <span className="rounded-full bg-[#B87A7A]/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-[#B87A7A]">
                      SALE
                    </span>
                  </>
                )}
              </div>
              <div className="mb-6 max-w-md">
                <div className="relative">
                  <motion.div 
                    initial={false}
                    animate={{ height: isExpanded ? "250px" : "120px" }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`leading-relaxed text-[#2C2C2C]/70 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 ${isExpanded ? "overflow-y-auto pr-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#E5E0DA] [&::-webkit-scrollbar]:w-1.5" : "overflow-hidden"}`}
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />
                  {!isExpanded && (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F7F4F0] to-transparent" />
                  )}
                </div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                  }}
                  className="group mt-2 flex items-center gap-1 text-sm font-medium text-[#B87A7A] transition-colors hover:text-[#A66B6B]"
                >
                  {isExpanded ? (
                    <>Read Less <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /></>
                  ) : (
                    <>Read More <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" /></>
                  )}
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mb-8 flex flex-wrap gap-3">
                {["Vegan", "Cruelty-Free", "Paraben-Free"].map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-1.5 rounded-full border border-[#E5E0DA] bg-white/50 px-3 py-1.5 text-xs text-[#2C2C2C]/70 shadow-sm"
                  >
                    <Sparkles className="h-3 w-3 text-[#A88B67]" />
                    {feature}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <button 
                onClick={handleAddToCart}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#B87A7A] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:bg-[#A66B6B] hover:shadow-2xl hover:shadow-[#B87A7A]/30 md:w-auto"
              >
                <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Add to Cart
              </button>

              <div className="mt-8 flex items-center gap-6 text-xs text-[#2C2C2C]/50">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Free Shipping over ₹500
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  30-Day Returns
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}