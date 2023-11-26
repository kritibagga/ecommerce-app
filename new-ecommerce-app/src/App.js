import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductListingPage from './pages/ProductListingPage';
import CartDetailsPage from './pages/CartDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {/* Product Listing Page */}
            <Route path="/" element={<ProductListingPage />} />

            {/* Cart Details Page */}
            <Route path="/cart" element={<CartDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
