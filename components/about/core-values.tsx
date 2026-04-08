import { Droplets, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon: Droplets,
    title: "Pure",
    description: "We source only the finest natural ingredients, free from parabens, sulfates, and synthetic fragrances. Every formula is a testament to nature's power.",
    accent: "#A5D6A7",
  },
  {
    icon: Heart,
    title: "Conscious",
    description: "From sustainable sourcing to recyclable packaging, we make choices that honor our planet. Beauty should never come at the earth's expense.",
    accent: "#4DD0E1",
  },
  {
    icon: Sparkles,
    title: "Effective",
    description: "We blend traditional botanical wisdom with modern science to create products that deliver visible results. Your glow is our proof.",
    accent: "#A5D6A7",
  },
]

export function CoreValues() {
  return (
    <section className="bg-[#FAFAF9] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-6 bg-[#B2EBF2]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4DD0E1]">
              What We Believe
            </span>
            <div className="h-px w-6 bg-[#B2EBF2]" />
          </div>
          
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-[#212121] md:text-4xl lg:text-5xl">
            Our Core
            <span className="text-[#A5D6A7]"> Values</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-[#212121]/60">
            Three principles guide everything we do - from formulation to 
            packaging to the way we treat our community.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-white p-8 border border-[#B2EBF2] shadow-[0_8px_40px_-10px_rgba(33,33,33,0.06)] transition-all duration-300 hover:shadow-[0_12px_50px_-10px_rgba(33,33,33,0.10)] hover:-translate-y-1 lg:p-10"
              >
                {/* Decorative corner */}
                <div 
                  className="absolute right-0 top-0 h-20 w-20 rounded-bl-[60px] rounded-tr-3xl opacity-10 transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: value.accent }}
                />
                
                {/* Icon */}
                <div 
                  className="mb-6 inline-flex rounded-2xl p-4"
                  style={{ backgroundColor: `${value.accent}20` }}
                >
                  <Icon 
                    className="h-7 w-7" 
                    style={{ color: value.accent }}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-4 font-serif text-2xl text-[#212121]">
                  {value.title}
                </h3>
                
                <p className="leading-relaxed text-[#212121]/60">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div 
                  className="mt-8 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: value.accent }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
