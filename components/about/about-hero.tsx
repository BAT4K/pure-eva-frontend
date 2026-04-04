import { Leaf, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
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
            <Link href="/about" className="text-[#B87A7A]">About</Link>
            <Link href="#" className="transition-colors hover:text-[#B87A7A]">Ingredients</Link>
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
      <div className="relative px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-20 lg:px-20 lg:pb-40 lg:pt-28">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#B87A7A]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#A88B67]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#A88B67]/40" />
            <Leaf className="h-4 w-4 text-[#A88B67]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B67]">
              Our Story
            </span>
            <Leaf className="h-4 w-4 text-[#A88B67]" />
            <div className="h-px w-8 bg-[#A88B67]/40" />
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-[#2C2C2C] md:text-5xl lg:text-7xl">
            Beauty in Its
            <br />
            <span className="text-[#B87A7A]">Purest Form</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#2C2C2C]/60 md:text-xl">
            We believe that true beauty comes from nature. Our journey began with a 
            simple idea: create skincare that nurtures both your skin and the planet.
          </p>

          {/* Decorative botanical illustration placeholder */}
          <div className="mx-auto mt-16 flex max-w-xs items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B87A7A]/30" />
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-[#B87A7A]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2C13.5 4 15 6 15 9C15 12 13 14 12 14C11 14 9 12 9 9C9 6 10.5 4 12 2Z" />
                <path d="M12 14V22" />
                <path d="M9 18C7 17 5 15 5 13C5 11 7 10 9 11" />
                <path d="M15 18C17 17 19 15 19 13C19 11 17 10 15 11" />
              </svg>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B87A7A]/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
