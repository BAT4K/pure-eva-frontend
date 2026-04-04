// app/actions.ts
'use server'

import { shopifyFetch } from '@/lib/shopify';

export async function createCheckout(variantId: string, quantity: number) {
  const createCartMutation = `
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          checkoutUrl
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

    const checkoutUrl = response.body.data.cartCreate.cart.checkoutUrl;
    return checkoutUrl;
    
  } catch (error) {
    console.error("Error creating checkout:", error);
    return null;
  }
}