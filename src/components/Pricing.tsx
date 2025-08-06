import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 5 campaigns",
        "10,000 AI optimization credits",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "A/B testing (2 variants)"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      description: "Ideal for growing marketing teams",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "Unlimited campaigns",
        "100,000 AI optimization credits",
        "Advanced analytics & reporting",
        "Priority support",
        "All integrations included",
        "A/B testing (unlimited variants)",
        "Custom audience segmentation",
        "Predictive forecasting",
        "Team collaboration tools"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Unlimited everything",
        "1,000,000+ AI optimization credits",
        "Custom analytics & white-label reports",
        "Dedicated account manager",
        "Custom integrations & API access",
        "Advanced machine learning models",
        "Multi-workspace management",
        "Enterprise security & compliance",
        "Training & onboarding included",
        "99.9% SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial 
            with no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glass border-glass-border rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isAnnual 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              variant="pricing"
              className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-success mt-1">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === "Enterprise" ? (
                  <Link to="/demo">
                    <Button 
                      variant={plan.popular ? "hero" : "glass-primary"} 
                      size="lg" 
                      className="w-full mt-6"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <Button 
                      variant={plan.popular ? "hero" : "glass-primary"} 
                      size="lg" 
                      className="w-full mt-6"
                    >
                      {plan.cta}
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include SSL encryption, automatic backups, and 99.9% uptime guarantee.
            <br />
            <span className="text-primary">Questions?</span> Contact our sales team for custom pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;