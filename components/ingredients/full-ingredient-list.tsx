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
    title: "Urban Reset Gel Cleanser - Full INCI List",
    ingredients: [
      "Purified Water (q.s.)",
      "Cocamidopropyl Betaine (12–14%)",
      "Sodium Lauroyl Sarcosinate (6–8%)",
      "Glycerin (3–4%)",
      "Salicylic Acid (0.5%)",
      "Niacinamide (0.5–1%)",
      "Allantoin (0.2%)",
      "PEG-120 Methyl Glucose Dioleate (0.6–0.8%)",
      "Euxyl PE 9010 (0.8–1%)",
      "Sodium Gluconate (0.1%)",
      "Citric Acid (pH 4.5–5)",
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
            <FileText className="h-5 w-5 text-[#4DD0E1]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#4DD0E1]">
              Full Transparency
            </span>
          </div>
          <h2 className="font-serif text-3xl text-[#212121] md:text-4xl">
            Complete Ingredient Lists
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#212121]/60">
            We believe in complete transparency. Here you&apos;ll find the exact 
            formulation and concentration ranges for the Urban Reset Gel Cleanser.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {ingredientCategories.map((category, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-[#B2EBF2]"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-lg text-[#212121] hover:text-[#4DD0E1] hover:no-underline">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="rounded-xl bg-[#FFFFFF] p-5">
                    <ul className="grid gap-2 text-sm text-[#212121]/70 sm:grid-cols-2">
                      {category.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DD0E1]" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-[#212121]/50">
                    * All ingredients are ethically sourced and cruelty-free. 
                    No parabens, sulfates, or synthetic fragrances.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Trust note */}
        <div className="mt-8 rounded-xl border border-[#4DD0E1]/20 bg-[#4DD0E1]/5 p-5 text-center">
          <p className="text-sm text-[#212121]/70">
            <span className="font-medium text-[#4DD0E1]">Our Promise:</span>{" "}
            Every ingredient serves a purpose. We never use fillers, and we always 
            list ingredients in order of concentration as required by international standards.
          </p>
        </div>
      </div>
    </section>
  )
}
