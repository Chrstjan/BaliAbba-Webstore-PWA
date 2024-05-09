import {
  getShoppingCart,
  saveShoppingCartData,
} from "./shoppingCartLocalStorage.js";

export const initializeShoppingCart = () => {
  let shoppingCart = getShoppingCart();

  if (shoppingCart) {
    updateCartIcon(shoppingCart.products.length);
    shoppingCart.total = shoppingCart.products.length;
  } else {
    console.log("No Shopping Cart!!");

    let newShoppingCart = {
      products: [],
      total: 0,
    };

    saveShoppingCartData(newShoppingCart);

    newShoppingCart.total = newShoppingCart.products.length;
    updateCartIcon(0);
  }
};

export const addToShoppingCart = (productId) => {
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
