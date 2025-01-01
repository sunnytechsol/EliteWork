import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import { CheckCircle, Rocket, Shield, Trophy, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">How EliteWork Delivers Excellence</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Discover our premium process that connects top-tier talent with exceptional opportunities
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-8">Our Premium Process</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Create Your Profile",
                    description: "Build a comprehensive profile showcasing your expertise and portfolio"
                  },
                  {
                    icon: Shield,
                    title: "Verification Process",
                    description: "Undergo our thorough verification to join our elite community"
                  },
                  {
                    icon: Rocket,
                    title: "Start Collaborating",
                    description: "Connect with clients and start working on premium projects"
                  },
                  {
                    icon: Trophy,
                    title: "Grow Your Success",
                    description: "Build your reputation and expand your professional network"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <step.icon className="h-6 w-6 text-indigo-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
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
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2 text-indigo-900">
                  <Trophy className="h-8 w-8" />
                  <div>
                    <div className="font-bold">98% Success Rate</div>
                    <div className="text-sm text-gray-600">Verified Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Quality Assurance</h2>
            <p className="text-xl text-gray-600">How we maintain excellence across our platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rigorous Vetting",
                description: "Only top 1% of professionals qualify to join our elite network"
              },
              {
                title: "Secure Payments",
                description: "Protected transactions with our secure payment system"
              },
              {
                title: "24/7 Support",
                description: "Premium support team available around the clock"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from our platform</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "UI Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                quote: "EliteWork helped me land premium clients and grow my design business by 300%"
              },
              {
                name: "Michael Rodriguez",
                role: "Full Stack Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                quote: "The quality of projects and clients on EliteWork is unmatched"
              },
              {
                name: "Emma Thompson",
                role: "Content Strategist",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
                quote: "Found my dream clients and tripled my income within 6 months"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-indigo-900">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{story.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join the Elite?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Start your journey with EliteWork today and connect with premium opportunities
          </p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center mx-auto">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

