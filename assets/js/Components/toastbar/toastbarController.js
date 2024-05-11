import { allProductsArray } from "../products/receivedProducts.js";
import { getShoppingCart } from "../shopping cart/shoppingCartLocalStorage.js";
import {
  buildProductAddToastbar,
  buildProductUpdateToastbar,
} from "./buildToastbar.js";

export const toastbarCallback = (productId) => {
  let shoppingCart = getShoppingCart();
  console.log(shoppingCart);

  let clickedProduct = null;

  allProductsArray.map((product) => {
    if (product.id === productId) {
      clickedProduct = product;
    }
  });
  console.log(clickedProduct);
  const productAlreadyInShoppingCart = shoppingCart.products.some(
    (product) => product.id === clickedProduct.id
  );

  if (productAlreadyInShoppingCart) {
    buildProductUpdateToastbar();
  } else {
    buildProductAddToastbar();
  }
};
