import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';
import SitemapPage from './pages/SitemapPage';
import { useCart } from './hooks/useCart';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { login, register } = useAuth();
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
        <Route
          path="/categories"
          element={<CategoriesPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={login} />}
        />
        <Route
          path="/register"
          element={<RegisterPage onRegister={register} />}
        />
        <Route
          path="/privacy"
          element={<PrivacyPage />}
        />
        <Route
          path="/terms"
          element={<TermsPage />}
        />
        <Route
          path="/cookies"
          element={<CookiePage />}
        />
        <Route
          path="/sitemap"
          element={<SitemapPage />}
        />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
