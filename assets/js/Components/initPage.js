//Will be used for calling functions that should run on page load
import { createLoading } from "./loading.js";
import { getProductCategories } from "./categories/getCategories.js";
import { getProducts } from "./products/getProducts.js";

export const initPageLoad = () => {
  createLoading();
  getProductCategories();
  getProducts();
};
