import { Leaf } from "lucide-react"

export function IngredientsHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Content */}
      <div className="relative px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-20 lg:pb-28 lg:pt-48">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#4DD0E1]/8 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#A5D6A7]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#4DD0E1]/40" />
            <Leaf className="h-4 w-4 text-[#4DD0E1]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#4DD0E1]">
              Pure Botanicals
            </span>
            <Leaf className="h-4 w-4 text-[#4DD0E1]" />
            <div className="h-px w-8 bg-[#4DD0E1]/40" />
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-[#212121] md:text-5xl lg:text-6xl">
            Inside the
            <br />
            <span className="text-[#4DD0E1]">Urban Reset Gel Cleanser</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#212121]/60 md:text-lg">
            Every ingredient in our formulation is carefully selected for its proven efficacy 
            and safety. We believe in complete transparency about what goes onto your skin.
          </p>
        </div>
      </div>
    </section>
  )
}
