// app/actions.ts
'use server'

import { shopifyFetch } from '@/lib/shopify';

export async function createCheckout(variantId: string, quantity: number) {
  const createCartMutation = `
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    price { amount }
                    product { title, images(first: 1){edges{node{url,altText}}} }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    cartInput: {
      lines: [
        {
          merchandiseId: variantId,
          quantity: quantity
        }
      ]
    }
  };

  try {
    const response = await shopifyFetch({
      query: createCartMutation,
      variables
    });
    return response.body.data?.cartCreate?.cart || null;
  } catch (error) {
    console.error("Error creating checkout:", error);
    return null;
  }
}

export async function fetchShopifyCart(cartId: string) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  price { amount }
                  product { title, images(first: 1){edges{node{url,altText}}} }
                }
              }
            }
          }
        }
      }
    }
  `;
  try {
    const res = await shopifyFetch({ query, variables: { cartId } });
    return res.body.data?.cart || null;
  } catch (e) {
    return null;
  }
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  if (quantity <= 0) {
    const query = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) { cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { id } } }`;
    await shopifyFetch({ query, variables: { cartId, lineIds: [lineId] }});
    return;
  }
  const query = `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) { cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { id } } }`;
  await shopifyFetch({ query, variables: { cartId, lines: [{ id: lineId, quantity }] }});
}