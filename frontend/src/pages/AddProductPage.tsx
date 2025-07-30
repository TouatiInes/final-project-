import React from 'react';
import ProductForm from '../components/admin/ProductForm';
import { useAdmin } from '../contexts/AdminContext';
import { Navigate } from 'react-router-dom';

const AddProductPage: React.FC = () => {
  const { isAdmin } = useAdmin();

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <ProductForm />;
};

export default AddProductPage;
