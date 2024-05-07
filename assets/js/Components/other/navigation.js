import { featuredProductsArray } from "../products/receivedProducts.js";
import { buildFeaturedProductsCards } from "../products/buildFeaturedProductsCards.js";
import { buildShoppingCart } from "../shopping cart/buildShoppingCart.js";

const headerHomeBtn = document.getElementById("header-home-btn");
const shoppingCartBtn = document.getElementById("shopping-basket");

//Will be used for calling click eventlisteners that are not directly connected to products & categories
export const pageNavigation = () => {
  headerHomeBtn.addEventListener("click", () => {
    buildFeaturedProductsCards(featuredProductsArray);
  });
};

shoppingCartBtn.addEventListener("click", () => {
  buildShoppingCart();
});
