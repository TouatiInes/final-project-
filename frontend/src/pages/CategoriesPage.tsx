import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Smartphone, Home, Dumbbell, Book, Package } from 'lucide-react';
import { categories, products } from '../data/products';

const CategoriesPage: React.FC = () => {
  const categoryIcons = {
    'Electronics': Smartphone,
    'Clothing': ShoppingBag,
    'Home & Garden': Home,
    'Sports': Dumbbell,
    'Books': Book,
    'Other': Package
  };

  const getCategoryProductCount = (categoryName: string) => {
    return products.filter(product => product.category === categoryName).length;
  };

  const getCategoryProducts = (categoryName: string) => {
    return products.filter(product => product.category === categoryName).slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shop by Category
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our carefully curated collection of products across different categories. 
              Find exactly what you're looking for with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Package;
            const productCount = getCategoryProductCount(category.name);
            const categoryProducts = getCategoryProducts(category.name);

            return (
              <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Category Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <IconComponent className="h-12 w-12 mx-auto mb-2" />
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-gray-200">{productCount} products</p>
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Products</h4>
                    <div className="space-y-2">
                      {categoryProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/products?category=${encodeURIComponent(category.name)}`}
                    className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>View All {category.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our complete product catalog or use our search feature to find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              to="/products"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Use Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
