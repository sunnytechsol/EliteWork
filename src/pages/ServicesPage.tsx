import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceCategories from '../components/Services/ServiceCategories';
import ServiceFeatures from '../components/Services/ServiceFeatures';
import ServicePricing from '../components/Services/ServicePricing';
import ServiceCTA from '../components/Services/ServiceCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ServiceHero />
      <ServiceCategories />
      <ServiceFeatures />
      <ServicePricing />
      <ServiceCTA />
      <Footer />
    </div>
  );
}