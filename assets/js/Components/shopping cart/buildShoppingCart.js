import { getShoppingCart } from "./shoppingCartLocalStorage.js";
import {
  featuredProductsArray,
  productAddAmountCallback,
  productSubtractCallback,
  productRemoveCallback,
} from "../products/receivedProducts.js";
import { buildFeaturedProductsCards } from "../products/buildFeaturedProductsCards.js";
import { clearShoppingCart } from "./shoppingCart.js";

const shoppingCartContainer = document.getElementById("app");
const totalAmountContainer = document.createElement("div");

export const buildShoppingCart = () => {
  let shoppingCartData = getShoppingCart();

  let discountAmount = shoppingCartData.products.reduce((total, product) => {
    return total + product.discountPercentage;
  }, 0);

  let discountDecimal = 1 - discountAmount / 100;

  let productsDiscountPrice = shoppingCartData.products.reduce(
    (total, product) =>
      Math.floor(
        total + product.price * product.productAmount * discountDecimal
      ),
    0
  );

  let productsTotalAmount = shoppingCartData.products.reduce(
    (total, product) => total + product.price * product.productAmount,
    0
  );

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

    //#region event listeners
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
    //#endregion event listeners
  });

  let totalAmountContent = `
    <span class="price-container">
      <header class="products-price-container">
        <h3>Price:</h3>
        <p>${productsTotalAmount} $</p>
      </header>
      ${
        productsTotalAmount >= 150
          ? `
        <header class="discount-container">
          <h3>Discount:</h3>
          <p>${discountAmount}%</p>
        </header>`
          : ""
      }
        <header class="total-container">
          <h3>Total:</h3>
          <p>${
            productsTotalAmount >= 150
              ? productsDiscountPrice
              : productsTotalAmount
          }</p>
        </header>
    </span>
    <span class="checkout-container">
      <button>Checkout</button>
    </span>`;

  let clearShoppingContainer = `
    <div class="clear-cart-container">
        <button id="clear-cart-btn" data-shoppingCart="${shoppingCartData.products}">Empty shopping cart</button>
    </div>`;

  totalAmountContainer.innerHTML += totalAmountContent;
  totalAmountContainer.innerHTML += clearShoppingContainer;
  shoppingCartContainer.appendChild(totalAmountContainer);

  const clearShoppingCartBtn = document.getElementById("clear-cart-btn");
  clearShoppingCartBtn.addEventListener("click", () => {
    clearShoppingCart(shoppingCartData);
  });
};

const clearApp = () => {
  shoppingCartContainer.innerHTML = "";
  totalAmountContainer.innerHTML = "";
};
