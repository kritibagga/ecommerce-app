import React from "react";
import { useState } from "react";
import "../styles.scss";

const ProductList = ({ products, addToCart }) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<div className='product-list'>
			{products?.map((product) => (
				<div className='product-wrap'>
					<div
						key={product.id}
						className='product'>
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
								<span className="product-read-more"onClick={toggleReadMore}>
									{isReadMore ? "...Read More" : " ...Show Less"}
								</span>
							)}
						</p>
					</div>
					<div className='btn-wrap'>
						<div className='price'>${product.price} CAD</div>
						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList;
