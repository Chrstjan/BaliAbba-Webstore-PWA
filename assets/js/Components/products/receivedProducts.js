import {
  buildProductsCards,
  buildProductDetailsCard,
} from "./buildProductCards.js";

let allProductsArray;
let featuredProductsArray = [];

export const receivedProducts = (productsData) => {
  allProductsArray = productsData.products;

  featuredProductsArray.push(
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)]
  );

  buildProductsCards(featuredProductsArray);
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
