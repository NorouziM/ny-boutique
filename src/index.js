import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mytheme from "./mytheme";
import { Windmill } from "@windmill/react-ui";

ReactDOM.render(
  <Windmill theme={mytheme}>
    <App />
  </Windmill>,
  document.getElementById("root")
);
