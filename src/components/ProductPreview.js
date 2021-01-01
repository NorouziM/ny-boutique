import React from "react";
import { connect } from "react-redux";
import { addItem } from "./../redux/cartActions";

const ProductPreview = (props) => {
  const { name, price, imageUrl } = props.item;
  const { addItem } = props;
  console.log(props);
  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div
          style={{ backgroundImage: `url(${imageUrl}` }}
          className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
        ></div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
            {name}
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-gray-300">
            <h1 className="text-gray-800 font-bold ">${price}</h1>
            <button
              onClick={() => {
                addItem(props.item);
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
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPreview);
