import React from "react";
import { Button } from "@windmill/react-ui";
import logo from "../logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 bg-gray-50 dark:bg-gray-800 shadow">
      <a className="text-gray-700 dark:text-gray-400" href="#">
        <Link to="/">
          <img className="w-24 h-24 text-purple-600 ml-8" src={logo} />
        </Link>
      </a>
      <ul className="flex space-x-4">
        <li>
          <Link to="/shop">
            <Button layout="link">Shop</Button>
          </Link>
        </li>
        <li>
          <Button layout="link">Contact</Button>
        </li>
        <li>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
