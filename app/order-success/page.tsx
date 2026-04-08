"use client"

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    setOrderId(searchParams.get('id'));
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20 text-center">
      <div className="mb-8 rounded-full bg-[#4DD0E1]/20 p-6">
        <CheckCircle2 className="h-20 w-20 text-[#34D399]" />
      </div>
      
      <h1 className="mb-4 font-serif text-4xl text-[#212121]">Order Confirmed</h1>
      <p className="mb-8 max-w-md text-[#212121]/70">
        Thank you for your purchase. Your order has been placed successfully. 
        You will receive your botanical skincare products soon!
      </p>

      {orderId && (
        <div className="mb-10 rounded-2xl border border-[#B2EBF2] bg-background px-8 py-6 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-[#212121]/50">Order Reference</p>
          <p className="mt-2 font-mono text-2xl font-medium text-[#212121]">{orderId}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href={`/track?id=${orderId || ''}`}
          className="flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all active:scale-95 bg-[#34D399] shadow-[#34D399]/20 hover:bg-[#10B981] hover:shadow-xl hover:shadow-[#34D399]/25"
        >
          Track Order
        </Link>
        <Link 
          href="/store"
          className="flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-[#34D399] border-2 border-[#34D399] shadow-lg transition-all active:scale-95 bg-white hover:bg-[#F0FFF4]"
        >
          Continue Shopping <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF9]" />}>
      <OrderSuccessContent />
    </Suspense>
  );
}
