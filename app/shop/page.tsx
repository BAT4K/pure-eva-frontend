import { shopifyFetch } from '@/lib/shopify';
import ProductHero from '@/components/product-hero'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop The Cleanser",
}

const getProductQuery = `
  query {
    products(first: 1) {
      edges {
        node {
          id
          title
          description
          descriptionHtml
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
    }
  }
`;

export default async function Home() {
  const productData = await shopifyFetch({ query: getProductQuery });
  
  // GUARD: If the fetch failed or timed out, show an error UI instead of crashing
  if (productData.error || !productData.body?.data?.products?.edges?.[0]) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#F7F4F0]">
        <h1 className="text-2xl text-[#2C2C2C] mb-4">Connection Issue</h1>
        <p className="text-[#B87A7A]">Could not connect to Shopify. Check your network connection.</p>
      </main>
    );
  }

  // Safely extract the strings now that we know the data exists
  const product = productData.body.data.products.edges[0].node;
  const productTitle = product.title;
  const productDescription = product.description;
  const descriptionHtml = product.descriptionHtml;
  const productPrice = product.variants.edges[0].node.price.amount;
  const compareAtPrice = product.variants.edges[0].node.compareAtPrice?.amount || null;
  const variantId = product.variants.edges[0].node.id;
  
  const productImageUrl = product.images.edges[0]?.node?.url || '';
  const productImageAlt = product.images.edges[0]?.node?.altText || productTitle;

  return (
    <main className="min-h-screen bg-[#F7F4F0]">
      <ProductHero 
        title={productTitle} 
        description={productDescription} 
        descriptionHtml={descriptionHtml}
        price={productPrice}
        compareAtPrice={compareAtPrice}
        imageUrl={productImageUrl}
        imageAlt={productImageAlt}
        variantId={variantId}
      />
    </main>
  );
}