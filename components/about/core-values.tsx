import { Droplets, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon: Droplets,
    title: "Pure",
    description: "We source only the finest natural ingredients, free from parabens, sulfates, and synthetic fragrances. Every formula is a testament to nature's power.",
    accent: "#B87A7A",
  },
  {
    icon: Heart,
    title: "Conscious",
    description: "From sustainable sourcing to recyclable packaging, we make choices that honor our planet. Beauty should never come at the earth's expense.",
    accent: "#A88B67",
  },
  {
    icon: Sparkles,
    title: "Effective",
    description: "We blend traditional botanical wisdom with modern science to create products that deliver visible results. Your glow is our proof.",
    accent: "#B87A7A",
  },
]

export function CoreValues() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-6 bg-[#A88B67]/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">
              What We Believe
            </span>
            <div className="h-px w-6 bg-[#A88B67]/40" />
          </div>
          
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-[#2C2C2C] md:text-4xl lg:text-5xl">
            Our Core
            <span className="text-[#B87A7A]"> Values</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-[#2C2C2C]/60">
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
                className="group relative rounded-3xl bg-white/70 p-8 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.1)] lg:p-10"
              >
                {/* Decorative corner */}
                <div 
                  className="absolute right-0 top-0 h-20 w-20 rounded-bl-[60px] rounded-tr-3xl opacity-10 transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: value.accent }}
                />
                
                {/* Icon */}
                <div 
                  className="mb-6 inline-flex rounded-2xl p-4"
                  style={{ backgroundColor: `${value.accent}15` }}
                >
                  <Icon 
                    className="h-7 w-7" 
                    style={{ color: value.accent }}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-4 font-serif text-2xl text-[#2C2C2C]">
                  {value.title}
                </h3>
                
                <p className="leading-relaxed text-[#2C2C2C]/60">
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
