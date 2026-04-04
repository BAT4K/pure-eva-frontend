import { Flower2 } from "lucide-react"

export function OurStory() {
  return (
    <section className="bg-white/50 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDE9E4] to-[#E5E0DA] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]">
              {/* Decorative elements */}
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#B87A7A]/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#A88B67]/10 blur-3xl" />
              
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
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
                <span className="font-serif text-sm text-[#A88B67]">Est. 2018</span>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">
              <p className="font-serif text-3xl text-[#B87A7A]">6+</p>
              <p className="text-sm text-[#2C2C2C]/60">Years of Excellence</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-6 bg-[#A88B67]/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">
                Our Journey
              </span>
            </div>

            <h2 className="mb-6 font-serif text-3xl leading-tight text-[#2C2C2C] md:text-4xl lg:text-5xl">
              From Garden
              <br />
              <span className="text-[#B87A7A]">To Glow</span>
            </h2>

            <div className="space-y-6 text-[#2C2C2C]/70">
              <p className="leading-relaxed">
                Pure Eva was born in a small botanical garden in the south of France, 
                where our founder, Eva Laurent, spent her childhood surrounded by 
                lavender fields and her grandmother&apos;s handmade remedies.
              </p>
              
              <p className="leading-relaxed">
                Inspired by generations of botanical wisdom, Eva set out to create 
                a skincare line that honors nature&apos;s intelligence while meeting 
                modern standards of efficacy and sustainability.
              </p>
              
              <p className="leading-relaxed">
                Today, every Pure Eva product is a tribute to that garden - carefully 
                formulated with ethically sourced botanicals, free from harmful 
                chemicals, and designed to reveal your skin&apos;s natural radiance.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              <div>
                <p className="font-serif text-3xl text-[#2C2C2C]">15+</p>
                <p className="text-sm text-[#2C2C2C]/50">Botanical Ingredients</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#2C2C2C]">50k+</p>
                <p className="text-sm text-[#2C2C2C]/50">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#2C2C2C]">100%</p>
                <p className="text-sm text-[#2C2C2C]/50">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
