import { createStore } from "redux";
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
