"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { ShoppingBag, X, Plus, Minus, Trash2, Loader2, Menu } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useCart } from "./cart-provider"

export function SiteHeader() {
  const { isCartOpen, setIsCartOpen, cartItem, updateQuantity, handleCheckout, isCheckingOut } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const cartQuantity = cartItem?.quantity || 0;

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAFAF9]/85 border-b border-[#B2EBF2]/60 px-6 py-4 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="relative z-[60] flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/pure-eva-logov2.png"
              alt="Pure Eva"
              width={240}
              height={96}
              /* Manage size manually here: */
              /* h-[80px] specifies exact pixel height, change this for larger/smaller logo */
              className="h-[60px] md:h-[80px] w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-8 text-base tracking-wide md:flex">
            <Link
              href="/store"
              className={`group relative transition-colors duration-300 ${pathname === '/store' ? 'text-[#A5D6A7] font-medium' : 'text-[#212121]/80 hover:text-[#A5D6A7]'}`}
            >
              Store
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-[#A5D6A7] transition-transform duration-500 ease-out origin-center ${pathname === '/store' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link
              href="/about"
              className={`group relative transition-colors duration-300 ${pathname === '/about' ? 'text-[#A5D6A7] font-medium' : 'text-[#212121]/80 hover:text-[#A5D6A7]'}`}
            >
              About
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-[#A5D6A7] transition-transform duration-500 ease-out origin-center ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            <Link
              href="/track"
              className={`group relative transition-colors duration-300 ${pathname === '/track' ? 'text-[#A5D6A7] font-medium' : 'text-[#212121]/80 hover:text-[#A5D6A7]'}`}
            >
              Track Order
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-[#A5D6A7] transition-transform duration-500 ease-out origin-center ${pathname === '/track' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          </nav>
          <div className="relative z-[60] flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#212121] transition-colors hover:text-[#A5D6A7]"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartQuantity > 0 && (
                <span className="absolute -right-0 -top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#A5D6A7] text-[10px] text-white">
                  {cartQuantity}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#212121] md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 left-0 z-[70] flex w-[90%] max-w-sm flex-col bg-background shadow-2xl md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#B2EBF2] px-6 py-8">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center hover:opacity-80 transition-opacity">
                  <Image
                    src="/pure-eva-logov2.png"
                    alt="Pure Eva"
                    width={200}
                    height={80}
                    priority
                    /* Manage mobile menu logo size here: */
                    className="h-[60px] w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full p-2 text-[#212121]/60 transition-colors hover:bg-background/50 hover:text-[#212121]"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links with Stagger */}
              <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-12">
                {[
                  { name: 'Store', href: '/store' },
                  { name: 'About', href: '/about' },
                  { name: 'Policies', href: '/policies' },
                  { name: 'Track Order', href: '/track' },
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 font-serif text-4xl transition-colors ${pathname === item.href ? 'text-[#A5D6A7]' : 'text-[#212121] hover:text-[#A5D6A7]'}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mini Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="border-t border-[#B2EBF2] px-6 py-8"
              >
                <a href="mailto:pureeva25@gmail.com" className="mb-4 block text-sm text-[#212121]/60 hover:text-[#A5D6A7]">
                  pureeva25@gmail.com
                </a>
                <div className="flex gap-6 text-sm text-[#212121]/60">
                  <a href="https://www.instagram.com/pure.eva25/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A5D6A7]">Instagram</a>
                  <a href="https://www.linkedin.com/company/pure-eva/" target="_blank" rel="noopener noreferrer" className="hover:text-[#A5D6A7]">LinkedIn</a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- CART DRAWER OVERLAY --- */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* --- CART DRAWER UI --- */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-background shadow-2xl transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#B2EBF2] p-6">
            <h2 className="font-serif text-2xl text-[#212121]">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 text-[#212121]/60 hover:bg-background hover:text-[#212121] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cartQuantity === 0 || !cartItem ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="mb-4 h-12 w-12 text-[#B2EBF2]" />
                <p className="text-[#212121]/60">Your cart is beautifully empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-sm font-medium uppercase tracking-wide text-[#A5D6A7] hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-white border border-[#B2EBF2]/40 shadow-sm">
                  {cartItem.imageUrl && <Image src={cartItem.imageUrl} alt={cartItem.imageAlt} fill sizes="80px" className="object-cover" />}
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#212121] line-clamp-1">{cartItem.title}</h3>
                    <p className="text-sm text-[#212121]/60">₹{cartItem.price}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-[#B2EBF2] bg-background px-2 py-1">
                      <button
                        onClick={() => updateQuantity(cartItem.quantity - 1)}
                        className="p-1 text-[#212121]/60 hover:text-[#212121]"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-[#212121]">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.quantity + 1)}
                        className="p-1 text-[#212121]/60 hover:text-[#212121]"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => updateQuantity(0)}
                      className="p-2 text-[#212121]/40 hover:text-[#A5D6A7] transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {cartQuantity > 0 && cartItem && (
            <div className="border-t border-[#B2EBF2] bg-background p-6">
              <div className="mb-4 flex items-center justify-between font-serif text-lg text-[#212121]">
                <span className="text-[#4DD0E1] text-sm tracking-wide uppercase font-sans">Subtotal</span>
                <span className="text-[#4DD0E1]">₹{(parseFloat(cartItem.price) * cartItem.quantity).toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-[#212121] shadow-lg transition-all active:scale-95 bg-[#A5D6A7] shadow-[#A5D6A7]/20 hover:bg-[#81C784] hover:shadow-xl hover:shadow-[#A5D6A7]/25 disabled:opacity-70 disabled:active:scale-100"
              >
                {isCheckingOut ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Proceed to Checkout"
                )}
              </button>
              <p className="mt-4 text-center text-xs text-[#212121]/70">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
