import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductForm from '../components/admin/ProductForm';
import { useAdmin } from '../contexts/AdminContext';
import { Product } from '../data/products';
import { apiService } from '../services/api';

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAdmin } = useAdmin();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('Product ID is required');
        setLoading(false);
        return;
      }

      try {
        const response = await apiService.getProduct(id);
        setProduct(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin) {
      fetchProduct();
    }
  }, [id, isAdmin]);

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The requested product could not be found.'}</p>
          <a
            href="/admin"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Dashboard
          </a>
        </div>
      </div>
    );
  }

  return <ProductForm product={product} isEdit={true} />;
};

export default EditProductPage;
