"use client"

import { Flower2, Droplets, Leaf, Sun, Heart, Sparkles } from "lucide-react"

const ingredients = [
  {
    name: "Damask Rose",
    description: "Rich in antioxidants and vitamins A and C, Damask Rose hydrates deeply while promoting cell regeneration for a youthful, radiant complexion.",
    icon: Flower2,
    origin: "Bulgaria",
  },
  {
    name: "Hyaluronic Acid",
    description: "A powerful humectant that holds up to 1000x its weight in water, providing intense hydration and plumping fine lines for smoother skin.",
    icon: Droplets,
    origin: "Plant-derived",
  },
  {
    name: "Aloe Vera",
    description: "Soothes and calms irritated skin while providing gentle hydration. Rich in enzymes, vitamins, and minerals that promote healing.",
    icon: Leaf,
    origin: "Organic Farms",
  },
  {
    name: "Vitamin E",
    description: "A potent antioxidant that protects against environmental damage while nourishing and strengthening the skin barrier.",
    icon: Sun,
    origin: "Natural Sources",
  },
  {
    name: "Jojoba Oil",
    description: "Closely mimics skin&apos;s natural sebum, providing balanced moisturization without clogging pores. Rich in vitamins and minerals.",
    icon: Heart,
    origin: "Arizona",
  },
  {
    name: "Green Tea Extract",
    description: "Packed with polyphenols and catechins, it fights free radicals, reduces inflammation, and helps protect against UV damage.",
    icon: Sparkles,
    origin: "Japan",
  },
]

export function IngredientsGrid() {
  return (
    <section className="px-6 pb-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient, index) => (
            <IngredientCard key={ingredient.name} ingredient={ingredient} index={index} />
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
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#A88B67]/5 transition-transform duration-500 group-hover:scale-150" />
      
      {/* Botanical illustration placeholder */}
      <div className="relative mb-6 flex aspect-square max-w-[140px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7F4F0] to-[#EDE9E4]">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-white/80 p-4 shadow-sm">
            <Icon className="h-10 w-10 text-[#A88B67]" strokeWidth={1.5} />
          </div>
        </div>
        {/* Origin badge */}
        <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-[#A88B67] shadow-sm">
          {ingredient.origin}
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-2 font-serif text-xl text-[#2C2C2C]">
          {ingredient.name}
        </h3>
        <p className="text-sm leading-relaxed text-[#2C2C2C]/60">
          {ingredient.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#A88B67] to-[#B87A7A] transition-all duration-300 group-hover:w-full" />
    </article>
  )
}
