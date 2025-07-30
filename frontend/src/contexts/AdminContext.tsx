import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { apiService } from '../services/api';
import { Product } from '../data/products';
import { useAuth } from './AuthContext';

interface AdminContextType {
  isAdmin: boolean;
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  createProduct: (productData: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: string, productData: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  clearError: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: React.ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is admin based on authentication context
  useEffect(() => {
    if (isAuthenticated && user) {
      setIsAdmin(user.role === 'admin');
    } else {
      setIsAdmin(false);
    }
  }, [isAuthenticated, user]);

  const fetchProducts = useCallback(async () => {
    // Prevent multiple simultaneous calls
    if (loading) return;

    setLoading(true);
    setError(null);
    try {
      const response = await apiService.getProducts();
      // Handle different response formats
      let productsData = [];
      if (response.data && Array.isArray(response.data)) {
        productsData = response.data;
      } else if (response.data && response.data.products && Array.isArray(response.data.products)) {
        productsData = response.data.products;
      } else if (Array.isArray(response)) {
        productsData = response;
      }
      setProducts(productsData);
    } catch (err: any) {
      console.warn('Backend not available, using mock data');
      // Use mock data when backend is not available
      const mockProducts = [
        {
          id: '1',
          name: 'Sample Product 1',
          description: 'This is a sample product for testing',
          price: 29.99,
          category: 'Electronics',
          image: 'https://via.placeholder.com/300x300?text=Product+1',
          inStock: true,
          rating: 4.5,
          reviews: 10
        },
        {
          id: '2',
          name: 'Sample Product 2',
          description: 'Another sample product for testing',
          price: 49.99,
          category: 'Clothing',
          image: 'https://via.placeholder.com/300x300?text=Product+2',
          inStock: false,
          rating: 3.8,
          reviews: 5
        }
      ];
      setProducts(mockProducts);
      setError('Using mock data - Backend server is not running');
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const createProduct = async (productData: Omit<Product, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.createProduct(productData);
      if (response.success) {
        await fetchProducts(); // Refresh the list
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create product';
      setError(errorMessage);
      // In development with mock data, simulate success
      if (errorMessage.includes('Failed to fetch')) {
        console.warn('Backend not available - simulating product creation');
        const newProduct = {
          ...productData,
          id: Date.now().toString(),
          rating: 0,
          reviews: 0
        };
        setProducts(prev => [...prev, newProduct]);
        return; // Don't throw error in mock mode
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.updateProduct(id, productData);
      if (response.success) {
        await fetchProducts(); // Refresh the list
      }
    } catch (err: any) {
      setError(err.message || 'Failed to update product');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.deleteProduct(id);
      if (response.success) {
        await fetchProducts(); // Refresh the list
      }
    } catch (err: any) {
      setError(err.message || 'Failed to delete product');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    isAdmin,
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    clearError,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
