import React from 'react';
import FooterCategories from './FooterCategories';
import FooterAbout from './FooterAbout';
import FooterSupport from './FooterSupport';
import FooterSocial from './FooterSocial';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterCategories />
          <FooterAbout />
          <FooterSupport />
          <FooterSocial />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}