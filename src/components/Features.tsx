import React from 'react';
import { Shield, Clock, Zap, Trophy } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">Why Choose EliteWork</h2>
          <p className="text-xl text-gray-600">Experience the difference of premium freelancing</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-indigo-900" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Excellence</h3>
                <p className="text-gray-600">Every professional undergoes thorough vetting to ensure top-tier quality</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-indigo-900" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-Efficient</h3>
                <p className="text-gray-600">Quick matching with the right professionals for your needs</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-indigo-900" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Collaboration</h3>
                <p className="text-gray-600">Advanced tools and support for smooth project execution</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-indigo-900" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Results</h3>
                <p className="text-gray-600">Satisfaction guaranteed with our premium service commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}