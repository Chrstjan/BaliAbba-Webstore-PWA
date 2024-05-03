import { featuredProductsArray } from "../products/receivedProducts.js";
import { buildProductsCards } from "../products/buildProductCards.js";

const headerHomeBtn = document.getElementById("header-home-btn");

//Will be used for calling click eventlisteners that are not directly connected to products & categories
export const pageNavigation = () => {
  headerHomeBtn.addEventListener("click", () => {
    buildProductsCards(featuredProductsArray);
  });
};
