import React from 'react';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="pt-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Find the Perfect Professional for Your Vision
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Access world-class talent and services, carefully curated for excellence
          </p>
          <SearchBar />
          <div className="mt-8 text-sm text-gray-300">
            Popular: Website Design, Mobile Development, Brand Identity, Content Writing
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 mt-16">
          {[
            { number: "98%", text: "Satisfaction Rate" },
            { number: "24/7", text: "Premium Support" },
            { number: "150+", text: "Countries" },
            { number: "10M+", text: "Transactions" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border-r last:border-0 border-indigo-700">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}