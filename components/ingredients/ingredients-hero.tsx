import { Leaf, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function IngredientsHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Navigation */}
      <header className="relative z-10 px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wide text-[#2C2C2C]">
            Pure Eva
          </Link>
          <nav className="hidden items-center gap-8 text-sm tracking-wide text-[#2C2C2C]/80 md:flex">
            <Link href="/" className="transition-colors hover:text-[#B87A7A]">Shop</Link>
            <Link href="/about" className="transition-colors hover:text-[#B87A7A]">About</Link>
            <Link href="/ingredients" className="text-[#B87A7A]">Ingredients</Link>
          </nav>
          <button className="relative text-[#2C2C2C]">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B87A7A] text-[10px] text-white">
              0
            </span>
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-16 lg:px-20 lg:pb-28 lg:pt-20">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#A88B67]/8 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#B87A7A]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#A88B67]/40" />
            <Leaf className="h-4 w-4 text-[#A88B67]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B67]">
              Pure Botanicals
            </span>
            <Leaf className="h-4 w-4 text-[#A88B67]" />
            <div className="h-px w-8 bg-[#A88B67]/40" />
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-[#2C2C2C] md:text-5xl lg:text-6xl">
            Nature&apos;s Finest
            <br />
            <span className="text-[#A88B67]">Ingredients</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#2C2C2C]/60 md:text-lg">
            Every ingredient in our formulations is carefully selected for its proven efficacy 
            and purity. We source only the finest botanical extracts from sustainable farms around the world.
          </p>
        </div>
      </div>
    </section>
  )
}
