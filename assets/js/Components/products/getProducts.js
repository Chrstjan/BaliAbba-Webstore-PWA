import { myFetchData } from "../../Utils/apiUtils.js";

import { receivedProducts } from "./receivedProducts.js";

export const getProducts = async () => {
  const productsEndpoint = "https://dummyjson.com/products?limit=0";
  const productsData = await myFetchData(productsEndpoint);
  console.log(productsData);
  receivedProducts(productsData);
};
