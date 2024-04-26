import { myFetchData } from "../../Utils/apiUtils.js";

export const getProductCategories = async () => {
  const categoriesEndpoint = `https://dummyjson.com/products/categories?limit=0`;
  const categoriesData = await myFetchData(categoriesEndpoint);
  console.log(categoriesData);
};
