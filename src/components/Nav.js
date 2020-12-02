import React from "react";
import { Button } from "@windmill/react-ui";
import logo from "../logo.svg";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
      <a className="text-gray-700 dark:text-gray-400" href="#">
        <img className="w-12 h-12 text-purple-600" src={logo} />
      </a>
      <ul className="flex space-x-4">
        <li>
          <Button layout="link">Products</Button>
        </li>
        <li>
          <Button layout="link">Contact</Button>
        </li>
        <li>
          <Button>Login</Button>
        </li>
      </ul>
    </nav>
  );
}
