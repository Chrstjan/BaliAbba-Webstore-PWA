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

  const productAlreadyInCart = shoppingCart.products.some(
    (product) => product.id === productId.id
  );

  if (!productAlreadyInCart) {
    shoppingCart.products.push(productId);
    shoppingCart.total++;
    console.log(shoppingCart);

    updateCartIcon(shoppingCart.products.length);

    saveShoppingCartData(shoppingCart);
  } else {
    console.log("Product already in cart!!");
    let newShoppingCart = getShoppingCart();
    console.log(newShoppingCart);

    newShoppingCart.products.forEach((product) => {
      if (product.id === productId.id) {
        console.log(product);
        product.productAmount++;

        saveShoppingCartData(newShoppingCart);
      }
    });
  }
};

const updateCartIcon = (items) => {
  let cartAmountElement = document.getElementById("basket-amount");
  cartAmountElement.innerHTML = items;
};

export const subtrackProductAmountCallback = (productAmount) => {
  let shoppingCart = getShoppingCart();

  shoppingCart.products.forEach((product) => {
    if (product.id === productAmount.id) {
      console.log(product);
      product.productAmount--;

      saveShoppingCartData(shoppingCart);
      buildShoppingCart();

      if (product.productAmount <= 0) {
        shoppingCart.products.splice(product, 1);
        shoppingCart.total--;

        saveShoppingCartData(shoppingCart);
        buildShoppingCart();
        updateCartIcon(shoppingCart.products.length);
      } else {
        console.error("Error subtracting product amount!");
      }
    }
  });
};

export const addProductAmountCallback = (productAmount) => {
  let shoppingCart = getShoppingCart();

  shoppingCart.products.forEach((product) => {
    if (product.id === productAmount.id) {
      console.log(product);
      product.productAmount++;

      saveShoppingCartData(shoppingCart);
      buildShoppingCart();
    } else {
      console.error("Error adding product amount");
    }
  });
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

  shoppingCart.total--;

  saveShoppingCartData(shoppingCart);
  updateCartIcon(shoppingCart.products.length);
  shoppingCart.total = shoppingCart.products.length;
  buildShoppingCart();
};

export const clearShoppingCart = (shoppingCart) => {
  console.log(shoppingCart);
  shoppingCart.products = [];
  shoppingCart.total = 0;

  saveShoppingCartData(shoppingCart);
  buildShoppingCart();
  updateCartIcon(shoppingCart.products.length);
};
