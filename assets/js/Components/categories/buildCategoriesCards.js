import { categoryProductCallback } from "../products/receivedProducts.js";

const categoryParentContainer = document.getElementById("app");

export const buildAllCategories = (categories) => {
  clearApp();

  console.log(categories);

  categories.map((allCategories) => {
    const allCategoryContainer = document.createElement("div");
    allCategoryContainer.classList.add("sup-categories-container");

    let supCategoryHeader = `
      <header>
        <h2>${allCategories.supCategory}</h2>
      </header>`;

    allCategoryContainer.innerHTML += supCategoryHeader;

    allCategories.subCategory.map((subCategories) => {
      let subCategoryBtn = `<button class="sub-categories-btn" data-subcategory="${subCategories}">${subCategories}</button>`;

      allCategoryContainer.innerHTML += subCategoryBtn;
    });

    categoryParentContainer.appendChild(allCategoryContainer);
  });

  const subCategoriesBtn = document.querySelectorAll(".sub-categories-btn");
  subCategoriesBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const clickedSubCategory = item.dataset.subcategory;
      categoryProductCallback(clickedSubCategory);
    });
  });
};

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
