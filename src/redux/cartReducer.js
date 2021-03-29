import { deacreaseQuantityFunc } from "./cartUtils";
import { addToCart } from "./cartUtils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
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

    case "REMOVE_ITEM_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    }
    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cartItems: deacreaseQuantityFunc(state.cartItems, action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
