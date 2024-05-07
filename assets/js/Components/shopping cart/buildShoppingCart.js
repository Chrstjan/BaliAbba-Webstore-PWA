import { getShoppingCart } from "./shoppingCartLocalStorage.js";
import { featuredProductsArray } from "../products/receivedProducts.js";
import { buildFeaturedProductsCards } from "../products/buildFeaturedProductsCards.js";

const shoppingCartContainer = document.getElementById("app");

export const buildShoppingCart = () => {
  let shoppingCartData = getShoppingCart();
  clearApp();

  console.log(shoppingCartData);

  if (shoppingCartData.products.length === 0) {
    let emptyCartContainer = `
        <div class="empty-cart-container">
            <header>
                <hgroup>
                    <h2>Oh no! Your cart is empty!</h2>
                    <h3>Checkout some of our featured products that will fit right into your home</h3>
                </hgroup>
            </header>
            <button id="featured-products-btn">See Products</button>
        </div>`;

    shoppingCartContainer.innerHTML += emptyCartContainer;
    const featuredProductsBtn = document.getElementById(
      "featured-products-btn"
    );

    featuredProductsBtn.addEventListener("click", () => {
      buildFeaturedProductsCards(featuredProductsArray);
    });
    return;
  }
  console.log("Shopping!!!!");
};

const clearApp = () => {
  shoppingCartContainer.innerHTML = "";
};
