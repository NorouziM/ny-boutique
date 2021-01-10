import { createSelector } from "reselect";

export const addToCart = (cartItems, newCartItem) => {
  if (cartItems) {
    console.log(cartItems);
    const isItemExist = cartItems.find(
      (cartItem) => cartItem.id === newCartItem.id
    );
    if (isItemExist) {
      return cartItems.map((cartItem) =>
        cartItem.id === newCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
export const deacreaseQuantityFunc = (cartItems, cartItemToEdit) => {
  const isItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToEdit.id
  );
  if (isItemExist) {
    if (cartItemToEdit.quantity > 1) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToEdit.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    } else {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToEdit.id);
    }
  }
  return cartItems;
};

// SELECTORS
const selectCart = (state) => state.cart;
export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});
export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    var counts = 0;
    if (cartItems) {
      cartItems.forEach((item) => {
        counts += item.quantity;
      });
    }
    return counts;
  }
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    var Total = 0;
    cartItems.forEach((cartItem) => {
      Total += cartItem.quantity * cartItem.price;
    });
    return Total;
  }
);
