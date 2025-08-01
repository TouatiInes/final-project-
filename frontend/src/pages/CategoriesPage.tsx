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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-rose-500 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              Shop by Category
            </h1>
            <p className="text-xl text-pink-50 max-w-3xl mx-auto">
              Discover our carefully curated collection of products across different categories.
              Find exactly what you're looking for with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Package;
            const productCount = getCategoryProductCount(category.name);
            const categoryProducts = getCategoryProducts(category.name);

            // Enhanced images for each category
            const categoryImages = {
              'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop',
              'Clothing': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
              'Home & Garden': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
              'Sports': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
            };

            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-pink-500 to-rose-500',
              'from-green-500 to-emerald-500',
              'from-purple-500 to-indigo-500'
            ];

            return (
              <div key={category.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Category Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={categoryImages[category.name as keyof typeof categoryImages] || category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
                        <IconComponent className="h-12 w-12" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                      <p className="text-pink-100 text-lg">{productCount} products</p>
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Featured Products</h4>
                    <div className="space-y-3">
                      {categoryProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-gray-600">{product.name}</p>
                            <p className="text-sm text-gray-600 font-medium">${product.price.toFixed(2)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/products?category=${encodeURIComponent(category.name)}`}
                    className={`w-full bg-gradient-to-r ${gradients[index]} text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  >
                    <span>View All {category.name}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete product catalog or use our search feature to find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse All Products
            </Link>
            <Link
              to="/products"
              className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
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
