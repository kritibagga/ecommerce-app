import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	removeFromCart,
	clearCart,
	increment,
	decrement,
} from "../redux/actions/cartActions.js";
import Cart from "../components/Cart.js";
import { connect } from "react-redux";
//import store from "../redux/store.js";

const CartDetailsPage = () => {
	const dispatch = useDispatch();

	const cartdata = useSelector((state) => state.cartReducer.cartItems);

	return (
		<div className='cart-details-page'>
			<Cart
				cart={cartdata}
				decrement={(product) => dispatch(decrement(product))}
				increment={(product) => dispatch(increment(product))}
				removeFromCart={(product) => dispatch(removeFromCart(product))}
				clearCart={() => dispatch(clearCart())}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, {
	removeFromCart,
	clearCart,
	increment,
	decrement,
})(CartDetailsPage);
