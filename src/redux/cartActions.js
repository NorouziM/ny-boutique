export const toggleCartDropdown = () => ({
  type: "TOGGLE_CART_DROPDOWN",
  payload: "",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});
export const removeItemFromCart = (id) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: id,
});
export const decreaseQuantity = (item) => ({
  type: "DECREASE_QUANTITY",
  payload: item,
});
