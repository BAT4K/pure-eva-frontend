import { Metadata } from 'next'
import { getProductByHandle } from '@/lib/products'
import ProductHero from '@/components/product-hero'

type Props = {
  params: Promise<{ handle: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params
  const product = getProductByHandle(handle)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `https://pureeva.shop/products/${handle}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://pureeva.shop/products/${handle}`,
      images: product.imageUrl ? [{ url: product.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
    }
  }
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params
  const product = getProductByHandle(handle)

  if (!product) {
    return <div className="p-24 text-center mt-32 h-screen">Product not found.</div>
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.imageUrl ? [product.imageUrl] : [],
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://pureeva.shop/products/${handle}`,
    },
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
  )
}
