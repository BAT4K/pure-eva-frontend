"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Droplets, Sparkles, Shield, Beaker, Leaf, Heart } from "lucide-react"

const ingredients = [
  {
    name: "Salicylic Acid (0.5%)",
    description: "A gentle BHA that penetrates deep into pores to dissolve excess sebum, gently exfoliate dead skin cells, and combat breakouts.",
    icon: Sparkles,
    origin: "Active Exfoliant",
  },
  {
    name: "Niacinamide (0.5–1%)",
    description: "Vitamin B3 works to visibly minimize enlarged pores, tighten lax pores, improve uneven skin tone, and soften fine lines.",
    icon: Shield,
    origin: "Skin Barrier Support",
  },
  {
    name: "Glycerin (3–4%)",
    description: "A powerful humectant that draws moisture into the skin, ensuring your face feels hydrated and never stripped after cleansing.",
    icon: Droplets,
    origin: "Hydration Agent",
  },
  {
    name: "Allantoin (0.2%)",
    description: "A naturally occurring compound that soothes irritated skin, encourages cell turnover, and provides gentle healing properties.",
    icon: Heart,
    origin: "Soothing Extract",
  },
  {
    name: "Cocamidopropyl Betaine",
    description: "A gentle surfactant derived from coconut oil that creates a rich, satisfying lather without disrupting the skin's natural lipid barrier.",
    icon: Leaf,
    origin: "Coconut-Derived",
  },
  {
    name: "Citric Acid",
    description: "An AHA naturally found in citrus fruits that helps maintain the optimal skin pH balance (4.5–5) while offering mild antioxidant properties.",
    icon: Beaker,
    origin: "pH Balancer",
  },
]

export function IngredientsGrid() {
  return (
    <section className="px-6 pb-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient, index) => (
            <ScrollReveal key={ingredient.name} delay={index * 0.1}>
              <IngredientCard ingredient={ingredient} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function IngredientCard({ 
  ingredient, 
  index 
}: { 
  ingredient: typeof ingredients[0]
  index: number 
}) {
  const Icon = ingredient.icon
  
  return (
    <article 
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative accent */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#4DD0E1]/5 transition-transform duration-500 group-hover:scale-150" />
      
      {/* Botanical illustration placeholder */}
      <div className="relative mb-6 flex aspect-square max-w-[140px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFFFFF] to-[#E0F7FA]">
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
          <div className="rounded-full bg-white/80 p-4 shadow-sm">
            <Icon className="h-10 w-10 text-[#4DD0E1]" strokeWidth={1.5} />
          </div>
        </div>
        {/* Origin badge */}
        <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-[#4DD0E1] shadow-sm">
          {ingredient.origin}
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-2 font-serif text-xl text-[#212121]">
          {ingredient.name}
        </h3>
        <p className="text-sm leading-relaxed text-[#212121]/60">
          {ingredient.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4DD0E1] to-[#34D399] transition-all duration-300 group-hover:w-full" />
    </article>
  )
}
