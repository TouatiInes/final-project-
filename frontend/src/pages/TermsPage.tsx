import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 p-4 rounded-full">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 mb-4">
                By accessing and using FlipIt, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Use License</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of FlipIt materials 
                for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-700 mb-4">This license shall automatically terminate if you violate any of these restrictions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is 
                accurate, complete, and current at all times.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You are responsible for safeguarding your password</li>
                <li>You must not share your account with others</li>
                <li>You must notify us immediately of any unauthorized use</li>
                <li>We reserve the right to terminate accounts that violate our terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payments</h2>
              <p className="text-gray-700 mb-4">
                All orders are subject to availability and confirmation of the order price.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to refuse any order</li>
                <li>Payment must be received before order processing</li>
                <li>All sales are final unless otherwise stated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping and Returns</h2>
              <p className="text-gray-700 mb-4">
                We offer shipping to various locations. Shipping costs and delivery times 
                vary based on location and shipping method selected.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>30-day return policy for most items</li>
                <li>Items must be in original condition</li>
                <li>Return shipping costs may apply</li>
                <li>Refunds processed within 5-10 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The materials on FlipIt are provided on an 'as is' basis. FlipIt makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of 
                intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@flipit.com<br />
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

export default TermsPage;
