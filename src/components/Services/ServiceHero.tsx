import React from 'react';
import { Search } from 'lucide-react';

export default function ServiceHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Premium Services for Elite Businesses</h1>
        <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-12">
          Access world-class talent and services, carefully curated for excellence and results
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-900 text-white p-3 rounded-full hover:bg-indigo-800 transition">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}