import { MetadataRoute } from 'next'
import { products } from '@/lib/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const routes = ['', '/store', '/about', '/policies'].map((route) => ({
    url: `https://pureeva.shop${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Dynamic routes from local data source
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `https://pureeva.shop/products/${product.handle}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // Combine static and dynamic
  return [...routes, ...productRoutes]
}
