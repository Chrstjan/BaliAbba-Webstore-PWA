import {
  getShoppingCart,
  saveShoppingCartData,
} from "./shoppingCartLocalStorage.js";
import { buildShoppingCart } from "./buildShoppingCart.js";

export const initializeShoppingCart = () => {
  let shoppingCart = getShoppingCart();

  if (shoppingCart) {
    updateCartIcon(shoppingCart.products.length);
    shoppingCart.total = shoppingCart.products.length;

    shoppingCart.products.map((products) => {
      products.productAmount = 1;
    });
  } else {
    console.log("No Shopping Cart!!");

    let newShoppingCart = {
      products: [],
      total: 0,
    };

    saveShoppingCartData(newShoppingCart);

    newShoppingCart.total = newShoppingCart.products.length;
    updateCartIcon(0);

    newShoppingCart.products.map((products) => {
      products.productAmount = 1;
    });
  }
};

export const addToShoppingCart = (productId) => {
  console.log(productId);

  productId.productAmount = 1;

  let shoppingCart = getShoppingCart();

  shoppingCart.products.push(productId);
  shoppingCart.total++;
  console.log(shoppingCart);

  updateCartIcon(shoppingCart.products.length);

  saveShoppingCartData(shoppingCart);
};

const updateCartIcon = (items) => {
  let cartAmountElement = document.getElementById("basket-amount");
  cartAmountElement.innerHTML = items;
};

export const removeProductCallback = (product) => {
  console.log(product);
  let shoppingCart = getShoppingCart();

  const productsToRemove = [];

  shoppingCart.products.forEach((productId, index) => {
    if (productId.id === product.id) {
      productsToRemove.push(index);
    }
  });

  productsToRemove.reverse().forEach((index) => {
    shoppingCart.products.splice(index, 1);
    return;
  });

  saveShoppingCartData(shoppingCart);
  updateCartIcon(shoppingCart.products.length);
  buildShoppingCart();
};
