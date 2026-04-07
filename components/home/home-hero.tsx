import { ShoppingBag, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFFFF]">
      {/* Hero Content */}
      <div className="relative px-6 pb-20 pt-[120px] md:px-12 md:pb-28 lg:px-20 lg:pb-32 lg:pt-[150px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={0.1}>
              <div className="mb-6 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[#4DD0E1]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Botanical Skincare
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="mb-6 font-serif text-4xl leading-[1.1] text-[#212121] md:text-5xl lg:text-6xl xl:text-7xl">
                Reveal Your
                <br />
                <span className="text-[#A5D6A7]">Natural Radiance</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#212121]/60">
                Experience the gentle power of nature with our carefully crafted 
                skincare. Pure ingredients, remarkable results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                href="/store"
                className="group inline-flex items-center gap-3 rounded-full bg-[#A5D6A7] px-10 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:bg-[#81C784] hover:shadow-2xl hover:shadow-[#A5D6A7]/30"
              >
                <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Shop The Cleanser
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#212121]/50">
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
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Clean Ingredients
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Hero Image */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.3}>
              <div className="relative">
                <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#A5D6A7]/8 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#4DD0E1]/8 blur-3xl" />
                
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)]">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                      src="/hero-botanical-cleanser.jpg"
                      alt="Botanical Cleanser"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                {/* Floating badge */}
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-medium tracking-wide text-[#4DD0E1] shadow-md backdrop-blur-sm">
                  New Collection
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs text-[#212121]/70 shadow-md backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#A5D6A7]" />
                  100% Natural
                </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B2EBF2] to-transparent" />
    </section>
  )
}
