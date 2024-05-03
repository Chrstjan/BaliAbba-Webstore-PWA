import { featuredProductsArray } from "../products/receivedProducts.js";
import { buildProductsCards } from "../products/buildProductCards.js";
import { categoryCallback } from "../categories/receivedCategories.js";
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
    buildProductsCards(featuredProductsArray);
  });

  const allCategoriesBtn = document.getElementById("categories");
  allCategoriesBtn.addEventListener("click", () => {
    buildAllCategories(categories);
  });

  const supCategoryItems = document.querySelectorAll(".sup-category-btn");
  supCategoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const clickedCategory = item.dataset.category;
      categoryCallback(clickedCategory);
    });
  });
};
