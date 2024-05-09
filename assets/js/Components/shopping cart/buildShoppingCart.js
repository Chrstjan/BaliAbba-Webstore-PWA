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
  shoppingCartData.products.map((products) => {
    let filledShoppingCartContainer = `
      <figure class="filled-container">
        <header>
          <img src="${products.thumbnail}" alt="${products.title}" />
          <span class="product-name-container">
            <h3>${products.title}</h3>
            <p>${products.brand}</p>
          </span>
        </header>
        <figcaption>
          <p>${products.description}</p>
          <div class="user-rating-container">
            <span class="star-rating-container">
              <p>${products.rating}</p>
              <p>★</p>
            </span>
            <p>(${products.ratingsAmount} reviews)</p>
          </div>
          <div class="product-amount-container">
            <button class="subtrack-amount-btn">+</button>
            <p>1</p>
            <button class="add-amount-btn">-</button>
          </div>
          <span class="price-container">
            <h5>${products.price} $</h5>
          </span>
          <footer>
            
          </footer>
        </figcaption>
      </figure>`;

    shoppingCartContainer.innerHTML += filledShoppingCartContainer;
  });
};

const clearApp = () => {
  shoppingCartContainer.innerHTML = "";
};
