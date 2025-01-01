import React from 'react';

export default function FooterCategories() {
  const categories = [
    "Development & IT",
    "Design & Creative",
    "Marketing & PR",
    "Writing & Translation",
    "Admin & Support",
    "Finance & Legal"
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#" className="hover:text-white transition">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}