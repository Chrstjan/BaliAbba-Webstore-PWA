import { allProductsArray } from "../products/receivedProducts.js";
import { supCategoryArray } from "../categories/receivedCategories.js";

export let productsCategoriesArray = [];

export const searchProduct = (userSearch) => {
  productsCategoriesArray = [];
  let searchedProductsArray = [];
  let searchedCategoriesArray = [];

  allProductsArray.map((allProducts) => {
    if (allProducts.title.toLowerCase().includes(userSearch.toLowerCase())) {
      searchedProductsArray.push(allProducts);
    }
  });

  supCategoryArray.map((categories) => {
    if (
      categories.supCategory.toLowerCase().includes(userSearch.toLowerCase()) ||
      categories.subCategory.includes(userSearch.toLowerCase())
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
