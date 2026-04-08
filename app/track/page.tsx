"use client"

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Package2, MapPin, CreditCard, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const [orderIdInput, setOrderIdInput] = useState('');
  const [orderState, setOrderState] = useState({ isLoading: false, order: null as any, error: '' });

  useEffect(() => {
    const idParam = searchParams.get('id');
    if (idParam) {
      setOrderIdInput(idParam);
      fetchOrder(idParam);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderIdInput.trim()) {
      fetchOrder(orderIdInput.trim());
    }
  };

  const fetchOrder = async (id: string) => {
    setOrderState({ isLoading: true, order: null, error: '' });
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('order_id', id)
        .single();
        
      if (error) throw error;
      if (!data) throw new Error("Order not found");
      
      setOrderState({ isLoading: false, order: data, error: '' });
    } catch (err: any) {
      setOrderState({ isLoading: false, order: null, error: 'Could not find an order with that ID.' });
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-3xl">
        
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-serif text-3xl md:text-4xl text-[#212121]">Track Your Order</h1>
          <p className="text-[#212121]/60">Enter your order reference ID to see the latest updates.</p>
        </div>

        <form onSubmit={handleSearch} className="mb-12 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#212121]/40" />
            <input 
              type="text" 
              value={orderIdInput}
              onChange={(e) => setOrderIdInput(e.target.value.toUpperCase())}
              placeholder="e.g. ORD-A7B2" 
              className="w-full rounded-full border border-[#B2EBF2] bg-background py-4 pl-12 pr-4 outline-none transition-colors focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] text-[#212121]"
            />
          </div>
          <button 
            type="submit"
            disabled={orderState.isLoading || !orderIdInput.trim()}
            className="flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all active:scale-95 bg-[#34D399] shadow-[#34D399]/20 hover:bg-[#10B981] hover:shadow-xl hover:shadow-[#34D399]/25 disabled:opacity-70 disabled:active:scale-100 disabled:hover:bg-[#34D399] disabled:hover:shadow-lg"
          >
            {orderState.isLoading ? 'Searching...' : 'Track Now'}
          </button>
        </form>

        {orderState.error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            {orderState.error}
          </div>
        )}

        {orderState.order && (
          <div className="overflow-hidden rounded-3xl border border-[#B2EBF2] bg-background shadow-sm">
            <div className="border-b border-[#B2EBF2] bg-background/50 p-6 lg:p-8 flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#212121]/50 mb-1">Order Status</p>
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${orderState.order.status === 'Processing' ? 'bg-amber-400' : 'bg-[#34D399] animate-pulse'}`} />
                  <span className="font-serif text-2xl text-[#212121]">{orderState.order.status}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-widest text-[#212121]/50 mb-1">Order ID</p>
                <p className="font-mono text-lg font-medium text-[#212121]">{orderState.order.order_id}</p>
              </div>
            </div>
            
            <div className="grid gap-6 p-6 lg:p-8 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Package2 className="mt-0.5 h-5 w-5 text-[#4DD0E1]" />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-[#212121]">Customer</h3>
                    <p className="mt-1 text-[#212121]/80">{orderState.order.customer_name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#4DD0E1]" />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-[#212121]">Delivery Address</h3>
                    <p className="mt-1 text-[#212121]/80">{orderState.order.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CreditCard className="mt-0.5 h-5 w-5 text-[#4DD0E1]" />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-[#212121]">Payment Method</h3>
                    <p className="mt-1 text-[#212121]/80">Cash on Delivery (COD)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-[#4DD0E1]" />
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-[#212121]">Total Amount</h3>
                    <p className="mt-1 font-serif text-xl text-[#212121]">₹{orderState.order.cart_total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF9]" />}>
      <TrackOrderContent />
    </Suspense>
  );
}
