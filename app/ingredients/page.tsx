import { Metadata } from "next"
import { IngredientsHero } from "@/components/ingredients/ingredients-hero"
import { IngredientsGrid } from "@/components/ingredients/ingredients-grid"
import { FullIngredientList } from "@/components/ingredients/full-ingredient-list"
import { AboutFooter } from "@/components/about/about-footer"

export const metadata: Metadata = {
  title: "Ingredients | Pure Eva",
  description: "Discover the pure, botanical ingredients that power Pure Eva skincare. Each ingredient is carefully selected for its proven benefits.",
}

export default function IngredientsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4F0]">
      <IngredientsHero />
      <IngredientsGrid />
      <FullIngredientList />
      <AboutFooter />
    </main>
  )
}
