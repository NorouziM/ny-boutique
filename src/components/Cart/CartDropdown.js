import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import { selectCartItems } from "./../../redux/cartUtils";

export const CartDropdown = ({ cartItems, Price }) => {
  return (
    <div>
      <div className="absolute right-6 rounded-b border-t-0 z-10">
        <div className="shadow-xl w-72 ">
          <div className="relative bg-white h-60 overflow-y-scroll">
            {cartItems.length ? (
              cartItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })
            ) : (
              <div className="flex justify-center items-center min-h-full	">
                <h3>Your Cart is Empty!</h3>
              </div>
            )}
          </div>
        </div>
        <div className="h-full shadow-xl">
          <CartCheckout price={Price} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  Price: state.cart.Price,
});

export default connect(mapStateToProps)(CartDropdown);
