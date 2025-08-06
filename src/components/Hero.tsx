import React from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dashboard.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass border-primary/20 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Marketing Revolution</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animate-delay-100">
              <span className="gradient-hero">Supercharge Your Marketing</span>
              <br />
              <span className="text-foreground">with AI-Powered Insights</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up animate-delay-200">
              Transform your marketing campaigns with intelligent automation, real-time analytics, 
              and AI-driven optimization that delivers measurable results in minutes, not months.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animate-delay-300">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass-primary" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-500">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span>500% ROI increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-primary" />
                <span>10,000+ campaigns optimized</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up animate-delay-300">
            <div className="relative hero-float">
              <img
                src={heroImage}
                alt="AI Marketing Dashboard"
                className="w-full h-auto rounded-xl shadow-glow"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass border-success/20 p-3 rounded-lg animate-pulse-glow">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass border-primary/20 p-3 rounded-lg animate-pulse-glow">
                <Brain className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;