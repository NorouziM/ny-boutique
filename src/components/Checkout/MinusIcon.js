import React from "react";
import { decreaseQuantity } from "./../../redux/cartActions";
import { connect } from "react-redux";
function MinusIcon({ decreaseQuantity, cartItem }) {
  return (
    <img
      onClick={() => decreaseQuantity(cartItem)}
      alt="Minus Icon"
      className="mr-3 w-4 cursor-pointer"
      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuODUzLDAsMCwxMTQuODMzLDAsMjU2czExNC44NTMsMjU2LDI1NiwyNTZjMTQxLjE2NywwLDI1Ni0xMTQuODMzLDI1Ni0yNTZTMzk3LjE0NywwLDI1NiwweiBNMjU2LDQ3Mi4zNDENCgkJCWMtMTE5LjI5NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzA1LDM5LjY1OSwyNTYsMzkuNjU5UzQ3Mi4zNDEsMTM2LjcwNSw0NzIuMzQxLDI1NlMzNzUuMjk1LDQ3Mi4zNDEsMjU2LDQ3Mi4zNDF6DQoJCQkiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM1NS4xNDgsMjM0LjM4NkgxNTYuODUyYy0xMC45NDYsMC0xOS44Myw4Ljg4NC0xOS44MywxOS44M3M4Ljg4NCwxOS44MywxOS44MywxOS44M2gxOTguMjk2DQoJCQljMTAuOTQ2LDAsMTkuODMtOC44ODQsMTkuODMtMTkuODNTMzY2LjA5NCwyMzQuMzg2LDM1NS4xNDgsMjM0LjM4NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
    />
  );
}
const mapDispatchToProps = (dispatch) => ({
  decreaseQuantity: (cartItem) => dispatch(decreaseQuantity(cartItem)),
});

export default connect(null, mapDispatchToProps)(MinusIcon);
