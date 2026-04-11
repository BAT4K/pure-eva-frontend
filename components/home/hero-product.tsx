import { Droplets, Leaf, Sparkles, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import cleanserIngredientsImg from "@/public/pure-eva-cleanser-ingredients.jpg"

interface HeroProductProps {
  price?: number;
  compareAtPrice?: number;
}

export function HeroProduct({ price = 229, compareAtPrice = 299 }: HeroProductProps) {
  const discountAmount = compareAtPrice > price ? Math.round(compareAtPrice - price) : 0;
  const benefits = [
    {
      icon: Droplets,
      title: "Deep Cleansing",
      description: "Gently removes impurities without stripping natural oils",
    },
    {
      icon: Leaf,
      title: "Botanical Power",
      description: "Infused with Damask Rose and Aloe Vera extracts",
    },
    {
      icon: Sparkles,
      title: "Radiant Glow",
      description: "Reveals your skin&apos;s natural luminosity",
    },
  ]

  return (
    <section className="bg-[#FAFAF9] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#4DD0E1]/40" />
            <Sparkles className="h-4 w-4 text-[#4DD0E1]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Bestseller
            </span>
            <Sparkles className="h-4 w-4 text-[#4DD0E1]" />
            <div className="h-px w-8 bg-[#4DD0E1]/40" />
          </div>
          <h2 className="font-serif text-3xl text-[#212121] md:text-4xl lg:text-5xl">
            Discover The Difference
          </h2>
        </div>

        {/* Product Feature Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Product Image */}
          <div className="relative">
            {/* Decorative blurs */}
            <div className="absolute -left-8 top-1/4 h-40 w-40 rounded-full bg-[#A5D6A7]/15 blur-3xl" />
            <div className="absolute -right-8 bottom-1/4 h-48 w-48 rounded-full bg-[#4DD0E1]/15 blur-3xl" />
            
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-[#F0FFF4] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] group">
              {/* Actual Image */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={cleanserIngredientsImg}
                  alt="Pure Eva Cleanser Ingredients"
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Price tag */}
              <div className="absolute right-6 top-6 flex flex-col items-center rounded-2xl bg-white border border-[#B2EBF2] px-4 py-3 shadow-sm backdrop-blur-sm">
                <span className="font-serif text-2xl text-[#212121]">₹{price}</span>
                {compareAtPrice > price && (
                  <span className="text-xs text-[#212121]/60 line-through">₹{compareAtPrice}</span>
                )}
              </div>

              {/* Badge */}
              {discountAmount > 0 && (
                <div className="absolute bottom-6 left-6 rounded-full bg-[#A5D6A7] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#212121] shadow-lg">
                  Save ₹{discountAmount}
                </div>
              )}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#4DD0E1]">
              The Signature Cleanser
            </span>
            
            <h3 className="mb-6 font-serif text-3xl text-[#212121] md:text-4xl">
              Urban Reset Gel
              <br />
              <span className="text-[#A5D6A7]">Cleanser</span>
            </h3>

            <p className="mb-8 max-w-lg leading-relaxed text-[#212121]/70">
              Our signature cleanser combines the purest botanical extracts with 
              advanced skincare science. Experience a gentle yet effective cleanse that 
              respects your skin&apos;s natural balance while delivering visible results.
            </p>

            {/* Benefits List */}
            <div className="mb-10 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#B2EBF2] shadow-sm transition-transform hover:scale-105">
                    <benefit.icon className="h-5 w-5 text-[#4DD0E1]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#212121]">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-[#212121]/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/store"
              className="group inline-flex items-center gap-3 rounded-full bg-[#A5D6A7] px-10 py-4 text-sm font-medium uppercase tracking-wider text-[#212121] shadow-lg shadow-[#A5D6A7]/25 transition-all duration-300 hover:bg-[#81C784] hover:shadow-xl hover:shadow-[#A5D6A7]/30 active:scale-[0.98]"
            >
              <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Shop Now
            </Link>

            {/* Mini trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {["Vegan", "Cruelty-Free", "Paraben-Free"].map((badge) => (
                <span 
                  key={badge}
                  className="flex items-center gap-1.5 rounded-full border border-[#B2EBF2] bg-[#FAFAF9] px-3 py-1.5 text-xs font-medium text-[#212121]"
                >
                  <Leaf className="h-3 w-3 text-[#4DD0E1]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
