import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Windmill } from "@windmill/react-ui";

ReactDOM.render(
  <Windmill>
    <App />
  </Windmill>,
  document.getElementById("root")
);
