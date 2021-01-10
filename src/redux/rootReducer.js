import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./userReducer";
import CartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["shop"],
};
const rootReducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
