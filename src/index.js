import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mytheme from "./mytheme";
import { Windmill } from "@windmill/react-ui";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <Windmill theme={mytheme}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Windmill>
  </Provider>,
  document.getElementById("root")
);
