import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	increment,
	decrement,
} from "../redux/actions/cartActions.js";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const ProductListingPage = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const itemsPerPage = 10;

	const products = useSelector((state) => state.cartReducer.cartItems);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();
				setData(data);
				setTotalPages(Math.ceil(data?.length / itemsPerPage));
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};
		fetchProducts();
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = data.slice(startIndex, endIndex);

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	return (
		<>
			<div className='product-header-wrap '>
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
			{subset.length > 1 ? (
				<>
					<ProductList
						products={subset}
						quantity={products}
						increment={(product) => dispatch(increment(product))}
						decrement={(product) => dispatch(decrement(product))}
						addToCart={(product) => dispatch(addToCart(product))}
					/>
					<ReactPaginate
						pageCount={totalPages}
						onPageChange={handlePageChange}
						forcePage={currentPage}
						previousLabel={"Prev"}
						nextLabel={"Next"}
						containerClassName={"pagination-container"}
						activeClassName={"active-page"}
					/>
				</>
			) : (
				<p>Loading products...</p>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, { addToCart, increment, decrement })(
	ProductListingPage
);
