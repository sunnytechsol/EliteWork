import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function FooterSocial() {
  const socials = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Youtube, label: 'YouTube' }
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href="#"
            className="hover:text-white transition"
            aria-label={social.label}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
      <div className="mt-6">
        <h4 className="text-white font-semibold mb-2">Get The App</h4>
        <div className="flex space-x-3">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=120"
            alt="App Store"
            className="h-10"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=120"
            alt="Play Store"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}