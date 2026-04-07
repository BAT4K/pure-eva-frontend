import { Metadata } from "next"
import { PoliciesHero } from "@/components/policies/policies-hero"
import { PoliciesContent } from "@/components/policies/policies-content"

export const metadata: Metadata = {
  title: "Store Policies",
  description: "Read our shipping policy, refund policy, privacy policy, and terms of service. Pure Eva is committed to transparency and customer satisfaction.",
}

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <PoliciesHero />
      <PoliciesContent />
    </main>
  )
}
