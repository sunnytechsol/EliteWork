import React from 'react';
import { Code, Paintbrush, Camera, Megaphone, PenTool, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Development & IT",
    description: "Expert developers and tech professionals for your digital needs"
  },
  {
    icon: Paintbrush,
    title: "Design & Creative",
    description: "Top-tier designers creating stunning visual experiences"
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Professional visual content creators and editors"
  },
  {
    icon: Megaphone,
    title: "Marketing & PR",
    description: "Strategic marketing experts to grow your brand"
  },
  {
    icon: PenTool,
    title: "Writing & Content",
    description: "Skilled writers delivering compelling content"
  },
  {
    icon: Globe,
    title: "Translation",
    description: "Native translators for global communication"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">Premium Services</h2>
          <p className="text-xl text-gray-600">Discover our curated selection of exclusive services</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <service.icon className="h-12 w-12 text-indigo-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}