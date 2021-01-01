import React from "react";
import DeleteIcon from "./DeleteIcon";
function CartItem({ item }) {
  return (
    <div className="transition-all p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
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
        <DeleteIcon id={item.id} />${item.price}
      </div>
    </div>
  );
}

export default CartItem;
