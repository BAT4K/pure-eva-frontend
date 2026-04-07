"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ShoppingBag, Leaf, Droplets, Sparkles, ChevronDown, ChevronUp, Plus, Minus } from "lucide-react"
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
  const [showIngredients, setShowIngredients] = useState(false);

  const handleAddToCart = () => {
    addToCart({ title, price, imageUrl, imageAlt, variantId });
  };

  return (
    <section className="min-h-screen bg-[#FFFFFF] px-6 py-12 md:px-12 lg:px-20 relative overflow-hidden">
      
      {/* Normalized top padding for fixed header */}
      <div className="mx-auto max-w-7xl pt-[120px] lg:pt-[150px]">

        {/* Hero Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-12 lg:gap-20 relative">
          
          {/* 1. Header Block: Mobile Top / Desktop Right Top */}
          <div className="order-1 lg:col-start-2 lg:row-start-1 flex flex-col pt-4 lg:pt-0">
            <ScrollReveal delay={0.1}>
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[#4DD0E1]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#4DD0E1]">100% Natural</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="mb-4 font-serif text-4xl leading-tight text-[#212121] md:text-5xl lg:text-6xl">
                {title.split(/(Cleanser)/i).map((part, i) => 
                  part.toLowerCase() === 'cleanser' ? (
                    <span key={i} className="text-[#A5D6A7]">{part}</span>
                  ) : (
                    part
                  )
                )}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl text-[#212121]">₹{price}</span>
                {compareAtPrice && (
                  <>
                    <span className="text-xl text-[#212121]/50 line-through">₹{compareAtPrice}</span>
                    <span className="rounded-full bg-[#A5D6A7]/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-[#A5D6A7]">
                      SALE
                    </span>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* 2. Left - Product Image: Mobile Middle / Desktop Left */}
          <ScrollReveal delay={0.2} className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 self-start w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] group">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#A5D6A7]/10 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#4DD0E1]/10 blur-2xl" />
              
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt={imageAlt} 
                    fill 
                    className="object-cover" 
                    priority 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="mb-4 rounded-full bg-white/60 p-6 shadow-lg backdrop-blur-sm">
                      <Droplets className="h-12 w-12 text-[#A5D6A7]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Details Block: Mobile Bottom / Desktop Right Bottom */}
          <div className="order-3 lg:col-start-2 lg:row-start-2">
            <ScrollReveal delay={0.3}>
              <div className="mb-6 max-w-md mt-6 lg:mt-0">
                <div className="relative">
                  <motion.div 
                    initial={false}
                    animate={{ height: isExpanded ? "250px" : "120px" }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`leading-relaxed text-[#212121]/70 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 ${isExpanded ? "overflow-y-auto pr-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B2EBF2] [&::-webkit-scrollbar]:w-1.5" : "overflow-hidden"}`}
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />
                  {!isExpanded && (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FFFFFF] to-transparent" />
                  )}
                </div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                  }}
                  className="group mt-2 flex items-center gap-1 text-sm font-medium text-[#A5D6A7] transition-colors hover:text-[#81C784]"
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
                    className="flex items-center gap-1.5 rounded-full border border-[#B2EBF2] bg-white/50 px-3 py-1.5 text-xs text-[#212121]/70 shadow-sm"
                  >
                    <Sparkles className="h-3 w-3 text-[#4DD0E1]" />
                    {feature}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <button 
                onClick={handleAddToCart}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#A5D6A7] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:bg-[#81C784] hover:shadow-2xl hover:shadow-[#A5D6A7]/30 md:w-auto"
              >
                <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Add to Cart
              </button>

              <div className="mt-8 flex items-center gap-6 text-xs text-[#212121]/50">
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

              {/* Ingredients Accordion */}
              <div className="mt-8 border-t border-[#B2EBF2] pt-6">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowIngredients(!showIngredients);
                  }}
                  className="flex w-full items-center justify-between font-serif text-lg text-[#212121] hover:text-[#A5D6A7] transition-colors"
                >
                  Full Ingredient List
                  {showIngredients ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>
                <motion.div
                  layout
                  initial={false}
                  animate={{ height: showIngredients ? "auto" : 0, opacity: showIngredients ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  {/* Part A: Hero Actives */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div>
                      <h4 className="font-serif text-[#212121] text-base">Salicylic Acid (BHA)</h4>
                      <p className="text-xs text-[#212121]/60 mt-1 leading-relaxed">
                        Gently exfoliates dead skin cells, dissolves excess sebum, and combats active breakouts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-[#212121] text-base">Niacinamide (Vitamin B3)</h4>
                      <p className="text-xs text-[#212121]/60 mt-1 leading-relaxed">
                        Visibly minimizes enlarged pores, improves uneven skin tone, and fortifies the lipid barrier.
                      </p>
                    </div>
                  </div>

                  {/* Part B: Full List as Pills */}
                  <div className="h-px w-full bg-[#B2EBF2] my-6" />
                  <p className="text-xs uppercase tracking-widest text-[#4DD0E1] mb-4">
                    All Ingredients
                  </p>
                  <div className="flex flex-wrap gap-2 pb-2">
                    {["Aqua", "Glycerin", "Cocamidopropyl Betaine", "Allantoin", "Citric Acid", "Aloe Barbadensis Leaf Extract", "Chamomilla Recutita Extract", "Panthenol", "Sodium Hyaluronate"].map((ingredient) => (
                      <span 
                        key={ingredient}
                        className="rounded-full border border-[#B2EBF2] bg-white/50 px-3 py-1.5 text-[11px] text-[#212121]/70 shadow-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}