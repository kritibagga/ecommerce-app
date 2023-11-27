import React from "react";
import { useState } from "react";
import "../styles.scss";

const ProductList = ({
	products,
	addToCart,
	increment,
	decrement,
	quantity,
}) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	return (
		<section className='product-list'>
			{products?.map((product) => (
				<div
					className='product-wrap'
					key={product.id}>
					<div className='product'>
						<h3>{product.title}</h3>
						<img
							className='product-image'
							alt={product.title}
							src={product.image}
						/>

						<p>
							{isReadMore
								? product.description.slice(0, 150)
								: product.description}
							{product.description.length > 150 && (
								<span
									className='product-read-more'
									onClick={toggleReadMore}
									role='button'
									aria-expanded={!isReadMore}>
									{isReadMore ? "...Read More" : " ...Show Less"}
								</span>
							)}
						</p>
					</div>
					<div className='btn-wrap'>
						{quantity.map((item) => {
							if (item.id === product.id) {
								return (
									<p
										className='quantity'
										key={product.id}>
										Quantity:{" "}
										<button
										className="value-change-btn"
											onClick={() => decrement(product)}
											aria-label='Decrease Quantity'>
											<i className='fa-solid fa-square-minus'></i>
										</button>{" "}
										{item.quantity}{" "}
										<button
											className="value-change-btn"
											onClick={() => increment(product)}
											aria-label='Increase Quantity'>
											<i className='fa-solid fa-square-plus'></i>
										</button>
									</p>
								);
							} else return null;
						})}

						<div className='price'>${product.price} CAD</div>
						<button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				</div>
			))}
		</section>
	);
};

export default ProductList;
