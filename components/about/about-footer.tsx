import Link from "next/link"
import { Leaf } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "All Products", href: "#" },
    { label: "Cleansers", href: "#" },
    { label: "Serums", href: "#" },
    { label: "Moisturizers", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Ingredients", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
}

export function AboutFooter() {
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

          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-[#E5E0DA] bg-white px-6 py-3.5 text-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/40 focus:border-[#B87A7A] focus:outline-none focus:ring-2 focus:ring-[#B87A7A]/20"
            />
            <button
              type="submit"
              className="rounded-full bg-[#B87A7A] px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white shadow-lg shadow-[#B87A7A]/20 transition-all hover:bg-[#A66B6B] hover:shadow-xl hover:shadow-[#B87A7A]/25"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block font-serif text-2xl tracking-wide text-[#2C2C2C]">
                Pure Eva
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#2C2C2C]/60">
                Natural skincare crafted with love, inspired by botanical wisdom, 
                and designed to reveal your skin&apos;s natural radiance.
              </p>
              
              {/* Social Links */}
              <div className="mt-6 flex gap-4">
                {["Instagram", "Pinterest", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E0DA] text-[#2C2C2C]/60 transition-all hover:border-[#B87A7A] hover:text-[#B87A7A]"
                    aria-label={social}
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
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
                    <a
                      href={link.href}
                      className="text-sm text-[#2C2C2C]/60 transition-colors hover:text-[#B87A7A]"
                    >
                      {link.label}
                    </a>
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
                      className="text-sm text-[#2C2C2C]/60 transition-colors hover:text-[#B87A7A]"
                    >
                      {link.label}
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
                    <a
                      href={link.href}
                      className="text-sm text-[#2C2C2C]/60 transition-colors hover:text-[#B87A7A]"
                    >
                      {link.label}
                    </a>
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
              <a href="#" className="transition-colors hover:text-[#B87A7A]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#B87A7A]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
