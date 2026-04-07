import { FileText } from "lucide-react"

export function PoliciesHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF]">
      {/* Hero Content - Adjusted for fixed header */}
      <div className="relative px-6 pb-12 pt-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20 lg:pt-20">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#34D399]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#34D399]/40" />
            <FileText className="h-4 w-4 text-[#34D399]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#34D399]">
              Transparency
            </span>
            <FileText className="h-4 w-4 text-[#34D399]" />
            <div className="h-px w-8 bg-[#34D399]/40" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl leading-tight text-[#212121] md:text-5xl lg:text-6xl">
            Store Policies
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#212121]/60 md:text-lg">
            We believe in complete transparency. Here you&apos;ll find all the information 
            about how we handle shipping, returns, your privacy, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
