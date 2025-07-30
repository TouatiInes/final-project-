import React from 'react';
import { Cookie, Settings, Info, Shield } from 'lucide-react';

const CookiePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-600 p-4 rounded-full">
              <Cookie className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">
            Learn about how we use cookies to improve your experience.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device 
                when you visit our website. They help us provide you with a better experience 
                by remembering your preferences and improving site functionality.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function properly. They enable 
                    basic functions like page navigation, access to secure areas, and shopping cart functionality.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700">
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously. This helps us improve our site performance.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700">
                    These cookies enable enhanced functionality and personalization, such as 
                    remembering your preferences, language settings, and login information.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700">
                    These cookies track your browsing habits to show you relevant advertisements 
                    and measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remember your login status and preferences</li>
                <li>Keep items in your shopping cart</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Personalize content and advertisements</li>
                <li>Improve website security and prevent fraud</li>
                <li>Provide social media features</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              <p className="text-gray-700 mb-4">
                You have control over cookies and can manage them in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookies automatically</li>
                <li>Opt out of targeted advertising through industry opt-out tools</li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality 
                  of our website and your user experience.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing features</li>
                <li>Payment processors for secure transactions</li>
                <li>Advertising networks for targeted ads</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> cookies@flipit.com<br />
                  <strong>Phone:</strong> +216 22227128<br />
                  <strong>Address:</strong> Mahassen, Tozeur 2224, Tunisie
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;
