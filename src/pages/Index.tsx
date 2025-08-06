import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import PricingCalculator from '@/components/PricingCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <PricingCalculator />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
