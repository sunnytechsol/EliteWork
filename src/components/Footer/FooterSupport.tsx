import React from 'react';

export default function FooterSupport() {
  const support = [
    "Help & Support",
    "Trust & Safety",
    "Selling on EliteWork",
    "Buying on EliteWork",
    "Contact Us"
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
      <ul className="space-y-3">
        {support.map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:text-white transition">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}