import {
  getShoppingCart,
  saveShoppingCartData,
} from "./shoppingCartLocalStorage.js";

export const initializeShoppingCart = () => {
  let shoppingCart = getShoppingCart();

  if (!shoppingCart) {
    console.log("No Shopping Cart!!");

    let newShoppingCart = {
      products: [],
      total: 0,
    };

    //function to update products amount to 0 here
    saveShoppingCartData(newShoppingCart);
  } else {
    let ShoppingCartData = JSON.parse(shoppingCart);

    //function to update products amount to length of the array in the data object here
  }
};
