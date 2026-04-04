import { Flower2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function OurStory() {
  return (
    <section className="bg-white/50 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.2} className="relative">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDE9E4] to-[#E5E0DA] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]">
              {/* Decorative elements */}
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#B87A7A]/10 blur-3xl z-10" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#A88B67]/10 blur-3xl z-10" />
              
              {/* Placeholder content with subtle zoom */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-700 ease-out group-hover:scale-105 z-20">
                <div className="mb-4 rounded-full bg-white/60 p-6 shadow-lg backdrop-blur-sm">
                  <Flower2 className="h-12 w-12 text-[#B87A7A]" />
                </div>
                <p className="text-center font-serif text-lg text-[#2C2C2C]/60">
                  Botanical Garden
                </p>
                <p className="mt-1 text-center text-sm text-[#2C2C2C]/40">
                  Where it all began
                </p>
              </div>

              {/* Year badge */}
              <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
                <span className="font-serif text-sm text-[#A88B67]">Est. 2025</span>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl lg:block z-30">
              <p className="font-serif text-3xl text-[#B87A7A]">6</p>
              <p className="text-sm text-[#2C2C2C]/60">Boys on a Mission</p>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-px w-6 bg-[#A88B67]/40" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">
                  Our Journey
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="mb-6 font-serif text-3xl leading-tight text-[#2C2C2C] md:text-4xl lg:text-5xl">
                From Curiosity
                <br />
                <span className="text-[#B87A7A]">To Creation</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6 text-[#2C2C2C]/70">
                <p className="leading-relaxed">
                  Six boys, all from different backgrounds, but with one common frustration — every skincare product they used felt either too harsh, too chemical-heavy, or simply not made for them. Late-night conversations slowly turned into curiosity, and curiosity turned into a question: Why isn&apos;t skincare simple, honest, and natural anymore?
                </p>
                
                <p className="leading-relaxed">
                  What began as casual discussions soon became experimentation. Between classes, assignments, and exams, they started researching ingredients, studying formulations, and understanding what truly works for the skin — not just what sells. They realized something important: Nature already has the answers. It just needed to be presented the right way.
                </p>
                
                <p className="leading-relaxed font-medium">
                  That&apos;s how Pure Eva was born. A brand built not by experts in suits, but by learners, doers, and believers — six college boys who wanted to create something real, something clean, and something trustworthy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="font-serif text-3xl text-[#2C2C2C]">1</p>
                  <p className="text-sm text-[#2C2C2C]/50">Hero Product</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#2C2C2C]">11</p>
                  <p className="text-sm text-[#2C2C2C]/50">Clean Actives</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-[#2C2C2C]">100%</p>
                  <p className="text-sm text-[#2C2C2C]/50">Honest</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
