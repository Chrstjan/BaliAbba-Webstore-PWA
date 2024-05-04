import { allProductsArray } from "../products/receivedProducts.js";
import { supCategoryArray } from "../categories/receivedCategories.js";
import { buildSidebar } from "../other/sidebar.js";

export const searchProduct = (userSearch) => {
  let searchedProductsArray = [];
  let searchedCategoriesArray = [];

  allProductsArray.map((allProducts) => {
    if (allProducts.title.includes(userSearch)) {
      searchedProductsArray.push(allProducts);
    }
  });

  supCategoryArray.map((categories) => {
    if (
      categories.supCategory.includes(userSearch) ||
      categories.subCategory.includes(userSearch)
    ) {
      searchedCategoriesArray.push(categories);
    }
  });

  const productsCategoriesArray = [
    ...searchedProductsArray,
    ...searchedCategoriesArray,
  ];
  console.log(productsCategoriesArray);
};
