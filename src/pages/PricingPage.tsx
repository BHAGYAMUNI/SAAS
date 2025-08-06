import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import PricingCalculator from '@/components/PricingCalculator';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start with our free trial and scale as you grow.
          </p>
        </div>
      </div>

      <PricingCalculator />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PricingPage;