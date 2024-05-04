import { buildFeaturedProductsCards } from "./buildFeaturedProductsCards.js";
import { buildProductsCards } from "./buildProductCards.js";
import { buildProductDetailsCard } from "./buildProductDetailsCard.js";

export let allProductsArray;
export let featuredProductsArray = [];

export const receivedProducts = (productsData) => {
  allProductsArray = productsData.products;

  allProductsArray.map((products) => {
    const randRatingsAmount = Math.floor(Math.random() * 3500 + 1);
    products.ratingsAmount = randRatingsAmount;

    if (products.stock <= 20) {
      products.lowStock = true;
    } else {
      products.lowStock = false;
    }

    if (products.ratingsAmount >= 800) {
      products.bestseller = true;
    } else {
      products.bestseller = false;
    }
  });

  featuredProductsArray.push(
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)]
  );
  buildFeaturedProductsCards(featuredProductsArray);
};

export const productCardCallback = (clickedProduct) => {
  console.log(clickedProduct);
  allProductsArray.map((allProducts) => {
    if (allProducts.id === clickedProduct) {
      buildProductDetailsCard(allProducts);
    }
  });
};

export const categoryProductCallback = (clickedSubCategory) => {
  let subCategoriesArray = [];
  allProductsArray.map((allProducts) => {
    if (allProducts.category === clickedSubCategory) {
      subCategoriesArray.push(allProducts);
      buildProductsCards(subCategoriesArray);
    }
  });
};
