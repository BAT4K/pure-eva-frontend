import { MetadataRoute } from 'next'
import { shopifyFetch } from '@/lib/shopify'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const routes = ['', '/shop', '/about', '/policies'].map((route) => ({
    url: `https://pureeva.shop${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const getProductsQuery = `
    query {
      products(first: 100) {
        edges {
          node {
            handle
            updatedAt
          }
        }
      }
    }
  `

  let productRoutes: MetadataRoute.Sitemap = []
  
  // 2. Fetch dynamic routes from Shopify
  try {
    const productData = await shopifyFetch({ query: getProductsQuery })
    if (!productData.error && productData.body?.data?.products?.edges) {
      productRoutes = productData.body.data.products.edges.map(({ node }: any) => ({
        url: `https://pureeva.shop/products/${node.handle}`,
        lastModified: node.updatedAt,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))
    }
  } catch (e) {
    console.error("Sitemap Shopify Fetch Error", e)
  }

  // Combine static and dynamic
  return [...routes, ...productRoutes]
}
