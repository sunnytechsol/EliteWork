import React from 'react';
import { Shield, Clock, Award, HeartHandshake } from 'lucide-react';

export default function ServiceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-indigo-900 mb-8">Why Choose Our Services</h2>
            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "Quality Guaranteed",
                  description: "Every service provider is thoroughly vetted and verified"
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  description: "Quick delivery without compromising on quality"
                },
                {
                  icon: Award,
                  title: "Industry Experts",
                  description: "Access to top 1% of talent in each field"
                },
                {
                  icon: HeartHandshake,
                  title: "Dedicated Support",
                  description: "24/7 premium support for all your needs"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-indigo-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-900 mb-1">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}