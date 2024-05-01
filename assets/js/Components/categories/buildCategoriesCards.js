import { categoryProductCallback } from "../products/receivedProducts.js";

const categoryParentContainer = document.getElementById("app");

export const buildCategoriesCard = (categories) => {
  clearApp();
  console.log(categories);

  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");

  let supCategoryHeader = `
    <header>
      <h2>${categories.supCategory}</h2>
    </header>`;

  categoryContainer.innerHTML += supCategoryHeader;

  categories.subCategory.map((subCategories) => {
    console.log(subCategories);
    let subCategoriesBtn = `<button class="sub-category-btn" data-subcategory="${subCategories}">${subCategories}</button>`;

    categoryContainer.innerHTML += subCategoriesBtn;
  });

  categoryParentContainer.appendChild(categoryContainer);

  const subCategoriesBtn = document.querySelectorAll(".sub-category-btn");
  subCategoriesBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const clickedSubCategory = item.dataset.subcategory;
      categoryProductCallback(clickedSubCategory);
    });
  });
};

const clearApp = () => {
  categoryParentContainer.innerHTML = "";
};
