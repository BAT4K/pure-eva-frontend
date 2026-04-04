import { HomeHero } from "@/components/home/home-hero"
import { SocialProof } from "@/components/home/social-proof"
import { HeroProduct } from "@/components/home/hero-product"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pure Eva | Botanical Skincare",
}

export default function Home() {
  return (
    <main className="bg-[#F7F4F0]">
      <HomeHero />
      <SocialProof />
      <HeroProduct />
      <WhyChooseUs />
    </main>
  )
}
