import { getShoppingCart } from "./shoppingCartLocalStorage.js";
import {
  featuredProductsArray,
  productAddAmountCallback,
  productSubtractCallback,
  productRemoveCallback,
} from "../products/receivedProducts.js";
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
            <button class="subtrack-amount-btn" data-productAmount="${products.id}">-</button>
            <p>${products.productAmount}</p>
            <button class="add-amount-btn" data-productAmount="${products.id}">+</button>
            <span class="remove-product-container">
             <button class="remove-product-btn" data-productId="${products.id}">Remove product</button>
            </span>
          </div>
          <span class="price-container">
            <h5>${products.price} $</h5>
          </span>
          <footer>

          </footer>
        </figcaption>
      </figure>`;

    shoppingCartContainer.innerHTML += filledShoppingCartContainer;

    let subtractProductBtn = document.querySelectorAll(".subtrack-amount-btn");
    subtractProductBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const subBtn = e.target.getAttribute("data-productAmount");
        let parsedSubBtn = parseInt(subBtn);
        productSubtractCallback(parsedSubBtn);
      });
    });

    let addProductBtn = document.querySelectorAll(".add-amount-btn");
    addProductBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const addBtn = e.target.getAttribute("data-productAmount");
        let parsedAddBtn = parseInt(addBtn);
        productAddAmountCallback(parsedAddBtn);
      });
    });

    let removeProductsBtn = document.querySelectorAll(".remove-product-btn");
    removeProductsBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const clickedProduct = e.target.getAttribute("data-productId");
        let parsedProductId = parseInt(clickedProduct);
        console.log(parsedProductId);
        productRemoveCallback(parsedProductId);
      });
    });
  });
};

const clearApp = () => {
  shoppingCartContainer.innerHTML = "";
};
