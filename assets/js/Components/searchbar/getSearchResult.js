import { allProductsArray } from "../products/receivedProducts.js";
import { supCategoryArray } from "../categories/receivedCategories.js";

export let productsCategoriesArray = [];

export const searchProduct = (userSearch) => {
  productsCategoriesArray = [];
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

  productsCategoriesArray = [
    ...productsCategoriesArray,
    ...searchedProductsArray,
    ...searchedCategoriesArray,
  ];
  console.log(productsCategoriesArray);
};
