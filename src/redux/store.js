import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
var middlewares = [thunk];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default store;
