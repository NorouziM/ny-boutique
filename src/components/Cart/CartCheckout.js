import React from "react";
import { Link } from "react-router-dom";

export default function CartCheckout({ TotalPrice }) {
  return (
    <div>
      <div className="p-4 bg-white justify-center flex w-full">
        <Link to="/checkout">
          <button className="bg-gray-700 text-sm text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
            Checkout ${TotalPrice}
          </button>
        </Link>
      </div>
    </div>
  );
}
