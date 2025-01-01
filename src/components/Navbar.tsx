import React from 'react';
import { Crown, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-opacity-95 bg-white backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <Crown className="h-8 w-8 text-indigo-900" />
            <span className="ml-2 text-2xl font-bold text-indigo-900">EliteWork</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-indigo-900">Services</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-indigo-900">How it Works</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-indigo-900">Testimonials</Link>
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition">
              Join Now
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}