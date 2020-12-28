import { combineReducers } from "redux";

import UserReducer from "./userReducer";
import CartReducer from "./cartReducer";

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
});
