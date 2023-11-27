import React from "react";
import "../styles.scss";
import image from "../Images/empty-cart.png";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart, clearCart, increment, decrement }) => {
	return (
		<section className='cart'>
			<h2 className='cart-header'>Shopping Cart</h2>
			{cart.length > 0 ? (
				<button
					className='clear-button'
					aria-label='Clear Cart'
					onClick={clearCart}>
					Clear Cart
				</button>
			) : (
				""
			)}

			{cart.map((item) => (
				<div
					className='cart-item'
					key={item.id}>
					<img
						className='cart-item-image'
						alt={item.title}
						src={item.image}
					/>
					<div>
						<p className='cart-item-title'>{item.title}</p>

						<p className='cart-quantity'>
							Quantity:{" "}
							<button
                            className="cart-quantity-value-changer"
								onClick={() => decrement(item)}
								aria-label='Decrease Quantity'>
								<i className='fa-solid fa-square-minus'></i>
							</button>{" "}
							{item.quantity}{" "}
							<button
                            className="cart-quantity-value-changer"
								onClick={() => increment(item)}
								aria-label='Increase Quantity'>
								<i className='fa-solid fa-square-plus'></i>
							</button>
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
				<>
					<p className='cart-total'>
						Total Amount:
						<span className='cart-total-amount'>
							$
							{cart
								.reduce((total, item) => total + item.quantity * item.price, 0)
								.toFixed(2)}
						</span>
					</p>
					<button
						className='cart-checkout-btn'
						aria-label='Proceed to Checkout'>
						{" "}
						Proceed to Checkout
					</button>
				</>
			) : (
				<div className='empty-cart-wrap'>
					<img
						className='empty-cart-img'
						alt='empty-cart'
						src={image}
					/>
					<p className='empty-cart-para'>Your Cart is Empty</p>
					<p className='empty-cart-second-para'>
						Add Something to make me happy 😀{" "}
					</p>
					<Link
						className='continue-shopping-link'
						to='/'>
						Continue Shopping
					</Link>
				</div>
			)}
		</section>
	);
};

export default Cart;
