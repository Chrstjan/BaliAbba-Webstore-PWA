import { myFetchData } from "../../Utils/apiUtils.js";
import {
  buildProductsCards,
  buildProductDetailsCard,
} from "./buildProductCards.js";

let allProductsArray;
let featuredProductsArray = [];

export const getProducts = async () => {
  const productsEndpoint = "https://dummyjson.com/products?limit=0";
  const productsData = await myFetchData(productsEndpoint);
  console.log(productsData);
  receivedProducts(productsData);
};

const receivedProducts = (productsData) => {
  allProductsArray = productsData.products;

  featuredProductsArray.push(
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)]
  );

  buildProductsCards(featuredProductsArray);
};

export const productCardCallback = (clickedProduct) => {
  console.log(clickedProduct);
  allProductsArray.map((allProducts) => {
    if (allProducts.id === clickedProduct) {
      buildProductDetailsCard(allProducts);
    }
  });
};
