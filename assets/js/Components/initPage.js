//Will be used for calling functions that should run on page load
import { createLoading } from "./other/loading.js";
import { getProductCategories } from "./categories/getCategories.js";
import { getProducts } from "./products/getProducts.js";
import { pageNavigation } from "./other/navigation.js";

export const initPageLoad = () => {
  createLoading();
  getProductCategories();
  getProducts();
  pageNavigation();
};
