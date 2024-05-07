import {
  featuredProductsArray,
  productCardCallback,
} from "../products/receivedProducts.js";
import { buildFeaturedProductsCards } from "../products/buildFeaturedProductsCards.js";
import { searchProduct, productsCategoriesArray } from "./getSearchResult.js";
import { supCategoryCallback } from "../categories/receivedCategories.js";
import { buildAllCategories } from "../categories/buildCategoriesCards.js";

const sidebarParentContainer = document.getElementById("app");

const sidebarBtn = document.getElementById("hamburger");

const sidebarContainer = document.createElement("div");
sidebarContainer.id = "sidebar";

sidebarBtn.addEventListener("click", () => {
  sidebarContainer.classList.toggle("show-sidebar");
  document.body.classList.toggle("no-scroll");
  console.log("showing sidebar");
});

export const buildSidebar = async (categories) => {
  console.log(categories);
  let sidebarContent = `
    <nav class="sidebar-nav">
        <ul class="top-nav">
            <li><button id="home-btn">Home</button></li>
            <li><button id="categories">Categories</button></li>
            <li><button id="login">Login</button></li>
        </ul>
        <div class="searchbar-container">
              <input type="text" id="searchbar" placeholder="Search product..." />
              <div class="search-result-container">
              </div>
        </div>
        <ul class="categories-nav">`;

  categories.map((category) => {
    sidebarContent += `
                <ul class="sup-category">
                    <li>
                      <button 
                        class="sup-category-btn"
                        data-category="${category.supCategory}"
                        >
                        ${category.supCategory}
                      </button>
                    </li>
                </ul>`;
  });

  sidebarContent += `
        </ul>
    </nav>`;

  sidebarContainer.innerHTML = sidebarContent;
  sidebarParentContainer.appendChild(sidebarContainer);

  const homeBtn = document.getElementById("home-btn");
  homeBtn.addEventListener("click", () => {
    buildFeaturedProductsCards(featuredProductsArray);
  });

  const allCategoriesBtn = document.getElementById("categories");
  allCategoriesBtn.addEventListener("click", () => {
    buildAllCategories(categories);
  });

  const supCategoryItems = document.querySelectorAll(".sup-category-btn");
  supCategoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const clickedCategory = item.dataset.category;
      supCategoryCallback(clickedCategory);
    });
  });

  const searchBarElement = document.getElementById("searchbar");
  let timeoutId;

  searchBarElement.addEventListener("input", () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const userSearch = searchBarElement.value;

      searchProduct(userSearch);

      let searchResultContainer = document.querySelector(
        ".search-result-container"
      );

      if (userSearch.trim() === "") {
        searchResultContainer.innerHTML = "";
        return;
      }

      searchResultContainer.innerHTML = "";

      productsCategoriesArray.map((products) => {
        console.log(products);
        if (products.thumbnail) {
          let searchResultFigure = document.createElement("figure");
          searchResultFigure.classList.add("search-result-figure");

          let searchResult = `
          <img class="product-search" src="${products.thumbnail}" alt="${products.title}"/>
          <header>
            <h4 class="product-search-title">${products.title}</h4>
          </header>`;
          searchResultFigure.innerHTML += searchResult;
          searchResultContainer.appendChild(searchResultFigure);

          searchResultFigure.addEventListener("click", () => {
            const productId = products.id;
            console.log(productId);
            productCardCallback(productId);
          });
        } else {
          let searchResultCategory = document.createElement("div");
          searchResultCategory.classList.add("search-result-category");

          let searchResult = `
            <header>
              <h3>${products.supCategory}</h3>
            </header>`;

          searchResultCategory.innerHTML += searchResult;

          let subCategoriesContainer = document.createElement("span");
          subCategoriesContainer.classList.add("sub-category-container");

          subCategoriesContainer.innerHTML += `
            <ul>
              ${products.subCategory
                .map(
                  (subCat) =>
                    `<li class="sub-category-list-item">${subCat}</li>`
                )
                .join("")}
            </ul>`;

          searchResultCategory.appendChild(subCategoriesContainer);
          searchResultContainer.appendChild(searchResultCategory);

          searchResultCategory.addEventListener("click", () => {
            supCategoryCallback(products.supCategory);
          });
        }
      });
    }, 700);
  });
};
