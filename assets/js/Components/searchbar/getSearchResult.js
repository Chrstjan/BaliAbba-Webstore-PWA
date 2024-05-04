import { allProductsArray } from "../products/receivedProducts.js";
import { supCategoryArray } from "../categories/receivedCategories.js";

export const searchProduct = (userSearch) => {
  allProductsArray.map((allProducts) => {
    if (allProducts.title.includes(userSearch)) {
      console.log(allProducts);
    }
  });

  supCategoryArray.map((categories) => {
    if (
      categories.supCategory.includes(userSearch) ||
      categories.subCategory.includes(userSearch)
    ) {
      console.log(categories);
    }
  });
};