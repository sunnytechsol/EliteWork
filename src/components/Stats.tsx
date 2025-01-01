import React from 'react';
import { Users, Briefcase, Award, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Elite Professionals"
  },
  {
    icon: Briefcase,
    value: "100K+",
    label: "Projects Completed"
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction Rate"
  },
  {
    icon: Globe2,
    value: "150+",
    label: "Countries"
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-indigo-900" />
              </div>
              <div className="text-3xl font-bold text-indigo-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}