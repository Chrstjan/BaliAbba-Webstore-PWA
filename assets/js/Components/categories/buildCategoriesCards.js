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
    let subCategoriesBtn = `<button>${subCategories}</button>`;

    categoryContainer.innerHTML += subCategoriesBtn;
  });
};

const clearApp = () => {
  categoryParentContainer.innerHTML = "";
};
