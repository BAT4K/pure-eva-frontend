import { Leaf, Heart, ShieldCheck } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Every ingredient is sourced from nature. No synthetics, no fillers, no compromises. Just pure, effective botanicals.",
      stat: "30+",
      statLabel: "Botanical Extracts",
    },
    {
      icon: Heart,
      title: "Cruelty-Free",
      description: "We never test on animals. Our products are certified cruelty-free and we support ethical beauty practices.",
      stat: "100%",
      statLabel: "Vegan Formula",
    },
    {
      icon: ShieldCheck,
      title: "Dermatologist Tested",
      description: "Rigorously tested and approved by dermatologists. Safe for all skin types, including sensitive skin.",
      stat: "0%",
      statLabel: "Harsh Chemicals",
    },
  ]

  return (
    <section className="border-t border-[#B2EBF2] bg-white/40 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[#4DD0E1]">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl text-[#212121] md:text-4xl lg:text-5xl">
            Why Choose Pure Eva
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#212121]/60">
            We believe in skincare that works in harmony with your body, 
            not against it. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group relative overflow-hidden rounded-3xl bg-[#FFFFFF] p-8 transition-all hover:shadow-lg lg:p-10"
            >
              {/* Decorative number */}
              <span className="absolute -right-4 -top-6 font-serif text-[120px] leading-none text-[#A5D6A7]/5">
                {index + 1}
              </span>

              {/* Icon */}
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition-transform group-hover:-translate-y-1 group-hover:shadow-lg">
                <reason.icon className="h-7 w-7 text-[#A5D6A7]" />
              </div>

              {/* Content */}
              <h3 className="relative mb-3 font-serif text-2xl text-[#212121]">
                {reason.title}
              </h3>
              
              <p className="relative mb-6 leading-relaxed text-[#212121]/60">
                {reason.description}
              </p>

              {/* Stat */}
              <div className="relative flex items-baseline gap-2 border-t border-[#B2EBF2] pt-6">
                <span className="font-serif text-3xl text-[#A5D6A7]">{reason.stat}</span>
                <span className="text-sm text-[#212121]/50">{reason.statLabel}</span>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A5D6A7] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-[#212121]/60">
            Ready to experience the Pure Eva difference?
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#A5D6A7] transition-colors hover:text-[#81C784]"
          >
            Learn More About Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
