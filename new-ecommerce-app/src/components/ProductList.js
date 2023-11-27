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
		<div className='product-list'>
			{products?.map((product) => (
				<div
					className='product-wrap'
					key={product.id}>
					<div className='product'>
						<h3>{product.title}</h3>
						<img
							className='product-image'
							alt='productimage'
							src={product.image}
						/>

						<p>
							{isReadMore
								? product.description.slice(0, 150)
								: product.description}
							{product.description.length > 150 && (
								<span
									className='product-read-more'
									onClick={toggleReadMore}>
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
										<i
											onClick={() => decrement(product)}
											className='fa-solid fa-square-minus'></i>{" "}
										{item.quantity}{" "}
										<i
											onClick={() => increment(product)}
											className='fa-solid fa-square-plus'></i>
									</p>
								);
							} else return null;
						})}

						<div className='price'>${product.price} CAD</div>
						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList;
