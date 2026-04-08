import { Leaf } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AboutHero() {
  return (
    <section className="relative overflow-x-hidden bg-[#FAFAF9]">
      {/* Hero Content */}
      <div className="relative px-6 pb-24 pt-12 md:px-12 md:pb-32 lg:px-20 lg:pb-40 lg:pt-20">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#A5D6A7]/8 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/8 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          <ScrollReveal delay={0.1}>
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#B2EBF2]" />
              <Leaf className="h-4 w-4 text-[#4DD0E1]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#4DD0E1]">
                Our Story
              </span>
              <Leaf className="h-4 w-4 text-[#4DD0E1]" />
              <div className="h-px w-8 bg-[#B2EBF2]" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-[#212121] md:text-5xl lg:text-7xl">
              Beauty in Its
              <br />
              <span className="text-[#A5D6A7]">Purest Form</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#212121]/60 md:text-xl">
              We believe that true beauty comes from nature. Our journey began with a 
              simple idea: create skincare that nurtures both your skin and the planet.
            </p>
          </ScrollReveal>

          {/* Decorative botanical divider */}
          <div className="mx-auto mt-16 flex max-w-xs items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B2EBF2]" />
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-[#A5D6A7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2C13.5 4 15 6 15 9C15 12 13 14 12 14C11 14 9 12 9 9C9 6 10.5 4 12 2Z" />
                <path d="M12 14V22" />
                <path d="M9 18C7 17 5 15 5 13C5 11 7 10 9 11" />
                <path d="M15 18C17 17 19 15 19 13C19 11 17 10 15 11" />
              </svg>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B2EBF2]" />
          </div>
        </div>
      </div>
    </section>
  )
}
