import ProductHero from '@/components/product-hero'; 
import { Metadata } from 'next';
import { getProductByHandle } from '@/lib/products';

export const metadata: Metadata = {
  title: "Shop The Cleanser",
}

export default function Store() {
  const product = getProductByHandle("urban-reset-gel-cleanser");
  
  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#FFFFFF]">
        <h1 className="text-2xl text-[#212121] mb-4">Connection Issue</h1>
        <p className="text-[#A5D6A7]">Could not load store data. Please try again.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <ProductHero 
        title={product.title} 
        description={product.description} 
        descriptionHtml={product.descriptionHtml}
        price={product.price}
        compareAtPrice={product.compareAtPrice}
        imageUrl={product.imageUrl}
        imageAlt={product.imageAlt}
        variantId={product.variantId}
      />
    </main>
  );
}