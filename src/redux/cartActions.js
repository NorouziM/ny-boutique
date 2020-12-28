export const toggleCartDropdown = () => ({
  type: "TOGGLE_CART_DROPDOWN",
  payload: "",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const addPrice = (price) => ({
  type: "ADD_PRICE",
  payload: price,
});
export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});
