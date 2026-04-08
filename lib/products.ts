export const products = [
  {
    handle: "urban-reset-gel-cleanser",
    title: "Urban Reset Gel Cleanser",
    description: "Our signature cleanser combines the purest botanical extracts with advanced skincare science. Experience a gentle yet effective cleanse that respects your skin's natural balance while delivering visible results.",
    descriptionHtml: "<p>Our signature cleanser combines the purest botanical extracts with advanced skincare science. Experience a gentle yet effective cleanse that respects your skin's natural balance while delivering visible results.</p><p>Formulated with Salicylic Acid (BHA) and Niacinamide to gently exfoliate and visibly minimize enlarged pores.</p>",
    price: "229",
    compareAtPrice: "299",
    imageUrl: "/product-hero.jpg",
    imageAlt: "Urban Reset Gel Cleanser details",
    variantId: "",
  }
];

export const getProductByHandle = (handle: string) => {
  return products.find(p => p.handle === handle) || null;
}
