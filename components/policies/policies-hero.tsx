import { FileText } from "lucide-react"

export function PoliciesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4F0]">
      {/* Hero Content - Adjusted for fixed header */}
      <div className="relative px-6 pb-12 pt-16 md:px-12 md:pb-16 md:pt-24 lg:px-20 lg:pb-20 lg:pt-32">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#B87A7A]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#B87A7A]/40" />
            <FileText className="h-4 w-4 text-[#B87A7A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B87A7A]">
              Transparency
            </span>
            <FileText className="h-4 w-4 text-[#B87A7A]" />
            <div className="h-px w-8 bg-[#B87A7A]/40" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl leading-tight text-[#2C2C2C] md:text-5xl lg:text-6xl">
            Store Policies
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#2C2C2C]/60 md:text-lg">
            We believe in complete transparency. Here you&apos;ll find all the information 
            about how we handle shipping, returns, your privacy, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
