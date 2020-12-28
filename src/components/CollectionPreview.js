import React from "react";
import { connect } from "react-redux";
import { addItem, addPrice } from "./../redux/cartActions";
function CollectionPreview({ title, items, addItem, addPrice }) {
  return (
    <div>
      <div className="mx-auto text-center mt-5 ">
        <h1 className="text-4xl mb-12 mt-4">{title}</h1>
      </div>
      <div className="grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return (
              <div>
                <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl}` }}
                    className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                  ></div>
                  <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                      {item.name}
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 bg-gray-300">
                      <h1 className="text-gray-800 font-bold ">
                        ${item.price}
                      </h1>
                      <button
                        onClick={() => {
                          addItem(item);
                          addPrice(item.price);
                        }}
                        className="bg-gray-700 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    addPrice: (price) => dispatch(addPrice(price)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionPreview);
