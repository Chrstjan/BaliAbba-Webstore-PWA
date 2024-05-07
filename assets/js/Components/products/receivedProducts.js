import { buildFeaturedProductsCards } from "./buildFeaturedProductsCards.js";
import { buildProductsCards } from "./buildProductCards.js";
import { buildProductDetailsCard } from "./buildProductDetailsCard.js";
import { addToShoppingCart } from "../shopping cart/shoppingCart.js";

export let allProductsArray;
export let featuredProductsArray = [];

export const receivedProducts = (productsData) => {
  allProductsArray = productsData.products;

  allProductsArray.map((products) => {
    const randRatingsAmount = Math.floor(Math.random() * 3500 + 1);
    products.ratingsAmount = randRatingsAmount;

    if (products.ratingsAmount >= 800) {
      products.bestseller = true;
    } else {
      products.bestseller = false;
    }

    if (products.price <= 20) {
      products.lowPrice = true;
    } else {
      products.lowPrice = false;
    }

    if (products.price >= 50) {
      products.highPrice = true;
    } else {
      products.highPrice = false;
    }

    if (products.stock >= 50) {
      products.highStock = true;
    } else {
      products.highStock = false;
    }

    if (products.stock <= 20) {
      products.lowStock = true;
    } else {
      products.lowStock = false;
    }
  });

  featuredProductsArray.push(
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)]
  );
  buildFeaturedProductsCards(featuredProductsArray);
};

export const productCardCallback = (clickedProduct) => {
  console.log(clickedProduct);
  allProductsArray.map((allProducts) => {
    if (allProducts.id === clickedProduct) {
      buildProductDetailsCard(allProducts);
    }
  });
};

export const productCardCartBtnCallback = (clickedProduct) => {
  console.log(clickedProduct);
  allProductsArray.map((allProducts) => {
    if (allProducts.id === clickedProduct) {
      addToShoppingCart(allProducts);
    }
  });
};

export const categoryProductCallback = (clickedSubCategory) => {
  let subCategoriesArray = [];
  allProductsArray.map((allProducts) => {
    if (allProducts.category === clickedSubCategory) {
      subCategoriesArray.push(allProducts);
      buildProductsCards(subCategoriesArray);
    }
  });
};

export const filteredProductsCallback = (clickedFilter) => {
  console.log(clickedFilter);
  let bestsellersArray = [];
  let lowPriceArray = [];
  let highPriceArray = [];
  let lowHighPriceArray = [];
  let highLowPriceArray = [];
  let highStockArray = [];
  let lowStockArray = [];

  let bestsellersProducts = allProductsArray.filter(
    (product) => product.bestseller === true
  );
  bestsellersArray = [...bestsellersArray, ...bestsellersProducts];

  let lowPriceProducts = allProductsArray.filter(
    (product) => product.lowPrice === true
  );
  lowPriceArray = [...lowPriceArray, ...lowPriceProducts];

  let highPriceProducts = allProductsArray.filter(
    (product) => product.highPrice === true
  );
  highPriceArray = [...highPriceArray, ...highPriceProducts];

  lowHighPriceArray = [
    ...lowHighPriceArray,
    ...lowPriceArray,
    ...highPriceArray,
  ];

  highLowPriceArray = [
    ...highLowPriceArray,
    ...highPriceArray,
    ...lowPriceArray,
  ];

  console.log(lowHighPriceArray);
  console.log(highLowPriceArray);

  let highStockProducts = allProductsArray.filter(
    (products) => products.highStock === true
  );
  highStockArray = [...highStockArray, ...highStockProducts];

  let lowStockProducts = allProductsArray.filter(
    (product) => product.lowStock === true
  );
  lowStockArray = [...lowStockArray, ...lowStockProducts];

  switch (clickedFilter) {
    case "Bestsellers":
      buildProductsCards(bestsellersArray);
      break;

    case "Price: Low":
      buildProductsCards(lowPriceArray);
      break;

    case "Price: High":
      buildProductsCards(highPriceArray);
      break;

    case "Price: Low - High":
      buildProductsCards(lowHighPriceArray);
      break;

    case "Price: High - Low":
      buildProductsCards(highLowPriceArray);
      break;

    case "High stock":
      buildProductsCards(highStockArray);
      break;

    case "Low stock":
      buildProductsCards(lowStockArray);
      break;

    default:
      console.error("Product filter not found!");
      break;
  }
};
