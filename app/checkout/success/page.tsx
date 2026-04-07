import Link from 'next/link';
import { Check, Leaf, ShoppingBag } from 'lucide-react';

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const paymentId = resolvedParams.payment_id;

  return (
    <main className="min-h-screen bg-[#F7F4F0] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full bg-white/60 p-10 rounded-3xl shadow-xl backdrop-blur-md text-center border border-[#E5E0DA]">
        
        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#B87A7A]/10 mb-8 relative">
          <div className="absolute inset-0 rounded-full animate-ping bg-[#B87A7A]/20 opacity-75"></div>
          <Check className="h-10 w-10 text-[#B87A7A]" />
        </div>

        {/* Messaging */}
        <h1 className="font-serif text-3xl text-[#2C2C2C] mb-4">
          Order Confirmed
        </h1>
        <p className="text-[#2C2C2C]/70 mb-8 leading-relaxed">
          Thank you for choosing Pure Eva. Your botanical skincare is being prepared with care, and your journey to radiant skin begins soon.
        </p>

        {/* Order Info */}
        {paymentId && (
          <div className="bg-[#F7F4F0] rounded-2xl p-4 mb-8 border border-[#E5E0DA]">
            <p className="text-xs uppercase tracking-widest text-[#A88B67] mb-1">
              Transaction ID
            </p>
            <p className="font-mono text-sm text-[#2C2C2C]/60 truncate">
              {paymentId}
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mb-10 text-xs text-[#2C2C2C]/50">
          <Leaf className="h-3 w-3 text-[#A88B67]" />
          <span>A receipt has been sent to your email</span>
        </div>

        {/* Back to store */}
        <Link
          href="/store"
          className="group flex items-center justify-center gap-3 w-full rounded-full bg-[#B87A7A] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#A66B6B] hover:shadow-xl hover:shadow-[#B87A7A]/30"
        >
          <ShoppingBag className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
