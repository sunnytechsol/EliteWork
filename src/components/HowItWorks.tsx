import React from 'react';
import { UserPlus, Search, HandshakeIcon, Star } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Join our exclusive platform and showcase your expertise"
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description: "Browse premium projects that match your skills"
  },
  {
    icon: HandshakeIcon,
    title: "Connect & Collaborate",
    description: "Work with elite clients and professionals"
  },
  {
    icon: Star,
    title: "Excel & Grow",
    description: "Build your reputation and expand your network"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Your journey to success in four simple steps</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-indigo-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}