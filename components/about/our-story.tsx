import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function OurStory() {
  return (
    <section className="bg-[#FAFAF9] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.2} className="relative">
            {/* The Image Container */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]">
              <Image 
                src="/about-hero-v2.jpeg" 
                alt="Pure Eva Journey" 
                fill 
                priority 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 z-0"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-[#212121]/5 z-10" />

              {/* Year badge */}
              <div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm z-20">
                <span className="font-serif text-sm text-[#4DD0E1]">Est. 2025</span>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -top-6 -right-6 hidden rounded-2xl bg-white border border-[#B2EBF2] p-6 shadow-xl lg:block z-30 transition-transform hover:-translate-y-1">
              <p className="font-serif text-3xl text-[#A5D6A7]">6</p>
              <p className="text-sm text-[#212121]/60">Boys on a Mission</p>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-px w-6 bg-[#B2EBF2]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Our Journey
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="mb-6 font-serif text-3xl leading-tight text-[#212121] md:text-4xl lg:text-5xl">
                From Curiosity
                <br />
                <span className="text-[#A5D6A7]">To Creation</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6 text-[#212121]/70">
                <p className="leading-relaxed">
                  Six boys, all from different backgrounds, but with one common frustration — every skincare product they used felt either too harsh, too chemical-heavy, or simply not made for them. Late-night conversations slowly turned into curiosity, and curiosity turned into a question: Why isn&apos;t skincare simple, honest, and natural anymore?
                </p>
                
                <p className="leading-relaxed">
                  What began as casual discussions soon became experimentation. Between classes, assignments, and exams, they started researching ingredients, studying formulations, and understanding what truly works for the skin — not just what sells. They realized something important: Nature already has the answers. It just needed to be presented the right way.
                </p>
                
                <p className="leading-relaxed font-medium text-[#212121]/80">
                  That&apos;s how Pure Eva was born. A brand built not by experts in suits, but by learners, doers, and believers — six college boys who wanted to create something real, something clean, and something trustworthy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10 flex gap-10 border-t border-[#B2EBF2] pt-8">
                <div>
                  <p className="font-serif text-3xl text-[#212121]">1</p>
                  <p className="text-sm text-[#212121]/50">Hero Product</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#212121]">11</p>
                  <p className="text-sm text-[#212121]/50">Clean Actives</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#212121]">100%</p>
                  <p className="text-sm text-[#212121]/50">Honest</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}