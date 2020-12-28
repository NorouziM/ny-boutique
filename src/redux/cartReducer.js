import { addToCart } from "./cartUtils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  Price: 0,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM": {
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };
    }

    case "ADD_PRICE": {
      return {
        ...state,
        Price: state.Price + action.payload,
      };
    }
    case "REMOVE_ITEM": {
      const newItems = state.item.filter((item) => item != action.payload);
      return {
        ...state,
        ...newItems,
      };
    }

    default:
      return { ...state };
  }
};

export default cartReducer;
