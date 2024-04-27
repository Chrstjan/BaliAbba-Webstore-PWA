import { myFetchData } from "../../Utils/apiUtils.js";
import { receivedCategories } from "./receivedCategories.js";

export const getProductCategories = async () => {
  const categoriesEndpoint = `https://dummyjson.com/products/categories?limit=0`;
  const categoriesData = await myFetchData(categoriesEndpoint);
  receivedCategories(categoriesData);
};
