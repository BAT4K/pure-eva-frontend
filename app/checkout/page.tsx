"use client"

import { useState } from 'react';
import { useCart } from '@/components/cart-provider';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Loader2, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
  const { cartItem, updateQuantity } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
  });

  // Calculate totals
  const subtotal = cartItem ? parseFloat(cartItem.price) * cartItem.quantity : 0;
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cartItem) return;
    setIsLoading(true);

    try {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert("Payment gateway failed to load. Please check your connection.");
        setIsLoading(false);
        return;
      }

      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalAmount })
      });

      const orderNode = await res.json();

      if (orderNode.error) {
        alert("Server Error: " + orderNode.error);
        setIsLoading(false);
        return;
      }

      const options = {
        key: orderNode.key_id || 'rzp_test_dummy', 
        amount: orderNode.amount,
        currency: orderNode.currency,
        name: "Pure Eva",
        description: "Botanical Skincare Order",
        order_id: orderNode.id,
        image: window.location.origin + '/pure-eva-logov2.png',
        handler: function (response: any) {
          setIsSuccess(true);
          updateQuantity(0); 
          window.location.href = `/checkout/success?payment_id=${response.razorpay_payment_id}`;
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#34D399"
        }
      };

      const rzp = new (window as any).Razorpay(options);
      
      rzp.on('payment.failed', function (response: any){
        alert("Payment Failed: " + response.error.description);
      });

      rzp.open();
    } catch (error: any) {
      console.error(error);
      alert("Checkout failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!cartItem && !isSuccess) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-background px-6">
        <ShoppingBag className="mb-6 h-16 w-16 text-[#4DD0E1]/40" />
        <h2 className="mb-2 font-serif text-3xl text-[#212121]">Your cart feels light</h2>
        <p className="mb-8 text-[#212121]/60 text-center">Add our signature cleanser to proceed to checkout.</p>
        <Link 
          href="/store"
          className="rounded-full bg-[#34D399] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#10B981]"
        >
          Return to Store
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-background px-6">
        <Loader2 className="h-10 w-10 animate-spin text-[#34D399] mb-4" />
        <p className="font-serif text-xl tracking-wide text-[#212121]">Finalizing your order...</p>
      </div>
    );
  }

  // TypeScript strict type guard override
  if (!cartItem) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-7xl flex-col-reverse lg:flex-row">
        
        {/* Left Side - Checkout Form */}
        <div className="flex-1 px-6 pb-12 pt-8 md:px-12 lg:pb-20 lg:pt-8 lg:pr-20">
          <Link href="/store" className="mb-8 flex items-center gap-2 text-sm text-[#34D399] transition-colors hover:text-[#10B981]">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium uppercase tracking-wider">Back to Store</span>
          </Link>
          
          <div className="mb-10">
            <h1 className="mb-2 font-serif text-3xl text-[#212121]">Checkout</h1>
            <p className="text-sm text-[#212121]/60">Complete your shipping & payment details safely</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-8">
            {/* Contact Info */}
            <section>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4DD0E1]">Contact Information</h2>
              <div className="space-y-4">
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address" className="w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number" className="w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
              </div>
            </section>

            {/* Shipping Info */}
            <section>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4DD0E1]">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name" className="w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name" className="w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
                <input required type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="col-span-2 w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
                <input required type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
                <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="PIN code" className="w-full rounded-lg border border-[#B2EBF2] bg-background/50 px-4 py-3 outline-none transition-colors focus:border-[#34D399] focus:bg-background text-sm" />
              </div>
            </section>

            <button 
              type="submit" 
              disabled={isLoading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#34D399] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#10B981] disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Pay SECURELY Now"}
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#212121]/50">
              <ShieldCheck className="h-4 w-4 text-[#4DD0E1]" />
              <span>Payments are processed securely via Razorpay</span>
            </div>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full border-b border-[#B2EBF2] bg-background px-6 pb-12 pt-8 lg:w-[480px] lg:border-b-0 lg:border-l lg:pt-8 lg:pl-12 lg:pr-6 xl:pr-12">
          <div className="sticky top-24 lg:top-32">
            <h2 className="mb-6 font-serif text-xl border-b border-[#B2EBF2] pb-4 text-[#212121]">Order Summary</h2>
            
            <div className="mb-8 flex items-start gap-4">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border border-[#B2EBF2] bg-white">
                <Image src={cartItem.imageUrl} alt={cartItem.imageAlt} fill sizes="64px" className="object-cover" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#212121]/60 text-[10px] text-white shadow backdrop-blur-md">
                  {cartItem.quantity}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center pt-1">
                <h3 className="font-medium text-[#212121] line-clamp-2 leading-tight">{cartItem.title}</h3>
                <p className="mt-1 text-sm text-[#212121]/60">₹{cartItem.price}</p>
              </div>
              <div className="font-medium text-[#212121] pt-1">
                ₹{(parseFloat(cartItem.price) * cartItem.quantity).toFixed(2)}
              </div>
            </div>

            <div className="border-t border-[#B2EBF2] divide-y divide-[#B2EBF2]/50">
              <div className="flex justify-between py-4 text-sm text-[#212121]/70">
                <span>Subtotal</span>
                <span className="font-medium text-[#212121]">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-4 text-sm text-[#212121]/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#B2EBF2] pt-6">
              <span className="font-serif text-lg text-[#212121]">Total</span>
              <span className="font-serif text-2xl text-[#212121]">
                <span className="text-sm font-sans text-[#212121]/50 mr-2">INR</span>
                ₹{totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
