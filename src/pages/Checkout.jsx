import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems,selectTotalPrice } from "../redux/cartUtils";
import CheckoutItem from './../components/Checkout/CheckoutItem'

export const Checkout = ({Total,cartItems}) => {
    return (
        <div style={{minHeight:"10rem"}} className="checkoutPage bg-white py-10 px-24 shadow-lg rounded-md w-4/6 mx-auto mt-48">
            { cartItems.length ? (
                <div>
                 <div className="w-full flex justify-between mx-auto pb-3 border-solid border-b-2 border-gray-400" >
                 <span className="font-bold uppercase tracking-wide text-gray-80">Product</span>
                 <span className="font-bold uppercase tracking-wide text-gray-80">Name</span>
                 <span className="font-bold uppercase tracking-wide text-gray-80">Quantity</span>
                 <span className="font-bold uppercase tracking-wide text-gray-80">Price</span>
                 <span className="font-bold uppercase tracking-wide text-gray-80">Remove</span>
                 </div>
                 {cartItems.map((cartItem,indx) => {
                     var classnames = "w-full flex mx-auto ";
                     if (indx === cartItems.length - 1 ) classnames += "border-solid border-b-2 border-gray-400 mb-10 pb-4"; // if it is the last item add the border
                     return (<CheckoutItem cartItem={cartItem} classnames={classnames}/>)
                 })}
                     <span className="font-bold text-2xl mt-16 ml-2 uppercase text-gray-80">TOTAL: ${Total}</span>

             </div>
            ) : (
                <div className="flex justify-center items-center min-h-full	">
                <h3>Your Cart is Empty!</h3>
              </div>
            )}
           
        </div>
        

    )
}


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    Total: selectTotalPrice(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
