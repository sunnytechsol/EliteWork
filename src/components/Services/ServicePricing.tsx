import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "499",
    description: "Perfect for small businesses",
    features: [
      "Access to all basic services",
      "Priority email support",
      "Basic project management",
      "24/7 customer service"
    ]
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for growing companies",
    popular: true,
    features: [
      "All Basic features",
      "Priority service delivery",
      "Dedicated account manager",
      "Advanced project tracking",
      "Custom solutions"
    ]
  },
  {
    name: "Enterprise",
    price: "1999",
    description: "For large organizations",
    features: [
      "All Professional features",
      "24/7 priority support",
      "Custom development team",
      "Strategic consulting",
      "Unlimited revisions"
    ]
  }
];

export default function ServicePricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-indigo-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-900">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-full font-semibold transition ${
                plan.popular
                  ? 'bg-indigo-900 text-white hover:bg-indigo-800'
                  : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}