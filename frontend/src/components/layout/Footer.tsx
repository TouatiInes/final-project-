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
  CreditCard
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, } from "react-icons/fa";

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
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 border-b border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Newsletter Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new arrivals, and special offers
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center text-green-300 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30">
                <Heart className="h-5 w-5 mr-2 fill-current" />
                <span className="font-semibold">Thank you for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-3 mr-4 shadow-lg">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FlipIt
              </h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Your one-stop destination for quality products at unbeatable prices.
              We're committed to providing exceptional shopping experiences with
              fast delivery and outstanding customer service.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-lg">support@flipit.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="bg-green-600/20 p-2 rounded-lg mr-4 group-hover:bg-green-600/30 transition-colors">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-lg">+216 222271**</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4 group-hover:bg-purple-600/30 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-lg">Mahassen, Tozeur 2224, Tunisie</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} color="white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter size={20} color="white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={20} color="white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:bg-white/5 rounded-lg p-2 -m-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:bg-white/5 rounded-lg p-2 -m-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                  <span className="group-hover:translate-x-1 transition-transform">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:bg-white/5 rounded-lg p-2 -m-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                  <span className="group-hover:translate-x-1 transition-transform">Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:bg-white/5 rounded-lg p-2 -m-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:bg-white/5 rounded-lg p-2 -m-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                  <span className="group-hover:translate-x-1 transition-transform">Sign In</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:bg-white/5 rounded-lg p-2 -m-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                  <span className="group-hover:translate-x-1 transition-transform">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service & Features */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-white flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mr-3"></div>
              Why Choose Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start text-gray-300 group hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Free Shipping</p>
                  <p className="text-sm text-gray-400">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start text-gray-300 group hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Secure Payment</p>
                  <p className="text-sm text-gray-400">100% protected</p>
                </div>
              </div>
              <div className="flex items-start text-gray-300 group hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Easy Returns</p>
                  <p className="text-sm text-gray-400">30-day guarantee</p>
                </div>
              </div>
              <div className="flex items-start text-gray-300 group hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">24/7 Support</p>
                  <p className="text-sm text-gray-400">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-gray-300 text-center lg:text-left">
              <p className="text-lg font-semibold mb-2">© 2025 FlipIt. All rights reserved.</p>
              <p className="text-sm flex items-center justify-center lg:justify-start">
                Made with <Heart className="h-4 w-4 inline text-red-500 mx-1 fill-current" /> for amazing shopping experiences
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm justify-center lg:justify-end">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 pt-8 border-t border-gray-800/50">
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-6 font-semibold">Secure Payment Methods</p>
              <div className="flex justify-center space-x-6 flex-wrap gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <FaCcVisa size={32} color="#1a1f71" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <FaCcMastercard size={32} color="#eb001b" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <FaCcPaypal size={32} color="#003087" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <FaCcAmex size={32} color="#006fcf" />
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                All transactions are secured with 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
