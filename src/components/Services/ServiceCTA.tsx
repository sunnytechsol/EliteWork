import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust our premium services
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}