import React from "react";
import { removeItem } from "./../../redux/cartActions";
import { connect } from "react-redux";

function CartItem({ item, removeItem }) {
  return (
    <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
      <div className="p-2 w-24 -mr-7">
        <div
          className="bg-gray-300 h-16 w-2/3 rounded-md shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
      </div>
      <div className="flex-auto text-sm w-32">
        <div className="font-bold text-gray-800 uppercase absolute mt-2">
          {item.name}
        </div>
        <div className="text-gray-400 top-12 relative">Qt: {item.quantity}</div>
      </div>
      <div className="flex flex-col w-18  items-end text-gray-800 font-bold ">
        <div
          onclick={() => removeItem(item)}
          className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
        >
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
        ${item.price}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
