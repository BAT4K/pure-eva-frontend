"use client"

import { FileText } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ingredientCategories = [
  {
    title: "Natural Facial Cleanser - Full INCI List",
    ingredients: [
      "Aqua (Water)",
      "Rosa Damascena (Damask Rose) Flower Water",
      "Glycerin (Plant-derived)",
      "Coco-Glucoside (Coconut-derived Surfactant)",
      "Aloe Barbadensis Leaf Juice",
      "Sodium Hyaluronate (Hyaluronic Acid)",
      "Simmondsia Chinensis (Jojoba) Seed Oil",
      "Camellia Sinensis (Green Tea) Leaf Extract",
      "Tocopherol (Vitamin E)",
      "Chamomilla Recutita (Chamomile) Flower Extract",
      "Calendula Officinalis Flower Extract",
      "Citric Acid",
      "Sodium Benzoate",
      "Potassium Sorbate",
    ],
  },
  {
    title: "Hydrating Day Cream - Full INCI List",
    ingredients: [
      "Aqua (Water)",
      "Helianthus Annuus (Sunflower) Seed Oil",
      "Cetearyl Alcohol (Plant-derived Emulsifier)",
      "Glycerin (Plant-derived)",
      "Rosa Damascena (Damask Rose) Flower Water",
      "Sodium Hyaluronate (Hyaluronic Acid)",
      "Squalane (Olive-derived)",
      "Shea Butter",
      "Niacinamide (Vitamin B3)",
      "Tocopherol (Vitamin E)",
      "Xanthan Gum",
      "Citric Acid",
      "Sodium Benzoate",
      "Potassium Sorbate",
    ],
  },
  {
    title: "Renewal Night Serum - Full INCI List",
    ingredients: [
      "Aqua (Water)",
      "Propanediol (Plant-derived)",
      "Sodium Hyaluronate (Hyaluronic Acid)",
      "Bakuchiol (Retinol Alternative)",
      "Rosa Canina (Rosehip) Seed Oil",
      "Tocopherol (Vitamin E)",
      "Ascorbic Acid (Vitamin C)",
      "Camellia Sinensis (Green Tea) Leaf Extract",
      "Centella Asiatica Extract",
      "Glycerin (Plant-derived)",
      "Xanthan Gum",
      "Citric Acid",
      "Sodium Benzoate",
    ],
  },
]

export function FullIngredientList() {
  return (
    <section className="px-6 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <FileText className="h-5 w-5 text-[#A88B67]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">
              Full Transparency
            </span>
          </div>
          <h2 className="font-serif text-3xl text-[#2C2C2C] md:text-4xl">
            Complete Ingredient Lists
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#2C2C2C]/60">
            We believe in complete transparency. Here you&apos;ll find the full INCI 
            (International Nomenclature of Cosmetic Ingredients) lists for all our products.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {ingredientCategories.map((category, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-[#E5E0DA]"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-lg text-[#2C2C2C] hover:text-[#A88B67] hover:no-underline">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="rounded-xl bg-[#F7F4F0] p-5">
                    <ul className="grid gap-2 text-sm text-[#2C2C2C]/70 sm:grid-cols-2">
                      {category.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A88B67]" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-[#2C2C2C]/50">
                    * All ingredients are ethically sourced and cruelty-free. 
                    No parabens, sulfates, or synthetic fragrances.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Trust note */}
        <div className="mt-8 rounded-xl border border-[#A88B67]/20 bg-[#A88B67]/5 p-5 text-center">
          <p className="text-sm text-[#2C2C2C]/70">
            <span className="font-medium text-[#A88B67]">Our Promise:</span>{" "}
            Every ingredient serves a purpose. We never use fillers, and we always 
            list ingredients in order of concentration as required by international standards.
          </p>
        </div>
      </div>
    </section>
  )
}
