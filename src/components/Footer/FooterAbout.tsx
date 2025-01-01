import React from 'react';

export default function FooterAbout() {
  const links = [
    "About Us",
    "Careers",
    "Press & News",
    "Privacy Policy",
    "Terms of Service",
    "Investor Relations"
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">About</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-white transition">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}