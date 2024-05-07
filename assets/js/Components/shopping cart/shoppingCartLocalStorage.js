export const getShoppingCart = () => {
  let shoppingCartString = localStorage.getItem("shoppingCart");
  let shoppingCart = JSON.parse(shoppingCartString);
  return shoppingCart;
};

export const saveShoppingCartData = (cartData) => {
  let serializedCartData = JSON.stringify(cartData);
  localStorage.setItem("shoppingCart", serializedCartData);
};
