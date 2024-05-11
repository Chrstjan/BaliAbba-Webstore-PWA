import { allProductsArray } from "../products/receivedProducts.js";
import { getShoppingCart } from "../shopping cart/shoppingCartLocalStorage.js";
import { buildProductAddToastbar } from "./buildToastbar.js";

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
    buildProductAddToastbar();
  } else {
    console.log("Not in shopping cart");
  }
};
