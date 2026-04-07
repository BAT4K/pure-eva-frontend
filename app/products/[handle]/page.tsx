import { Metadata } from 'next'
import { shopifyFetch } from '@/lib/shopify'
import ProductHero from '@/components/product-hero'

type Props = {
  params: Promise<{ handle: string }>
}

const getProductQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      descriptionHtml
      seo {
        title
        description
      }
      images(first: 1) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

// 1. Dynamic Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params
  
  const productData = await shopifyFetch({ 
    query: getProductQuery, 
    variables: { handle } 
  })

  // Fallback if product missing
  if (productData.error || !productData.body?.data?.product) {
    return {
      title: 'Product Not Found',
    }
  }

  const product = productData.body.data.product
  const seoTitle = product.seo?.title || product.title
  const seoDescription = product.seo?.description || product.description
  const imageUrl = product.images.edges[0]?.node?.url

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `https://pureeva.shop/products/${handle}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://pureeva.shop/products/${handle}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
    }
  }
}

// 2. Dynamic Product Page & JSON-LD Injection
export default async function ProductPage({ params }: Props) {
  const { handle } = await params
  
  const productData = await shopifyFetch({ 
    query: getProductQuery, 
    variables: { handle } 
  })

  if (productData.error || !productData.body?.data?.product) {
    return <div className="p-24 text-center mt-32 h-screen">Product not found.</div>
  }

  const product = productData.body.data.product
  const price = product.variants.edges[0]?.node?.price?.amount || '0'
  const compareAtPrice = product.variants.edges[0]?.node?.compareAtPrice?.amount || null
  const currency = product.variants.edges[0]?.node?.price?.currencyCode || 'INR'
  const imageUrl = product.images.edges[0]?.node?.url || ''
  const imageAlt = product.images.edges[0]?.node?.altText || product.title
  const variantId = product.variants.edges[0]?.node?.id

  // 3. Construct JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: imageUrl ? [imageUrl] : [],
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `https://pureeva.shop/products/${handle}`,
    },
  }

  return (
    <main className="min-h-screen bg-[#F7F4F0]">
      {/* Inject JSON-LD Script directly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ProductHero 
        title={product.title} 
        description={product.description} 
        descriptionHtml={product.descriptionHtml}
        price={price}
        compareAtPrice={compareAtPrice}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        variantId={variantId}
      />
    </main>
  )
}
