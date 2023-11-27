import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductListingPage from "./pages/ProductListingPage";
import CartDetailsPage from "./pages/CartDetailsPage";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
          <Header/>
					<Routes>
						{/* Product Listing Page */}
						<Route
							path='/'
							element={<ProductListingPage />}
						/>

						{/* Cart Details Page */}
						<Route
							path='/cart'
							element={<CartDetailsPage />}
						/>
					</Routes>
          <Footer/>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
