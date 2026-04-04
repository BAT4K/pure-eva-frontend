export function SocialProof() {
  const promises = [
    { name: "SULFATE FREE", subtitle: "Zero harsh chemicals" },
    { name: "PARABEN FREE", subtitle: "Safe preservatives" },
    { name: "CRUELTY FREE", subtitle: "Never tested on animals" },
    { name: "pH BALANCED", subtitle: "Skin barrier safe" },
    { name: "100% HONEST", subtitle: "Complete transparency" },
  ]

  return (
    <section className="border-y border-[#E5E0DA] bg-white/40 px-6 py-12 md:px-12 md:py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <p className="mb-10 text-center text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40">
          Our Core Promises
        </p>

        {/* Promises Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {promises.map((promise) => (
            <div 
              key={promise.name}
              className="group flex flex-col items-center"
            >
              <span className="font-serif text-xl tracking-[0.15em] text-[#2C2C2C]/30 transition-colors group-hover:text-[#2C2C2C]/50 md:text-2xl">
                {promise.name}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-wider text-[#B87A7A]/50">
                {promise.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <svg className="h-6 w-6 text-[#B87A7A]/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="font-serif text-lg italic leading-relaxed text-[#2C2C2C]/60 md:text-xl">
            &ldquo;We didn&apos;t set out to build a skincare empire. We just wanted to 
            formulate something that actually worked for us, without the stinging, 
            the dryness, or the secrets.&rdquo;
          </p>
          <p className="mt-4 text-xs uppercase tracking-wider text-[#A88B67]">
            — The 6 Founders
          </p>
        </div>
      </div>
    </section>
  )
}
