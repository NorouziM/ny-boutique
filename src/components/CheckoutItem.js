import React from "react";

export default function CheckoutItem({ cartItem, classnames }) {
  return (
    <div className={classnames}>
      <div className="w-1/5 mt-6">
        <div
          className="bg-gray-300 h-40 w-2/3 p-16 rounded-md shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
        ></div>
      </div>
      <div className="w-1/5 mt-6 flex justify-start items-center">
        {" "}
        <span className="font-bold text-gray-800 uppercase absolute ml-6">
          {" "}
          {cartItem.name}
        </span>
      </div>
      <div className="w-1/5 mt-6 flex justify-center items-center">
        {" "}
        <span className="font-bold text-gray-800 uppercase absolute ">
          {" "}
          {cartItem.quantity}
        </span>
      </div>
      <div className="w-1/5 mt-6 flex justify-center items-center">
        {" "}
        <span className="font-bold text-gray-800 uppercase absolute ml-20">
          {" "}
          ${cartItem.price}
        </span>
      </div>
      <div className="w-1/5 mt-12 flex justify-end items-center">
        {" "}
        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-trash-2 "
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
