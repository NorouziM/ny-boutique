import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mytheme from "./mytheme";
import { Windmill } from "@windmill/react-ui";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Windmill theme={mytheme}>
      <App />
    </Windmill>
  </Provider>,
  document.getElementById("root")
);
