import React from "react";
import DeleteIcon from "../Cart/DeleteIcon";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

function CheckoutItem({ cartItem, classnames }) {
  return (
    <div className={classnames}>
      <div className="w-1/5 mt-6 transition-all">
        <div
          className="bg-gray-300 h-40 w-2/3 p-16 rounded-md shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
        ></div>
      </div>
      <div className="w-1/5 mt-6 flex justify-start items-center">
        <span className="font-bold text-gray-800 uppercase absolute ml-6">
          {cartItem.name}
        </span>
      </div>
      <div className="w-1/5 mt-6 flex justify-center items-center">
        <div className="flex justify-between">
          <MinusIcon cartItem={cartItem} />
          <span className="font-bold text-gray-800 uppercase text-xl ">
            {cartItem.quantity}
          </span>
          <PlusIcon cartItem={cartItem} />
        </div>
      </div>
      <div className="w-1/5 mt-6 flex justify-center items-center">
        <span className="font-bold text-gray-800 uppercase absolute ml-20">
          ${cartItem.price}
        </span>
      </div>
      <div className="w-1/5 mt-12 flex justify-end items-center">
        <DeleteIcon id={cartItem.id} />
      </div>
    </div>
  );
}

export default CheckoutItem;
