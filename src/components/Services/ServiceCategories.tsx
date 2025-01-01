import React from 'react';
import { Code, Paintbrush, Megaphone, PenTool, Camera, Globe, Briefcase, BarChart } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: "Development & IT",
    description: "Custom software, web development, and technical solutions",
    popular: true
  },
  {
    icon: Paintbrush,
    title: "Design & Creative",
    description: "Brand identity, UI/UX design, and visual content",
    popular: true
  },
  {
    icon: Megaphone,
    title: "Marketing & PR",
    description: "Digital marketing, SEO, and brand promotion",
    popular: false
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Professional writing, editing, and content strategy",
    popular: false
  },
  {
    icon: Camera,
    title: "Video & Animation",
    description: "Professional video production and motion graphics",
    popular: true
  },
  {
    icon: Globe,
    title: "Translation",
    description: "Professional translation and localization services",
    popular: false
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic planning and business optimization",
    popular: false
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Data analysis, visualization, and insights",
    popular: true
  }
];

export default function ServiceCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">Explore Our Services</h2>
          <p className="text-xl text-gray-600">Discover premium solutions for your business needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition relative overflow-hidden group"
            >
              {category.popular && (
                <div className="absolute top-4 right-4 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="bg-indigo-100 p-4 rounded-lg inline-block mb-4 group-hover:bg-indigo-200 transition">
                <category.icon className="h-8 w-8 text-indigo-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
