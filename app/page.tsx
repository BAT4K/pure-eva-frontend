import { HomeHero } from "@/components/home/home-hero"
import { SocialProof } from "@/components/home/social-proof"
import { HeroProduct } from "@/components/home/hero-product"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Metadata } from "next"
import { shopifyFetch } from "@/lib/shopify"

export const metadata: Metadata = {
  title: "Pure Eva | Botanical Skincare",
}

const getProductQuery = `
  query {
    products(first: 1) {
      edges {
        node {
          variants(first: 1) {
            edges {
              node {
                price { amount }
                compareAtPrice { amount }
              }
            }
          }
        }
      }
    }
  }
`;

export default async function Home() {
  const productData = await shopifyFetch({ query: getProductQuery });
  
  // Fallbacks if fetch fails
  let price = 229;
  let compareAtPrice = 299;

  if (!productData.error && productData.body?.data?.products?.edges?.[0]) {
    const variant = productData.body.data.products.edges[0].node.variants.edges[0]?.node;
    if (variant) {
      price = parseFloat(variant.price.amount);
      if (variant.compareAtPrice) {
        compareAtPrice = parseFloat(variant.compareAtPrice.amount);
      }
    }
  }

  return (
    <main className="bg-[#F7F4F0]">
      <HomeHero />
      <SocialProof />
      <HeroProduct price={price} compareAtPrice={compareAtPrice} />
      <WhyChooseUs />
    </main>
  )
}
