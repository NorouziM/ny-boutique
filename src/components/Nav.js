import React from "react";
import { Button } from "@windmill/react-ui";
import logo from "../logo.svg";
import { auth } from "../firebase.util";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./Cart/Cart";
import CartDropdown from "./Cart/CartDropdown";
function Nav({ currentUser, hidden }) {
  return (
    <nav className="flex items-center fixed top-0 w-full justify-between px-6 bg-gray-50 dark:bg-gray-800 shadow z-10">
      <a className="text-gray-700 dark:text-gray-400" href="/#">
        <Link to="/">
          <img
            className="w-24 h-24 text-purple-600 ml-8"
            alt="Logo"
            src={logo}
          />
        </Link>
      </a>
      <ul className="flex space-x-4">
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <title>menu</title>
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden mobile-menu lg:flex lg:items-center lg:w-auto"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 space-y-4 py-2 lg:space-y-0 lg:space-x-4 lg:py-0 ">
              {currentUser ? (
                <Button style={{ cursor: "default" }} layout="link">
                  Hi {currentUser.displayName} 👋
                </Button>
              ) : null}
              <li>
                <Link to="/shop">
                  <Button
                    className="focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
                    layout="link"
                  >
                    Shop
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  className="focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
                  layout="link"
                >
                  Contact
                </Button>
              </li>
              <li>
                {currentUser ? (
                  <Button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Link to="login">
                    <Button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Login
                    </Button>
                  </Link>
                )}
              </li>
              <li>
                <Cart />
                {hidden ? null : <CartDropdown />}
              </li>
            </ul>
          </nav>
        </div>
      </ul>
    </nav>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Nav);
