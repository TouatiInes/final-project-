import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Shield,
  Truck,
  CreditCard,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for exclusive deals and new arrivals</p>

            {isSubscribed ? (
              <div className="flex items-center justify-center text-green-400">
                <Heart className="h-5 w-5 mr-2" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black rounded-r-lg hover:bg-gray-100 transition-colors flex items-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white text-black rounded-full p-2 mr-3">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">FlipIt</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Your one-stop destination for quality products at unbeatable prices.
              We're committed to providing exceptional shopping experiences with
              fast delivery and outstanding customer service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@flipit.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3" />
                <span>123 Commerce St, Business City, BC 12345</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Sign In</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service & Features */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <div className="bg-green-600 p-2 rounded-full mr-3">
                  <Truck className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Free Shipping</p>
                  <p className="text-sm">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="bg-blue-600 p-2 rounded-full mr-3">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Secure Payment</p>
                  <p className="text-sm">100% protected</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="bg-purple-600 p-2 rounded-full mr-3">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Easy Returns</p>
                  <p className="text-sm">30-day guarantee</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="bg-orange-600 p-2 rounded-full mr-3">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">24/7 Support</p>
                  <p className="text-sm">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>© 2025 FlipIt. All rights reserved.</p>
              <p className="text-sm">Made with <Heart className="h-4 w-4 inline text-red-500" /> for amazing shopping experiences</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">We accept</p>
              <div className="flex justify-center space-x-4">
                <div className="bg-white rounded p-2">
                  <CreditCard className="h-6 w-6 text-gray-800" />
                </div>
                <div className="bg-white rounded p-2">
                  <CreditCard className="h-6 w-6 text-gray-800" />
                </div>
                <div className="bg-white rounded p-2">
                  <CreditCard className="h-6 w-6 text-gray-800" />
                </div>
                <div className="bg-white rounded p-2">
                  <CreditCard className="h-6 w-6 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
