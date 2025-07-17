import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { useCart } from './hooks/useCart';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartItemsCount
  } = useCart();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate('/products');
    }
  };

  return (
    <Layout onSearch={handleSearch} cartItemsCount={getCartItemsCount()}>
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToCart={addToCart} />}
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              onAddToCart={addToCart}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetailPage onAddToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
