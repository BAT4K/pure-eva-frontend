"use client"

import { useState } from "react"
import { Truck, RefreshCw, Shield, ScrollText, ChevronRight } from "lucide-react"

const policies = [
  {
    id: "shipping",
    label: "Shipping Policy",
    icon: Truck,
  },
  {
    id: "refund",
    label: "Refund Policy",
    icon: RefreshCw,
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: Shield,
  },
  {
    id: "terms",
    label: "Terms of Service",
    icon: ScrollText,
  },
]

const policyContent = {
  shipping: {
    title: "Shipping Policy",
    lastUpdated: "January 15, 2024",
    sections: [
      {
        heading: "Processing Time",
        content: `All orders are processed within 1-2 business days (excluding weekends and public holidays) after receiving your order confirmation email. You will receive another notification directly to your registered email or phone number when your order has shipped.

We understand the excitement of receiving your Pure Eva botanical cleanser, and we work diligently to get your order to you as quickly as possible. Every bottle is carefully packaged to ensure it reaches you in pristine condition.`,
      },
      {
        heading: "Shipping Across India",
        content: `We deliver pan-India using trusted courier partners.

• Standard Shipping (3–5 business days): Free on all orders above ₹500.
• We currently accept Cash on Delivery (COD) only — no advance payment required.
• There is no extra handling charge or surcharge for COD orders.

Please note that delivery times may vary depending on your location, with metropolitan areas generally receiving orders faster than remote locations.`,
      },
      {
        heading: "International Shipping",
        content: `Currently, we only ship within India. If you reside outside of India and wish to experience our botanical skincare, please contact us directly at pureeva25@gmail.com and we can explore custom shipping arrangements.`,
      },
      {
        heading: "Order Tracking",
        content: `Once your order has shipped, you will receive a tracking link via email and SMS. You can use this link to track your package's journey through our courier partner's portal.

If your tracking information hasn't updated for a few days or if you experience any delivery issues, please contact our customer service team at pureeva25@gmail.com.`,
      },
    ],
  },
  refund: {
    title: "Refund & Return Policy",
    lastUpdated: "January 15, 2024",
    sections: [
      {
        heading: "Our Commitment to Quality",
        content: `At Pure Eva, we take immense pride in the quality and purity of our botanical cleanser. Due to the personal and delicate nature of skincare formulations, we do not accept returns or exchanges on opened or used products for hygiene and safety reasons.`,
      },
      {
        heading: "Return Eligibility",
        content: `Returns or replacements are only accepted in the rare event that:

• The product arrives damaged, broken, or leaking.
• You receive an incorrect item.

You must notify us within 3 days of delivery to be eligible for a replacement or refund under these circumstances. Returns are not accepted for reasons such as "I didn't like the scent" or minor allergic reactions, as botanical extracts naturally vary and skin compatibility differs from person to person.`,
      },
      {
        heading: "How to Initiate a Claim",
        content: `If you received a damaged or incorrect order, please follow these steps:

1. Email us at pureeva25@gmail.com within 3 days of receiving your order.
2. Include your Order Number and a clear unboxing video or photographs of the damaged/incorrect product.
3. Our team will review your claim within 48 hours.
4. If approved, we will arrange for a reverse pickup and dispatch a fresh replacement, or issue a full refund to your original payment method.`,
      },
      {
        heading: "Refund Processing",
        content: `Since we exclusively accept Cash on Delivery (COD), refunds are processed directly to your bank account or UPI ID.

For approved refund claims, our team will contact you to collect your preferred payment details and initiate the transfer within 5–7 business days of approval.`,
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 15, 2024",
    sections: [
      {
        heading: "Information We Collect",
        content: `We collect information necessary to fulfill your orders and enhance your skincare journey, complying with the Information Technology Act, 2000, and other applicable Indian laws.

• Personal details such as your name, email, phone number, and delivery address.
• Payment transaction details processed securely via Cash on Delivery or designated UPI tools. We do not store your complete UPI, credit, or debit card information.
• Browsing behavior and device information when you visit pureeva.shop.`,
      },
      {
        heading: "How We Use Your Data",
        content: `Your data is strictly used to:

• Process and deliver your Pure Eva cleanser seamlessly.
• Send order updates, tracking links, and invoices.
• Reach out for customer support queries.
• Share exclusive offers and skincare tips (only if you have opted in).

We do not sell, rent, or trade your personal information to third parties. Data is only shared with our logistics and payment partners explicitly for order fulfillment.`,
      },
      {
        heading: "Data Security",
        content: `We implement robust, industry-standard security measures to protect your personal information against unauthorized access, alteration, or disclosure. All active sessions and checkouts are encrypted using Secure Socket Layer (SSL) technology.`,
      },
      {
        heading: "Your Rights",
        content: `You have the right to request a copy of the data we hold about you or request its deletion. To opt out of marketing communications or manage your data preferences, simply contact our Privacy team at pureeva25@gmail.com. We respond to all data requests promptly under applicable Indian legal timelines.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "January 15, 2024",
    sections: [
      {
        heading: "Agreement to Terms",
        content: `By accessing www.pureeva.shop and purchasing our botanical cleanser, you agree to be bound by these Terms of Service. These terms apply to all visitors and customers in India. We reserve the right to update these terms at our discretion to better serve our community.`,
      },
      {
        heading: "Product Information & Usage",
        content: `Pure Eva formulates its cleanser with high-quality botanical ingredients. However, we strongly recommend performing a patch test prior to full application, especially if you have sensitive skin. We are not liable for adverse reactions, as botanical efficacy varies individually.

Prices are displayed in Indian Rupees (INR) and are inclusive of relevant taxes (GST) unless stated otherwise. We reserve the right to adjust pricing based on ingredient availability and operational costs.`,
      },
      {
        heading: "Intellectual Property",
        content: `All original content, photography, branding, logo designs, and formulations associated with Pure Eva are protected by Indian copyright and trademark laws. You may not reproduce or use our materials for commercial purposes without explicit written consent.`,
      },
      {
        heading: "Governing Law",
        content: `These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in the city of our corporate registration.`,
      },
      {
        heading: "Contact Information",
        content: `For any legal inquiries regarding these Terms of Service, or for general customer support, please reach out to us:

Email: pureeva25@gmail.com
Customer Care hours: Monday to Saturday, 10:00 AM to 6:00 PM (IST).`,
      },
    ],
  },
}

export function PoliciesContent() {
  const [activePolicy, setActivePolicy] = useState<keyof typeof policyContent>("shipping")
  const currentPolicy = policyContent[activePolicy]

  return (
    <section className="bg-[#FAFAF9] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <nav className="lg:sticky lg:top-32">
              <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#212121]/50">
                Policies
              </h2>
              <ul className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:pb-0">
                {policies.map((policy) => {
                  const Icon = policy.icon
                  const isActive = activePolicy === policy.id
                  
                  return (
                    <li key={policy.id}>
                      <button
                        onClick={() => setActivePolicy(policy.id as keyof typeof policyContent)}
                        className={`flex w-full items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-left transition-all lg:whitespace-normal xl:whitespace-nowrap lg:rounded-lg ${
                          isActive
                            ? "bg-white text-[#A5D6A7] shadow-md shadow-[#A5D6A7]/10 border border-[#B2EBF2]"
                            : "text-[#212121]/70 hover:bg-white/70 hover:text-[#212121]"
                        }`}
                      >
                        <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? "text-[#4DD0E1]" : "text-[#212121]/40"}`} />
                        <span className="text-sm font-medium">{policy.label}</span>
                        <ChevronRight className={`ml-auto hidden h-4 w-4 lg:block ${isActive ? "text-[#4DD0E1]" : "text-[#212121]/20"}`} />
                      </button>
                    </li>
                  )
                })}
              </ul>
              
              {/* Help Box */}
              <div className="mt-8 hidden rounded-2xl border border-[#B2EBF2] bg-white p-6 shadow-sm lg:block">
                <h3 className="mb-2 font-serif text-lg text-[#212121]">
                  Need Help?
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#212121]/60">
                  Our customer service team is here to assist you with any questions.
                </p>
                <a
                  href="mailto:pureeva25@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#A5D6A7] transition-colors hover:text-[#81C784]"
                >
                  Contact Us
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </aside>

          {/* Policy Content */}
          <article key={activePolicy} className="policy-fade min-w-0 lg:col-span-8 xl:col-span-9">
            <div className="rounded-3xl border border-[#B2EBF2] bg-white p-8 shadow-lg shadow-[#212121]/[0.04] md:p-10 lg:p-12">
              {/* Header */}
              <header className="mb-10 border-b border-[#B2EBF2] pb-8">
                <h1 className="font-serif text-3xl text-[#212121] md:text-4xl">
                  {currentPolicy.title}
                </h1>
                <p className="mt-3 text-sm text-[#212121]/50">
                  Last updated: {currentPolicy.lastUpdated}
                </p>
              </header>

              {/* Sections */}
              <div className="space-y-10">
                {currentPolicy.sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="mb-4 font-serif text-xl text-[#212121] md:text-2xl">
                      {section.heading}
                    </h2>
                    <div className="prose prose-sm max-w-none text-[#212121]/70">
                      {section.content.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 whitespace-pre-line leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <footer className="mt-12 rounded-2xl border border-[#B2EBF2] bg-[#FAFAF9] p-6 md:p-8">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#212121]">
                      Still have questions?
                    </h3>
                    <p className="mt-1 text-sm text-[#212121]/60">
                      We&apos;re here to help and answer any questions you might have.
                    </p>
                  </div>
                  <a
                    href="mailto:pureeva25@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A5D6A7] px-6 py-3 text-sm font-medium text-[#212121] shadow-lg shadow-[#A5D6A7]/20 transition-all hover:bg-[#81C784] hover:shadow-xl active:scale-95"
                  >
                    Contact Support
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
