import React from 'react';
import { Crown } from 'lucide-react';

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Crown className="h-6 w-6 text-indigo-500" />
            <span className="ml-2 text-white font-bold">EliteWork</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} EliteWork. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}