import React, { useEffect,useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { addToCart } from "../redux/actions/cartActions.js";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



const ProductListingPage = () => {
	const dispatch = useDispatch();
	const [data,setData]= useState([]);

	const products = useSelector((state) => state.cartReducer.cartItems);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();

				// Dispatch an action to update the Redux store with the fetched products
				// dispatch({ type: "SET_PRODUCTS", payload: data });
				setData(data)
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		// Call the fetchProducts function
		fetchProducts();
	}, []);

	return (
		<>
			<div className='header-wrap'>
				<h1 className='product-list-header'>KrytLabs Shopping</h1>
				<Link
					to='/cart'
					className='icon'>
					<i className='fa-solid fa-shopping-cart'> </i>
					<div className='badge'>
						<span className='number'>{products.length}</span>
					</div>
				</Link>
			</div>
			{data ? (
				<ProductList
					products={data}
					addToCart={(product) => dispatch(addToCart(product))}
				/>
			) : (
				<p>Loading products...</p>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, { addToCart })(ProductListingPage);
