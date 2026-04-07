import { HomeHero } from "@/components/home/home-hero"
import { SocialProof } from "@/components/home/social-proof"
import { HeroProduct } from "@/components/home/hero-product"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Metadata } from "next"
import { getProductByHandle } from "@/lib/products"

export const metadata: Metadata = {
  title: "Pure Eva | Botanical Skincare",
}

export default function Home() {
  const product = getProductByHandle("urban-reset-gel-cleanser");
  
  const price = product ? parseFloat(product.price) : 229;
  const compareAtPrice = product && product.compareAtPrice ? parseFloat(product.compareAtPrice) : 299;

  return (
    <main className="bg-[#FFFFFF]">
      <HomeHero />
      <SocialProof />
      <HeroProduct price={price} compareAtPrice={compareAtPrice} />
      <WhyChooseUs />
    </main>
  )
}
