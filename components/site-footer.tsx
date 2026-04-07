"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "Shop the Cleanser", href: "/shop" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Sustainability", href: "/about" },
    { label: "Press", href: "/about" },
  ],
  support: [
    { label: "Contact Us", href: "/policies" },
    { label: "FAQ", href: "/policies" },
    { label: "Shipping", href: "/policies" },
    { label: "Returns", href: "/policies" },
  ],
}

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribed(true)
    setEmail("")

    setTimeout(() => {
      setIsSubscribed(false)
    }, 3000)
  }

  return (
    <footer className="border-t border-[#E5E0DA] bg-white/30">
      {/* Newsletter Section */}
      <div className="border-b border-[#E5E0DA] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-4 w-4 text-[#A88B67]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#A88B67]">
              Stay Connected
            </span>
            <Leaf className="h-4 w-4 text-[#A88B67]" />
          </div>
          
          <h3 className="mb-4 font-serif text-2xl text-[#2C2C2C] md:text-3xl">
            Join the Pure Eva Family
          </h3>
          
          <p className="mb-8 text-[#2C2C2C]/60">
            Subscribe for exclusive offers, skincare tips, and early access to new products.
          </p>

          <form onSubmit={handleSubscribe} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="flex-1 rounded-full border border-[#E5E0DA] bg-white px-6 py-3.5 text-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/40 focus:border-[#B87A7A] focus:outline-none focus:ring-2 focus:ring-[#B87A7A]/20"
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className={`flex min-w-[160px] items-center justify-center whitespace-nowrap rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all active:scale-95 ${
                isSubscribed 
                  ? "bg-[#8E9B79] shadow-[#8E9B79]/20" 
                  : "bg-[#B87A7A] shadow-[#B87A7A]/20 hover:bg-[#A66B6B] hover:shadow-xl hover:shadow-[#B87A7A]/25"
              }`}
            >
              {isSubscribed ? "Welcome! ✨" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 md:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block font-serif text-2xl tracking-wide text-[#2C2C2C]">
                Pure Eva
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#2C2C2C]/60">
                Natural skincare crafted with love, inspired by botanical wisdom, 
                and designed to reveal your skin&apos;s natural radiance.
              </p>
              
              <div className="mt-6 flex flex-col gap-1 text-sm text-[#2C2C2C]/70">
                <p>Questions? Reach out to us:</p>
                <a href="mailto:pureeva25@gmail.com" className="text-[#B87A7A] hover:underline">
                  pureeva25@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-4">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/pure.eva25/" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/pure-eva/" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 px-4 items-center justify-center rounded-full border border-[#E5E0DA] text-[#2C2C2C]/60 text-xs font-medium transition-all hover:border-[#B87A7A] hover:text-[#B87A7A]"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#2C2C2C]">
                Shop
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#2C2C2C]/60 transition-colors duration-300 hover:text-[#B87A7A] py-1"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-[1px] scale-x-0 bg-[#B87A7A] transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#2C2C2C]">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#2C2C2C]/60 transition-colors duration-300 hover:text-[#B87A7A] py-1"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-[1px] scale-x-0 bg-[#B87A7A] transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-wider text-[#2C2C2C]">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-[#2C2C2C]/60 transition-colors duration-300 hover:text-[#B87A7A] py-1"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-[1px] scale-x-0 bg-[#B87A7A] transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E0DA] pt-8 md:flex-row">
            <p className="text-xs text-[#2C2C2C]/50">
              &copy; {new Date().getFullYear()} Pure Eva. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-[#2C2C2C]/50">
              <Link href="/policies" className="transition-colors hover:text-[#B87A7A]">
                Privacy Policy
              </Link>
              <Link href="/policies" className="transition-colors hover:text-[#B87A7A]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
