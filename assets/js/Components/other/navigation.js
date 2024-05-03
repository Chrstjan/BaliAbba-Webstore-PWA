import { featuredProductsArray } from "../products/receivedProducts.js";
import { buildFeaturedProductsCards } from "../products/buildFeaturedProductsCards.js";

const headerHomeBtn = document.getElementById("header-home-btn");

//Will be used for calling click eventlisteners that are not directly connected to products & categories
export const pageNavigation = () => {
  headerHomeBtn.addEventListener("click", () => {
    buildFeaturedProductsCards(featuredProductsArray);
  });
};
