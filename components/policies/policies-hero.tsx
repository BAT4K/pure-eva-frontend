import { FileText } from "lucide-react"

export function PoliciesHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9]">
      {/* Hero Content - Adjusted for fixed header */}
      <div className="relative px-6 pb-8 pt-12 md:px-12 md:pb-10 lg:px-20 lg:pb-12 lg:pt-20">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#A5D6A7]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#4DD0E1]/8 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#A5D6A7]/60" />
            <FileText className="h-4 w-4 text-[#4DD0E1]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#A5D6A7]">
              Transparency
            </span>
            <FileText className="h-4 w-4 text-[#4DD0E1]" />
            <div className="h-px w-8 bg-[#A5D6A7]/60" />
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
