import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Shirt, Home, Dumbbell, Sparkles } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories, type Product } from '../data/products';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Amazing Products at Unbeatable Prices
            </h1>
            <p className="text-xl mb-8">
              Shop the latest trends and find everything you need in one place.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">Featured Products</h2>
          <Link
            to="/products"
            className="text-black font-medium flex items-center hover:text-gray-600 transition-colors"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated collections designed to meet all your needs
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              // Define icons and gradients for each category
              const categoryConfig = {
                'Electronics': {
                  icon: Smartphone,
                  gradient: 'from-blue-500 to-cyan-500',
                  bgGradient: 'from-blue-50 to-cyan-50',
                  borderGradient: 'from-blue-200 to-cyan-200'
                },
                'Clothing': {
                  icon: Shirt,
                  gradient: 'from-pink-500 to-rose-500',
                  bgGradient: 'from-pink-50 to-rose-50',
                  borderGradient: 'from-pink-200 to-rose-200'
                },
                'Home & Garden': {
                  icon: Home,
                  gradient: 'from-green-500 to-emerald-500',
                  bgGradient: 'from-green-50 to-emerald-50',
                  borderGradient: 'from-green-200 to-emerald-200'
                },
                'Sports': {
                  icon: Dumbbell,
                  gradient: 'from-orange-500 to-red-500',
                  bgGradient: 'from-orange-50 to-red-50',
                  borderGradient: 'from-orange-200 to-red-200'
                }
              };

              const config = categoryConfig[category.name as keyof typeof categoryConfig] || categoryConfig['Electronics'];
              const IconComponent = config.icon;

              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${config.bgGradient} border border-transparent hover:border-gradient-to-r ${config.borderGradient} aspect-[4/3]`}>
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      {/* Category Name */}
                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                        {category.name}
                      </h3>

                      {/* Explore Button */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center">
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link
              to="/categories"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      
    </div>
  );
};

export default HomePage;
