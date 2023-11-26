import React from "react";
import "../styles.scss";
import image from "../Images/empty-cart.png";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart, clearCart, increment, decrement }) => {
	return (
		<div className='cart'>
			<h2 className='cart-header'>Shopping Cart</h2>
			{cart.length > 0 ? (
				<button
					className='clear-button'
					onClick={clearCart}>
					Clear Cart
				</button>
			) : (
				""
			)}

			{cart.map((item) => (
				<div className='cart-item'>
					<img
						className='cart-item-image'
						alt='cartitemimage'
						src={item.image}
					/>
					<div>
						<p className='cart-item-title'>{item.title}</p>

						<p className='quantity'>
							Quantity:{" "}
							<i
								onClick={() => decrement(item)}
								className='fa-solid fa-square-minus'></i>{" "}
							{item.quantity}{" "}
							<i
								onClick={() => increment(item)}
								className='fa-solid fa-square-plus'></i>
						</p>
					</div>
					<p className='total-price'>
						Price:{" "}
						<span className='price-amount'>${item.quantity * item.price}</span>
					</p>

					<button
						className='remove-btn'
						onClick={() => removeFromCart(item)}>
						<i className='fa-solid fa-trash delete-icon'></i>Remove
					</button>
				</div>
			))}
			{cart.length > 0 ? (
				<p className='cart-total'>
					Total Amount:
					<span className='cart-total-amount'>
						$
						{cart
							.reduce((total, item) => total + item.quantity * item.price, 0)
							.toFixed(2)}
					</span>
				</p>
			) : (
				<div className='empty-cart-wrap'>
					<img
                    className="empty-cart-img"
						alt='empty-cart'
						src={image}
					/>
					<p className='empty-cart-para'>Your Cart is Empty</p>
					<p className="empty-cart-second-para">Add Something to make me happy 😀 </p>
					<Link
						className='continue-shopping-link'
						to='/'>
						Continue Shopping
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
