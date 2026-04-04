import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { CoreValues } from "@/components/about/core-values"

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover the story behind Pure Eva - where nature meets science to create conscious, effective skincare for radiant, healthy skin.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F4F0]">
      <AboutHero />
      <OurStory />
      <CoreValues />
    </main>
  )
}
