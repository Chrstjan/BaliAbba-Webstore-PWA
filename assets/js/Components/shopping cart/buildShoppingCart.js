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
  shoppingCartData.products = shoppingCartData.products.reduce((acc, item) => {
    const existingProductIndex = acc.findIndex((i) => i.id === item.id);
    if (existingProductIndex !== -1) {
      acc[existingProductIndex].productAmount += item.productAmount;
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

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
            <button class="subtrack-amount-btn" data-productAmount="${products.productAmount}">-</button>
            <p>${products.productAmount}</p>
            <button class="add-amount-btn" data-productAmount="${products.productAmount}">+</button>
          </div>
          <span class="price-container">
            <h5>${products.price} $</h5>
          </span>
          <footer>

          </footer>
        </figcaption>
      </figure>`;

    shoppingCartContainer.innerHTML += filledShoppingCartContainer;

    const subtractProductsBtn = document.querySelectorAll(
      ".subtrack-amount-btn"
    );
    subtractProductsBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const subtrackBtn = e.currentTarget.getAttribute("productAmount");
        console.log(subtrackBtn);
      });
    });

    const addProductsBtn = document.querySelectorAll(".add-amount-btn");
    addProductsBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let addBtn = e.currentTarget.getAttribute("data-productAmount");
        addBtn++;
        console.log(addBtn);
      });
    });
  });
};

const clearApp = () => {
  shoppingCartContainer.innerHTML = "";
};
