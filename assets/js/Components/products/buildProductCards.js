import {
  productCardCallback,
  filteredProductsCallback,
} from "./receivedProducts.js";
import { subCategoryCallback } from "../categories/receivedCategories.js";

let cardsContainer = document.getElementById("app");

export const buildProductsCards = (featuredProducts) => {
  clearApp();

  console.log(featuredProducts);

  const categoryBackBtnContainer = `
    <span class="category-back-btn">
      <button class="category-back-btn">&#8592</button>
    </span>`;

  cardsContainer.innerHTML += categoryBackBtnContainer;

  const productsSortingContainer = `
    <div class="sorting-container">
      <select id="products-filter">
        <option disabled selected hidden>Filter</option>
        <option class="product-filter-option" data-filterOption="${featuredProducts.bestseller}">Bestsellers</option>
        <option class="product-filter-option" data-filterOption="${featuredProducts.price}">Price: low - high</option>
        <option class="product-filter-option" data-filterOption="${featuredProducts.highPrice}"}">Price: high - low</option>
        <option class="product-filter-option" data-filterOption="${featuredProducts.stock}">High stock</option>
        <option class="product-filter-option" data-filterOption="${featuredProducts.lowStock}">Low stock</option>
      </select>
    </div>`;

  cardsContainer.innerHTML += productsSortingContainer;

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
                    <p>(${products.ratingsAmount} reviews)</p>
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

  const categoryBackBtn = document.querySelector(".category-back-btn");
  categoryBackBtn.addEventListener("click", () => {
    subCategoryCallback(featuredProducts[0].category);
  });

  const filteredSelectOption = document.getElementById("products-filter");
  filteredSelectOption.addEventListener("change", (e) => {
    const clickedOption = e.target.value;
    filteredProductsCallback(clickedOption);
  });
};

const clearApp = () => {
  cardsContainer.innerHTML = "";
};
