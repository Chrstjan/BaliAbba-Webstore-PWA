import { productCardCallback } from "./receivedProducts.js";

let cardsContainer = document.getElementById("app");

export const buildFeaturedProductsCards = (featuredProducts) => {
  clearApp();

  console.log(featuredProducts);

  const randRatingsAmount = Math.floor(Math.random() * 3500 + 1);
  featuredProducts.map((products) => {
    let productFigure = document.createElement("figure");
    productFigure.classList.add("product-card");
    productFigure.addEventListener("click", () => {
      productCardCallback(products.id);
    });

    let productFigureContent = `
            <header class="product-name">
                <h2>${products.title}</h2>
            </header>
            <img class="product-thumbnail" src="${products.thumbnail}" alt="${products.title}" />
            <figcaption class="about-product">
                <span class="ratings-container">
                    <span class="stars-container">
                        <p>${products.rating}</p>
                        <p>★</p>
                    </span>
                    <p>(${randRatingsAmount} reviews)</p>
                </span>
                <div class="button-container">
                    <h3>${products.price} $</h3>
                    <button>Add to cart</button>
                </div>
                <footer class="product-description">
                    <h4>${products.description}</h4>
                    <p>${products.stock} in stock</p>
                </footer>
            </figcaption>`;
    productFigure.innerHTML += productFigureContent;
    cardsContainer.appendChild(productFigure);
  });
};

const clearApp = () => {
  cardsContainer.innerHTML = "";
};
