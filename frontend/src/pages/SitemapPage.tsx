import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, User, Shield } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Welcome page with featured products' },
        { name: 'Products', path: '/products', description: 'Browse all available products' },
        { name: 'Categories', path: '/categories', description: 'Shop by product categories' },
        { name: 'About Us', path: '/about', description: 'Learn more about FlipIt' },
      ]
    },
    {
      title: 'User Account',
      icon: User,
      links: [
        { name: 'Sign In', path: '/login', description: 'Login to your account' },
        { name: 'Sign Up', path: '/register', description: 'Create a new account' },
        { name: 'Shopping Cart', path: '/cart', description: 'View and manage your cart' },
      ]
    },
    {
      title: 'Legal & Policies',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Information about cookies' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-600 p-4 rounded-full">
              <Map className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            Navigate through all pages and sections of FlipIt
          </p>
        </div>

        {/* Site Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-4 border-indigo-200 pl-4 hover:border-indigo-400 transition-colors">
                      <Link 
                        to={link.path}
                        className="block group"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {link.description}
                        </p>
                        <span className="text-xs text-indigo-500 font-mono">
                          {link.path}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Site Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">4</h3>
              <p className="text-sm text-gray-600">Main Pages</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">3</h3>
              <p className="text-sm text-gray-600">User Pages</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">3</h3>
              <p className="text-sm text-gray-600">Legal Pages</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Map className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">10</h3>
              <p className="text-sm text-gray-600">Total Pages</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding Something?</h2>
            <p className="text-indigo-100 mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@flipit.com"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Support
              </a>
              <a 
                href="tel:+21622227128"
                className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
